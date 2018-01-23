//koa-better-convert

const koa=require('koa');
const body=require('koa-better-body');
const convert=require('koa-convert');

let server=new koa();
server.listen(8080);

server.use(convert(body({
  uploadDir: './upload/',//上传路径
  keepExtensions: true//保留拓展名
})));

server.use(async ctx=>{
  console.log('buffer: ', ctx.request.body);
  console.log('files: ', ctx.request.files);
  console.log('fields: ', ctx.request.fields);
});

