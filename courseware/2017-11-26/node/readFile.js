const fs=require('fs');

fs.readFile('1.gif', 'base64', (err, data)=>{
  if(err){
    console.log('读取失败');
  }else{
    console.log(data);
  }
});

//readFile(文件名, [编码,] cb)
//writeFile(文件名, 东西, [编码,] cb)
