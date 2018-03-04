#angular

```
    Vue                vs                 ng
1.  v-*                                   ng-*
2.  el                                    ng-app
3.  new Vue({})                           angular.module('name', [])
4.  vm就是controller                      mod.controller('name', function (){})
5.  任何方式修改数据                       $apply||$*
6.  v-bind:属性                           ng-bind->输出到innerHtml
    属性中 title="{{这是错的}}"            属性中 title="{{这是对的}}"
7.  @click                                ng-click
```



对应vue中的`el:"#div1"` 属性，angular直接是`ng-app=""`， 一般可以写在<html>标签中。最最最基本的双向数据绑定`v-mode=""` ：

```javascript
<!DOCTYPE html>
<html ng-app="">
<head>
    <title>Document</title>
    <script src="angular.js"></script>
</head>
<body>
    <div>
        <input type="text" ng-model='a'>
        <div>{{a}}</div>
    </div>
</body>
</html>
```

1.angular对mvc中的c层controller特显得特别明显`mod.controller()`

2.angular所有的自带指令都带$

3.注册的模块的名字需要写进ng-app中`ng-app="[模块名字]"`

4.angular方法中不能执行异步的操作，需要使用`$apply` 或者自带的命令，如`$timeout` 等

```javascript
<!DOCTYPE html>
<html ng-app="aaa">	//模块名
  <head>
    <title></title>
    <script src="angular.js" charset="utf-8"></script>
    <script>
    let mod=angular.module('aaa', []);	//模块名

    mod.controller('ctrl1', function ($scope){	//在模块中进行c层controller的操作
      $scope.a=12;
      $scope.show=function (){	//属性和方法都在$scope中
        setTimeout(function (){
          $scope.a=5;

          $scope.$apply();    //需要执行第2步$apply进行应用
        }, 100);
      };
    });
    </script>
  </head>
  <body>
    <div ng-controller="ctrl1">	//c层的注册名
      <input type="text" name="" value="" ng-model="a">	//ng-model绑定数据
      <div class="">{{a}}</div>
      <input type="button" name="" value="按钮" ng-click="show()">	//ng-click
    </div>
  </body>
</html>
```

angular中的ajax请求：

```javascript
$http.get('1.txt').then(ev=>{
    $scope.xxx...
},err=>{
    alert('error')
})
```

angular中的promise：

```javascript
$q.all([$http.get('1.txt'),$http.get('2.txt')]).then(arr=>{
		$scope.a=arr[0].data+arr[1].data
	},err=>{
		alert('错了')
})
```

在vue中是不允许在标签属性的值中加入动态参数`{{}}` 的，但angular不一样：

`<div title="{{aaa}}}">悬浮在我身上看title<div>` 



vue中的`v-if`在angular中是`ng-repeat` ：

注意，如果出现了两个相同的数值，会报错，解决办法就是加上`track by xxx` ，以一个key作为遍历依据，对应的则是vue中的key `a in arr key $index `。建议一直加上`track by` ，对性能有所提升。

```javascript
<!DOCTYPE html>
<html lang="en" ng-app="aaa">	//注册的模块名字
<head>
    <title>Document</title>
    <script src="angular.js"></script>
    <script>
        let mod=angular.module('aaa',[])	//注册模块

        mod.controller('ctrl1',function($scope){	//注册controller
            $scope.arr=[5,12,55,8,8]
        })
    </script>
</head>
<body>
    <div ng-controller="ctrl1">	//controller名
        <ul>
            <li ng-repeat="value in arr track by $index">{{value}}</li>
        </ul>
    </div>
</body>
</html>
```



ng-if：

```javascript
<!DOCTYPE html>
<html ng-app="">
<head>
    <script src="angular.js"></script>
</head>
<body>
    勾选显示内容:
        <input type="checkbox" ng-model="myVar">	//与ng-if绑定
    <div ng-if="myVar">	//ng-if
        <h1>Welcome</h1>
        <p>Welcome to my home.</p>
        <hr>
    </div>
</body>
</html>
```



ng-init初始值：

```
<div ng-init="myText='hello world'">
<p>{{myText}}</p>
```



不转义输出内容`ng-bind-html` 和  `$sce.trustAsHtml` ：

```javascript
<!DOCTYPE html>
<html ng-app="aaa">
  <head>
    <script src="angular.js" charset="utf-8"></script>
    <script>
    let mod=angular.module('aaa', []);

    mod.controller('ctrl1', function ($scope, $sce){
      $scope.code=$sce.trustAsHtml('<strong>aaa</strong>bbb');	//$sce.trustAsHtml
    });
    </script>
  </head>
  <body>
    <div ng-controller="ctrl1">
      <div ng-bind-html="code"></div>	//ng-bind-html
    </div>
  </body>
</html>
```



过滤器`mod.filter()`  ：

```javascript
/*显示当前时间*/
<!DOCTYPE html>
<html ng-app="aaa">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="angular.js" charset="utf-8"></script>
    <script>
    let mod=angular.module('aaa', []);

    mod.controller('ctrl1', function ($scope){
      $scope.time=1519998593224;
    });
    </script>
  </head>
  <body>
    <div ng-controller="ctrl1">
      {{time|date:"yyyy-MM-dd HH:mm:ss"}}
    </div>
  </body>
</html>
```

```javascript
/*隐藏手机号中间4位*/
<!DOCTYPE html>
<html ng-app="aaa">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="angular.js" charset="utf-8"></script>
    <script>
    let mod=angular.module('aaa', []);

    mod.controller('ctrl1', function ($scope){
      $scope.tel=13841547892;
    });

    mod.filter('mobile_shadow', function (){
      return function (input, arg){
        let str=input.toString();

        return `${str.substring(0,3)}****${str.substring(7)}`;
      };
    });
    </script>
  </head>
  <body>
    <div ng-controller="ctrl1">
      {{tel|mobile_shadow}}
    </div>
  </body>
</html>
```

