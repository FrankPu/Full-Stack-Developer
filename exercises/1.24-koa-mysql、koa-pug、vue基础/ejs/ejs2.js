const koa = require('koa');
const mysql = require('./libs/koa-better-mysql');

const ejs = require('koa-ejs');

let server = new koa();
server.listen(8080);

const db = mysql.createPool({host:'localhost',port:3306,user:'root',password:'',database:'an_ju_ke'});

ejs(server,{
    root:'./template',
    viewExt:'ejs',
    layout:false
})

server.use(async ctx=>{
    await ctx.render('2',{
        house: await db.query(`SELECT * FROM house_table`)
    })
})

