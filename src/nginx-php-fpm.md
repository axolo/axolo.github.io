---
title: nginx 配置 php-fpm
description: PHP-FPM（PHP FastCGI Process Manager），是用于管理 PHP 进程池的软件，用于接收和处理来自 Web 服务器（如Nginx）的请求。
time: 2017-01-01
categories: [php]
tags: [CentOS, nginx, PHP]
---

# nginx 配置 php-fpm

PHP-FPM（PHP FastCGI Process Manager），是用于管理 PHP 进程池的软件，用于接收和处理来自 Web 服务器（如Nginx）的请求。
PHP-FPM会创建一个主进程（通常以操作系统中根用户的身份运行），控制何时以及如何把 HTTP 请求转发给一个或多个子进程处理。
PHP-FPM 主进程还控制着什么时候创建和销毁 PHP 子进程。
PHP-FPM 进程池中的每个进程存在的时间都比单个 HTTP 请求长，可以处理10、50、100或更多的 HTTP 请求。

## 环境

CentOS 7

## 安装

### nginx

```shell
# https://www.nginx.com/resources/wiki/start/topics/tutorials/install/
vim /etc/yum.repos.d/nginx.repo # 具体见下文
yum install nginx
```

```ini
[nginx]
name=nginx repo
baseurl=https://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

## PHP

```shell
yum install php
vim /etc/php-fpm.d/www.conf # 具体见下文
php-fpm -R # 以root用户和守护进程方式启动php-fpm
```

```ini
# /etc/php-fpm.d/www.conf
user = root
group = root
```

## 配置

### Larvael

```nginx
# /etc/nginx/conf.d/php.conf
server {
  listen 80;
  server_name foo.com;

  root /path;
  index index.html index.htm index.php;

  location / {
    # try_files $uri $uri/ /index.php$is_args$args;
    try_files $uri $uri/ /index.php?$query_string;
  }

  location ~ \.php$ {
    try_files $uri = 404;
    fastcgi_pass 127.0.0.1:9000;
    # include fastcgi.conf;
    # fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
  }

  # deny apache .htaccess
  location ~ /\.ht {
    deny  all;
  }
}
```

### ThinkPHP

```nginx
# /etc/nginx/conf.d/php.conf
server {
  listen       80;
  server_name  xxxxxxx ;
  root  www;

  add_header X-Frame-Options "SAMEORIGIN";
  add_header X-XSS-Protection "1; mode=block";
  add_header X-Content-Type-Options "nosniff";

  charset utf-8;

  index index.html index.htm index.php;
  location / {
    try_files $uri $uri/ /index.php$uri;
  }

  location = /favicon.ico { access_log off; log_not_found off; }
  location = /robots.txt  { access_log off; log_not_found off; }

  error_page 404 /index.php;

  location ~ \.php(.*)$ {
    fastcgi_pass   127.0.0.1:9000;
    fastcgi_index index.php;
    fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
    fastcgi_param  PATH_INFO  $fastcgi_path_info;
    fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
    include fastcgi_params;
  }

  location ~ /\.(?!well-known).* {
    deny all;
  }
}
```

> 方跃明
> 2017-01-01
