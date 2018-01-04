const express=require('express');
const consolidate=require('consolidate');

let server=express();
server.listen(8080);

//×
//server.use(consolidate);

//1.选择一种模板引擎
server.engine('html', consolidate.ejs);
//2.指定模板文件的扩展名
server.set('view engine', 'ejs');
//3.指定模板文件的路径
server.set('views', './template');

server.get('/aaa', (req, res)=>{
  res.render('2', {arr: [12, 5, 88, 99]});
});
