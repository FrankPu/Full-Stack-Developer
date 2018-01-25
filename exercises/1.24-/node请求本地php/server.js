const koa=require('koa');
const get=require('./libs/koa-http');

let server=new koa();
server.listen(8080);

server.use(async ctx=>{
  let buffer=await get('http://localhost/a.php?n1=444&n2=55');

  ctx.response.body=buffer.toString();
});
