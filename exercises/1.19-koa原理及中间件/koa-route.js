//koa-route接口传参
//还是用的generate，不推荐使用

const koa=require('koa');
const route=require('koa-route');

let server=new koa();
server.listen(8080);

//接口1：/reg?user=rage&pass=123456
server.use(route.get('/reg', async (ctx, next)=>{
  console.log(ctx.request.query);
}));

/*
ctx.request.query: 可以取出来地址栏传的参数：{ user: '123', pass: '123' }
ctx.request.path: 可以取出访问的地址子路径：/reg
ctx.response.body('abc'): 可以向网页输出内容，在express中是 res.send('abc')
*/


//接口2：/reg/:rage/:123456
//路由参数有一个缺点:地址栏的参数不能多也不能少，必须一一对应
//在express中是req.params，而这里是直接在ctx后面加
server.use(route.get('/reg/:param1/:param2',(ctx,user,pass,next)=>{
  console.log(user,pass);
}))



/*
ctx.request里的内容：
{ 方法：method: 'GET',
  地址：url: '/reg?user=123&pass=123',
  头：header:
   { host: 'localhost:8080',
     connection: 'keep-alive',
     'cache-control': 'max-age=0',
     'upgrade-insecure-requests': '1',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
 (KHTML, like Gecko) Chrome/65.0.3298.4 Safari/537.36',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,i
mage/apng,*//*; q = 0.8',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9',
    cookie: 'optimizelyEndUserId=oeu1508134655414r0.8912686192749759; _ga=GA1.1
.2102593470.1507704369; hibext_instdsigdipv2 = 1; Webstorm - f967c5d2=f87771a5 - 8fe4 -
  4dd0 - 81b6 - 5b59a95b1e90' } }
*/
