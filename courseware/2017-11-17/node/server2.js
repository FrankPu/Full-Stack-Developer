const http=require('http');

let server=http.createServer(function (req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');

  setTimeout(function (){
    res.write('abc');
    res.end();
  }, Math.floor(Math.random()*20000));
});
server.listen(8080);
