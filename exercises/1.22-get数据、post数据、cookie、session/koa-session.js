//简单的session访问计数

const koa=require('koa');
const session=require('koa-session');

let server=new koa();
server.listen(8080);

server.keys = [
  'aaa',
  'bbb',
  'ccc'
];

server.use(session({},server));
  //{}中的可选配置
  // key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  // maxAge: 86400000,
  // overwrite: true, /** (boolean) can overwrite or not (default true) */
  // httpOnly: true, /** (boolean) httpOnly or not (default true) */
  // signed: true, /** (boolean) signed or not (default true) */
  // rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  // renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/


server.use(async ctx=>{
  if (!ctx.session['n']) {
    ctx.session['n']=1;
  }else{
    ctx.session['n']++;
  }
  
  ctx.response.body=`你是第${ctx.session['n']}次访问`;
})