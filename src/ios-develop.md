---
title: iOS 开发环境搭建
description: 快速搭建 iOS 开发环境
time: 2020-01-01
category: 前端
tags: [iOS]
---

# iOS开发环境搭建

> 方跃明 2020-01-01

快速搭建 iOS 开发环境

## 全局

```shell
xcode-select --install # 安装xcode开发依赖
gcc --version # 出现版本号表示成功
sudo gem install cocoapods # 安装依赖管理工具
pod --version # 出现版本号表示成功
pod setup # 设置pod
# 安装brew，此处使用国内源，参见：https://brew.sh
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
brew --version # 出现版本号表示成功
brew install git # 安装git
git --version # 出现版本号表示成功
```

## 项目

```shell
cd ~/Projects/your-project
# 建议将Podfile的源更换为国内源后执行安装
# source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
pod install
```