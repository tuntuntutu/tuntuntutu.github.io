# jade学习笔记

> [官网](http://jade-lang.com/)

### 自闭合标签

img、meta、link 等自闭合会自动识别。可通过在标签后添加 / 强制输出自闭合元素

### tag标签
通过缩进关系，代替以往html的层级包含关系

### 属性

```
//jade => html
        input(type='text',class='form-control',value=title1)
        转换为
        <input type="text" value="MS Components" class="form-control">
      
//style属性也可以这么写
        input(style={color:red,'font-size':'12px'})
```

### 变量

```
//jade => html
        - var title = 'ms';//前面有一个‘-’容易漏了，要注意
        h1=title
        转换为
        <h1>ms</h1>
        
```
- 变量判断

```
//jade => html
        - var isActive = true;
        div(class=isActive ? 'active' : 'none')
        转换为
        <div class='active'></div>
```

### 文本
通过在文字前面添加竖线符号“|”可让 jade 原样输出内容
在html标签标记后面通过空格隔开文本内容
在html标签标记后通过添加英文句号“.”添加块级文本

### 注释
可以通过双斜杠进行注释，jade有3种注释方式，可以分别对应输出html注释、不输出html注释、块级html注释

### Filter
支持其他不同语法的代码插入。（需要安装有相应的包）
比如markdown

```
//jade => html
    :markdown
        # 111
        - 222
        - 333
    转换为
    <h1>111</h1>
    <ul>
    <li>222</li>
    <li>333</li>
    </ul>
```
### Mixins
```
//jade => html
    mixin pet(name)
        li.pet=name
    ul
        +pet('cat')
    转换为
    <ul>
        <li class='pet'>cat</li>
    </ul>
```

```
mixin link(href, name)
  //- attributes == {class: "btn"}
  a(class!=attributes.class, href=href)= name

+link('/foo', 'foo')(class="btn")
```

```
mixin list(id, ...items)
  ul(id=id)
    each item in items
      li= item

+list('my-list', 1, 2, 3, 4)
```

### Extends

```
//- layout.jade
doctype html
html
  head
    block title
      title Default title
  body
    block content
```
\+
```
//- index.jade
extends ./layout.jade

block title
  title Article Title

block content
  h1 My Article
```
=
```html
<!doctype html>
<html>
  <head>
    <title>Article Title</title>
  </head>
  <body>
    <h1>My Article</h1>
  </body>
</html>
```

### Include
可以include其他jade文件或者js或者css等文件，如

```
doctype html
html
  include ./includes/head.jade
  body
    h1 My Site
    p Welcome to my super lame site.
    include ./includes/foot.jade
```

```
//- index.jade
doctype html
html
  head
    style
      include style.css
  body
    h1 My Site
    p Welcome to my super lame site.
    script
      include script.js
```

```
//- index.jade
doctype html
html
  head
    title An Article
  body
    include:markdown article.md
```

### 注意点


```
block content
  div(class="g-head s-bgG")
  script(src='/dist/search/newComponent.js')
```

```
block content
  div(class="g-head s-bgG")
script(src='/dist/search/newComponent.js')
```

> 如果用的pug，那第二种写法会在pug中报错，得改成第一种写法
