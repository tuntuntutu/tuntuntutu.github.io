### json转换


- eval方式：

```javascript
function strToJson(str){ 
    var json = eval('(' + str + ')'); //记得别忘了str两旁的小括号。 
    return json; 
}
```
> 恐怕这是最早的解析方式了，但是存在安全问题，所以不建议使用


- new Function构造方法

```javascript
function strToJson(str){ 
    var json = (new Function("return " + str))(); 
    return json; 
}
```


- 使用全局的JSON对象

```javascript
function strToJson(str){ 
    return JSON.parse(str); 
}
```
> 注意key的双引号

### 生成随机字符串

```js
Math.random().toString(10).substr(2)
//"5254885302232224"
Math.random().toString(10)
//"0.39243849973372624"
```
> toSting的参数为进制，取值2-36（0-9a-z）

### 禁止iframe嵌入页面

```js
if (window.location != window.parent.location){
    window.parent.location = window.location;
}
```

## XSS
- CSP（Content Security Policy），限制src加载域名
```html
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self' img.alicdn.com;">
```