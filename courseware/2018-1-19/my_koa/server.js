const koa=require('my-koa');

let server=new koa();
server.listen(8080);

server.use(async (ctx, next)=>{
  console.log('a');

  await next();

  console.log('b');
});

server.use(async (ctx, next)=>{
  console.log('1111');

  await new Promise((resolve, reject)=>{
    setTimeout(function (){
      resolve();
    }, 1000);
  });

  console.log('2222');
});

/*server.use((ctx, next)=>{
  console.log('a');

  next();

  console.log('b');
});

server.use((ctx, next)=>{
  console.log('1111');

  console.log('2222');
});*/
