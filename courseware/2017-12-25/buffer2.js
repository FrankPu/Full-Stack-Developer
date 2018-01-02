let b1=new Buffer('abc');
let b2=new Buffer('def');

let b3=Buffer.concat([b1, b2]);

console.log(b3);
