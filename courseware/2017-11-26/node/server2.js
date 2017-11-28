const http=require('http');
const fs=require('fs');
const url=require('url');
const uuidv4=require('uuid/v4');

let server=http.createServer((req, res)=>{
  const {pathname, query}=url.parse(req.url, true);

  if(pathname=='/upload_base64'){
    //3.接收字符串
    let str='';       //问题不大——以后再改
    req.on('data', data=>{
      str+=data;
    });
    req.on('end', ()=>{
      str=decodeURIComponent(str);

      str=str.replace(/data:[a-z\-]+(\/[a-z\-]+)?;base64,/i, '');

      //4.保存下来
      fs.writeFile(`./www/upload/${uuidv4().replace(/\-/g, '')}`, str, 'base64', err=>{
        if(err){
          res.writeHeader(500);
          res.write('write file error');
        }else{
          res.write('ok');
        }
        res.end();
      });
    });
  }else{
    fs.readFile(`./www${pathname}`, (err, data)=>{
      if(err){
        res.writeHeader(404);
        res.write('not found');
      }else{
        res.write(data);
      }

      res.end();
    });
  }
});
server.listen(8080);
