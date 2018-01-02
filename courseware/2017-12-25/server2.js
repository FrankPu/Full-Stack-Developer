const http=require('http');
const url=require('url');
const querystring=require('querystring');
const common=require('./libs/common');
const fs=require('fs');
const uuid=require('uuid/v4');
const path=require('path');

let server=http.createServer((req, res)=>{
  //GET数据
  let {pathname, query}=url.parse(req.url, true);

  //console.log('接收到了GET数据：', pathname, query);

  //POST数据
  let aBuffer=[];
  req.on('data', data=>{
    aBuffer.push(data);
  });
  req.on('end', ()=>{
    let data=Buffer.concat(aBuffer);

    if(req.headers['content-type'].startsWith('multipart/form-data')){
      let post={};
      let files={};
      //console.log(data.toString());

      //提取分隔符
      const boundary='--'+req.headers['content-type'].split('; ')[1].split('=')[1];
      //console.log(boundary);

      //第一步、用分隔符切分
      let arr=data.split(boundary);

      //第二步、扔掉头尾(<>、<--\r\n>)
      arr.shift();
      arr.pop();

      //第三步、每一项的头尾扔掉(\r\n....\r\n)
      arr=arr.map(item=>item.slice(2, item.length-2));

      //第四步、找第一个"\r\n\r\n"，一切两半——前一半:信息，后一半:数据
      arr.forEach(item=>{
        let n=item.indexOf('\r\n\r\n');

        let info=item.slice(0, n);
        let data=item.slice(n+4);

        info=info.toString();

        let total=0;
        let complete=0;

        if(info.indexOf('\r\n')==-1){   //只有一行——普通数据
          let key=common.parseInfo(info).name;
          let val=data.toString();

          post[key]=val;
        }else{                          //两行——文件数据
          total++;

          let json=common.parseInfo(info);
          let key=json.name;
          let filename=json.filename;
          let type=json['Content-Type'];
          let filepath=`upload/${uuid().replace(/\-/g, '')}${path.extname(filename)}`;

          files[key]={filename, type, filepath};

          //console.log(filepath);

          fs.writeFile(filepath, data, err=>{
            if(err){
              console.log('文件写入失败');
            }else{
              console.log('写入完成');

              complete++;

              console.log(post, files);
            }
          });
        }
      });
    }else{      //urlencoded
      let post=querystring.parse(data.toString());
      console.log(post);
    }
  });
});
server.listen(8080);
