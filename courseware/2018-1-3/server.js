const express=require('express');

let server=express();
server.listen(8080);

//----------------------
server.use('/user', require('./routers/user'));

//---------------------
server.use('/article', require('./routers/article'));
