const http=require('http');
const fs=require('fs');
const url=require('url');
const router=require('./libs/router');
const zlib=require('zlib');
const user=require('./routers/user');

http.createServer((req, res)=>{
  let {pathname, query}=url.parse(req.url, true);

  req.query=query;

  res.send=function (data){
    //a=>array
    //a=>json
    //a=>'xxx'
    //a=><data>

    if(!(data instanceof Buffer) && typeof data!='string'){
      data=JSON.stringify(data);
    }

    res.write(data);
  }

  //1.是不是一个接口
  if(false==router.emit(pathname, req, res)){   //不是接口
    //2.读取文件
    let rs=fs.createReadStream(`www${pathname}`);
    let gz=zlib.createGzip();

    res.setHeader('Content-Encoding', 'gzip');

    rs.pipe(gz).pipe(res);

    rs.on('error', err=>{
      //3.读取失败
      res.writeHeader(404);
      res.write('not found');
      res.end();
    });
  }else{                                        //是个接口
    //?
  }


}).listen(8080);
