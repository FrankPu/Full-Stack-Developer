const koa=require('koa');
const mysql=require('./libs/koa-better-mysql');

const db=mysql.createPool({host: 'localhost', user: 'root', password: '', port: 3309, database: 'an_ju_ke'});

let server=new koa();
server.listen(8080);

server.use(async ctx=>{
  let datas=await db.query('SELECT * FROM house_table');
  console.log(datas);

  ctx.response.body=datas;
});
