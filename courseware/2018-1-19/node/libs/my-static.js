const fs=require('fs');
const assert=require('assert');

module.exports=function (root){
  assert(root, 'argument 1:root is required');
  assert(typeof root=='string', 'root must be a string');

  return async (ctx)=>{
    ctx.response.body=await new Promise((resolve, reject)=>{
      fs.readFile(`${root}${ctx.request.path}`, (err, data)=>{
        if(err){
          reject(err);
        }else{
          resolve(data.toString());
        }
      });
    });
  };
};
