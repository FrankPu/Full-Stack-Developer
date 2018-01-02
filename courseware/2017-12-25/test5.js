const common=require('./libs/common');

let str='Content-Disposition: form-data; name="user"; en=xx; aaa=12\r\nContent-Type: text/plain';

let json=common.parseInfo(str);

console.log(json);
