# React

### 最基本的运用：

```javascript
<!DOCTYPE html>
<html>
<head>
    <script src="react.js"></script>
    <script src="react-dom.js"></script>
    <script src="browser.js"></script>
    <script type="text/babel">
    window.onload=function(){
        ReactDOM.render(
            <div>
                这里放被render的内容，必须有且仅有一个根元素包裹！
            </div>,
            document.getElementById('div1')
        )
    }
    </script>
</head>
<body>
    <div id="div1">

    </div>
</body>
</html>
```

1.需要引入3个js文件，缺一不可，browser就是babel对jsx语法的解析

2.react更像是mvc中的v层，都需要放入`ReactDom.render` 里渲染出来

3.后面的`document.getElementById('div1')` 类似于vue中的`el`

---

### JSX需要注意的点：

JSX就是一部分的JS+ES6语法+方便创建元素，在ES6普及以后，剩下还不错的功能就是直接创建元素。

1. 被渲染的内容需要有且仅有1个父级包裹
2. 在JSX语法中，给元素加class要写成`className`

```
ReactDom.render(
	<div className='box'>
		<span>aaa</span>
	</div>,
	document.getElementById('div1')
)
```



3. 在JSX语法中，使用标签`label` 中的`for` 跳转焦点，要改写成`htmlFor` ：

```
ReactDom.render(
	<div>
		<label htmlFor="user">用户名</label>
		<input id="user" type="text" />
	</div>,
	document.getElementById('div1')
)
```

4. 在JSX中，单标签必须使用闭合标签形式！

---

### React组件

1. 类名必须大写，而不是可选的！
2. 继承自`React.Component`
3. 必须包含`render` 方法

```javascript
    //1.自定义组件
    class Test extends React.Component{
        constructor(...args){
            super(...args);
        }
        fn(){
          alert(this.props.a+this.props.b)
        }
        render(){
          return <div>
            <span>aaa</span>
            <input type="button" value="提交" onClick={this.fn.bind(this)} /> //绑定input上的this到当前组件Test上！
          </div>
        }
    }
    //2.在ReactDOM.render中渲染出来
    window.onload=function(){
      ReactDOM.render(
        <Test a={12} b={5}></Test>,	//给自定义的组件加上属性
        document.getElementById('div1')
      )
    }
```

##### 事件：

1. 事件名按照驼峰写法：`onClick` 
2. 在react中，只要this不指定，就是null
3. `onClick={this.fn.bind(this)}` 点击时，要使指向input的this-->Test组件的this



##### 属性：

1. 在React中，除了字符串用引号包裹，其他的都用`{}` 包裹，例如**数字**或者**函数** 
2. 属性的接受 `this.props.xx` 
3. 在React中，属性的值是不能修改的，是只读的；如果要修改，使用状态