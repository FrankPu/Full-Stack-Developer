const Router =require('koa-router');

let r1 = new Router();
module.exports = r1.routes();


r1.get('/a', async (ctx,next)=>{
  ctx.response.body='aaa';
  
})

r1.get('/b', async(ctx,next)=>{
  ctx.response.body='bbb';
})

