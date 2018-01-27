const https=require('https');

let req=https.request({
  host: 'www.chainedfinance.com',
  path: '/index',
  header: {
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,es;q=0.6,fr;q=0.5,pt;q=0.4',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Host': 'www.chainedfinance.com',
    'Pragma': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3315.4 Safari/537.36'
  }
}, res=>{
  let str='';
  res.on('data', data=>{
    console.log(data);
    str+=data;
  });
  res.on('end', ()=>{
    console.log(str);
  });


});

req.on('error', err=>{
  console.log(err);
});

req.end();
