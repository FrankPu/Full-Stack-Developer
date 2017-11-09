define(function (require, exports, module){
  let moda=require('./a');
  let modb=require('./b');

  exports.res=moda.num1+modb.num2;
});
