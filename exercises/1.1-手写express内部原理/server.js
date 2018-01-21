const express=require('my-express');

let server=express();
server.listen(8080);

server.get('/', (req, res, next)=>{
  console.log('abc')

  next();
});
server.get('/', (req, res, next)=>{
  console.log('ddd')
  res.send('success');
  res.end();
});
