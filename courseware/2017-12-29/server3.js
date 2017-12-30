const express=require('express');

let server=express();
server.listen(8080);

server.get('/', (req, res, next)=>{
  console.log('a');

  next();
});

server.get('/', (req, res, next)=>{
  console.log('b');
});
