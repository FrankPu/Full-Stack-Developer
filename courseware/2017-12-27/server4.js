const http=require('http');
const fs=require('fs');
const url=require('url');

http.createServer((req, res)=>{
  let {pathname, query}=url.parse(req.url, true);

  switch(pathname){
    case '/login':
      //xxxx
      break;
    case '/reg':
      //xxxx
      break;
    case ''
  }
}).listen(8080);
