const mysql=require('koa-mysql');

let db=mysql.createPool({host: 'localhost', port: 3309, user: 'root', password: '', database: 'an_ju_ke'});

let _q=db.query.bind(db);
db.query=function (sql){
  return new Promise((resolve, reject)=>{
    let fn=_q(sql);

    fn((err, data)=>{
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    });
  });
};

module.exports=db;
