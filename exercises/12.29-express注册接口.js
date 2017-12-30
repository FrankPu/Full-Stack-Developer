const express = require('express');
const mysql=require('mysql');
const crypto=require('crypto');
const uuid = require('uuid/v4')


let server=express();
server.listen(8080);

let db=mysql.createPool({host:'localhost',port:'3306',user:"root",password:'',database:'20171229'});

//1.检测用户名密码是否符合规范
server.get('/reg',(req,res,next)=>{
	console.log(req.query);
	let {user,pass}=req.query;

	if(!user){
		res.send(code:1, msg:'用户名不能为空');
	}else if(!pass){
		res.send(code:1, msg:'密码不能为空')
	}else if(!/^\w{6,32}$/.test(user)){
		res.send(code:1 , msg:'用户名必须为6~32位的数字字母下划线')
	}else if (!/^.{6,}$/.test(pass)){
		res.send(code:1 , msg:'密码需为6~32位')
	}else{
		next();
	}
});

//2.检查用户名是否重复
server.get('/reg',(req,res,next)=>{
	let {user,pass}=req.query;
	db.query(`SELECT * FROM user_table WHERE username='${user}'`,(err,data)=>{
		if(err){
			res.send(code:1 , msg :"数据库有错");
		}else if (data.length>0){
			res.send(code:1 ,msg :'用户名已存在');
		}else{
			next();
		}
	})
});

//3.生成ID-uuid，并检车数据库不存在
server.get('/reg',(req,res,next)=>{
	_next();

	function _next(){
		let id = uuid().replace(/\-/g,'');

		db.query(`SELECT * FROM user_table WHERE ID='${id}'`,(err,data)=>{
			if(err){
				res.send(code:1 , msg:'数据库有错')；
			}else if (data.length>0){
				_next();
			}else{
				next();
			}
		})
	}	
})

//4.写入数据库
server.get('/reg',(req,res,next)=>{
	let {user,pass}=req.query;

	//加密
	let hash = crypto.createHash('md5');
	hash.update(pass);
	pass= hash.digest('hex');

	db.query(`INSERT INTO user_table (ID,username,password) VALUES ('${uuid}','${user}','${pass}') `,(err,data)=>{
		if(err){
			res.send(code:1, msg :'数据库有错')；
		}else{
			res.send(code:0,msg :'注册成功')
		}
	})
});
