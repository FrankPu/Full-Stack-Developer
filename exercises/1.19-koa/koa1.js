//koa基本使用


const Koa=require('koa');

let server=new Koa();
server.listen(8080);

server.use(async (ctx, next)=>{
  console.log('aaa');

  await next();

  console.log('ccc');
});
server.use(async ctx=>{
  console.log('bbb');
});
