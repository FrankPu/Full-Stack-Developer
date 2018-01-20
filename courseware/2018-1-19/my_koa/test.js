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
