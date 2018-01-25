//引用自己的koa-mysql获取数据库数据

const koa = require('koa');
const mysql = require('./libs/koa-better-mysql');

const db = mysql.createPool({host:'localhost',port:3306, user:'root', password:'', database:'an_ju_ke'});

let server = new koa();
server.listen(8080);

server.use(async ctx=>{
  //获取数据库数据是一个异步操作
  let datas = await db.query('SELECT * FROM house_table');
  
  console.log(datas);
  ctx.response.body=datas;
})

/*
1. db.query('SELECT * FROM house_table')——是普通的function，但是koa-convert只能转generatorFunction，所以在外面再包一层

2. fn(db.query(`SELECT * FROM house_table`))——返回值就是(err,data)=>{...}

3. fn(function(err,data)=>{...})
*/