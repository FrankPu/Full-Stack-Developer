const express=require('express');
const logger=require('./libs/my-logger');

let server=express();
server.listen(8080);

server.use(logger);

server.post('/', (req, res)=>{
  console.log(req.body);
});
