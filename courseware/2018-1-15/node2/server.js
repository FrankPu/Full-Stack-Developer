const koa=require('koa');

let server=new koa();
server.listen(8080);

//KOA-router
server.use(async function (ctx, next){
  ctx.response.body='abc';

  await next();

  ctx.response.body+='eee';
});
