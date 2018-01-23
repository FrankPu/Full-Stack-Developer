const koa=require('koa');
const fs=require('fs');

let server=new koa();
server.listen(8080);

function readFilePro(path){
  return new Promise((resolve, reject)=>{
    fs.readFile(path, (err, data)=>{
      if(err){
        reject(err);
      }else{
        resolve(data.toString());
      }
    });
  });
}

server.use(async ctx=>{
  let [pathname]=ctx.req.url.split('?');

  switch(ctx.request.host){
    case 'auth.aaa.com:8080':
      ctx.res.setHeader('Access-Control-Allow-Origin', '*');
      let users={
        'blue': {pass: '123456', token: '63a915a0-1093-46fa-9077-a0a561c77684', age: 18},
        'zhangsan': {pass: '987654', token: '11453d97-ad2c-43c6-b71b-8d3c71971256', age: 25},
      };
      //认证用户数据
      switch(pathname){
        //登陆：/login?user=xxx&pass=xxx
        //  =>{err: 0, token: '63a915a0-1093-46fa-9077-a0a561c77684'}
        case '/login':
          /*let {user, pass}=ctx.request.query;

          if(!users[user]){
            ctx.response.body={err: 1, msg: '用户不存在'};
          }else if(users[user].pass!=pass){
            ctx.response.body={err: 1, msg: '用户名或密码有错'};
          }else{
            ctx.response.body={err: 0, msg: '登陆成功', token: users[user].token};
          }*/

          //http://www.bbb.com:8080/1.html?token=xxx

          let {user, pass}=ctx.request.query;

          if(!users[user]){
            ctx.response.body='用户名不存在';
          }else if(users[user].pass!=pass){
            ctx.response.body='用户名或密码有错';
          }else{
            ctx.redirect(ctx.request.query['src']+'?token='+users[user].token);
          }
          break;
        //获取：/get_age?token=xxx
        //  =>{err: 0, age: xxx}
        case '/get_age':
          let {token}=ctx.request.query;
          let found=false;
          let age=0;

          for(let name in users){
            if(users[name].token==token){
              age=users[name].age;
              found=true;
            }
          }

          if(found){
            ctx.response.body={err: 0, age};
          }else{
            ctx.response.body={err: 1, msg: '此token不存在'};
          }
          break;
      }
      break;
    case 'www.bbb.com:8080':
      console.log(`www_bbb${pathname}`);
      ctx.response.body=await readFilePro(`www_bbb${pathname}`);
      break;
    case 'www.ccc.com:8080':
      ctx.response.body=await readFilePro(`www_ccc${pathname}`);
      break;
  }
});
