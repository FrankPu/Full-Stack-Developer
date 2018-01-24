const mysql=require('koa-mysql');

module.exports={
  createPool(json){
    const db=mysql.createPool(json);

    let _query=db.query.bind(db);

    db.query=function (sql){
      return new Promise((resolve, reject)=>{
        _query(sql)((err, data)=>{
          if(err){
            reject(err);
          }else{
            resolve(data);
          }
        });
      });
    };

    return db;
  }
};
