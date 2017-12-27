const crypto=require('crypto');

let hash=crypto.createHash('md5');

//hash.update('abcdef');
hash.update('abc');
hash.update('def');

console.log(hash.digest('hex'));
