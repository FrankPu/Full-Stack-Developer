Buffer.prototype.split=Buffer.prototype.split||function (spliter){
  let b1=this;

  let result=[];
  let n;

  while((n=b1.indexOf(spliter))!=-1){
    let res1=b1.slice(0, n);
    let res2=b1.slice(n+spliter.length);

    result.push(res1);
    b1=res2;
  }
  result.push(b1);

  return result;
};


exports.parseInfo=function (str){
  let arr=str.split('; ');
  let arr2=[];
  arr.forEach(item=>{
    let a=item.split('\r\n');

    arr2=arr2.concat(a);
  });

  let json={};

  arr2.forEach(s=>{

    let [key, val]=s.split('=');

    if(!val){
      json[key]=val;
    }else{
      json[key]=val.substring(1, val.length-1);
    }
  });

  return json;
};
