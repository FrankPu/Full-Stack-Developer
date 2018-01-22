const koa=require('koa');

let server=new koa();
server.listen(8080);

server.use(async ctx=>{
  //ctx.cookies.get
  ctx.cookies.set('user', 'blue', {maxAge: 24*3600*1000});
});
