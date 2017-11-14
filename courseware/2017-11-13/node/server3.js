const http=require('http');

let server=http.createServer(function (req, res){
  if(req.url=='/aaa'){
    res.write('abcccdddddddd');
  }else if(req.url=='/bbb'){
    res.write('ddd');
  }else if(req.url=='/index.html'){
    res.write('etrdtyrdthg');
  }else{
    res.write('404');     //?
  }

  res.end();
});
server.listen(8080);
