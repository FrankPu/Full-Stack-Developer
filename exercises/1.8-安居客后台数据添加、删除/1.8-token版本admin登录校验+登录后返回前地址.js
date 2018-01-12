const express=require('express');
const config=require('../config');
const common=require('../libs/common');

let router=express.Router();
module.exports=router;

//进入所有的admin相关的页面之前，都要校验用户身份——如果没登录过，滚去登陆(/admin/login)
//“所有的”，除了"/admin/login"，【token】版本
router.use((req, res, next)=>{
  if(!req.cookies['admin_token'] && req.path!='/login'){
    res.redirect(`/admin/login?ref=${req.url}`);
  }else{
    if(req.path=='/login'){
      next();
    }else{
      req.db.query(`SELECT * FROM admin_token_table WHERE ID=${req.cookies['admin_token']}` , (err,data)=>{
        if(err){
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
  res.render('login', {error_msg: '', ref: req.query['ref'] || ''});
});
//提交登陆请求
router.post('/login', (req, res)=>{
  let {username, password}=req.body;

  function setToken(id){
    let ID = common.uuid();

    let oDate = new Date();
    oDate.setMinutes(oDate.getMinutes()+20);
    let t = Math.floor(oDate.getTime()/1000);
    
    req.db.query(`INSERT INTO admin_token_table (ID, admin_ID, expires) VALUES ('${ID}', '${id}', ${t})`, err=>{
      if(err){
        res.sendStatus(500);
      }else{
        res.cookie('admin_token', ID);

        let ref = req.query['ref'];
        if(!ref){
          ref=''
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
          console.log('普通管理员登陆成功');
          setToken(data[0]['admin_ID']);          
        }else{
          showError('用户名或密码有误');
        }
      }
    });
  }

  function showError(msg){
    res.render('login', {error_msg: msg, ref: req.query['ref'] || ''});
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
