const http=require('http');
const fs=require('fs');
const url=require('url');
const zlib=require('zlib');

http.createServer((req, res)=>{
  let {pathname, query}=url.parse(req.url, true);

  res.setHeader('Content-Encoding', 'gzip');

  let rs=fs.createReadStream(`www${pathname}`);
  let gz=zlib.createGzip();

  rs.pipe(gz).pipe(res);

  rs.on('error', function (){
    res.writeHeader(404);
    res.write('not found');
    res.end();
  });
}).listen(8080);
