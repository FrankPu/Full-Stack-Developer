const fetchHtml=require('./libs/fetch-html-blue');
const zlib=require('zlib');
const assert=require('assert');
const fs=require('./libs/fs');
const pathlib=require('path');

function fetch(options){
  return new Promise((resolve, reject)=>{
    fetchHtml(options).then(result=>{
      let {buffer, headers}=result;

      if(headers['content-length'] && headers['content-length']!=buffer.length){
        reject();
      }else{
        if(headers['content-encoding'] && headers['content-encoding'].split('; ').includes('gzip')){
          zlib.gunzip(buffer, (err, data)=>{
            if(err){
              reject(err);
            }else{
              resolve(data);
            }
          });
        }else{
          resolve(buffer);
        }
      }
    }, err=>{
      reject(err);
    });
  });
}

//饭店的数据
(async ()=>{
  let url=`https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=30.74501&longitude=120.755501&offset=0&limit=8`;

  let buffer=await fetch(url);

  let json=JSON.parse(buffer.toString());

  let datas=json.items.map(item=>{
    let restaurant=item.restaurant;

    return {
      restaurant_id:      restaurant.id,
      name:               restaurant.name,
      address:            restaurant.address,
      distance:           restaurant.distance,
      float_delivery_fee: restaurant.float_delivery_fee,
      image_path:         restaurant.image_path,
      latitude:           restaurant.latitude,
      longitude:          restaurant.longitude,
      opening_hours:      restaurant.opening_hours.join(','),
      phone:              restaurant.phone,
      rating:             restaurant.rating,
      rating_count:       restaurant.rating_count,
      recent_order_num:   restaurant.recent_order_num,
    };
  });

  for(let i=0;i<datas.length;i++){
    let data=datas[i];
    let img_url=data.image_path[0]+'/'+data.image_path.substring(1,3)+'/'+data.image_path.substring(3);

    if(img_url.endsWith('jpeg')){
      img_url+='.jpeg';
    }else if(img_url.endsWith('png')){
      img_url+='.png';
    }else{
      assert(0);
    }

    img_url='https://fuss10.elemecdn.com/'+img_url;

    console.log(img_url);

    let img_buffer=await fetch(img_url);

    await fs.writeFile(pathlib.resolve(__dirname, './images/', data.image_path), img_buffer);
  }

  //

  console.log(json.items.length);
})()




/*fetch({
  //url: 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=30.74501&longitude=120.755501&offset=0&limit=8',
  url: 'https://h5.ele.me/restapi/shopping/v2/menu?restaurant_id=2356152',
  headers: {
    referer: 'https://h5.ele.me/shop/',
    'x-shard': 'shopid=2356152;loc=120.755501,30.74501'
  }
}).then(buffer=>{
  console.log(buffer.toString());
}, err=>{
  console.log('错了');
});*/


























/*
fetch('https://www.baidu.com/').then(result=>{
  let {buffer, headers}=result;

  console.log(buffer);
  console.log(headers);
}, err=>{
  console.log('有错', err);
});
*/
/*fetch({
  url: 'https://www.baidu.com/',
  headers: {}
});*/
