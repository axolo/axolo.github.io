---
time: 2022-01-20
tags:
  - Linux
categories:
  - Linux
---

# Windows Linux 子系统体验

以下操作基于Windows 10 企业版 LTSC 21H2版，WSL发行版默认安装Ubuntu。

## 安装

由于Windows 10 企业版 LTSC默认没有安装微软应用商店（AppStore），所以需要通过命令行来安装。

受限于网络环境，当[命令行安装](#命令行安装)模式失败时请[下载安装](#下载安装)。

### 命令行安装

```powershell
wsl --install -d Ubuntu
```

### 下载安装

1. [下载发行版]
2. 安装

```powershell
Add-AppxPackage .\Ubuntu_2004.2020.424.0_x64.appx
```

[下载发行版]: https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#downloading-distributions

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

## 使用

可以使用快捷方式或鼠标右键方式（强烈推荐）

## 快捷方式

开始菜单 → Ubuntu LTS 快捷方式

## 右键菜单

Shift + 右键 → 在此处打开Linux Shell

> 方跃明
> 2022-01-20
