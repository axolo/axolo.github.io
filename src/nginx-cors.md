---
title: nginx 同源调试
description: 开发调试时，对于多个不同源的独立前端应用，推荐使用 nginx 配置代理来实现同源调试。
time: 2023-09-11
category: 运维
tags: [nginx, cors]
---

# nginx 同源调试

> 方跃明 2023-09-11

由于同源策略的限制，跨源资源共享（[CORS]）默认禁止，比如A源禁止B源访问其`Cookie`。

此时，需要请求资源管理方修改策略允许访问，比如修改`Access-Control-Allow-Origin`。

或者，本地使用工具将资源代理为同源，比如`Vite`的[server.proxy]。

开发调试时，对于多个不同源的独立前端应用，推荐使用 [nginx] 配置代理来实现同源。

::: tip 本地HTTPS调试
除代理同源外，`nginx`配合`hosts`可以接管互联网域名，结合 SSL 证书配置，实现本地 HTTP 调试。
:::

## 目标

配置代理实现应用A和应用B同源，B应用可以读取A应用的`Cookie`，实现免登。

| 应用  |            代理前            |         代理后          |      说明      |
| ----- | ---------------------------- | ----------------------- | -------------- |
| 应用A | `http://localhost:8080/`     | `http://localhost/app/` | `/` => `/app/` |
| 应用B | `http://localhost:5173/cms/` | `http://localhost/cms/` |                |

## 配置

以下所有操作均在 Windows 11 环境下进行，其他操作系统请自行适配。

### vue

> 应用A的.env.development

```ini
VUE_APP_PUBLIC_PATH=./
```

> 应用B的.env.development

```ini
VITE_PUBLIC_PATH=/cms/
```

### nginx

> nginx/conf/nginx.conf

```nginx
http {
  # ...
  server {
    listen       80;
    server_name  localhost;
    location / {
      root   html;
      index  index.html index.htm;
      try_files $uri $uri/ /index.html;
    }
    # 引入同源调试配置
    include conf.d/location.conf;
    # ...
  }
}
```

> nginx/conf/conf.d/location.conf

```nginx
# 应用A
location /app/ {
  proxy_pass http://localhost:8080/;
}
# 应用B
location /cms/ {
  proxy_pass http://localhost:5173/cms/;
}
```

## 运行

```shell
cd 应用A根目录 && npm run serve   # 运行应用A（Vue CLI）
cd 应用B根目录 && npm run dev     # 运行应用B（Vite）
cd nginx根目录 && ./nginx         # 或双击nginx.exe
```

运行成功后，即可使用代理后的地址进行同源访问。


[CORS]: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS
[server.proxy]: https://cn.vitejs.dev/config/server-options.html#server-proxy
[nginx]: https://nginx.org/