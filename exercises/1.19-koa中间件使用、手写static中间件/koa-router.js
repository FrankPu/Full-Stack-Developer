//koa-router路由与参数

const Koa=require('koa');
const Router=require('koa-router');

//express服务器let server=express();
let server=new Koa();
server.listen(8080);

//koa-router配置
//express自带Routerlet，let router=express.Router();
let router=new Router();
server.use(router.routes());

//接口1：/a/:rage/:123456
//路由参数ctx.params，express中的参数在req.params
/*router.get('/a/:id/:page', async(ctx, next)=>{
  console.log(ctx.params);

  ctx.response.body='abc';
});
*/



//接口2：/b?user=rage&pass=123456
router.get('/b', async(ctx, next)=>{
  console.log(ctx.params);

  ctx.response.body='bbb';
});
