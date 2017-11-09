define(function (require, exports, module){
  //exports
  //exports.a=12;
  //exports.b=5;
  /*exports.show=function (){

  }*/

  //module——批量导出
  module.exports={
    a: 12, b: 5,
    show(a, b){
      alert(a+b);
    }
  };

  //require

  //let a=12;
  //let b=5;
});
