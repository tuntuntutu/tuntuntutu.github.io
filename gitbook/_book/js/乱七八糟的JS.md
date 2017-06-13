## 代码压缩 
- UglifyJS

## 后台模板
- PhantomJS
> 可以用于 页面自动化 ， 网络监测 ， 网页截屏 ，以及 无界面测试 等
- java: [freemarker手册](http://paopao.nosdn.127.net/df216716b1d04c2037163a803251eb49.pdf?download=FreeMarker_Manual_zh_CN.pdf)
- node: [nunjucks](https://mozilla.github.io/nunjucks/templating.html) 、ejs 、pug(jade)

## 抓包工具
- [fiddler插件，console](http://alloyteam.github.io/Rosin/)
- [Mac上的抓包工具Charles](https://www.charlesproxy.com/)

##  VR全景
- A-Frame

## es6转换器
 - babel [REPL在线编译器](https://babeljs.io/repl/)
 - Traceur [在线编辑器](http://google.github.io/traceur-compiler/demo/repl.html)

## 在线编辑演示
- [JsBin](http://jsbin.com/)
- [网易webcode](http://webcode.nie.netease.com/)
- [codeopen](http://codepen.io)

## 深拷贝方案
- immutable.js
- 
## node框架
- [koa](http://koa.bootcss.com/)
- express

## 前后端数据交互
- fetch
- [reqwest](https://github.com/ded/reqwest)
- vue-resource

## 数据校验

- [validator.js](https://github.com/jaywcjlove/validator.js)
 
## 删除package.json中未依赖的包
- [npm-check](https://github.com/dylang/npm-check)
- [depack](https://www.npmjs.com/package/depcheck)

## 非兼容复制到剪贴板
- [111](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)

## js代码转语法树
- [esprima](http://esprima.org/demo/parse.html)

## 代码高亮
- [highLight](http://blog.csdn.net/spy19881201/article/details/38866033)

## 免刷新
- [browsersync](http://www.browsersync.cn/)
```
npm install -g browser-sync

browser-sync start --server --files "css/*.css, *.html"

browser-sync start --proxy "localhost:3000" --files "../**/*.css, ../**/*.js, !../mock_server/**/*.*, ../**/*.html, ../**/*.ftl"
```

## 代码高亮
- npm highlight-loader

## chart
- echart/highchart

## VR
tree.js 、D3.js

## 桌面应用
- NW.js