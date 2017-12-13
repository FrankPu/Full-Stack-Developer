https://segmentfault.com/a/1190000005738687

## 一.基本形式 ##

```HTML
<div>               <-父级：overflow:hidden
  <div></div>       <-子级：没什么要注意的
</div>
```

```javascript
let scroll=new IScroll('父级选择器', {参数});
console.log(scroll.options);
```

## 二.各种参数 ##
常用参数：

|名称|类型|默认值|说明|
|---|---|---|---|
|bounce|`boolean`|true|是否允许过度拖拽|
|bounceTime|`int`|600|过度拖拽后，回正的时间|
|scrollX|`boolean`|false|允许横向拖拽|
|scrollY|`boolean`|true|允许纵向拖拽|
|freeScroll|`boolean`|false|向任意方向滚动，需scrollX也是true|
|startX|`int`|0|起点X|
|startY|`int`|0|起点Y|
|mouseWheel|`boolean`|false|监听滚轮事件|
|momentum|`boolean`|true|物理引擎，关闭可极大增强性能|
|directionLockThreshold|`int`|5|方向锁定阈值|
|mouseWheelSpeed|`int`|20|鼠标滚轮滚动速度|
|resizePolling|`int`|60|下拉刷新时间(ms)|
|invertWheelDirection|`int`|1|鼠标滚轮方向反转|


不常用参数：

|名称|类型|默认值|说明|
|---|---|---|---|
|useTransform|`boolean`|true|用transform，而非left、top|
|useTransition|`boolean`|true|使用transition，而非js动画|
|disableMouse|`boolean`|true|禁用mouse事件|
|disablePointer|`boolean`|false|禁用pointer事件(浏览器统一事件)|
|disableTouch|`boolean`|true|禁用touch事件|
|preventDefault|`boolean`|true|禁用默认事件|
|HWCompositing|`boolean`|true|显卡硬件加速|
|bindToWrapper|`boolean`|false|把事件绑定到wrapper元素上，而非全局绑定(document)|

## 三.事件 ##

### 1.scroll事件 ###
iscroll-probe.js和iscroll.js

```javascript
let scroll=new IScroll('#wrapper', {probeType: 3});

scroll.on('scroll', function (){
  console.log(scroll.x, scroll.y);
});
```

probeType的取值

|取值|说明|
|---|---|
|1|事件触发优先级很低(性能考虑)，定时器|
|2|优先级较高，监控指针移动|
|3|优先级最高，监控指针+运动，强制使用`requestAnimationFrame`|

### 2.所有事件 ###

|事件名|说明|
|---|---|
|beforeScrollStart|刚touch，滚动过程刚刚初始化|
|scrollStart|即将开始滚动|
|scroll|滚动中，需配合`iscroll-probe.js`和`probeType`|
|scrollEnd|滚动结束|
|scrollCancel|滚动并未发生（按下去原地抬起来）|
|flick|扫动|
|zoomStart|缩放开始|
|zoomEnd|缩放结束|
