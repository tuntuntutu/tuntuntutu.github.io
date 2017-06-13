## 文档

[SASS入门](http://www.w3cplus.com/sassguide/)

[SASS中文文档手册](http://sass.bootcss.com/docs/sass-reference/)

[sass/less/stylus比较](http://www.w3cplus.com/css/css-preprocessor-sass-vs-less-stylus-2.html)

---

## 特性


 [SASS官方在线转换器](http://www.sassmeister.com)

#### 种类
Sass 有两种语法：

- 第一种被称为 SCSS(Sassy CSS)，是一个 CSS3 语法的扩充版本。SCSS 理解大多数 CSS hacks 以及浏览器专属语法，例如IE 古老的 filter 语法。个人感觉最关键的是能够兼容css原生语法，方便工程引入sass

- 第二种比较老的语法成为缩排语法（或者就称为 "Sass"）， 提供了一种更简洁的 CSS 书写方式。 它不使用花括号，而是通过缩排的方式来表达选择符的嵌套层级，I 而且也不使用分号，而是用换行符来分隔属性。 很多人认为这种格式比 SCSS 更容易阅读，书写也更快速。
- 只要使用 sass-convert 命令行工具，就可以将一种语法转换为另一种语法

```
# 将 Sass 转换为 SCSS
$ sass-convert style.sass style.scss

# 将 SCSS 转换为 Sass
$ sass-convert style.scss style.sass
```

#### 缓存
默认情况下，Sass 会对编译过的模板（template）和片段（partials） 进行缓存。 这将明显加快大量 Sass 文件的重新编译速度， 并且在 Sass 模板被切割为多个文件并通过 @import 引入形成一个大文件时效果最好。

#### 编辑风格：
-  nested：嵌套缩进的css代码，它是默认值。
-  expanded：没有缩进的、扩展的css代码。
-  compact：简洁格式的css代码。
-  compressed：压缩后的css代码。

#### 监听方式：
    
```
// watch a file
sass --watch input.scss:output.css
// watch a directory（less好像原生不带这个功能）
sass --watch app/sass:public/stylesheets
```

#### 变量

SASS允许使用变量，所有变量以$开头：
     
```scss
$blue : #1875e7;　
div {
　  color : $blue;
}
```
如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。

```scss
$side : left;
.rounded {
　　border-#{$side}-radius: 5px;
}
```
> 区别与less、stylus等预处理语言，sass没有局部作用域的概念，如下

```scss
$color: black;
.scoped {
  $bg: blue;
  $color: white;
  color: $color;
  background-color:$bg;
}
.unscoped {
  color:$color;
}
```

编译出来如下

```
.scoped {
  color:white;/*是白色*/
  background-color:blue;
}
.unscoped {
  color:white;/*白色（无全局变量概念）*/
}
```


#### 计算功能
    
```scss
body {
　　margin: (14px/2);
　　top: 50px + 100px;
　　right: $var * 10%;
}
```
####  mixin

Mixin有点像C语言的宏（macro），是可以重用的代码块

```scss
　　@mixin left {
　　　　float: left;
　　　　margin-left: 10px;
　　}
```
可以指定参数和缺省值

```
　　@mixin left($value: 10px) {
　　　　float: left;
　　　　margin-right: $value;
　　}
```

使用的时候，根据需要加入参数：

```
　　div {
　　　　@include left(20px);
　　}
```

#### 继承

```scss
.class1 {
　  border: 1px solid #ddd;
}
.class2 {
　  @extend .class1;
　  font-size:120%;
}
```
> 继承和mixin的差别：一个重用class类一个重用样式片段。

```
.class1,class2{
　  border: 1px solid #ddd;
}
.class2 {
　  font-size:120%;
}
```

> 这和less继承写法编译后的效果不太一样，这是sass和stylus优于less之处。less会存在冗余样式


#### 条件语句

```scss
@if lightness($color) > 30% {
　　background-color: #000;
} @else {
　　background-color: #fff;
}
```

#### 循环语句

> 这在一些复杂的aniamte动画中非常好用，比如需要在不同节点通过计算变幻不同的形态。

```scss
//for循环
@for $i from 1 to 10 {//不包含10
　.border-#{$i} {
　　    border: #{$i}px solid blue;
　}
}
@for $i from 1 through 10 {//包含10
　.border-#{$i} {
　　    border: #{$i}px solid blue;
　}
}
//while循环
$i: 6;
@while $i > 0 {
　.item-#{$i} { width: 2em * $i; }
　 $i: $i - 2;
}
//each命令　　
@each $member in a, b, c, d {
　.#{$member} {
　　　background-image: url("/image/#{$member}.jpg");
　}
}
```


#### 自定义函数

```scss
    //
　　@function double($n) {
　　　　@return $n * 2;
　　}
　　#sidebar {
　　　　width: double(5px);
　　}
```
#### 系统自带函数

    字符串函数（quote、unquote、To-upper-case、To-lower-case等）
    数字函数（ceil、floor、round、abs、min、max。random等）
    列表函数（length、nth、join、append、zip、index、Introspection函数集、map函数集）
    颜色函数（RGB函数集、HSL函数集、Opacity函数集）
    
    
```
lighten($color, 10%); /* 返回的颜色在$color基础上变亮10% */
darken($color, 10%);  /* 返回的颜色在$color基础上变暗10% */
saturate($color, 10%);   /* 返回的颜色在$color基础上饱和度增加10% */
desaturate($color, 10%); /* 返回的颜色在$color基础上饱和度减少10% */
grayscale($color);  /* 返回$color的灰度色*/
complement($color); /* 返回$color的补色 */
invert($color);     /* 返回$color的反相色 */
mix($color1, $color2, 50%); /* $color1 和 $color2 的 50% 混合色*/
```

    
####  @ 规则

-  @import：
> Sass 扩展了 CSS 的 @import 规则，让它能够引入 SCSS 和 Sass 文件。 所有引入的 SCSS 和 Sass 文件都会被合并并输出一个单一的 CSS 文件。 另外，被导入的文件中所定义的变量或 mixins 都可以在主文件中使用。

> Sass 会在当前目录下寻找其他 Sass 文件， 如果是 Rack、Rails 或 Merb 环境中则是 Sass 文件目录。 也可以通过 :load_paths 选项或者在命令行中使用 --load-path 选项来指定额外的搜索目录。

> @import 根据文件名引入。 默认情况下，它会寻找 Sass 文件并直接引入， 但是，在少数几种情况下，它会被编译成 CSS 的 @import 规则：

> 如果文件的扩展名是 .css。
如果文件名以 http:// 开头。
如果文件名是 url()。
如果 @import 包含了任何媒体查询（media queries）。
如果上述情况都没有出现，并且扩展名是 .scss 或 .sass， 该名称的 Sass 或 SCSS 文件就会被引入。 如果没有扩展名， Sass 将试着找出具有 .scss 或 .sass 扩展名的同名文件并将其引入。
    
-  @media：使用规则有点像冒泡，写在样式里面，编译后会放在外面，比如：

```scss
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
//输出
.sidebar {
  width: 300px; 
}
@media screen and (orientation: landscape) {
    .sidebar {
      width: 500px;
  } 
}
```

-  @extend：这个上面有提到，继承class时使用
-  @at-root：当你选择器嵌套多层之后，想让某个选择器跳出，此时就可以使用 @at-root。来看一个简单的示例：
    
```scss
.a {
  color: red;

  .b {
    color: orange;

    .c {
      color: yellow;

      @at-root .d {
        color: green;
      }
    }
  }  
}
//输出以下
.a {
  color: red;
}

.a .b {
  color: orange;
}

.a .b .c {
  color: yellow;
}

.d {
  color: green;
}
```

- @debug：代码在编译出错时，在命令终端会输出你设置的提示，比如：
    
```scss
@debug 10em + 12em;

//输出结果是：Line 1 DEBUG: 22em
```

- @warn  ：运用于逻辑判断里面报警信息
- @error ：运用于逻辑判断里面报错信息



综合以上：demo可以看到这些的应用

---


## 鸣谢

- [SASS用法指南](http://www.ruanyifeng.com/blog/2012/06/sass.html)
- [慕课网—sass进阶篇](http://www.imooc.com/learn/436)
- [关于sass那些事，sass用法](http://www.tuicool.com/articles/yIfmY3y)