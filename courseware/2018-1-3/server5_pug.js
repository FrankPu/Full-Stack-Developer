const express=require('express');
const consolidate=require('consolidate');
const mysql=require('mysql');

let db=mysql.createPool({host: 'localhost', user: 'root', password: '', database: '20171229', port: 3309});

let server=express();
server.listen(8080);

//×
//server.use(consolidate);

//1.选择一种模板引擎
server.engine('html', consolidate.pug);
//2.指定模板文件的扩展名
server.set('view engine', 'pug');
//3.指定模板文件的路径
server.set('views', './template_pug');





server.get('/aaa', (req, res)=>{
  res.render('1', {a: 12, b: 5, pretty: true, arr: [12, 5, 8, 99, 27]});
});
