const express=require('express');
const url=require('url');

let router=express.Router();
module.exports=router;

router.get('/', (req, res)=>{
  let {page}=req.query;

  page=parseInt(page);

  if(isNaN(page) || page<1){
    page=1;
  }

  //
  let page_size=8;
  let page_start=(page-1)*page_size;

  //
  req.db.query(`SELECT ID,title,sub_title,position_main,position_second,property_types,area_min,area_max,ave_price,main_img_path FROM house_table LIMIT ${page_start}, ${page_size}`, (err, res1)=>{
    if(err){
      res.sendStatus(500);
    }else{
      //
      req.db.query(`SELECT COUNT(*) AS c FROM house_table`, (err, res2)=>{
        if(err){
          res.sendStatus(500);
        }else{
          res.render('list', {
            list_data: res1,
            cur_page: page,
            page_count: Math.ceil(res2[0].c/page_size)
          });
        }
      });
    }
  });
});

router.get('/detail/:id/', (req, res)=>{
  let {id}=req.params;

  req.db.query(`SELECT * FROM house_table WHERE ID='${id}'`, (err, data)=>{
    if(err){
      res.showError(500);
    }else{
      res.render('detail', {data: data[0]});
    }
  });
});

router.get('/static_img/:img_path', (req, res)=>{
  let {img_path}=req.params;

  let obj=url.parse(req.headers['referer']);
  if(obj.host!='localhost:8080'){
    res.sendStatus(404);
  }else{
    res.sendFile(`${req.cwd}\\upload\\${img_path}`);
  }
});
