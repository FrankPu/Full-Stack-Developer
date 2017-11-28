const http=require('http');

let server=http.createServer((req, res)=>{
  //注意：下面的post接收方式有瑕疵
  let str='';         //问题

  req.on('data', data=>{
    str+=data;
  });
  req.on('end', ()=>{
    console.log('post数据接收完了', str);
  });
});
server.listen(8080);
