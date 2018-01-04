const express=require('express');

let router_vip=express.Router();

router_vip.get('/', (req, res)=>{
  res.send('vip你好');
  res.end();
});

router_vip.get('/login', (req, res)=>{
  res.send('尊贵的VIP登陆');
  res.end();
});

module.exports=router_vip;
