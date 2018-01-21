//手写static中间件


const fs=require('fs');
const assert=require('assert');

module.exports=function (root){
  assert(root, 'root is required');
  assert(typeof root=='string', 'root must be a string');

  return async (ctx)=>{
    ctx.response.body=await new Promise((resolve, reject)=>{
      fs.readFile(`${root}${ctx.request.path}`, (err, data)=>{
        if(err){
          reject(err);
        }else{
          //需要配置返回的东西是什么形式
          //这边简单的把buffer.toString，如果是文件、图片之间的东西就不太好了
          resolve(data.toString());
        }
      });
    });
  };
};
