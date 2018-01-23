//ctx.cookies的使用

const koa = require('koa');

let server = new koa();
server.listen(8080);

server.keys=[
  'abcd',
  'eeee',
  'ffff'
]

server.use(async ctx=>{
  ctx.cookies.set('user','rage',{
    maxAge:24*3600*1000,
    signed:true
  });

  //获取cookies
  console.log(ctx.cookies.get('user', { signed: true }));
})