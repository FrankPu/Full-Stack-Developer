const http=require('http');

let server=http.createServer(function (req, res){
  //console.log('有人请求我');

  //request             请求——输入      请求信息——哪个地址、时间、ip、方法...
  //response            响应——输出

  
});
server.listen(8080);

console.log('监听成功');
