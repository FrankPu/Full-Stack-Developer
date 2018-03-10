const http = require('http');
const querystring =  require('querystring');
const zlib=require('zlib');



const options = {
  hostname: 'student.kaikeba.com',
  path: '/api/study/50/roadmap',
  method: 'get',
  headers: {

    'Accept':`text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`,
    'Accept-Encoding':`gzip, deflate, br`,  // ***** 这里这个要注释掉，抓取过来不用gzip压缩
    'Accept-Language':`zh-CN,zh;q=0.9`,
    'Cache-Control':`no-cache`,
    'Connection':`keep-alive`,
    'Content-Type':`application/x-www-form-urlencoded; charset=UTF-8`,
    'Cookie':`gr_user_id=27396e77-e31f-47be-aa98-73f070a15527; __root_domain_v=.kaikeba.com; zg_did=%7B%22did%22%3A%20%2215db701b40e12-00ddaf961b5a25-36624308-e1000-15db701b40f620%22%7D; _qddaz=QD.1d3ynm.fazo9i.j7wotoet; pt_1d4f55d9=uid=2CHHyHEfSu2oBT58sQCIGQ&nid=0&vid=dTdnzV/nqOzkrWiRFbdUag&vn=59&pvn=2&sact=1513167056385&to_flag=0&pl=O-R0z/MLbbuaYKVzQfXXpg*pt*1513167054154; UM_distinctid=1616146de23780-06f11de469a356-3c604504-e1000-1616146de246b5; Hm_lvt_e86777c0d40cd3fc9a88b35e672a50d6=1519573540; Hm_lvt_9a1843872729d95c5d7acbea784c51b2=1519573540; zg_dc148b8ece6348158382a080b20df3dd=%7B%22sid%22%3A%201519573540.003%2C%22updated%22%3A%201519573544.158%2C%22info%22%3A%201519573540014%7D; CNZZDATA1258741995=895229428-1502009813-http%253A%252F%252Fold.kaikeba.com%252F%7C1520423471; user=%7B%22qq%22%3A%221007994302%22%2C%22true_name%22%3A%22%E4%BF%9E%E9%A1%BA%E6%AD%A3%22%2C%22mobile%22%3A%2218650812263%22%2C%22name%22%3A%22%5B%E4%B8%8A%E6%B5%B7%5D%E9%A1%BA%E6%AD%A3%22%2C%22id%22%3A61622%2C%22is_paid%22%3A1%2C%22avatar%22%3A%22http%3A%2F%2Fi.kaikeba.com%2F150959505256441513%22%2C%22token%22%3A%22ab6d567465a84358851603f31bcdf7a2%22%7D; current=%7B%22name%22%3A%22%E3%80%8AWeb%E5%85%A8%E6%A0%88%E6%9E%B6%E6%9E%84%E5%B8%88%E3%80%8B%E5%AF%B9%E6%A0%87%E7%99%BE%E5%BA%A6T6-T7%22%2C%22courseid%22%3A50%7D; responseTimeline=126; SERVERID=b30b98f09827713407addc8912a27ea5|1520424471|1520423707; Hm_lvt_631400a39fe3b2ab0d57e8fe33a22296=1520423708,1520423713,1520424396,1520424473; Hm_lpvt_631400a39fe3b2ab0d57e8fe33a22296=1520424473; zg_7c9bcf6917804ce5ad8448db3cbe3fb3=%7B%22sid%22%3A%201520423708.16%2C%22updated%22%3A%201520424472.644%2C%22info%22%3A%201519913872250%2C%22cuid%22%3A%20%22%22%7D`,
    'X-Auth-Token':'ab6d567465a84358851603f31bcdf7a2',
    'Platform':'student',
    'User-Agent':`Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36`,
    'Host':'www.kaikeba.com',   //必填
  }
};

const req = http.request(options, (res) => {

  // console.log(res.statusCode); // 200

  let arr = [];
  res.on('data', (chunk) => {

    arr.push(chunk);
  });
  res.on('end', () => {
    // console.log('响应中已无数据。');
    let data = Buffer.concat(arr);
    //console.log(data.toString()) // {"error_code":500,"error_msg":"internal server error"}
	let json = zlib.Gunzip(data).toString();
	console.log( JSON.parse( json ) );
  });
});

req.on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});


req.end();
