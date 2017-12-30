const express=require('express');
const mysql=require('mysql');
const uuid=require('uuid/v4');
const crypto=require('crypto');

let server=express();
server.listen(8080);

const db=mysql.createPool({host: 'localhost', port: 3309, user: 'root', password: '', database: '20171229'});

//接口
//1.检查数据
server.get('/reg', (req, res, next)=>{
  let {user, pass}=req.query;

  if(!user){
    res.send({code: 1, msg: '用户名不能是空'});
  }else if(!pass){
    res.send({code: 1, msg: '密码不能是空'});
  }else if(!/^\w{6,32}$/.test(user)){
    res.send({code: 1, msg: '用户名必须是数字字母下划线，6~32位'});
  }else if(!/^.{6,}$/.test(pass)){
    res.send({code: 1, msg: '密码最短6位'});
  }else{
    next();
  }
});

//2.有没有这个用户
server.get('/reg', (req, res, next)=>{
  let {user,pass}=req.query;

  db.query(`SELECT * FROM user_table WHERE username='${user}'`, (err, data)=>{
    if(err){
      res.send({code: 1, msg: '数据库有问题'});
    }else if(data.length>0){
      res.send({code: 1, msg: '用户名已存在'});
    }else{
      next();
    }
  });
});

//3.生成uuid，并且检测不存在
server.get('/reg', (req, res, next)=>{
  _next();

  function _next(){
    let id=uuid().replace(/\-/g, '');

    db.query(`SELECT * FROM user_table WHERE ID='${id}'`, (err, data)=>{
      if(err){
        res.send({code: 1, msg: '数据库有问题'});
      }else if(data.length>0){
        _next();
      }else{
        req._uuid=id;
        next();
      }
    });
  }
});

//4.写入数据库
server.get('/reg', (req, res, next)=>{
  let {user,pass}=req.query;

  let md5=crypto.createHash('md5');

  md5.update(pass);
  pass=md5.digest('hex');

  db.query(`INSERT INTO user_table (ID,username,password) VALUES('${req._uuid}', '${user}', '${pass}')`, (err, data)=>{
    if(err){
      res.send({code: 1, msg: '数据库有问题'});
    }else{
      res.send({code: 0, msg: '注册成功'});
    }
  });
});
