let str='Content-Disposition: form-data; name="user"; en=xx; aaa=12';

function parseInfo(str){
  let arr=str.split('; ');
  let json={};

  arr.forEach(s=>{
    let [key, val]=s.split('=');

    json[key]=val;
  });

  return json;
}

console.log(json);
