const koa=require('koa');
const static=require('koa-static');

let server=new koa();
server.listen(8080);

//1.接口
//注册：/reg?user=xxx&pass=xxx
server.use(function (){});

//2.静态文件
server.use(static('www'));
