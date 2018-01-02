const express=require('express');
const myBodyParser=require('./libs/my-body-parser');

let server=express();
server.listen(8080);

server.use(myBodyParser.urlencoded);

server.post('/', (req, res)=>{
  console.log(req.body);
});
