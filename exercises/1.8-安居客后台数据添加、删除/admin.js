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

router.get('/house', (req, res)=>{
  req.db.query(`SELECT ID,title,ave_price,tel FROM house_table`, (err, data)=>{
    if(err){
      res.sendStatus(500);
    }else{
      res.render('index', {data});
    }
  });
});

//添加房源信息
router.post('/house' , (req,res)=>{
  //时间=>时间戳
  req.body['sale_time']=Math.floor(new Date(req.body['sale_time']).getTime()/1000);
  req.body['submit_time']=Math.floor(new Date(req.body['submit_time']).getTime()/1000);

  //1.文件路径存入req.body
  let aImgPath=[];
  let aImgRealPath=[];

  for(let i=0;i<req.files.length;i++){
    switch(req.files.filename){
      case 'main_img':
      req.body['main_img_path']=req.files[i].filename;
      req.body['main_img_real_path']=req.files[i].path.replace(/\\/g,'\\\\');
      break;
      case 'img':
      aImgPath.push(req.files[i].fielname);
      aImgRealPath.push(req.files[i].path).replace(/\\/g,'\\\\');
      break;
      case "property_img":
      req.body['property_img_paths']=req.files[i].filename;
      req.body['property_img_real_paths']=req.files[i].path.replace(/\\/g,'\\\\');
      break;
    }
  }
  req.body['ID']=uuid();
  req.body['admin_ID']=req.admin_ID;
  req.body['img_paths']=aImgPath.joing(',');
  req.body['img_real_paths']=aImgRealPath.joing(',');

  //2.req.body数据插入数据库
  let arrField=[];
  let arrValue=[];

  for(let name in req.body){
    arrField.push(name);
    arrValue.push(req.body[name]);
  };

  let sql = `INSERT INTO house_table (${arrField.join(',')}) VALUES('${arrValue.join("',")}')`;

  req.db.query(slq,err=>{
    if(err){
      res.sendStatus(500);
      console.log(err);
    }else{
      res.redirect('/admin/house');
    }
  });
});

//删除房源信息
router.post('/house/delete', (req,res)=>{
  let ID = req.query['id'];

  req.db.query(`SLECET * FROM house_table WHERE ID='${ID}'`, err=>{
    if(err){
      res.sendStatus(500);
    }else if(data.length==0){
      res.sendStatus(404);
    }else{
      //1.存入
      let arr = [];
      arr.push(data[0]['main_img_real_path']);
      data[0]['img_real_paths'].split(',').forEach(item=>{
        arr.push(item);
      });
      data[0]['property_real_paths'].split(',').forEach(item=>{
        arr.push(item);
      });

      //2.fs模块删除，删除上传文件
      let i=0;
      next();
      function next(){
        fs.unlink(arr[i],err=>{
          if(err){
            res.sendStatus(500);
          }else{
            i++;
            if(i>=arr.length){
              //删除完成，删除数据本身
              req.db.query(`DELETE FROM house+table WHERE ID='${ID}'`,err=>{
                if(err){
                  console.log(err);
                  res.sendStatus(500);
                }else{
                  res.redirect('/admin/house');
                }
              })
            }else{
              next();
            }
          }
        });
      }
    }
  })
})