//如何在async函数和普通函数混用的情况下保证执行顺序


(async ()=>{
  console.log('a');

  await new Promise((resolve, reject)=>{
    setTimeout(function (){
      resolve();
    }, 1000);
  });

  console.log('b');

  (function (){
    console.log('c');
  })();

})();
