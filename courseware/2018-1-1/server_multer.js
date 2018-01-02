const express=require('express');
const multer=require('multer');
const fs=require('fs');
const path=require('path');
const bodyParser=require('body-parser');

let server=express();
server.listen(8080);

let multerObj=multer({dest: './upload/'});
server.use(multerObj.any());  //muti-part

server.use(bodyParser.urlencoded({extended: false})); //urlencoded

server.post('/upload', (req, res, next)=>{
  let i=0;

  __next();
  function __next(){
    let newName=req.files[i].path+path.extname(req.files[i].originalname)

    fs.rename(req.files[i].path, newName, err=>{
      if(err){
        console.log(err);

        res.sendStatus(500, 'rename error');
        res.end();
      }else{
        i++;

        if(i>=req.files.length){
          res.send('upload ok');
          res.end();
        }else{
          __next();
        }
      }
    });
  }
});
