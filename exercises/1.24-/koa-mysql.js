//koa-mysql的generator转promise

const koa = require('koa');
const mysql = require('koa-mysql')

const db = mysql.createPool({ host: 'localhost', port: 3306, user: 'root', password: '', database: 'an_ju_ke' });

let server = new koa();
server.listen(8080);

server.use(async ctx => {
    let res = new Promise((resolve, reject) => {
        let fn = db.query(`SELECT * FROM house_table`);

        fn(function (err, data) {
            if (err) {
                rejecet(err);
            } else {
                resolve(data)
            }
        })
    })

    let datas = await res;

    console.log(datas);
    ctx.response.body = datas;
})


