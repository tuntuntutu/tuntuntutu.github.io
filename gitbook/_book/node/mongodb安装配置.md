[下载地址](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.2.9-signed.msi/download)

[文档地址](http://www.runoob.com/mongodb/) 

#### 可视化工具
* [Robomongo](https://robomongo.org/)（最新版本收费）
* [mongodbvue](http://www.mongovue.com/)（收费）
* [MongoBooster](http://www.softpedia.com/get/Internet/Servers/Database-Utils/MongoBooster.shtml)
* ideal插件

#### 安装

 * 傻瓜式安装
 * 在根目录新建一个data文件夹作为mongodb的数据库文件存放地址
 * /data中新建一个db一个log
 * 切换到mongodb文件安装目录的bin文件夹下

#### 执行命令启动mongodb

```
mongod.exe --dbpath c:\data\db --logpath "D:\data\log\mongdb.log" --logappend

```

*  或者注册到windows服务中（可以避免出现两个cmd窗口的问题）
    
    
```
mongod.exe --bind_ip yourIPadress --logpath "C:\data\dbConf\mongodb.log"   --logappend --dbpath "C:\data\db" --port yourPortNumber --serviceName "YourServiceName" --serviceDisplayName "YourServiceName" --install

```

参数 | 描述
---|---
bind_ip | 绑定服务IP，若绑定127.0.0.1，则只能本机访问，不指定默认本地所有IP
logpath | 定MongoDB日志文件，注意是指定文件不是目录
logappend | 使用追加的方式写日志
dbpath | 指定数据库路径
port | 指定服务端口号，默认端口27017
serviceName | 指定服务名称
serviceDisplayName | 指定服务名称，有多个mongodb服务时执行。
install | 指定作为一个Windows服务安装。

启动windows的services.msc,启动对应服务。

* 新建一个bat批处理文件（内容如下），每次只要双击它就可以操作mongdb了
```
c:
cd C:\Program Files\MongoDB\bin
mongo

```
#### 接下来把bin目录写到系统变量里面：

1. 进入到高级系统设置；
2. 进入到环境变量；
3. 在系统变量里面找到变量名为Path双击进入；
4. 在变量值的结尾处加入;C:\Program Files\MongoDB\bin（这个就是mongo安装目录的bin目录， win10以下 别漏掉了分号），保存；
5. 再新建一个CMD，输入mongo试试。

#### express+mongodb

[express+mongodb](https://github.com/YangZhouChaoFan/admin4n/tree/master/server)


    

