const http=require('http');

let allowHosts=['baidu.com', 'taobao.com', 'tmall.com', 'google.com'];

let server=http.createServer(function (req, res){
  if(allowHosts.indexOf(req.headers['origin'])!=-1){
    res.setHeader('Access-Control-Allow-Origin', '*');
  }

  res.write('abc');
  res.end();
});
server.listen(8080);
