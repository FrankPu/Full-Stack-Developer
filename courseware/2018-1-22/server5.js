const koa=require('koa');
const session=require('koa-session');

let server=new koa();
server.listen(8080);

server.keys=['asdfasfasfasdf', 'fghdfg45656', 'fdhr67r67utyj'];

server.use(session({
  maxAge: 20*60*1000
}, server));

server.use(async ctx=>{
  if(!ctx.session['n']){
    ctx.session['n']=1;
  }else{
    ctx.session['n']++;
  }

  console.log(ctx.session);

  ctx.response.body=`你是第${ctx.session['n']}次来访`;
});
