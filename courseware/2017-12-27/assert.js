const assert=require('assert');

function div(a, b){
  assert(typeof a=='number' && typeof b=='number', '除法中两个东西，都得是数字');
  assert(b!=0, '分母不能是0');

  return a/b;
}

console.log(div('a c', 0));
