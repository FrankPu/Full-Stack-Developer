const koa=require('koa');
const static=require('koa-static');
const router=require('koa-router');

let server=new koa();
server.listen(8080);

//1.接口
let mainRouter=router();
server.use(mainRouter.routes());

mainRouter.use('/user', require('./routers/user'));

//2.静态文件
server.use(static('www'));
