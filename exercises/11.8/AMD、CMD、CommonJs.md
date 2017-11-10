

> **模块化**是指将一个复杂问题，依照一种分类的思维把问题进行系统性的分解处理。使得系统成为**"高内聚，低耦合"**的模块组成，让**管理，开发，维护变得“有理可循”**。
>
> RequireJS 、Sea.js、CommonJs都是**模块加载器** ，倡导**模块化开发理念** 。

### AMD——Asynchronous Module Definition（异步模块定义）

- RequireJS 遵循 AMD（异步模块定义）规范。

- AMD推崇**依赖前置** ，在解析和执行当前模块之前指明所有依赖模块

  ```javascript
  define(['./a','./b'],function(a,b){
     a.doSomething()
     b.doSomething()
  }) 
  ```

- 无需遍历整个函数体找到它的依赖，因此性能有所提升，缺点就是开发者必须显式得指明依赖，这会使得开发工作量变大。

- `<script>` 标签引入RequireJs



### CMD——Common Module Definition（通用模块定义）

- SeaJs 遵循 CMD 规范。

- CMD推崇**依赖就近** ，可以把依赖写进你的代码中的任意一行

  ```javascript
  define(function(require, exports, module) {
    var a = require('./a')
    a.doSomething()
    var b = require('./b')
    b.doSomething()
  })
  ```

- 代码在运行时，首先是不知道依赖的，需要遍历所有的require关键字，这是一种牺牲性能来换取更多开发便利的方法。

- `<script>` 标签引入SeaJs



### CmmonJs

- Node.js遵循CommonJs规范。
- 因为nodeJs就是它的实现，所以使用node就行，也不用引入其他包



**资料：**

http://blog.csdn.net/jackwen110200/article/details/52105493

http://blog.chinaunix.net/uid-26672038-id-4112229.html