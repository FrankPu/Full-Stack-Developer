# chatRoom
a chatroom with websocket(socket.io) and node

---
依赖：`cnpm install`——socket.io、mysql、jquery
数据库：本地链接localhost、数据库名20171113
集成服务器环境：Wamp

---


### 原生Node写接口
- 开始：`node server.js`+`localhost:8080/1.html`
- 使用到的node模块——http、fs、url、mysql
- 使用到的语法：
1. 后端File System向客户端写返回信息：`res.write()`+`res.end()`；前端ajax
2. url模块的使用：[blog](http://blog.csdn.net/dick3741/article/details/78562013)
3. 结构赋值：`let {pathname, query}=url.parse(req.url, true);`
4. JSON的转换：`JSON.stringify({code: 1, msg: '密码不符合规范'});`

### socket.io双向通信
- 开始：`node server2.js`+`localhost:8080/2.html`
- 使用到的模块：http、fs、mysql、socket.io
- 使用到的语法：socket.io双工

Server (server2.js)
```
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
```
Client (2.html)
```
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
```
