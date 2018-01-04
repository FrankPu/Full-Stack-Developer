const express=require('express');
const consolidate=require('consolidate');
const mysql=require('mysql');
const pug=require('pug');
const fs=require('fs');

let db=mysql.createPool({host: 'localhost', user: 'root', password: '', database: '20171229', port: 3309});

let server=express();
server.listen(8080);

//×
//server.use(consolidate);

//1.选择一种模板引擎
server.engine('html', consolidate.pug);
//2.指定模板文件的扩展名
server.set('view engine', 'pug');
//3.指定模板文件的路径
server.set('views', './template_pug');





server.get('/aaa', (req, res)=>{
  //1.有没有结果文件
  fs.stat('./pug_cache/1', (err, stat)=>{
    let oDate=new Date();
    oDate.setTime(oDate.getTime()-10*60*1000);

    if(err || stat.ctime.getTime()<oDate.getTime()){
      //2.没有-渲染
      renderAndWrite();
    }else{
      let rs=fs.createReadStream('./pug_cache/1');

      rs.pipe(res);

      rs.on('error', err=>{
        //2.没有-渲染
        renderAndWrite();
      });
    }
  });

  function renderAndWrite(){
    let str=pug.renderFile('./template_pug/1.pug', {a: 12, b: 5, pretty: true, arr: [12, 5, 8, 99, 27]});

    fs.writeFile('./pug_cache/1', str, err=>{
      console.log(err);

      res.send(str);
      res.end();
    });
  }

  //
});
