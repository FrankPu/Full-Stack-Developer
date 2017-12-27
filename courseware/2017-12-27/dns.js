const dns=require('dns');

/*
dns.lookup('www.baidu.com', (err, data)=>{
  if(err){
    console.log('错了');
  }else{
    console.log(data);
  }
});
*/

let ip='111.206.223.206';

dns.lookupService(ip, 80, (err, data)=>{
  if(err){
    console.log('错了', err);
  }else{
    console.log(data);
  }
});
