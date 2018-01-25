//http服务里面的request

const http=require('http');

let client = http.request({
  host: 'localhost',
  port: 3000,
  path: '/a.php?n1=55&n2=88'
}, res => {
  let str = '';

  res.on('data', data => {
    str += data;
  });

  res.on('end', () => {
    console.log(str);
  });

  res.on('error', err => {
    console.log('请求出错了');
  });
});

client.end();
