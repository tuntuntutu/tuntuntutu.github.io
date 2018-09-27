JetBrain常见软件：webstorm，phpstorm，Intellij Idea等


## 插件

#### Key Promoter：

快捷键过渡，能够检测用户行为的频繁程度，询问是否生成快捷键或者提示已有的快捷键

#### Material Theme UI ：

 [Material Theme UI](https://github.com/mekwall/obsidian-color-schem  )

![image](https://note.youdao.com/yws/res/2943///note.youdao.com/src/WEBRESOURCE00d686a7e61e47b979bd032c592ffc1f)

#### liveEdit：

类似于f5web免刷新工具，需要chrome插件配合使用。在未打开调试工具的时候能够在控制台输出chrome的日志

#### CodeGlance：

创建一个当前文件的快捷导航条，减少鼠标滚轮的压力，方便快速定位

#### CMD support

支持右键运行bat文件，把常用的命令写成bat文件，右键直接执行方便快捷

> 还有类似markdown、vue、mongo plugin等等插件

## 个性配置

#### live template：

配置代码片段，快速生成业务代码，可配置参数占位，并且提供了如fileNameWithoutExtension(当前文件名称)等api加工占位参数，默认tab切换。

![image](https://note.youdao.com/yws/res/2971///note.youdao.com/src/WEBRESOURCE2b30253edb90988ae46031e061461d9d)

#### 字体偏好
Lucida Sans typewriter

#### css格式化风格
editor-> code Style -> CSS
勾选keep single-line blocks

#### 内存实时显示
appearance->appearance->勾上show memory indicator


#### 忽略文件或文件夹
Editor->File Types->ignore files and folders

增加开发的时候不关心的文件格式或者文件夹，比如.idea、node_modules

#### power save mode
在file菜单下，省电模式，可以减少ide对文件的语法、拼写、变量使用等的检查

#### code folding
Editor->General->Code Folding

勾上method bodies可以在打开文件的时候收起function的{}，快速了解整体文件

#### 支持es6

setting——Languages & frameworks——javascript

选择ECMAScript6

#### 内存设置
http://blog.csdn.net/lablenet/article/details/51149283

> tomcat有时会报内存溢出，解决方法是在tomcat配置面板中的VM options中加入：

```
-Xms512m -Xmx512m -XX:PermSize=512M -XX:MaxPermSize=1024m
```

#### autoPrefixer安装
 1. 全局安装autoprefixer

```
npm install autoprefixer -g
```

 2. 安装 postcss-cli

```
npm install postcss-cli -g
```

 3. 打开Webstorm设置，Preferences -> Tools -> External Tools ;配置如图
![enter description here][1]

```
//输入框内容
C:\Users\hzqiushengqiang\AppData\Roaming\npm\postcss.cmd

-u autoprefixer -o $FileDir$/$FileName$  $FileDir$/$FileName$

$ProjectFileDir$
```


4. 保存之后打开mcss文件或者css文件，输入

``` css
a{
    display: flex;
}
```

 5. 右键External Tools -> autoPrefixer，代码自动变成


``` css
a{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
```

#### 关闭safe write
setting->Appearance & Behavior -> System Setting -> Use 'safe write'(save changes to a temporary file first)

> 使用webpack的watch时如果开启会导致无法热替换

## 个性化配置迁移

#### win系统
在C:\Users\hzqiushengqiang（用户名）\.IntelliJIdea14(idea版本号)\config

config为个性化配置文件存储位置，复制覆盖新电脑的相同位置即可

## 快捷键设置

> 仅供参考，本人选择 OSX版本，以下为部分定制化修改

- duplicate lines or block: ctrl + D
- extend selection：  ctrl + W
- fix eslint problems： command + shift + O

# 传送门：


[官网速成](http://blogs.jetbrains.com/idea/tag/30-days-guide)

[IntelliJ IDEA 简体中文专题教程](https://github.com/judasn/IntelliJ-IDEA-Tutorial)

[IntelliJ IDEA 常用设置讲解](https://github.com/judasn/IntelliJ-IDEA-Tutorial/blob/master/settings-introduce-1.md)

  [1]: http://note.youdao.com/yws/api/group/12651257/noteresource/AAD03315703744D08F4C642D0B76A1CB/version/1296?method=get-resource