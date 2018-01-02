const express=require('express');
const cookieParser=require('cookie-parser');

let server=express();
server.listen(8080);

server.use(cookieParser('asdfasdfasdfer356'));

server.get('/', (req, res)=>{
  console.log('cookies:', req.cookies);
  console.log('signed:', req.signedCookies);

  //cookie(name, value, options)
  res.cookie('pass', '654321', {
    //domain
    //expires: date
    //maxAge: int
    //path
    //secure: true      只用于https
    signed: true
  });

  res.end();
});
