const url=require('url');

let obj=url.parse("https://www.baidu.com/s?wd=abcdd&rsv_spt=1&rsv_iqid=0xca2e19fe000897df&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&rqlang=&tn=baiduhome_pg&ch=&rsv_enter=1&inputT=975", true);

console.log(obj);
