const http = require('http');
const url=require('url');
const fs=require('fs');
const os=require('os');
const process=require('process');
const cluster= require('cluster');


if(cluster.isMaster){
		console.log('我是一个主进程');
	for (var i = 0; i < os.cpus().length; i++) {
		cluster.fork();
	}
}else{
	http.createServer((req,res)=>{
		console.log(`这个是有${process.pid}进程处理的`);
		
		let {pathname,query}=url.parse(req.url,true)

		let rs=fs.createReadStream(`www${pathname}`);

		rs.pipe(res);

		rs.on('error',err=>{
			res.write(404);
			res.writeHeader('我是一个错误');
			res.end();
		})

	}).listen(8080);
}