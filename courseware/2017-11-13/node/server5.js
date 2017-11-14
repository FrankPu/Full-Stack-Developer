const http=require('http');
const fs=require('fs');

let server=http.createServer((req, res)=>{
  //req.url   =>    '/a.html'     =>    'adxa/a.html'
  //req.url   =>    '/aaa/bbb/1.html'     =>    'adxa/aaa/bbb/1.html'

  fs.readFile(`adxa${req.url}`, (err, data)=>{
    if(err){
      fs.readFile('./http_errors/404.html', (err, data)=>{
        if(err){
          res.writeHeader(404);
          res.write('Not Found');
        }else{
          res.writeHeader(404);
          res.write(data);
        }
        res.end();
      });
    }else{
      res.write(data);
      res.end();
    }
  });
});
server.listen(8080);
