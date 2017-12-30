const uuid=require('uuid/v4');

let s=uuid().replace(/\-/g, '');

console.log(s);
