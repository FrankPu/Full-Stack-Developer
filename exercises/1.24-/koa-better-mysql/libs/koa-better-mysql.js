//把generator版本的koa-mysql封装成async可以用的形式

const mysql=require('koa-mysql');

module.exports={
  createPool(json){
    const db=mysql.createPool(json);

    //内部sql语句的查询器_query
    let _query=db.query;
    // let _query = db.query.bind(db);
    // db._query = db.query;

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

