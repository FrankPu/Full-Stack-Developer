<https://github.com/DmitryBaranovskiy/raphael> <http://dmitrybaranovskiy.github.io/raphael/>

### 形状

| 名称      | 参数                       | 说明   |
| ------- | ------------------------ | ---- |
| rect    | x, y, width, height, [r] | 矩形   |
| circle  | cx, cy, r                | 圆    |
| ellipse | cx, cy, rx, ry           | 椭圆   |
| image   | src, x, y, width, height | 图片   |
| path    | pathString               | 路径   |
| text    | x, y, text               | 文字   |

### 事件

| 名称                      | 说明    |
| ----------------------- | ----- |
| click/unclick           | 点击    |
| dblclick/undblclick     | 双击    |
| hover/hover             | 移入、移出 |
| mousedown/unmousedown   | 鼠标按下  |
| mousemove/unmousemove   | 鼠标移动  |
| mouseup/unmouseup       | 鼠标抬起  |
| touchstart/untouchstart | 手指按下  |
| touchmove/untouchmove   | 手指移动  |
| touchend/untouchend     | 手指抬起  |

### transform

transform以字符串形式写，例如：`"t200,50r45s2"`

| 命令   | 说明        | 参数    |
| ---- | --------- | ----- |
| t    | translate | x,y   |
| r    | rotate    | angle |
| s    | scale     | x,y   |

### 路径

| 命令   | 说明                                | 参数                                       |
| ---- | --------------------------------- | ---------------------------------------- |
| M    | moveto                            | (x y)+                                   |
| Z    | 闭合                                |                                          |
| L    | lineto                            | (x y)+                                   |
| H    | 横线(horizontal)                    | x+                                       |
| V    | 竖线(vertical)                      | y+                                       |
| C    | 曲线(curve)                         | (x1 y1 x2 y2 x y)+                       |
| S    | 平滑曲线(smooth)                      | (x2 y2 x y)+                             |
| Q    | 二次贝赛尔曲线(quadratic)                | (x1 y1 x y)+                             |
| T    | 平滑二次贝塞尔曲线                         | (x y)+                                   |
| A    | 弧线(arc)                           | (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+ |
| R    | 卡特莫尔罗曲线(CatmullRom)——抗锯齿平滑曲线的一种算法 | x1 y1 (x y)+                             |

### 属性

| 名称                | 类型       | 说明                                       |
| ----------------- | -------- | ---------------------------------------- |
| **基本样式**          |          |                                          |
| x                 | `number` |                                          |
| y                 | `number` |                                          |
| width             | `number` |                                          |
| height            | `height` |                                          |
| rx                | `number` | 圆角x                                      |
| ry                | `number` | 圆角y                                      |
| cx                | `number` | 圆心x                                      |
| cy                | `number` | 圆心y                                      |
| r                 | `number` | 半径                                       |
| opacity           | `number` | 透明度                                      |
| path              | `string` | path字符串                                  |
| src               | `string` | 图片地址，只有image元素可用                         |
| transform         | `string` | 类似transform()方法                          |
| **边线样式**          |          |                                          |
| stroke            | `string` | 边线，只能是颜色                                 |
| stroke-width      | `number` | 边线宽度                                     |
| stroke-linecap    | `string` | 端点形状：[“butt”, “square”, “round”]         |
| stroke-linejoin   | `string` | 接头形状：[“bevel”, “round”, “miter”]         |
| stroke-dasharray  | `string` | 边线虚线，-和.组成："-.-"/"-"/"--.._..--"         |
| stroke-miterlimit | `number` | 斜接长度限制，只有当接头是miter时有效                    |
| stroke-opacity    | `number` | 边线透明度                                    |
| **填充样式**          |          |                                          |
| fill              | `number` | 填充，可以是颜色、渐变或图片                           |
| fill-opacity      | `number` | 填充透明度                                    |
| **字体**            |          |                                          |
| font              | `string` | 类似于css的font                              |
| font-family       | `string` | 字体                                       |
| font-size         | `number` | 字体大小                                     |
| font-weight       | `string` | 加粗                                       |
| text              | `string` | text元素的文字内容                              |
| text-anchor       | `string` | 文本对齐：[“start”, “middle”, “end”]          |
| title             | `string` | text的tooltip                             |
| href              | `string` | 链接地址                                     |
| target            | `string` | 链接target                                 |
| **其他**            |          |                                          |
| cursor            | `string` | 鼠标指针，类似于css的cursor样式                     |
| arrow-end         | `string` | arrowhead on the end of the path. The format for string is [-[-]]. Possible types: classic, block, open, oval, diamond, none, width: wide, narrow, midium, length: long, short, midium. |
| clip-rect         | `string` | comma or space separated values: x, y, width and height |