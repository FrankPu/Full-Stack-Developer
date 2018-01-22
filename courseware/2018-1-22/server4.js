const koa=require('koa');

let server=new koa();
server.listen(8080);

server.keys=['dfasddfwqrqw453erfasdf', 'asdfzxcvsdrtw4twerrsgfsdgf', 'asdfsdbxfchwe5e5e4t'];

server.use(async ctx=>{
  //ctx.cookies.get
  //ctx.cookies.set('user', 'blue', {maxAge: 24*3600*1000, signed: true});

  console.log(ctx.cookies.get('user', {signed: true}));
});
