const express=require('express');
const bodyParser=require('body-parser');

let server=express();
server.listen(8080);

server.use(bodyParser.urlencoded({}));

server.post('/reg', (req, res)=>{

  console.log(req.body);
});
