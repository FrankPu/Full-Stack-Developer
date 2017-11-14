const fs=require('fs');

/*fs.readFile('1.txt', (err, data)=>{
  if(err){
    console.log('读取文件失败');
  }else{
    console.log('读取成功');
    console.log(data.toString());
  }
});*/

fs.writeFile('2.txt', '随便歇一歇文字', err=>{
  if(err){
    console.log('有错');
  }else{
    console.log('写入成功');
  }
});
