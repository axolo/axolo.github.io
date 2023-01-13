---
title: CentOS快速搭建开发运行环境
description: CentOS 快速安装 Docker、MySQL、nginx、Node.js，搭建开发运行环境。
time: 2020-05-11
categories: Linux
tags: [CentOS, Linux]
---

# CentOS快速安装常用开发工具

> CentOS快速安装常用开发工具

## Docker

```bash
# https://docs.docker.com/engine/install/centos/
yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install docker-ce docker-ce-cli containerd.io
```

## MySQL 8.x

```bash
# 安装官方仓库
yum localinstall https://repo.mysql.com/mysql80-community-release-el7-1.noarch.rpm
# 安装 MySQL Server
yum install mysql-community-server
# 启动MySQL
systemctl start mysqld
# 检查服务状态
systemctl status mysqld
# 查看初始密码
grep 'temporary password' /var/log/mysqld.log
mysql -uroot -p
# 输入密码进入mysql命令行
```

## Node.js

```bash
# https://github.com/nodesource/distributions#rpm
curl -sL https://rpm.nodesource.com/setup_16.x | bash -
```

## Yarn

```bash
# https://yarn.bootcss.com/docs/install/#centos-stable
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
```

## Git

```bash
# https://stackoverflow.com/questions/21820715/how-to-install-latest-version-of-git-on-centos-7-x-6-x
yum install http://opensource.wandisco.com/centos/7/git/x86_64/wandisco-git-release-7-2.noarch.rpm
yum install git
```

## NGiNX

```bash
# https://www.nginx.com/resources/wiki/start/topics/tutorials/install/
vim /etc/yum.repos.d/nginx.repo
```

```ini
[nginx]
name=nginx repo
baseurl=https://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

> 方跃明
> 2020-05-11
