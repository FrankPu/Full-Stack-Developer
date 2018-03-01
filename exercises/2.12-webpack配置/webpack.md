默认情况下，import了哪个js文件，就会被打包进bundle.js



---

### CSS资源打包

1. 安装loader

   style-loader,css-loader

2. 配置Webpack

   ```
   module:{
       rules:[
           test:/\.css$/i
           use:['style-loader','css-loader']
       ]
   }
   ```

   ​

webpack --config webpack2.config.js --watch



--config 指定webpack配置文件的名字

--watch 监视文件变化后自动编译



### 图片资源打包

1. 安装loader

   file-loader

2. ​



---

webpack-dev-server

前台不用刷新就会自动同步（不能自动编译）



---

path解析