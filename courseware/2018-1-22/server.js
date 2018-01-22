const koa=require('koa');
const body=require('koa-better-body');
const convert=require('koa-convert');

let server=new koa();
server.listen(8080);

server.use(convert(body()));

server.use(async ctx=>{
  console.log('body: ', ctx.request.body);        //buffer
  console.log('files: ', ctx.request.files);      //文件
  console.log('fields: ', ctx.request.fields);    //数据(包括文件)
});
