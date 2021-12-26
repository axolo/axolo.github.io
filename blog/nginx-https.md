---
time: 2018-11-11
categories:
  - nginx
  - 运维
tags:
  - nginx
  - 运维
---
# NGiNX反向代理实现https

越来越多的应用需要https支持，因此支持https是大势所趋，也是必须的。
比如微信小程序的第三方数据接口必须是https协议的，Google将所有http协议默认为不安全协议。
所以开发上也需要对https进行测试，而https的前提就是需要SSL证书，哪怕是自建的。

参见：[自建证书配置HTTPS服务器](https://blog.csdn.net/pz0605/article/details/51954876)

```bash
# 生成私钥
openssl genrsa -out private.key 2048
# 生成证书请求
openssl req -new -key private.key -out server.csr
# 生成服务器的私钥，去除密钥口令
openssl rsa -in private.key -out server.key
# 使用私钥为证书请求签名，生成给服务器签署的证书，格式是x509的PEM格式
openssl x509 -req -in server.csr -out server.crt -signkey server.key -days 3650
```

经过以上步骤得到server.crt和server.key，拷贝到nginx的certs目录。
由于证书是自建的，一般情况下浏览器会给出不安全提示，仅供开发环境测试使用。

```ini
# nginx/conf/nginx.conf
server {
  # 开启SSL
  listen       443 ssl;
  server_name  localhost;                   # 外网域名
  # 加载证书，可用openssl自建证书
  ssl_certificate      ../certs/server.crt;
  ssl_certificate_key  ../certs/server.key;
  ssl_session_cache    shared:SSL:1m;
  ssl_session_timeout  5m;
  ssl_ciphers  HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers  on;
  # 反向代理
  location / {
    proxy_pass        http://localhost:7001;  # 内网应用网址
  }
}
```

虽然[egg-cluster](https://github.com/eggjs/egg-cluster)内置参数支持https，
但这终究不是API该做的事情，就跟OAuth不应该由API来做一样。
能者多劳就是个谬论，往往是无能者的无奈之举和推脱之辞。
https、cluster、负载均衡、反向代理这样的事，注定WEB服务器来做，是诸如NGiNX、Apache、IIS之类的天职。
