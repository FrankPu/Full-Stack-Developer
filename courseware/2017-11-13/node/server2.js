const http=require('http');

let server=http.createServer(function (req, res){
  //console.log('有人请求我');

  //request             请求——输入      请求信息——哪个地址、时间、ip、方法...
  //response            响应——输出

  //console.log(`客户端请求的是：${req.url}`);
  //console.log(`请求的方法是：${req.method}`);

  res.write('abcdeeee');
  res.write('qqq');
  res.write('22222');
  res.end();
});
server.listen(8080);
