const assert=require('assert');
const urllib=require('url');


const _headers={
  'accept-encoding': 'gzip, deflate, br',
  'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'
};

const DEBUG=false;

function debug_log(...args){
  if(DEBUG){
    console.log(`[${new Date().toGMTString()}]`, ...args);
  }
}

//url, method, headers, postdata
module.exports=function (options, fnProc){
  if(typeof options=='string'){
    options={
      url: options,
      method: 'GET',
      headers: {},
    };
  }else{
    options=options||{};
    options.method=options.method||'GET';
    options.headers=options.headers||{};
  }

  //handle headers
  for(let name in _headers){
    options.headers[name]=options.headers[name]||_headers[name];
  }

  return new Promise((resolve, reject)=>{
    _req(options);

    function _req(options){
      debug_log('start fetch', options.url);
      var obj=require('url').parse(options.url);

      //chioce mod
      let mod=null;
      let port=0;
      switch(obj.protocol){
        case 'https:':
          mod=require('https');
          port=443;
          break;
        case 'http:':
        default:
          mod=require('http');
          port=80;
          break;
      }

      //headers.host=headers.host||obj.hostname;

      const req_options={
        hostname: obj.hostname,
        port: obj.port||port,
        path: obj.path,
        method: options.method,
        headers: options.headers
      };

      let _req_obj=mod.request(req_options, (res)=>{
        if(res.statusCode!=200){
          if(res.statusCode==302 || res.statusCode==301){
            let location=urllib.resolve(options.url, res.headers['location']);
            debug_log('redirected', location);

            options.url=location;
            options.method='GET';
            delete options.postdata;
            _req(options);
          }else{
            debug_log('error occurred');
            debug_log(res.statusCode);
            debug_log(res.headers);
            reject(res.statusCode);
          }
        }else{
          var arr=[];
          res.on('data', data=>{
            arr.push(data);

            if(fnProc){
              let total=Number(res.headers['content-length']);
              if(isNaN(total)){
                total=0;
              }

              let loaded=0;
              arr.forEach(data=>loaded+=data.length);

              fnProc(loaded, total);
            }
          });
          res.on('end', ()=>resolve({
            buffer: Buffer.concat(arr),
            headers: res.headers
          }));
        }
      });
      _req_obj.on('error', e=>reject(e));
      _req_obj.write(options.postdata||'');
      _req_obj.end();
    }
  });
};
