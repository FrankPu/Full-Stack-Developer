const express=require('express');
const cookieSession=require('cookie-session');

let server=express();
server.listen(8080);

server.use(cookieSession({
  secret: [
    'csdgsdfgsdfdsfetert45656756',
    'ytyurtyutruyity',
    '78ityujhjghjk',
    'rgsdfgsdfgfdgdfghdfgh'
  ]
}));

server.get('/', (req, res)=>{
  if(req.session['count']){
    req.session['count']++;
  }else{
    req.session['count']=1;
  }

  res.send(`欢迎你，你是第${req.session['count']}次访问本站了`);

  res.end();
});
