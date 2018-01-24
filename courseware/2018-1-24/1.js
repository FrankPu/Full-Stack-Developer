const koa = require('koa');

const Body = require('koa-better-body');

const router = require('koa-router');




const server = new koa();

server.listen(8080);




// 主要是下面这句，如果把它放在这个地方，那么下面的 r1.post(/form)就获取到数据

// server.use(Post);




const r1 = router();

server.use(r1.routes());




// 主要是下面这句，如果把它放在这个地方，那么下面的 r1.post(/form)就获取不到

server.use(Post);




r1.post('/form', async ctx=>{




  ctx.response.body = `<h2>${ctx.post}</h2>`;




});




async function Post(ctx,next){

  let buffer = await getPostData(ctx);

  ctx.post = buffer;




  await next();

}




function getPostData(ctx){

  return new Promise(resolve=>{




    let buffer = [];

    ctx.req.on('data', data=>{

      buffer.push(data);

    });

    ctx.req.on('end', ()=>{




      buffer = Buffer.concat(buffer);

      buffer = buffer.toString();

      resolve(buffer);

    });




  });

}
