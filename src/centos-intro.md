---
title: CentOS 入坑指南
description: 一入 CentOS 深似海，从此再也爬不出来。
time: 2019-05-09
category: 运维
tags: [CentOS, Linux]
---

# CentOS入坑指南

一入 CentOS 深似海，从此再也爬不出来。

## 基本命令

若没有命令行基础，操作 Linux 将寸步难行。
最好的学习命令的方法是使用`--help`参数查看在线帮助。

|                 命令                  |                                 说明                                  |
| ------------------------------------- | --------------------------------------------------------------------- |
| `help`                                | 系统帮助                                                              |
| `ls --help`                           | ls命令的系统帮助                                                      |
| `ls -la`                              | 格式化列出当前目录下所有文件（含隐藏文件）                            |
| `ls | grep  'user'`                   | 搜索ls命令输出匹配user的部分                                          |
| `ll`                                  | 即`ls -l`，通常情况下ll是Linux的一个别名，使用频繁的命令建议定义别名  |
| `find -name 'user'`                   | 查找当前目录及子目录含有user的文件和目录                              |
| `grep 'user' file`                    | 查找file文件包含user的内容                                            |
| `cd ~`                                | 切换到用户主目录                                                      |
| `mkdir dir`                           | 在当前目录下新建dir目录                                               |
| `rm file`                             | 删除当前目录下的file文件                                              |
| `rm -rf dir`                          | 强制删除dir目录且不提示（**传说中的从删库到跑路**）                   |
| `cp file1 file2`                      | 将文件file1复制到file2                                                |
| `cp -r dir1 dir2`                     | 将目录dir1复制到dir2                                                  |
| `mv file1 file2`                      | 将file1重命名为file2；若file2是已存在目录，则将file1移动到file2目录下 |
| `ln -s file link`                     | 创建file的符号连接link                                                |
| `cat >> file <<EOF`                   | 将标准输入写入file并创建（换行输入EOF结束）                           |
| `cat file | more`                     | 查看文件                                                              |
| `ps`                                  | 显示当前活动进程                                                      |
| `kill pid`                            | 杀掉id为pid的进程                                                     |
| `chmod -R 755 web`                    | 将web目录及子目录设置读写权限为755                                    |
| `tar -zxf file.tar.gz -C ~`           | 将file.tar.gz解压到用户主目录                                         |
| `df`                                  | 显示磁盘占用情况                                                      |
| `free`                                | 显示内存及交换器占用情况                                              |
| `rpm -ivh file.rpm`                   | 全新安装file.rpm                                                      |
| `./configure && make && make install` | 编译源码并安装                                                        |
| `ping host`                           | 查询到host主机的网络连接情况                                          |
| `wget url-to-file/file`               | 下载`url-to-file/file`到当前目录                                      |
| `exit`                                | 注销当前会话                                                          |

## 网络配置

一般情况下，Linux安装完成后第一项任务是将其联网。

```shell
# 默认情况第一张网卡为ifcfg-eth0，不排除被命名成其他名称的可能
# 一般情况下只需要指定IPADDR、NETMASK、GATEWAY和DNS1、DNS2即可
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

```ini
TYPE=Ethernet
BOOTPROTO=static
IPADDR=192.168.20.25
NETMASK=255.255.252.0
GATEWAY=192.168.20.1
DNS1=8.8.8.8
DNS2=8.8.4.4
NETWORK=192.168.20.0
BROADCAST=192.168.23.255
DEFROUTE=yes
PEERDNS=no
PEERROUTES=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
IPV6_FAILURE_FATAL=no
NAME=eth0
UUID=5b0a7d76-1602-4e19-aee6-29f57618ca01
ONBOOT=no
```

```shell
vi /etc/resolv.conf       # 配置DNS
```

```ini
# /etc/resolv.conf
nameserver 114.114.114.114
nameserver 8.8.8.8
```

```shell
service network restart     # 重启网络服务使其生效
```

|   参数    | 可选值 |                     说明                      |
| --------- | ------ | --------------------------------------------- |
| DEVICE    | name   | 设备名称通常是eth0                            |
| BOOTPROTO | proto  | proto为none、static、dhcp、bootp，IP分配协议  |
| IPADDR    | addr   | IP地址                                        |
| NETMASK   | mask   | 子网掩码                                      |
| GATEWAY   | addr   | 网关地址                                      |
| DNS1      | dns    | DNS1服务器IP                                  |
| DNS2      | dns    | DNS2服务器IP                                  |
| NETWORK   | addr   | 所属网络                                      |
| BROADCAST | addr   | 广播地址                                      |
| HWADDR    | mac    | MAC地址                                       |
| ONBOOT    | answer | answer为yes或no，是否系统启动时激活连接       |
| USERCTL   | answer | answer为yes或no，非root用户是否可以控制该设备 |
| PEERDNS   | answer | answer为yes或no，是否重写/etc/resolv.conf     |

## 安装EPEL和net-tools

EPEL (Extra Packages for Enterprise Linux)是基于Fedora的一个项目，为“红帽系”的操作系统提供额外的软件包，适用于RHEL、CentOS和Fedora.
CentOS最小安装默认不带基本的网络命令，需要手动安装net-tools。

```shell
yum install epel-release
yum install net-tools
```

## 开启SSH

Linux主机一般通过SSH来远程管理

```shell
# 除非自定义取消，CentOS默认安装包含了OpenSSH Server
yum list installed | grep openssh-server
# 若此处没有openssh-server信息，请务必安装
yum install openssh-server
```

## 防火墙firewalld

CentOS 7 使用新的防火墙系统firewalld，大多数服务需要开启防火墙端口才能被正确访问。

```shell
## 开启80端口
firewall-cmd --zone=public --add-port=80/tcp --permanent  # success
firewall-cmd --reload
```

|       参数        |              解释               |
| ----------------- | ------------------------------- |
| --zone            | 作用域                          |
| --add-port=80/tcp | 添加端口，格式为：端口/通讯协议 |
| --permanent       | 永久生效，没有此参数重启后失效  |

```shell
## 常用服务
systemctl start   firewalld   # 启动
systemctl stop    firewalld   # 停止
systemctl restart firewalld   # 重启
systemctl status  firewalld   # 状态
systemctl disable firewalld   # 禁用
```

```shell
## 常用配置
firewall-cmd --version                            # 查看版本
firewall-cmd --help                               # 查看帮助
firewall-cmd --state                              # 状态
firewall-cmd --reload                             # 更新防火墙规则
firewall-cmd --complete-reload                    # 更新防火墙规则（断开连接）
firewall-cmd --panic-on                           # 拒绝所有包
firewall-cmd --panic-off                          # 取消拒绝状态
firewall-cmd --query-panic                        # 查看是否拒绝
firewall-cmd --get-active-zones                   # 查看区域信息
firewall-cmd --set-default-zone=public            # 设置默认区域
firewall-cmd --get-zone-of-interface=eth0         # 查看指定接口所属区域
firewall-cmd --zone=dmz --list-ports              # 查看所有打开的端口
firewall-cmd --zone=public --add-interface=eth0   # 指定区域加入接口
firewall-cmd --zone=dmz --add-port=8080/tcp       # 加入一个端口到区域
firewall-cmd --zone=work --add-service=smtp       # 添加一个服务
firewall-cmd --zone=work --remove-service=smtp    # 移除一个服务
```

## 配置SELinux

很多应用需要禁用SELinux才能正常运行，配置文件位于/etc/sysconfig/selinux，
修改配置后重启系统生效，设置为`SELINUX=disabled`关闭。

```ini
# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#       enforcing - SELinux security policy is enforced.
#       permissive - SELinux prints warnings instead of enforcing.
#       disabled - SELinux is fully disabled.
SELINUX=disabled

# SELINUXTYPE= type of policy in use. Possible values are:
#       targeted - Only targeted network daemons are protected.
#       strict - Full SELinux protection.
SELINUXTYPE=targeted
```

```shell
getenforce      # 查询状态
# disabled
setenforce 0    # 临时设置
# setenforce 1 设置SELinux 成为enforcing模式
# setenforce 0 设置SELinux 成为permissive模式
```

## 查看系统信息

```shell
rpm -ql nginx                 # 查看nginx软件包的安装位置
rpm -qa                       # 查看所有安装的软件包
uname -a                      # 查看内核/操作系统/CPU信息的linux系统信息命令
head -n 1 /etc/issue          # 查看操作系统版本，是数字1不是字母L
cat /proc/cpuinfo             # 查看CPU信息的linux系统信息命令
hostname                      # 查看计算机名的linux系统信息命令
lspci -tv                     # 列出所有PCI设备
lsusb -tv                     # 列出所有USB设备的linux系统信息命令
lsmod                         # 列出加载的内核模块
env                           # 查看环境变量资源
free -m                       # 查看内存使用量和交换区使用量
df -h                         # 查看各分区使用情况
du -sh                        # 查看指定目录的大小
grep MemTotal /proc/meminfo   # 查看内存总量
grep MemFree /proc/meminfo    # 查看空闲内存量
uptime                        # 查看系统运行时间、用户数、负载
cat /proc/loadavg             # 查看系统负载磁盘和分区
mount | column -t             # 查看挂接的分区状态
fdisk -l                      # 查看所有分区
swapon -s                     # 查看所有交换分区
hdparm -i /dev/hda            # 查看磁盘参数(仅适用于IDE设备)
dmesg | grep IDE              # 查看启动时IDE设备检测状况网络
ifconfig                      # 查看所有网络接口的属性
iptables -L                   # 查看防火墙设置
route -n                      # 查看路由表
netstat -lntp                 # 查看所有监听端口
netstat -antp                 # 查看所有已经建立的连接
netstat -s                    # 查看网络统计信息进程
ps -ef                        # 查看所有进程
top                           # 实时显示进程状态用户
w                             # 查看活动用户
id                            # 查看指定用户信息
last                          # 查看用户登录日志
cut -d: -f1 /etc/passwd       # 查看系统所有用户
cut -d: -f1 /etc/group        # 查看系统所有组
crontab -l                    # 查看当前用户的计划任务服务
chkconfig –list               # 列出所有系统服务
chkconfig –list | grep on     # 列出所有启动的系统服务程序
cat /proc/cpuinfo             # 查看CPU相关参数的linux系统命令
cat /proc/partitions          # 查看linux硬盘和分区信息的系统信息命令
cat /proc/meminfo             # 查看linux系统内存信息的linux系统命令
cat /proc/version             # 查看版本，类似uname -r
cat /proc/ioports             # 查看设备io端口
cat /proc/interrupts          # 查看中断
cat /proc/pci                 # 查看pci设备的信息
cat /proc/swaps               # 查看所有swap分区的信息
```
