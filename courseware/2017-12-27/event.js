const Event=require('events').EventEmitter;

let ev=new Event();

//ev监听
ev.on('blue', (a,b,c,d)=>{
  console.log('接收到了1个事件：', a, b, c, d);
});
ev.on('blue', (a,b,c,d)=>{
  console.log('接收到了2个事件：', a, b, c, d);
});

//ev触发
ev.emit('blue', 12, 5, 8, 99);
