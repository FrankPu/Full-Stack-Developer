const fs=require('fs');

module.exports={
  readFile(path, options){
    return new Promise((resolve, reject)=>{
      fs.readFile(path, options, (err, buffer)=>{
        if(err){
          reject(err);
        }else{
          resolve(buffer);
        }
      });
    });
  },
  writeFile(path, data, options){
    return new Promise((resolve, reject)=>{
      fs.writeFile(path, data, options, err=>{
        if(err){
          reject(err);
        }else{
          resolve();
        }
      });
    });
  }
}
