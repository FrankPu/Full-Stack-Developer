const express=require('./libs/my-express');
const logger=require('./libs/my-logger');

let server=express();
server.listen(8080);

server.get(logger);

server.get('/', (req, res, next)=>{
  console.log('abc')

  next();
});
server.get('/', (req, res, next)=>{
  console.log('ddd')
  res.send('adfasdfasd');
  res.end();
});
