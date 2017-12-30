const http=require('http');
const url=require('url');
const fs=require('fs');
const cluster=require('cluster');
const os=require('os');
const process=require('process');

if(cluster.isMaster){     //创建子进程
  for(let i=0;i<os.cpus().length;i++){
    cluster.fork();
  }
}else{                    //子进程
  http.createServer((req, res)=>{
    let {pathname, query}=url.parse(req.url, true);

    console.log(`由#${process.pid}进程处理的`);

    let rs=fs.createReadStream(`www${pathname}`);

    rs.pipe(res);

    rs.on('error', err=>{
      res.writeHeader(404);
      res.write('not found');
      res.end();
    });
  }).listen(8080);
}
