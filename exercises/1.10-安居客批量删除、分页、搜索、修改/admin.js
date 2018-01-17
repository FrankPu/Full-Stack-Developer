const express=require('express');
const config=require('../config');
const common=require('../libs/common');
const fs=require('fs');

let router=express.Router();
module.exports=router;

//进入所有的admin相关的页面之前，都要校验用户身份——如果没登录过，滚去登陆(/admin/login)
//“所有的”，除了"/admin/login"
router.use((req, res, next)=>{
  if(!req.cookies['admin_token'] && req.path!='/login'){
    res.redirect(`/admin/login?ref=${req.url}`);
  }else{
    if(req.path=='/login'){
      next();
    }else{
      req.db.query(`SELECT * FROM admin_token_table WHERE ID='${req.cookies['admin_token']}'`, (err, data)=>{
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else if(data.length==0){
          res.redirect(`/admin/login?ref=${req.url}`);
        }else{
          req.admin_ID=data[0]['admin_ID'];
          next();
        }
      });
    }
  }
});

//展现login页面
router.get('/login', (req, res)=>{
  res.render('login', {error_msg: '', ref: req.query['ref']||''});
});
//提交登陆请求
router.post('/login', (req, res)=>{
  let {username, password}=req.body;

  function setToken(id){
    let ID=common.uuid();

    let oDate=new Date();
    oDate.setMinutes(oDate.getMinutes()+20);

    let t=Math.floor(oDate.getTime()/1000);

    req.db.query(`INSERT INTO admin_token_table (ID,admin_ID,expires) VALUES('${ID}', '${id}', ${t})`, err=>{
      if(err){
        res.sendStatus(500);
      }else{
        res.cookie('admin_token', ID);

        let ref=req.query['ref'];
        if(!ref){
          ref='';
        }
        res.redirect('/admin'+ref);
      }
    });
  }

  //判断两次
  if(username==config.root_username){
    if(common.md5(password)==config.root_password){
      console.log('超级管理员已登录');
      setToken(1);
    }else{
      console.log('超级管理员登陆失败');
      showError('用户名或密码有误');
    }
  }else{
    req.db.query(`SELECT * FROM admin_table WHERE username='${username}'`, (err, data)=>{
      if(err){
        console.log(err);
        showError('数据库出错，请稍候重试');
      }else if(data.length==0){
        showError('用户名或密码有误');
      }else{
        if(data[0].password==common.md5(password)){
          setToken(data[0].ID);
          console.log('普通管理员登陆成功');
        }else{
          showError('用户名或密码有误');
        }
      }
    });
  }

  function showError(msg){
    res.render('login', {error_msg: msg, ref: req.query['ref']||''});
  }
});

router.get('/', (req, res)=>{
  res.redirect('/admin/house');
});











//获取
router.get('/:table', (req, res)=>{
  const {table}=req.params;

  if(!config[`show_in_admin_${table}`]){
    res.sendStatus(404);
  }else{
    let aField=[];
    let jsonShowName={};

    config[`show_in_admin_${table}`].split(',').forEach(str=>{
      let [field, showName]=str.split(':');

      aField.push(field);
      jsonShowName[field]=showName;     //{'title': '标题', 'ave_price': '均价'..}
    });

    //分页
    const size=10;
    let page=req.query.page;

    if(!page){
      page=1;
    }else if(!/^[1-9]\d*$/.test(page)){
      page=1;
    }

    let start=(page-1)*size;

    //搜索
    let like_seg='1=1';
    if(req.query.keyword){
      let keys=req.query.keyword.split(/\s+/g);

      like_seg=keys.map(item=>`title LIKE '%${item}%'`).join(' OR ');
    }

    //1.获取数据
    req.db.query(`SELECT ${aField.join(',')} FROM ${table}_table WHERE ${like_seg} ORDER BY create_time DESC LIMIT ${start}, ${size}`, (err, result)=>{
      if(err){
        res.sendStatus(500);
      }else{
        //2.获取总数据量
        req.db.query(`SELECT COUNT(*) AS c FROM ${table}_table WHERE ${like_seg}`, (err, data)=>{
          if(err){
            res.sendStatus(500);
          }else if(data.length==0){
            res.sendStatus(500);
          }else{
            res.render('index', {
              data: result,
              show_page_count: 9,
              cur_page: parseInt(page),
              page_count: Math.ceil(data[0].c/size),
              keyword: req.query.keyword,
              jsonShowName,
              table
            });
          }
        });
      }
    });
  }
});

//添加 || 修改
router.post('/:table', (req, res)=>{
  const {table}=req.params;

  //时间
  if(req.body['is_mod']=='true'){
    if(!config[`insert_fields_${table}`]){
      res.sendStatus(404);
    }else{
      let fields=config[`insert_fields_${table}`].split(',');
      config['disallow_modify_fields'].split(',').forEach(name=>{
        fields=fields.filter(item=>item!=name);
      });

      let arr=[];
      fields.forEach(key=>{
        arr.push(`${key}='${req.body[key]}'`);
      });

      let sql=`UPDATE ${table}_table SET ${arr.join(',')} WHERE ID='${req.body['old_id']}'`;

      req.db.query(sql, err=>{
        if(err){
          res.sendStatus(500);
        }else{
          res.redirect(`/admin/${table}`);
        }
      });
    }
  }else{
    const file_infos={
      house: {
        'main_img': {
          path: 'main_img_path',
          real_path: 'main_img_real_path',
          type: 'single'
        },
        'img': {
          path: 'img_paths',
          real_path: 'img_real_paths',
          type: 'array'
        },
        'property_img': {
          path: 'property_img_paths',
          real_path: 'property_img_real_paths',
          type: 'array'
        },
      },
      'broker': {
        'img': {
          path: 'img_path',
          real_path: 'img_real_path',
          type: 'single'
        }
      },
      'ad': {
        'img': {
          path: 'img_path',
          real_path: 'img_real_path',
          type: 'single'
        }
      },
    };

    const file_info=file_infos[table];

    const file_paths={};
    const file_real_paths={};

    for(let i=0;i<req.files.length;i++){
      let name=req.files[i].fieldname;

      if(file_info[name]){
        if(!file_paths[name]){
          file_paths[name]=[];
          file_real_paths[name]=[];
        }

        file_paths[name].push(req.files[i].filename);
        file_real_paths[name].push(req.files[i].path.replace(/\\/g, '\\\\'));
      }
    }

    ///
    for(let name in file_paths){
      if(file_info[name].type=='single'){
        req.body[file_info[name].path]=file_paths[name][0];
        req.body[file_info[name].real_path]=file_real_paths[name][0];
      }else{
        req.body[file_info[name].path]=file_paths[name].join(',');
        req.body[file_info[name].real_path]=file_real_paths[name].join(',');
      }
    }


    req.body['ID']=common.uuid();

    //看看
    let arrField=[];
    let arrValue=[];

    config[`insert_fields_${table}`].split(',').forEach(name=>{
      arrField.push(name);
      arrValue.push(req.body[name]);
    });
    arrField.push('create_time', 'admin_ID');
    arrValue.push(Math.floor(new Date().getTime()/1000), req.admin_ID);

    let sql=`INSERT INTO ${table}_table (${arrField.join(',')}) VALUES('${arrValue.join("','")}')`;
    console.log(sql);

    req.db.query(sql, err=>{
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.redirect(`/admin/${table}`);
      }
    });
  }
});

//删除
router.get('/house/delete', (req, res)=>{
  let ID=req.query['id'];

  let aID=ID.split(',');

  let b_err=false;
  aID.forEach(item=>{
    if(!/^(\d|[a-f]){32}$/.test(item)){
      b_err=true;
    }
  });

  if(b_err){
    res.sendStatus(400);
  }else{
    let id_index=0;

    _next();
    function _next(){
      let ID=aID[id_index++];

      //1.删除关联的图片
      req.db.query(`SELECT * FROM house_table WHERE ID='${ID}'`, (err, data)=>{
        if(err){
          res.sendStatus(500);
        }else if(data.length==0){
          res.sendStatus(404, 'no this data');
        }else{
          let arr=[];

          data[0]['main_img_real_path'] && arr.push(data[0]['main_img_real_path']);
          if(data[0]['img_real_paths']){
            data[0]['img_real_paths'].split(',').forEach(item=>{
              arr.push(item);
            });
          }
          if(data[0]['property_img_real_paths']){
            data[0]['property_img_real_paths'].split(',').forEach(item=>{
              arr.push(item);
            });
          }

          function deleteFromDB(){
            //删除文件完事
            //2.删除数据本身
            req.db.query(`DELETE FROM house_table WHERE ID='${ID}'`, err=>{
              if(err){
                console.log(err);
                res.sendStatus(500);
              }else{
                //res.redirect('/admin/house');

                if(id_index<aID.length){
                  _next();
                }else{
                  res.redirect('/admin/house');
                }
              }
            });
          }

          if(arr.length>0){
            let i=0;

            next();
            function next(){
              fs.unlink(arr[i], err=>{
                if(err){
                  res.sendStatus(500);
                  console.log(err);
                }else{
                  i++;

                  if(i>=arr.length){
                    deleteFromDB();
                  }else{
                    next();
                  }
                }
              });
            }
          }else{
            deleteFromDB();
          }
        }
      });
    }
  }
});

//接口
router.get('/:table/get_data', (req, res)=>{
  const {table}=req.params;
  const id=req.query.id;

  if(!id){
    res.sendStatus(404);
  }else if(!/^[\da-f]{32}$/.test(id)){
    res.sendStatus(400);
  }else{
    req.db.query(`SELECT * FROM ${table}_table WHERE ID='${id}'`, (err, data)=>{
      if(err){
        res.sendStatus(500);
      }else if(data.length==0){
        res.sendStatus(404);
      }else{
        res.send(data[0]);
      }
    });
  }
});
