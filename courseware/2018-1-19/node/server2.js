const koa=require('koa');
const static=require('koa-static');
const route=require('koa-route');

let server=new koa();
server.listen(8080);

//1.接口
//注册：/reg?user=xxx&pass=xxx
server.use(route.get('/reg', async(ctx, next)=>{
  console.log(ctx.request.query);
}));

/*server.use(route.get('/reg/:user/:pass', async (ctx, user, pass, next)=>{
  //ctx=>上下文

  //ctx.req
  //ctx.res

  //ctx.request
  //ctx.response

  //ctx.response.body='abc';

  console.log(user, pass);
}));*/

//2.静态文件
server.use(static('www'));
