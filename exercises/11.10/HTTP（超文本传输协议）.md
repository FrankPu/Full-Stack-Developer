# HTTP（超文本传输协议）



> 资料：
>
> [rfc2616英文原版——http1.1](http://www.ietf.org/rfc/rfc2616.txt)
>
> [rfc1945中文版——http1.0](http://man.chinaunix.net/develop/rfc/RFC1945.txt)
>
> [MDN中文文档（推荐）——http](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)

> 超文本传输协议（HTTP）是用于传输诸如HTML的超媒体文档的[应用层协议](https://en.wikipedia.org/wiki/Application_Layer)。它被设计用于Web浏览器和Web服务器之间的通信，但它也可以用于其他目的。 HTTP遵循经典的[客户端-服务端模型](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)，客户端打开一个连接以发出请求，然后等待它收到服务器端响应。 **HTTP是[无状态协议](http://en.wikipedia.org/wiki/Stateless_protocol)**，意味着服务器不会在两个请求之间保留任何数据（状态）。虽然通常基于TCP / IP层，但可以在任何可靠的[传输层](https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E5%B1%82)上使用;也就是说，一个不会静默丢失消息的协议，如UDP。

---

### 概述

1. HTTP报文

   报文分为head和body两部分，head内包含method(get/post)、path(路径)、HTTP协议版本，和其他一些可选内容

2. HTTP是**无状态**，有会话的

   在同一个连接中，两个成功执行的请求之间是没有关系的。

   > 比如在一个电商网站里，用户把某个商品加入了购物车中，换了一个页面后再次添加商品，两次添加商品的请求没有联系，浏览器无法知道最终用户都选择了哪些商品。而用HTTP的头部扩展，HTTP Cookies就可以解决这个问题。把Cookies添加到头部中，创建一个会话来让每次请求都能共享相同的上下文信息，相同的状态。

   HTTP的核心是无状态的，cookies的使用可以创建有状态的会话。

---

### HTTP请求方式

`GET`

GET方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据.

`HEAD`

HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体.

`POST`

POST方法用于将实体提交到指定的资源，通常导致状态或服务器上的副作用的更改. 

`PUT`

PUT方法用请求有效载荷替换目标资源的所有当前表示。

`DELETE`

DELETE方法删除指定的资源。

`CONNECT`

CONNECT方法建立一个到由目标资源标识的服务器的隧道。

`OPTIONS`

OPTIONS方法用于描述目标资源的通信选项。

`TRACE`

TRACE方法沿着到目标资源的路径执行一个消息环回测试。

`PATCH`

PATCH方法用于对资源应用部分修改。

---

### HTTP状态码

[状态码](http://www.runoob.com/http/http-status-codes.html)

---

### 典型的HTTP会话

1. 客户端建立一条 TCP 连接

2. 客户端发送请求并等待应答。

   1. 第一行包括请求方法及其参数
   2. 接下来的行每一行都表示一个 HTTP 首部（服务器提供的数据信息 ），HTTP 首部组成以一个**空行结束**的一个块
   3. 最后一块是可选的数据块（主要被POST使用）

   ```
   POST /contact_form.php HTTP/1.1
   Host: developer.mozilla.org
   Content-Length: 64
   Content-Type: application/x-www-form-urlencoded
   						//这里是空行
   name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
   ```

   ​

3. 服务器处理请求并送回应答, 包括一个状态码和对应的数据。

   1. 第一行是**状态行**， 包括使用的 HTTP 协议版本、状态码、状态描述
   2. 接下来的行每一行都表示一个 HTTP 首部（服务器提供的数据信息 ），HTTP 首部组成以一个**空行结束**的一个块
   3. 最后一块是数据块，包括响应的数据 (如果有的话)

   ```
   HTTP/1.1 200 OK
   Date: Sat, 09 Oct 2010 14:28:02 GMT
   Server: Apache
   Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
   ETag: "51142bc1-7449-479b075b2891b"
   Accept-Ranges: bytes
   Content-Length: 29769
   Content-Type: text/html

   <!DOCTYPE html... (这里是 29769 字节的网页信息)
   ```

   ​

**从 HTTP/1.1 开始, 连接在完成第三阶段后不再关闭, 客户端可以再次发起新的请求: 这意味着第二步和第三步可以进行数次。**

---

### HTTP2

与HTTP/1.1的几处不同：

- HTTP2是**二进制协议**而不是文本协议

  不再可读和无障碍的手动创建，改善的优化技术现在可被实施。

- 这是一个**复用协议**

  并行的请求能在同一个链接中处理，移除了HTTP/1.x中顺序和阻塞的约束。

- **压缩了headers**

  因为headers在一系列请求中常常是相似的，其移除了重复和传输重复数据的成本。

- 允许服务器**在客户端缓存中填充数据**，通过一个叫**服务器推送**的机制来提前请求。


---

### HTTP缓存

todo