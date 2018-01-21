//引用自己手写的static中间件

const Koa = require('koa');
const myStatic = require('./libs/my-static');

let server = new Koa();
server.listen(8080);

server.use(myStatic('www'));