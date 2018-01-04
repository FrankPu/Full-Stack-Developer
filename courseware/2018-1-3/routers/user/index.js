const express=require('express');

let router_user=express.Router();

router_user.get('/', (req, res)=>{
  res.send('用户的根路径');
  res.end();
});

router_user.get('/login', (req, res)=>{
  res.send('登陆');
  res.end();
});

router_user.get('/reg', (req, res)=>{
  res.send('注册');
  res.end();
});

//---------------------
router_user.use('/vip', require('./vip'));


module.exports=router_user;
