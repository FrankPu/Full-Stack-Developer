const koa=require('koa');
const static=require('koa-static');
const router=require('koa-router');

let server=new koa();
server.listen(8080);

//1.接口
server.use(async (ctx, next)=>{
  console.log('a');

  await next();

  console.log('b');
});
server.use(async (ctx, next)=>{
  console.log('111');
});

//2.静态文件
server.use(static('www'));
