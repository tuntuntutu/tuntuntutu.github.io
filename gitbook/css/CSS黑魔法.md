### 使用户不能选中文字等


```css
-webkit-user-select:none;
```

### 文字模糊

```css
-webkit-font-smoothing：none;
//antialiased：变得非常平滑等共六个属性
```
或者

```css
p {
    color: transparent;
    text-shadow: #111 0 0 5px;
}
```


 >注：-webkit-font-smoothing在MacOS上才有效果

### -webkit-tap-highlight-color

苹果手持设备的浏览器属性，意思是：点击它，它就会出现一个半透明的灰色背景。webkit是苹果浏览器引擎，tap点击，highlight背景高亮，color颜色，颜色用数值调节。

### iconFont


```css
@font-face {
    font-family: 'emotion';
    src: url('emotion.eot'); /* IE9*/
    src: url('emotion.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('emotion.woff') format('woff'), /* chrome、firefox */
    url('emotion.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('emotion.svg#svgFontName') format('svg'); /*  iOS 4.1- */
}
```


### checkbox的三种属性

第一种和第三种很常见，而且它们是可以使用HTML来设置的，就是说我们可以把CheckBox的初始状态通过一个叫checked的html元素的属性来确定。我们这里要说的Indeterminate状态虽然在IE4.0就开始支持了，可是却没有html元素属性来设置其值，而只能使用脚本来设置其Indeterminate状态。 
    比如使用JavaScript脚本(indeterminate默认是false)：
    

```js
chkb.indeterminate = true;
chkb.indeterminate = false;
```


> 注意：CheckBox的indeterminate是一个独立的属性，和CheckBox的checked、status的取值无关，也就是说它只会影响CheckBox的外观显示，我们仍然可以正常的使用脚本读取checked和status的值。

### 控制边框

```css
.box{ border-radius:5px 5px 3px 2px / 5px 5px 1px 3px; }
```

> 斜线前面的影响的是水平方向，斜线后面影响的是垂直方向，各个数字就分别代表四个不一样的方向。

### outline-offset

```css
5px 5px 19px 2px / 5px 5px 50px 3px
outline-offset
input{ outline : none; }
input:focus { outline : none; }
input{ outline-offset:4px; }
```

### 特殊符号class类名
```
♥★ 
.♥ { color: hotpink; } 
.★ { color: yellow; }
<div class="♥ ★"></div>
```
### 选中ol下面的第七到第十四个li元素

```css
nth-child
ol li:nth-child(n+7):nth-child(-n+14) { background: lightpink; } 
/** Or Safari Way **/
ol li:nth-child(-n+14):nth-child(n+7) { background: lightpink; }
```
### 修改下拉框样式


```css
::selection
{
color:#ff0000;
}

::-moz-selection
{
color:#ff0000;
}
```

### 滚动条样式

```css
::-webkit-scrollbar {
  width: 10px;
  background-color: #ccc;
}
::-webkit-scrollbar-track {
  background-color: #ccc;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #fff;
  background-image: -webkit-gradient(linear, 40% 0%, 75% 84%, from(#19911d), color-stop(0.6, #54de5d), to(#4d9c41));
  background-image: -webkit-gradient(linear, 40% 0%, 75% 84%, from(#19911d), color-stop(0.6, #54de5d), to(#4d9c41));
  background-image: -webkit-gradient(linear, 40% 0%, 75% 84%, from(#19911d), color-stop(0.6, #54de5d), to(#4d9c41));
  background-image: -webkit-gradient(linear, 40% 0%, 75% 84%, from(#19911d), color-stop(0.6, #54de5d), to(#4d9c41));
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
```

### 隐藏页面鼠标

```css
*{
    cursor: none!important;
}
```

### 巧用padding-bottom
通过设置父级窗口的 padding-bottom 可以达到让容器保持一定的长度比的目的，这在响应式页面设计中比较有用，能够保持元素不变形。

### CSS中也可以做简单运算

```css
.container{
	background-position: calc(100% - 50px) calc(100% - 20px);
}
```

### 实时编辑css

```html
<!DOCTYPE html>
<html>
    <body>
        <style style="display:block" contentEditable>
        	body { color: blue }
        </style>
    </body>
</html>
```

### 多重边框

```css
div {
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);
    height: 200px;
    margin: 50px auto;
    width: 400px
}
```


