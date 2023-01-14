---
title: localhost 开启 HTTPS
description: 如何给 localhost 开启 https ？
time: 2020-03-28
categories: [web]
tags: [HTTP, WEB]
---

# localhost开启HTTPS

以下操作均处于Windows环境

## 证书工具

- [Go语言环境](https://golang.org/dl/)
- [minica](https://github.com/jsha/minica)

下载并安装Go语言安装包，编译`minica`为可执行文件：`minica.exe`

```shell
git clone https://github.com/jsha/minica.git
cd minica
go build
```

### 生成证书

```shell
# 若根证书存在，同时生成根证书和叶证书（localhost）
./minica --domains localhost
# 若根证书存在，为其生成叶证书（localhost.com）
./minica --domains localhost.com
# 执行成功localhost.com目录下有对应证书
```

```
|-- minica.exe          # 可执行文件
|-- minica.pem          # minica根证书
|-- minica-key.pem      # minica根证书私钥
|-- localhost           # 域名：localhost
|   |-- cert.pem        #   域名叶证书
|   `-- key.pem         #   域名叶证书私钥
`-- localhost.com       # 域名：localhost.com
    |-- cert.pem        #   域名叶证书
    `-- key.pem         #   域名叶证书私钥
```

## 信任根证书

- 生成：进入[腾讯云控制台SSL管理]，上传证书，将根证书和根证书私钥填入，生成证书
- 导入：下载此证书包，打开IIS目录，双击pfx证书填入对应导入密码，导入
- 信任：存储位置选择“受信任的根证书颁发机构”

> 阿里云可以导入本地证书，生成可导入格式，但无法被下载

## 配置HTTPS

以http-server为例，将叶证书拷贝到对应目录，如`certs/localhost`下，以HTTPS协议运行。

```shell
http-server -S -C ./certs/localhost/cert.pem -K ./certs/localhost/key.pem
# Starting up http-server, serving ./ through https
# Available on: https://127.0.0.1:8080
```

访问 `https://localhost:8080` ，成功判定如下：
显示连接安全、证书有效、证书路径localhost在minica下、该证书没有问题。

## 局域网客户端

- 参照[生成证书](#生成证书)**再次**生成`localhost.com`的叶证书
- 在需要的局域网客户端上导入并信任根证书
- 需改`hosts`将`lcoalhost.com`指向对应IP
- 局域网客户端访问`https://localhost.com:8080`

[腾讯云控制台SSL管理]: https://console.cloud.tencent.com/ssl

> 方跃明
> 2020-03-28
