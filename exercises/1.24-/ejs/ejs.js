//koa-ejs


const koa = require('koa');
const ejs = require('koa-ejs');

let server = new koa();
server.listen(8080);

ejs(server,{
    root:'./template',
    viewExt:'ejs',
    layout:false
});


    /*可选参数
    cache:false,
    debug:true
    */


server.use(async ctx=>{
    await ctx.render('1',{})
})