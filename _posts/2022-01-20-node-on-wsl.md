---
title: 基于WSL搭建Node.js开发环境
time: 2022-01-20
layout: post
categories: Linux
tags: [Linux, Node.js]
---

适用于 Linux 的 Windows 子系统（WSL）可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境（包括大多数命令行工具、实用工具和应用程序），且不会产生传统虚拟机或双启动设置开销。

以下操作基于Windows 10 企业版 LTSC 21H2版，安装默认的WSL发行版（Ubuntu 20.04 LTS），配置Node.js开发环境。

## 安装WSL

可以选择以下任一方式进行安装。但由于Windows 10 企业版 LTSC默认未搭载[微软应用商店](#微软应用商店)（AppStore），且受限于网络环境，[命令行安装](#命令行安装)模式容易失败，推荐使用[下载安装](#下载安装)进行安装。

### 微软应用商店

搜索“Ubuntu”下载安装。

### 命令行安装

以管理员身份运行PowerShell使用以下命令安装。

```powershell
wsl --install -d Ubuntu
```

### 下载安装

[下载WSL发行版]，后以管理员身份运行PowerShell使用以下命令安装。

```powershell
Add-AppxPackage .\Ubuntu_2004.2020.424.0_x64.appx
```

> 设置默认版本为WSL 2

```powershell
wsl --set-default-version 2
```
## 使用WSL

  方式   |                         操作                           | 推荐
-------- | ------------------------------------------------------ | ----
VSCode   | 左下角 → 打开远程窗口 → New WSL Window use Distro... | 是
右键菜单 | Shift + 右键 → 在此处打开Linux Shell                  |
快捷方式 | 开始菜单 → Ubuntu LTS 快捷方式                        |

## 配置Ubuntu源

这里示例使用[Ubuntu阿里源]

```bash
vi /etc/apt/sources.list
```

替换默认的 http://archive.ubuntu.com/ 为 mirrors.aliyun.com

```
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
```

## 启用SSH登录

> 安装SSH服务

```bash
sudo passwd root                  # 修改root密码
sudo apt install openssh-server   # 安装SSH服务
```

> 启用root用户密码SSH登录

```ini
# vi /etc/ssh/sshd_config
PasswordAuthentication yes        # 开启密码验证登录
PermitRootLogin yes               # 开启root用户登录
```

> 启动SSH服务

```bash
sudo service ssh start
```

## 安装Node.js

可根据需要选择以下任一方式安装Node.js。若需要多版本切换，建议使用nvm方式安装。

微软官方亦有[WSL Node.js]安装文档，供参考。

### Node.js二进制包

参见[Node.js二进制包安装]。

```bash
wget https://nodejs.org/dist/v16.13.2/node-v16.13.2.tar.gz
sudo tar -xzvf node-v16.13.2.tar.gz -C /usr/local/lib/nodejs
vi ~/.profile # 添加到PATH，增加以下一行
# export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
. ~/.profile
node --version  # 安装成功输出Node.js版本
npm --version   # 安装成功输出NPM版本
```

### NodeSource

参见[NodeSource Ubuntu]安装。

```bash
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt install -y nodejs
```

### nvm

采用以下命令安装nvm：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

若以上方式失败，请下载发行包安装nvm：

```bash
wget https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.1.tar.gz
tar -xzvf v0.39.1.tar.gz
cd nvm-0.39.1
./install.sh
```

安装Node.js

```bash
nvm install 14.18.3   # 安装Node.js v14.18.3 LTS
```

## 安装Yarn

```bash
npm install -g yarn   # version 1.x
```

> 解决yarn node-sass失败

```bash
yarn add node-sass-install # 或
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```

## 安装git

```shell
apt install git # 安装
git config --global credential.helper store # 记住密码
```

## 安装nginx

```bash
sudo apt install nginx    # 安装nginx
sudo service nginx start  # 启动nginx代理服务
```

## 安装MySql

```bash
sudo apt install mysql    # 默认安装MySQL 8
sudo service mysql start  # 启动MySQL数据库
sudo mysql -uroot         # 首次访问务必root用户权限
```

## 安装Python2

WSL Ubuntu默认安装了Python3，如需使用Python2请使用以下命令安装：

```bash
sudo apt install python2
python2 --version # 安装成功输出Python2版本号
```

## 安装Java

需要使用Java环境的，建议安装OpenJDK和Maven。

```bash
sudo apt update
sudo apt install openjdk-jdk-11
java --version    # 安装成功输出Java版本号
```

## Maven

### 安装Maven

```
sudo apt install maven
mvn --version     # 安装成功输出Maven版本号
```

### 配置仓库地址

Maven安装目录`conf/settings.xml`或当前用户`.m2/setttings.xml`

```xml
<mirrors>
  <mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
  </mirror>
</mirrors>
```

### Spring Boot项目相关命令

```bash
cd your-project
mvn spring-boot:run # 开发
mvn clean           # 清理
mvn compile         # 编译
mvn package         # 打包
mvn install         # 安装
```

> 方跃明
> 2022-01-20


[下载WSL发行版]: https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#downloading-distributions
[Ubuntu阿里源]: https://developer.aliyun.com/mirror/ubuntu
[NodeSource Ubuntu]: https://github.com/nodesource/distributions#deb
[WSL Node.js]: https://docs.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl
[Node.js二进制包安装]: https://github.com/nodejs/help/wiki/Installation
