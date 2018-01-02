const express=require('express');
const path=require('path');

let server=express();
server.listen(8080);

server.get('/baidu', (req, res, next)=>{
  res.redirect('http://www.baidu.com/')
});
