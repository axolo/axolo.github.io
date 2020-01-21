# CentOS 快速安装常用开发工具

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
curl -sL https://rpm.nodesource.com/setup_11.x | bash -
```

## Yarn

```bash
# https://yarn.bootcss.com/docs/install/#centos-stable
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
```

## nginx

## Python

## Java

## Oracle

## Apache

## PHP
