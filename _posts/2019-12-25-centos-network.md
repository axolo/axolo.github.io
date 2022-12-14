---
title: CentOS网络
time: 2019-12-25
layout: post
categories: Linux
tags: [CentOS, Linux]
---

## nmcli方式

`CentOS 7`开始默认使用`network-manager`来配置网络，虽然传统方式依然可以配置但不推荐。

以下为配置无线连接，其他网络管理命令参照帮助。

```bash
# 扫描并查看wifi情况
nmcli d wifi connect password iface
# 获取网卡描述，一般默认wlan0，连接KFC_free，密码12345678
nmcli d wifi connect "KFC_free" password "12345678" wlan0
# 禁用连接
nmcli dev dis wlan0
# 断开连接
nmcli con del KFC_free
# 获取到当前设备所有连接过多的历史连接及对应UUID号码
nmcli c
# 删除连接
nmcli c del 72ffd5f4-71f8-0001-b434-6122908cfd4e
````

## dhcp方式

设置网卡为开机自动连接，开启DHCP，然后在路由器上配置MAC和IP绑定，家庭和小型局域网推荐使用。

## 传统方式

```bash
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

```bash
vi /etc/resolv.conf       # 配置DNS
```

```ini
# /etc/resolv.conf
nameserver 114.114.114.114
nameserver 8.8.8.8
```

```bash
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

> 方跃明
> 2019-12-25
