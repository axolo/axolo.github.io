---
title: Linux 个人目录规划
description: 分门别类收纳整理是好习惯。
time: 2014-04-03
category: 运维
tags: [CentOS, Linux]
---

# Linux 个人目录规划

> 方跃明 2014-04-03

```
~
|-- .bashrc                                 # 启动配置文件
|-- bin                                     # 可执行脚本
|   |-- mysql-back.sh                       #   MySQL备份
|   `-- mysql57.sh                          #   MySQL 5.7 相关
|-- usr                                     # 应用目录
|   |-- mysql-5.7                           #   MySQL 5.7
|   |-- nginx                               #   NGiNX
|   |-- node                                #   Node.js
|   `-- redis                               #   Redis
|-- backup                                  # 备份目录
|   |-- mysql                               #   MySQL
|   |-- crontab                             #   自动任务
|   `-- certs                               #   证书
|-- projects                                # 项目
|   |-- github                              #   GitHUB
|   `-- coding                              #   Coding.net
|-- downloads                               # 下载
|   |-- git-2.9.5.tar                       #   Git
|   |-- node-v9.11.2-linux-x86.tar.gz       #   Node.js
|   |-- yarn-v1.12.3.tar.gz                 #   Yarn
|   `-- nginx-5.7.tar.gz                    #   NGiNX
|-- logs                                    # 日志
`-- tmp                                     # 临时文件
```
