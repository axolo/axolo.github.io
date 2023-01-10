---
title: nginx 配置 php-fpm
time: 2017-01-01
categories: PHP
tags: [CentOS, nginx, PHP]
---

# nginx 配置 php-fpm

## 环境

CentOS 7

## 安装

### nginx

```bash
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

```bash
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
