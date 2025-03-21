---
title: Python 起步
description: 关于 Python 的正确起步方式。
time: 2025-03-21
category: 后端
tags: [Python]
---

# Python 起步

关于 Python 的正确起步方式。

## Ubuntu

以`bash`为例：

```bash
# 安装 python3 和 venv
apt install python3 python3-venv
# 设置 python3 为默认 python
update-alternatives --install /usr/bin/python python /usr/bin/python3 150
# 设置 pip 源，配置文件位于：~/.config/pip/pip.conf
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 创建虚拟环境目录，推荐在用户文件夹下
mkdir -p ~/.python && cd ~/.python
# 创建虚拟环境
python -m venv dev
# 激活虚拟环境
source ./dev/bin/activate
# 退出虚拟环境
./dev/bin/deactivate
```

## Windows

以`PowerShell`为例：

```powershell
# 安装 python3（自带 pip 和 venv），若下载安装请启用：Disable path length limit
winget install Python.Python.3.13
# 设置 pip 源，配置文件位于：$env:USERPROFILE\AppData\Roaming\pip\pip.ini
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 创建虚拟环境目录，推荐在用户文件夹下
cd $env:USERPROFILE\AppData\Roaming ; md python ; cd python
# 创建虚拟环境
python -m venv dev
# 激活虚拟环境
.\dev\Scripts\Activate.ps1
# 退出虚拟环境
.\dev\Scripts\deactivate.bat
```
