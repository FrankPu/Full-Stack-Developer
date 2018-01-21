//引入my-koa，看能不能执行成功aaa-bbb-ccc-ddd


const koa=require('my-koa');

let server=new koa();
server.listen(8080);

server.use(async (ctx, next)=>{
  console.log('aaa');

  await next();

  console.log('ddd');
});

server.use(async (ctx, next)=>{
  console.log('bbb');

  await new Promise((resolve, reject)=>{
    setTimeout(function (){
      resolve();
    }, 1000);
  });

  console.log('ccc');
});