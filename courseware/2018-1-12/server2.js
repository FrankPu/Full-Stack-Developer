const express=require('express');

let server=express();
server.listen(8080);

let r1=express.Router();
r1.get('/get/:a/:b', (req, res, next)=>{
  res.send('aaa');

  console.log(req.params);
});

server.use('/r1', r1);
