const router=require('koa-router');

let r1=router();

r1.get('/a', async(ctx)=>{
  ctx.response.body='aaaa';
});

r1.get('/b', async(ctx)=>{
  ctx.response.body='bbb';
});


//console.log(module);



module.exports=r1.routes();
