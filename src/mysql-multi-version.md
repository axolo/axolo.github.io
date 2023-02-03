---
title: MySQL 多版本单服务器共存
description: 同一台下 MySQL 7 和 MySQL 8 共存
time: 2019-05-12
category: 数据库
tags: [MySQL, Linux, CentOS]
---

# MySQL多版本单服务器共存

## MySQL 8

常规安装 MySQL 8

## MySQL 5.7

### 依赖

```shell
# 通常依赖早已被安装，可事先使用`yum list installed | gerp -E "make|gcc-c++..."`查询
yum -y install make gcc-c++ cmake bison-devel ncurses ncurses-devel libaio-devel
```

### 下载

```shell
# 由于服务器环境是CentOS i386，选择5.7版本的Linux Generic的i686版本
wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.25-linux-glibc2.12-i686.tar.gz
```

### 解压

```shell
# 解压到`/opt`目录
tar -xzvf mysql-5.7.25-linux-glibc2.12-i686.tar.gz -C /opt
```

### 目录

```
/opt/mysql-5.7.25-linux-glibc2.12-i686
|-- bin                 # 命令
|-- data                # 数据
|-- log                 # 日志
|-- support-files       # 支持
|   `-- mysql.server    # 服务
|-- mysql.sock          # 端口
`-- my.cnf              # 配置
```

### 配置

```ini
# my.cnf
# 为了防止乱码建议设定默认编码格式为：utf8mb4
[mysqld]
port=3307
basedir=/opt/mysql-5.7.25-linux-glibc2.12-i686
datadir=/opt/mysql-5.7.25-linux-glibc2.12-i686/data
socket=/opt/mysql-5.7.25-linux-glibc2.12-i686/mysql.sock
log-error=/opt/mysql-5.7.25-linux-glibc2.12-i686/log/error.log
default-character-set=utf8mb4
[client]
port=3307
socket=/opt/mysql-5.7.25-linux-glibc2.12-i686/mysql.sock
default-character-set=utf8mb4
[mysql]
default-character-set=utf8mb4
```

### 权限

```shell
groupadd mysql
useradd mysql -g mysql
chown -R mysql:mysql /opt/mysql-5.7.25-linux-glibc2.12-i686/
chmod -R 755 /opt/mysql-5.7.25-linux-glibc2.12-i686/
```

### 服务

```ini
# support-files/mysql.server 对应的部分修改为
basedir=/opt/mysql-5.7.25-linux-glibc2.12-i686
datadir=/opt/mysql-5.7.25-linux-glibc2.12-i686/data
conf=/opt/mysql-5.7.25-linux-glibc2.12-i686/etc/my.cnf
```

### 初始化

```shell
./bin/mysqld --defaults-file=my.cnf --initialize --user=mysql &
# 请务必留意输出的`temporary password`部分，获得`root`初始密码
./support-files/mysql.server start
```

### 命令行

```shell
./bin/mysql --socket=mysql.sock --port=3307 -u root -p
# 输入获得的初始密码，以root身份进入系统，进行必要的初期操作
# 建议开启高强度密码验证插件：
# install plugin validate_password soname 'validate_password.so'
```

### 脚本

```shell
#!/bin/bash
mysql=/opt/mysql-5.7.25-linux-glibc2.12-i686
if [[ $1 == '--help' ]];then                # 帮助
  echo -e "${0} [start | stop | --help]"
elif [[ $1 == 'start' ]];then               # 启动服务器
  ${mysql}/bin/mysqld --defaults-file=${mysql}/my.cnf & \
  ${mysql}/support-files/mysql.server start
elif [[ $1 == 'stop' ]];then                # 停止服务器
  ${mysql}/bin/mysqladmin --socket=${mysql}/mysql.sock --port=3307 shutdown -uroot -ppass
else                                        # 进入命令行
  ${mysql}/bin/mysql --socket=${mysql}/mysql.sock --port=3307 -uroot -ppass
fi
```
