const http=require('http');
const url=require('url');
const querystring=require('querystring')

let server=http.createServer((req, res)=>{
  //GET数据
  let {pathname, query}=url.parse(req.url, true);

  console.log('接收到了GET数据：', pathname, query);

  //POST数据
  let aBuffer=[];
  req.on('data', data=>{
    aBuffer.push(data);
  });
  req.on('end', ()=>{
    let data=Buffer.concat(aBuffer);

    //urlencoded
    const post=querystring.parse(data.toString());

    console.log('POST数据：', post);

    //formdata
  });
});
server.listen(8080);
