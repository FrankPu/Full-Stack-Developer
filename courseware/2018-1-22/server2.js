const koa=require('koa');
const body=require('koa-better-body');
const convert=require('koa-convert');

let server=new koa();
server.listen(8080);

server.use(convert(body({
  uploadDir: './upload/',
  keepExtensions: true
})));

server.use(async ctx=>{
  console.log('fields: ', ctx.request.fields);
});
