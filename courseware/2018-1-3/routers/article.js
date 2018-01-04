const express=require('express');

let router_article=express.Router();

router_article.get('/', (req, res)=>{
  res.send('文章的根目录');
  res.end();
});

module.exports=router_article;
