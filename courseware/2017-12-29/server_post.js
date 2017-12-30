const express=require('express');
const bodyParser=require('body-parser');

let server=express();
server.listen(8080);

server.use(bodyParser.urlencoded({}));

server.post('/aaa', (req, res)=>{
  console.log(req.body);
});
