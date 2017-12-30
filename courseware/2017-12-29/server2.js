const express=require('express');

let server=express();
server.listen(8080);

//1.接口
server.get('/', (req, res)=>{
  res.send('我是GET');
});
server.post('/', (req, res)=>{
  res.send('我是POST');
});

//2.静态文件
server.use(express.static('./www/'));
