const mysql=require('mysql');

let db=mysql.createConnection({host: 'localhost', port: 3309, user: 'root', password: '', database: '20180127'});

db.beginTransaction(err=>{
  if(err){
    console.log('事务开启失败');
  }else{
    db.query('SELECT * FROM user_table', (err, data)=>{
      if(err){
        console.log('获取数据失败1');
        db.rollback(()=>{
          console.log('滚回去');
        });
      }else{
        db.query('DELETE FROM user_table', (err, data)=>{
          if(err){
            console.log('删除数据失败');
            db.rollback(()=>{
              console.log('滚回去');
            });
          }else{
            db.query('SELECT * FROM user_table', (err, data)=>{
              if(err){
                console.log('获取数据失败2');
                db.rollback(()=>{
                  console.log('滚回去');
                });
              }else{
                db.commit((err)=>{
                  if(err){
                    console.log('提交失败');
                  }else{
                    console.log('提交成功');
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
