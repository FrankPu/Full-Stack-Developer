const Koa = require('koa');

let server = new Koa();
server.listen(8080);

server.use(async (ctx,next)=>{
  let start = Date.now();

  await next();

  console.log(`用了${Date.now() - start}毫秒`);
})

server.use(async ctx=>{
  ctx.response.body='我被请求了';
})