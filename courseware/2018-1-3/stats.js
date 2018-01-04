const fs=require('fs');

fs.stat('./笔记.txt', (err, stat)=>{
  if(err){
    console.log('文件不存在');
  }else{
    console.log('文件存在');
  }
});
