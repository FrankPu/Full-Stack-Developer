//3.接收
this.onmessage=function (ev){
  //console.log('我得到了：', ev.data);

  //4.处理任务
  let sum=ev.data.n1+ev.data.n2;

  //5.返回
  this.postMessage(sum);
};
