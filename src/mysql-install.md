---
title: CentOS 安装 MySQL 8
description: CentOS 下快速安装配置 MySQL 8
time: 2019-05-11
category: 数据库
tags: [CentOS, MySQL, Linux]
---

# CentOS 安装 MySQL 8

## 一、安装并登录

```shell
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

## 二、修改密码策略（可选）

```sql
set global validate_password.policy=0;
set global validate_password.length=4;
```

## 三、修改密码

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
```

## 四、添加用户并授权

```sql
CREATE USER 'newuser'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
-- mysql_native_password 为传统加密方式，适配各种连接器
GRANT ALL ON newuser_db.* TO 'newuser'@'%';
FLUSH PRIVILEGES;
```

## 五、其他配置

1. 设置SELinux为disabled，并生效
2. 开启防火墙mysqld对应端口

## 六、忘记密码

### 1. 设置skip-grant-tables

```shell
vi /etc/my.cnf
# 在 [mysqld] 段添加 skip-grant-tables，并重启mysql
systemctl restart mysqld
```

### 2. 清空密码

```sql
USE mysql;
UPDATE user SET authentication_string='' WHERE user='root';
```

### 3. 空密码登录

```shell
vi /etc/my.cnf
# 修改配置，注释刚刚添加的部分 # skip-grant-tables
# 重启MySQL
systemctl restart mysqld
mysql -uroot -p
# 空密码进入 mysql 命令行后使用 ALTER USER 修改密码
```

## 七、日常备份

### 1. 编写Shell脚本：mysql-backup.sh

```shell
#!/bin/bash
day=`date +%Y%m%d`
dir=$HOME/mysql-backup
find $dir -ctime +7 -type f | xargs rm -rf
mysqldump -B sys -uroot -ppassword | gzip > $dir/sys-$day.sql.gz
```

### 2. 赋予执行权限

```shell
chmod +x mysql-backup.sh
```

### 3. 添加到`/etc/crontab`，每天3点钟执行备份

```text
0 3 * * * bash /path/to/mysql-backup.sh
```

#### 4. 重启crond生效

```shell
/etc/rc.d/init.d/crond restart
```
