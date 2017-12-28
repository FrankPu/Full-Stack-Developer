const uuid=require('uuid/v4');
const path=require('path');

let filename='1.txt';

let newfilename=`${uuid().replace(/\-/g, '')}${path.extname(filename)}`;

console.log(newfilename);
