const koa=require('koa');
const static=require('koa-static');
const router=require('koa-router');
const myStatic=require('./libs/my-static');

let server=new koa();
server.listen(8080);


//2.静态文件
//server.use(static('www'));
server.use(myStatic('www'));
