const http=require('http');
const fs=require('fs');
const url=require('url');

http.createServer((req, res)=>{
  let {pathname, query}=url.parse(req.url, true);

  fs.readFile(`www${pathname}`, (err, data)=>{
    if(err){
      res.writeHeader(404);
      res.write('not found');
    }else{
      //res.writeHeader(200);
      res.write(data);
    }
    res.end();
  });
}).listen(8080);
