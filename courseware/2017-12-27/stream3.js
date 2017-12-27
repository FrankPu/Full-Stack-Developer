const fs=require('fs');
const zlib=require('zlib');

let gz=zlib.createGzip();

let rs=fs.createReadStream('www/2.png');
let ws=fs.createWriteStream('www/2.png.gz');

rs.pipe(gz).pipe(ws);
