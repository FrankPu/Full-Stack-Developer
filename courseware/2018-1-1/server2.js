const express=require('express');
const querystring=require('querystring');
const bodyParser=require('body-parser');

let server=express();
server.listen(8080);

/*
server.use((req, res, next)=>{
  let str='';

  req.on('data', data=>{
    str+=data;
  });
  req.on('end', ()=>{
    req.body=querystring.parse(str);

    next();
  });
});*/

server.use(bodyParser.urlencoded({extended: false}));

server.post('/', (req, res)=>{
  console.log(req.body);
});
