//koa get数据
//可以用表单提交，也可以直接在地址栏输入http://localhost:8080/?user=rage&pass=123456


const koa = require('koa');

let server = new koa();
server.listen(8080);

server.use(async ctx=>{
  console.log(ctx.request.path);
  console.log(ctx.request.query);
})