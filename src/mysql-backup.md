---
title: MySQL 定时备份
description: 定时自动备份 MySQL 是刚需。
time: 2019-05-12
category: 数据库
tags: [MySQL, DevOps, Shell]
---

# MySQL定时备份

## 相关软件

- [mysqldump](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html)
- [gzip](http://www.gzip.org)

Windows下需要用到gzip压缩软件，当然也可用zip、7z、rar等软件代替。
gzip安装完成后，方便起见，请将gzip加入Windows的PATH环境变量。

## Windows

### 编写mysql-backup.bat

```powershell
rem 删除一周前的备份
forfiles /p "D:\Backup\databasename" /d -7 /c "cmd /c del /f @path"
rem 按日期命名备份并压缩
mysqldump -hhostname -uusername -ppassword --databases databasename | gzip > D:\Backup\databasename\databasename-%date:~0,10%.sql.gz
```

### 将mysql-backup.bat加入计划任务

## Linux

### 修改MySQL配置

```shell
vi /etc/my.cnf
```

```ini
# 加入 mysqldump 相关配置
[mysqldump]
user=user
password=password
```

### 编写备份脚本

```shell
#!/bin/bash
# 定义目录
dir=/path/to/backup/mysql/yourdatabase
# 删除一周前的备份
find ${dir} -ctime +7 -type f | xargs rm -rf
# 每日备份
rq=`date +%Y%m%d`
mysqldump --databases yourdatabase | gzip > ${dir}/yourdatabase-${rq}.sql.gz
```

### 修改文件属性为可执行

```shell
chmod +x /path/to/backmysql.sh
```

### 添加到`crontab`

```text
# mysql-backup.cron
# 每天3点钟执行备份
0 3 * * * bash /path/to/backmysql.sh
```

```shell
crontab mysql-backup.cron
crontab -l
# 0 3 * * * bash /path/to/backmysql.sh
```
