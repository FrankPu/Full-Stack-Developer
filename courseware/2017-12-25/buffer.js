const fs=require('fs');

fs.readFile('a.jpg', (err, data)=>{
  if(err){
    console.log('错了');
  }else{
    str=data.toString();

    fs.writeFile('b.jpg', str, err=>{
      if(err){
        console.log('写入失败');
      }else{
        console.log('完事儿');
      }
    });
  }
});
