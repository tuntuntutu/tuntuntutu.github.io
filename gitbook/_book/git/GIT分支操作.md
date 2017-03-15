### 新建分支

1. 新建

```
git checkout -b hotfix_deploy_20150417
git checkout -b newBrach origin/develop_new

```

2. 推送本地建的分支

```
git push -u origin hotfix_deploy_20150417 

```



### 删除分支


删除本地分支

```
git branch -d  feature_appActivity_20150423

```

- 删远程分支 （本地已有分支的情况）

```
git push origin --delete feature_appActivity_20150423

```


- 删远程分支 （本地没有对应分支的情况）

```
git branch -r -d origin/hotfix_20150320
git push origin :hotfix_20150320

```


- 本地和远程分支的删除同步
 
```
git fetch --prune

```

### 合并分支

> 比如，如果要将开发中的分支（develop），合并到稳定分支（master）

1.  首先切换的master分支：

```
git checkout master
```

2.  然后执行合并操作：

```
git merge origin/develop_new
```

- 直接合并远程分支

```
git pull origin master
```

### 本地提交

提交当前工作空间的修改内容 注意提交信息备注为任务编号
比如：

```
git commit -m '#KJDS-6057 推广标签页'
```

###  回退合并


```
 git  reset --r
```





