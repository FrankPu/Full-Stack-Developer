const express=require('express');
const path=require('path');

let server=express();
server.listen(8080);

server.get('/1.html', (req, res, next)=>{
  if(req.query['pass']=='123456'){
    res.sendFile(path.resolve('./static/1.html'));
    res.end();
  }else{
    res.sendStatus(403);
    res.end();
  }
});
