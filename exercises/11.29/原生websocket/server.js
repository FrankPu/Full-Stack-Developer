const net = require('net');
const crypto = require('crypto');

//1.创建一个tcp服务器
let server = net.createServer(socket => {
  console.log('有人连接我了');

  //3.接收浏览器发过来的特殊头，处理、返回处理结果
  socket.once('data', data => {
    //第一次

    //第一步、把数据转换成headers的json
    let str = data.toString();
    let aHeaders = str.split('\r\n');
    //不需要第一行和最后两行
    aHeaders.shift();
    aHeaders.pop();
    aHeaders.pop();
    //开始转换
    let headers = {};

    aHeaders.forEach(str => {
      let [name, value] = str.split(': ');

      headers[name] = value;
    });

    //第二步、校验是不是websocket协议
    if (headers['Connection'] != 'Upgrade' || headers['Upgrade'] != 'websocket') {
      console.log('接到了一个ws以外的协议，扔了');
      socket.end();
    } else {
      //第三步、处理websocket专有头的版本
      if (headers['Sec-WebSocket-Version'] != 13) {
        console.log('出现了意外的的ws版本');
        socket.end();
      } else {
        //第四步、处理key——base64(hash(key))
        //Client -> server        "Sd8iRCUKYSU1rEiD+GNMqg=="
        //Server -> Clinet        base64(sha1("Sd8iRCUKYSU1rEiD+GNMqg=="+"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"))
        //后面神奇的uuid根据websocket作者每个版本改变
        let hash = crypto.createHash('sha1');

        hash.update(headers['Sec-WebSocket-Key'] + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
        let base64Key = hash.digest('base64');

        //base64Key=>client
        socket.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${base64Key}\r\n\r\n`);

        console.log('握手完成');
      }

      //console.log(headers);

      //后续
      socket.on('data', (data) => {
        console.log(data);

        //帧结构
      });
    }


  });

  socket.on('end', () => {
    console.log('连接已断开');
  });
});
server.listen(8080);
