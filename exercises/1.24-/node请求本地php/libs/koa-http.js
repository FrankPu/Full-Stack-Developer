const http=require('http');
const url=require('url');

module.exports=function (str){
  return new Promise((resolve, reject)=>{
    let client=http.request(
      url.parse(str), res=>{
      let arr=[];
      res.on('data', data=>{
        arr.push(data);
      });
      res.on('end', ()=>{
        resolve(Buffer.concat(arr));
      });

      res.on('error', err=>{
        reject(err);
      });
    });

    client.end();
  });
};
