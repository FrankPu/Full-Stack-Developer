const koa=require('koa');
const static=require('koa-static');
const router=require('koa-router');

let server=new koa();
server.listen(8080);

//1.接口
server.use(async (ctx, next)=>{
  let start=new Date().getTime();

  await next();

  console.log(`处理时间：${new Date().getTime()-start}ms`);
});

server.use(async (ctx, next)=>{
  try{
    await next();
  }catch(e){
    //ctx.response.body='404';
    console.log('e是：');
    console.log(e.name);
  }
});

server.use(async ()=>{
  console.log(oDiv);
});


//2.静态文件
server.use(static('www'));
