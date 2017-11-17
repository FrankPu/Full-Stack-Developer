const url=require('url');

let str='https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=url%E6%A8%A1%E5%9D%97&oq=url%25E6%25A8%25A1%25E5%259D%2597&rsv_pq=de2d93ae0000a1ba&rsv_t=9582XygYWIiJ97pMNA5TzIF4v9Xei%2F7lZIE%2B5VPW%2FZbxm2OsdZ9X1y3jKXs&rqlang=cn&rsv_enter=0';
let obj=url.parse(str,true);

console.log(obj);
