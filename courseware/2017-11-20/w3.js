let oAjax=new XMLHttpRequest();

oAjax.open('get', 'a.txt', false);

console.log('成功的打开了一个同步ajax');

this.onmessage=function (ev){
  switch(ev.data.name){
    case 'login'....
  }
};
