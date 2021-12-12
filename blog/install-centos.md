---
time: 2019-05-09
tags:
  - CentOS
  - Linux
categories:
  - CentOS
  - Linux
---

# CentOS 8 安装

## 准备启动介质

### 下载启动镜像

选择速度快的一个镜像地址：<http://mirrors.aliyun.com/centos/8/isos/x86_64/>

- boot: 网络启动镜像（仅含必要的启动文件）
- dvd: 本地启动镜像（含标准组件）

### 制作启动U盘

1. `UltraISO`或`UNetbootin`等启动制作软件或使用命令行制作
2. 一个足够容量的空U盘（U盘原有文件制作时被清空且不可被恢复）
3. 用`UltraISO`打开下载完成的iso，点击菜单“启动 -> 写入硬盘镜像”
4. 硬盘驱动器：U盘，写入方式：RAW，点击“写入”，等待完成

### 安装CentOS

使用制作完成的启动U盘启动电脑，进入安装界面。

- 分区：一般分
