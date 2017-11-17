const http=require('http');
const fs=require('fs');
const url=require('url');
const mysql=require('mysql');
const regs=require('./libs/regs');

//数据库连接池
let db=mysql.createPool({host: 'localhost', user: 'root', password: '', database: '20171113'});

//1.http服务器
let httpServer=http.createServer((req, res)=>{
  //req.url=>'/reg?user=blue&pass=xxx'
  let {pathname, query}=url.parse(req.url, true);

  if(pathname=='/reg'){
    let {user, pass}=query;

    //1.校验数据
    if(!regs.username.test(user)){
      res.write(JSON.stringify({code: 1, msg: '用户名不符合规范'}));
      res.end();
    }else if(!regs.password.test(pass)){
      res.write(JSON.stringify({code: 1, msg: '密码不符合规范'}));
      res.end();
    }else{
      //2.检验用户名是否重复
      db.query(`SELECT ID FROM user_table WHERE username='${user}'`, (err, data)=>{
        if(err){
          res.write(JSON.stringify({code: 1, msg: '数据库有错'}));
          res.end();
        }else if(data.length>0){
          res.write(JSON.stringify({code: 1, msg: '此用户名已存在'}));
          res.end();
        }else{
          //3.插入
          db.query(`INSERT INTO user_table (username,password,online) VALUES('${user}','${pass}',0)`, err=>{
            if(err){
              res.write(JSON.stringify({code: 1, msg: '数据库有错'}));
              res.end();
            }else{
              res.write(JSON.stringify({code: 0, msg: '注册成功'}));
              res.end();
            }
          });
        }
      });


    }
  }else if(pathname=='/login'){
    //登录接口
    let {user,pass}=query;

    //1.校验数据
    if(!regs.username.test(user)){
      res.write(JSON.stringify({code: 1, msg: '用户名不符合规范'}));
      res.end();
    }else if(!regs.password.test(pass)){
      res.write(JSON.stringify({code: 1, msg: '密码不符合规范'}));
      res.end();
    }else{
      //2.取数据
      db.query(`SELECT ID,password FROM user_table WHERE username='${user}'`, (err, data)=>{
        if(err){
          res.write(JSON.stringify({code: 1, msg: '数据库有错'}));
          res.end();
        }else if(data.length==0){
          res.write(JSON.stringify({code: 1, msg: '用户名不存在'}));
          res.end();
        }else if(data[0].password!=pass){
          res.write(JSON.stringify({code: 1, msg: '密码错误'}));
          res.end();
        }else{
          //3.设置状态
          db.query(`UPDATE user_table SET online=1 WHERE ID=${data[0].ID}`, err=>{
            if(err){
              res.write(JSON.stringify({code: 1, msg: '数据库有错'}));
              res.end();
            }else{
              res.write(JSON.stringify({code: 0, msg: '登陆成功'}));
              res.end();
            }
          });
        }
      });
    }
  }else{
    fs.readFile(`www${pathname}`, (err, data)=>{
      if(err){
        res.writeHeader(404);
        res.write('Not Found');
      }else{
        res.write(data);
      }

      res.end();
    });
  }
});
//2.端口监听
httpServer.listen(8080);
