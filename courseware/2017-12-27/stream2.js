const fs=require('fs');

let rs=fs.createReadStream('www/1.html');
let ws=fs.createWriteStream('www/2.html');

rs.pipe(ws);

rs.on('error', err=>{
  console.log('读取失败');
});

ws.on('error', err=>{
  console.log('写入失败');
});
ws.on('finish', ()=>{
  console.log('写入完成');
});
