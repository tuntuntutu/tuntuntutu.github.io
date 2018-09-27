## 监测事件
当你需要监视某个DOM触发的事件时，也可以用到控制台。例如下面这些方法：
- monitorEvents($('selector')) 会监测某个元素上绑定的所有事件，一旦该元素的某个事件被触发就会在控制台里显示出来。
-  monitorEvents($('selector'),'eventName') 可以监听某个元素上绑定的具体事件。第二个参数代表事件类型的名称。例如 monitorEvents($('#firstName'),'click') 只监测ID为firstName的元素上的click事件。
- monitorEvents($('selector'),['eventName1','eventName3',….]) 同上。可以同时检测具体指定的多个事件类型。
- unmonitorEvents($('selector')) 用来停止对某个元素的事件监测。
  

## 页面可编辑

```
document.body.contentEditable=true
```

## 获取某个DOM元素绑定的事件

getEventListeners($('selector'))

## 列出某个元素的所有属性

dir($('selector')) 

## 获取最后计算结果的值

你可以把控制台当作计算器使用。当你在Chrome控制台里进行计算时，可以通过$_来获取最后的计算结果值，还是直接看例子吧：
```
2+3+4
9 //- The Answer of the SUM is 9

$_
9 // Gives the last Result

$_ * $_
81  // As the last Result was 9

Math.sqrt($_)
9 // As the last Result was 81

$_
9 // As the Last Result is 9
```
