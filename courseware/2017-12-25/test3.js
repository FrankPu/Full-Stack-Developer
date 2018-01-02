let str='multipart/form-data; boundary=----WebKitFormBoundarycWYtzRXqfQ0WZSeF';

let arr=str.split('; ');
let boundary='--'+arr[1].split('=')[1]

console.log(boundary);
