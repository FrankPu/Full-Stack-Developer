const mysql=require('mysql');

//1.连接
//连接池
let db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: '20171113'});
//let db=mysql.createConnection({host: 'localhost', user: 'root', password: '123456', database: '20171113'});

//2.查询
db.query('SELECT * FROM user_table', (err, data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});
