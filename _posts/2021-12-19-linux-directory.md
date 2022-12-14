---
title: Linux目录结构
time: 2021-12-19
layout: post
categories: Linux
tags: [CentOS, Linux]
---

Linux目录树的主要部分有`/`、`/usr`、`/var`、`/home`等等。
下面是一个典型的Linux目录结构如下：

## 目录结构

```
`-- /               # 根目录
  |-- efi             # EFI启动分区
  |-- boot            # 存放内核以及启动所需的文件等
  |-- etc             # 系统的配置文件（系统级）
  |   |-- rc            # 主启动文件，不要修改它
  |   |-- rc.conf       # 决定启动哪些系统自带的守护进程，不要修改它
  |   |-- rc.local      # 启动文件，覆盖rc
  |   |-- rc.conf.local # 系统启动时启动的守护进程，覆盖rc.conf
  |   |-- profile       # 全局登录启动文件
  |   `-- bashrc        # 全局bash启动文件
  |-- root            # 超级用户的主目录
  |   |-- .profile      # 超级用户登录启动文件
  |   `-- .bashrc       # 超级用bash启动文件
  |-- home            # 用户文件的主目录，用户数据存放在其主目录中
  |-- mnt             # 临时的映射文件系统，如挂载光驱到cdrom
  |-- dev             # 设备文件
  |-- bin             # 必要的命令
  |-- lib             # 必要的运行库
  |-- proc            # 存放存储进程和系统信息
  |-- sbin            # 系统管理程序
  |-- tmp             # 临时文件的目录
  |-- var             # 系统产生的经常变化的文件，例如日志文件、应用程序的数据文件等等
  `-- usr             # 一般不需要修改的应用程序，命令程序文件、程序库、手册和其它文档
    |-- etc             # 设置文件
    |-- systemd         # 系统守护进程
    |   `--system         # 系统服务
    |-- bin             # 增加的用户程序
    |-- lib             # 库文件
    |-- sbin            # 增加的管理程序
    |-- share           # 结构独立的数据
    |-- local           # 本地产生的增加的应用程序
    |-- x11             # X Window系统
    |-- dict            # 字典
    |-- doc             # 追加的文档
    |-- games           # 游戏和教学文件
    |-- info            # 存放GNU信息文件
    |-- man             # 在线帮助文件
    |-- include         #  C开发工具的头文件
    `-- src             # 程序的源代码
```

## 系统服务

系统服务目录位于：`/usr/lib/systemd/system`

## 启动顺序

Linux会按以下顺序读取4个环境配置文件：

1. `/etc/profile`：所有用户登录时均执行此脚本
2. `/etc/bashrc`：所有用户运行`bash shell`时均执行此脚本
3. `~/.profile`：当前户登录时执行此脚本
4. `~/.bashrc`：当前用户运行`bash shell`时执行此脚本

> 方跃明
> 2021-12-19
