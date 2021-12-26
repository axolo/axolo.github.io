---
time: 2020-06-18
tags:
  - Linux
  - Shell
  - Docker
categories:
  - Linux
  - Shell
  - Docker
---

# Docker Portianer

## 安装

```bash
#!/bin/bash
#Author: Yueming Fang

docker volume create portainer_data

docker run -d -p 9000:9000 --name=portainer --restart=always \
-v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data \
portainer/portainer-ce
```

## 更新

```bash
docker container update protainer
```

## 修改端口

请避开常用端口，比如如Apache的FastCGI使用9000端口，若被占用，请指定参数重新安装。
或修改配置：

```bash
docker stop portainer-container-id # 停止容器
systemctl stop docker # 停止Docker服务
vim /var/lib/docker/containers/portainer-container-id/hostconfig.json # 修改并保存
vim /var/lib/docker/containers/portainer-container-id/config.v2.json # 修改并保存
systemctl start docker # 启动Docker服务
docker start portainer-container-id # 启动容器
```

比如：`HostPort`从`9000`改为`9900`

### hostconfig.json

```json
{
  "PortBindings":  {
    "9000/tcp":[{
      "HostIp":"",
      "HostPort":"9900"
    }]
  }
}
```

### config.v2.json

```json
{
  "Ports": {
    "9000/tcp": [{
      "HostIp": "0.0.0.0",
      "HostPort": "9900"
    }]
  }
}
```

## 后记

鉴于 [portainer] 更新频率相当高，欢迎访问官网，获得正确打开方式。

[portainer]: https://www.portainer.io/
