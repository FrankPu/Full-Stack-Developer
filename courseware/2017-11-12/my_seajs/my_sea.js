const sea={
  use(path, fn_end){
    $.ajax({
      url: path,
      success(str){
        parseStr(str, fn_end);

        function parseStr(str, fn_end){
          function define(fn){
            let module={
              exports: {}
            };

            fn(function (){}, module.exports, module);

            fn_end(module.exports);
          }

          //第一步、require都找出来
          let tmp=str.substring(str.indexOf('{')+1, str.lastIndexOf('}'));
          let arr=tmp.match(/require\([^\(\)]+\)/g).map(item=>{
            if(item.indexOf('"')!=-1){
              return item.substring(item.indexOf("\"")+1, item.lastIndexOf("\""));
            }else{
              return item.substring(item.indexOf("\'")+1, item.lastIndexOf("\'"));
            }
          });

          let i=0;
          let json={};
          function next(){
            $.ajax({
              url: arr[i],
              success(str){
                parseStr(str, function (mod){
                  json[arr[i]]=mod;

                  i++;
                  if(i==arr.length){
                    //第二步、执行代码
                    str.replace('require(xxxx)', )
                    eval(str);
                  }else{
                    next();
                  }
                });
              }
            })
          }


        }
      },
      error(){
        alert('失败');
      }
    })
  }
};
