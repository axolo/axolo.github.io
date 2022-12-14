---
title: Git subtree
time: 2020-08-20
layout: post
categories: Git
tags: [Git]
---

和`Git Submodule`一样，`Git Subtree`也是多人协作开发利器。

- [官方文档](https://git-scm.com/book/zh/v2)
- [Git教程](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- [简明教程](https://segmentfault.com/a/1190000012002151)
- [双向同步](https://segmentfault.com/a/1190000003969060)

**注意：**

- 若子分支为主分支一个目录，请勿同名
- 若子分支污染主分支，请注意同步更新避免冲突
- 若子分支为独立分支，不污染主分支，切换以操作不同分支

## 新建并关联子分支

```bash
# 新建空分支并提交到远程
git checkout --orphan subtree-branch
git rm -rf .
git add --all
git commit -m "chore: init subtree"
git push --set-upstream origin subtree-branch
# 切换到主分支并关联子分支
git checkout master
git branch -d subtree-branch
git subtree add --prefix=subtree-branch origin subtree-branch
```

## 若对应子分支已存在

```bash
# 克隆项目
git clone https://github.com/axolo/your-project
# 关联并拉取子分支
# git subtree pull -P <prefix> <repository> <ref>
git subtree pull --prefix=www origin gh-pages
```

## 主分支操作同步到子分支

```bash
# 主分支正常操作：改动www目录下的内容
git add --all
git commit -m "modify subtree"
git push
# 提交到子分支
git subtree push --prefix=www origin gh-pages
# 拉取子分支
git subtree pull --prefix=www origin gh-pages
# 在子分支生成新分支hotfix-001
git subtree push --prefix=www origin hotfix-001
```

## 子分支独立操作

```bash
# 切换到子分支
git checkout subtree-branch
# working in subtree
git add --all
git commit -m "modify"
git push
```
> 方跃明
> 2020-08-20
