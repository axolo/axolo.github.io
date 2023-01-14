---
title: MySQL on Docker
time: 2021-06-18
description: 把 MySQL 部署到 Docker 上，不失为一个很好的选择。
categories: [sql]
tags: [MySQL, Docker, Linux, Shell]
---

# MySQL on Docker

把 MySQL 部署到 Docker 上不失为一个很好的选择。

## Install

```shell
#!/bin/bash
#author: Yueming Fang

name=mysql

docker run -d --name ${name} \
-v /root/docker/${name}/conf:/etc/mysql/conf.d \
-v /root/docker/${name}/logs:/usr/local/mysql/logs \
-v /root/docker/${name}/data:/var/lib/mysql \
-v /etc/localtime:/etc/localtime \
-e MYSQL_ROOT_PASSWORD=password \
-p 3306:3306 \
mysql:latest
```

## Backup

```shell
#!/bin/bash
# Author: Yueming Fang
# Update: 2021-06-18
#
# Usage:
#
# 1. add user to mysql
#
# create user 'backup'@'localhost' identified by 'backup';
# grant all on *.* to 'backup'@'localhost';
#
# 2. my.cnf
#
# [mysqldump]
# user = backup
# password = backup
#
# 3. bash
#
# ./mysql-backup db1
#
# 4. crontab -e
#
# 0 1 * * * bash /root/bash/mysql-backup.sh db1

# define
set -ex
date=`date +%Y%m%d`
dir=/root/backup/mysql/${date}
db=$1

echo ${db} =\> ${dir} ...

# create dir
if [ ! -d ${dir} ]; then mkdir -p ${dir}; fi

# rm file of backup a week ago
# find ${dir} -ctime +7 -type f | xargs rm -rf

# rm dir of backup a week ago
find /root/backup/mysql/ -ctime +7 -type d | xargs rm -rf

# backup everyday
# db1 => /root/backup/mysql/20210314/db1-20210314.sql.gz
# db2 => /root/backup/mysql/20210314/db2-20210314.sql.gz
# ...
docker exec mysql mysqldump --skip-opt --databases ${db} | \
gzip > ${dir}/${db}-${date}.sql.gz
```

## CLI

```shell
docker exec -it mysql bash
```
