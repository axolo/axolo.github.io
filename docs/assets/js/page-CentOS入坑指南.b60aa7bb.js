(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{586:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos入坑指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos入坑指南"}},[s._v("#")]),s._v(" CentOS入坑指南")]),s._v(" "),a("ol",[a("li",[s._v("基本命令")]),s._v(" "),a("li",[s._v("网络配置")]),s._v(" "),a("li",[s._v("安装EPEL")]),s._v(" "),a("li",[s._v("开启SSH")]),s._v(" "),a("li",[s._v("配置防火墙")]),s._v(" "),a("li",[s._v("配置SELinux")]),s._v(" "),a("li",[s._v("查看系统信息")])]),s._v(" "),a("h2",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),a("p",[s._v("若没有命令行基础，操作Linux将寸步难行。\n最好的学习命令的方法是使用"),a("code",[s._v("--help")]),s._v("参数查看在线帮助。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("help")])]),s._v(" "),a("td",[s._v("系统帮助")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("ls --help")])]),s._v(" "),a("td",[s._v("ls命令的系统帮助")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("ls -la")])]),s._v(" "),a("td",[s._v("格式化列出当前目录下所有文件（含隐藏文件）")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("ls | grep 'user'")])]),s._v(" "),a("td",[s._v("搜索ls命令输出匹配user的部分")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("ll")])]),s._v(" "),a("td",[s._v("即"),a("code",[s._v("ls -l")]),s._v("，通常情况下ll是Linux的一个别名，使用频繁的命令建议定义别名")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("find -name 'user'")])]),s._v(" "),a("td",[s._v("查找当前目录及子目录含有user的文件和目录")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("grep 'user' file")])]),s._v(" "),a("td",[s._v("查找file文件包含user的内容")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("cd ~")])]),s._v(" "),a("td",[s._v("切换到用户主目录")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("mkdir dir")])]),s._v(" "),a("td",[s._v("在当前目录下新建dir目录")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("rm file")])]),s._v(" "),a("td",[s._v("删除当前目录下的file文件")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("rm -rf dir")])]),s._v(" "),a("td",[s._v("强制删除dir目录且不提示（"),a("strong",[s._v("传说中的从删库到跑路")]),s._v("）")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("cp file1 file2")])]),s._v(" "),a("td",[s._v("将文件file1复制到file2")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("cp -r dir1 dir2")])]),s._v(" "),a("td",[s._v("将目录dir1复制到dir2")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("mv file1 file2")])]),s._v(" "),a("td",[s._v("将file1重命名为file2；若file2是已存在目录，则将file1移动到file2目录下")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("ln -s file link")])]),s._v(" "),a("td",[s._v("创建file的符号连接link")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("cat >> file <<EOF")])]),s._v(" "),a("td",[s._v("将标准输入写入file并创建（换行输入EOF结束）")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("cat file | more")])]),s._v(" "),a("td",[s._v("查看文件")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("ps")])]),s._v(" "),a("td",[s._v("显示当前活动进程")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("kill pid")])]),s._v(" "),a("td",[s._v("杀掉id为pid的进程")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("chmod -R 755 web")])]),s._v(" "),a("td",[s._v("将web目录及子目录设置读写权限为755")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("tar -zxf file.tar.gz -C ~")])]),s._v(" "),a("td",[s._v("将file.tar.gz解压到用户主目录")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("df")])]),s._v(" "),a("td",[s._v("显示磁盘占用情况")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("free")])]),s._v(" "),a("td",[s._v("显示内存及交换器占用情况")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("rpm -ivh file.rpm")])]),s._v(" "),a("td",[s._v("全新安装file.rpm")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("./configure && make && make install")])]),s._v(" "),a("td",[s._v("编译源码并安装")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("ping host")])]),s._v(" "),a("td",[s._v("查询到host主机的网络连接情况")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("wget url-to-file/file")])]),s._v(" "),a("td",[s._v("下载"),a("code",[s._v("url-to-file/file")]),s._v("到当前目录")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("exit")])]),s._v(" "),a("td",[s._v("注销当前会话")])])])]),s._v(" "),a("h2",{attrs:{id:"网络配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络配置"}},[s._v("#")]),s._v(" 网络配置")]),s._v(" "),a("p",[s._v("一般情况下，Linux安装完成后第一项任务是将其联网。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认情况第一张网卡为ifcfg-eth0，不排除被命名成其他名称的可能")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一般情况下只需要指定IPADDR、NETMASK、GATEWAY和DNS1、DNS2即可")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-eth0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("Ethernet")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("BOOTPROTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("static")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("IPADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("192.168.20.25")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("NETMASK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("255.255.252.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("GATEWAY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("192.168.20.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("DNS1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("8.8.8.8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("DNS2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("8.8.4.4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("NETWORK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("192.168.20.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("BROADCAST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("192.168.23.255")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("DEFROUTE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("PEERDNS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("no")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("PEERROUTES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("IPV4_FAILURE_FATAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("no")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("IPV6INIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("IPV6_AUTOCONF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("IPV6_DEFROUTE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("IPV6_PEERDNS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("IPV6_PEERROUTES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("IPV6_FAILURE_FATAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("no")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("eth0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("UUID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("5b0a7d76-1602-4e19-aee6-29f57618ca01")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("ONBOOT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("no")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/resolv.conf       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置DNS")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/resolv.conf")]),s._v("\nnameserver 114.114.114.114\nnameserver 8.8.8.8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启网络服务使其生效")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("DEVICE")]),s._v(" "),a("td",[s._v("name")]),s._v(" "),a("td",[s._v("设备名称通常是eth0")])]),s._v(" "),a("tr",[a("td",[s._v("BOOTPROTO")]),s._v(" "),a("td",[s._v("proto")]),s._v(" "),a("td",[s._v("proto为none、static、dhcp、bootp，IP分配协议")])]),s._v(" "),a("tr",[a("td",[s._v("IPADDR")]),s._v(" "),a("td",[s._v("addr")]),s._v(" "),a("td",[s._v("IP地址")])]),s._v(" "),a("tr",[a("td",[s._v("NETMASK")]),s._v(" "),a("td",[s._v("mask")]),s._v(" "),a("td",[s._v("子网掩码")])]),s._v(" "),a("tr",[a("td",[s._v("GATEWAY")]),s._v(" "),a("td",[s._v("addr")]),s._v(" "),a("td",[s._v("网关地址")])]),s._v(" "),a("tr",[a("td",[s._v("DNS1")]),s._v(" "),a("td",[s._v("dns")]),s._v(" "),a("td",[s._v("DNS1服务器IP")])]),s._v(" "),a("tr",[a("td",[s._v("DNS2")]),s._v(" "),a("td",[s._v("dns")]),s._v(" "),a("td",[s._v("DNS2服务器IP")])]),s._v(" "),a("tr",[a("td",[s._v("NETWORK")]),s._v(" "),a("td",[s._v("addr")]),s._v(" "),a("td",[s._v("所属网络")])]),s._v(" "),a("tr",[a("td",[s._v("BROADCAST")]),s._v(" "),a("td",[s._v("addr")]),s._v(" "),a("td",[s._v("广播地址")])]),s._v(" "),a("tr",[a("td",[s._v("HWADDR")]),s._v(" "),a("td",[s._v("mac")]),s._v(" "),a("td",[s._v("MAC地址")])]),s._v(" "),a("tr",[a("td",[s._v("ONBOOT")]),s._v(" "),a("td",[s._v("answer")]),s._v(" "),a("td",[s._v("answer为yes或no，是否系统启动时激活连接")])]),s._v(" "),a("tr",[a("td",[s._v("USERCTL")]),s._v(" "),a("td",[s._v("answer")]),s._v(" "),a("td",[s._v("answer为yes或no，非root用户是否可以控制该设备")])]),s._v(" "),a("tr",[a("td",[s._v("PEERDNS")]),s._v(" "),a("td",[s._v("answer")]),s._v(" "),a("td",[s._v("answer为yes或no，是否重写/etc/resolv.conf")])])])]),s._v(" "),a("h2",{attrs:{id:"安装epel和net-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装epel和net-tools"}},[s._v("#")]),s._v(" 安装EPEL和net-tools")]),s._v(" "),a("p",[s._v("EPEL (Extra Packages for Enterprise Linux)是基于Fedora的一个项目，为“红帽系”的操作系统提供额外的软件包，适用于RHEL、CentOS和Fedora.\nCentOS最小安装默认不带基本的网络命令，需要手动安装net-tools。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"开启ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启ssh"}},[s._v("#")]),s._v(" 开启SSH")]),s._v(" "),a("p",[s._v("Linux主机一般通过SSH来远程管理")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 除非自定义取消，CentOS默认安装包含了OpenSSH Server")]),s._v("\nyum list installed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" openssh-server\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若此处没有openssh-server信息，请务必安装")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"防火墙firewalld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙firewalld"}},[s._v("#")]),s._v(" 防火墙firewalld")]),s._v(" "),a("p",[s._v("CentOS 7 使用新的防火墙系统firewalld，大多数服务需要开启防火墙端口才能被正确访问。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 开启80端口")]),s._v("\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp --permanent  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# success")]),s._v("\nfirewall-cmd --reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("解释")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("--zone")]),s._v(" "),a("td",[s._v("作用域")])]),s._v(" "),a("tr",[a("td",[s._v("--add-port=80/tcp")]),s._v(" "),a("td",[s._v("添加端口，格式为：端口/通讯协议")])]),s._v(" "),a("tr",[a("td",[s._v("--permanent")]),s._v(" "),a("td",[s._v("永久生效，没有此参数重启后失效")])])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 常用服务")]),s._v("\nsystemctl start   firewalld   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nsystemctl stop    firewalld   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\nsystemctl restart firewalld   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\nsystemctl status  firewalld   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态")]),s._v("\nsystemctl disable firewalld   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 常用配置")]),s._v("\nfirewall-cmd --version                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本")]),s._v("\nfirewall-cmd --help                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看帮助")]),s._v("\nfirewall-cmd --state                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态")]),s._v("\nfirewall-cmd --reload                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新防火墙规则")]),s._v("\nfirewall-cmd --complete-reload                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新防火墙规则（断开连接）")]),s._v("\nfirewall-cmd --panic-on                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拒绝所有包")]),s._v("\nfirewall-cmd --panic-off                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消拒绝状态")]),s._v("\nfirewall-cmd --query-panic                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否拒绝")]),s._v("\nfirewall-cmd --get-active-zones                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看区域信息")]),s._v("\nfirewall-cmd --set-default-zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置默认区域")]),s._v("\nfirewall-cmd --get-zone-of-interface"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth0         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定接口所属区域")]),s._v("\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dmz --list-ports              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有打开的端口")]),s._v("\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-interface"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth0   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定区域加入接口")]),s._v("\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dmz --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入一个端口到区域")]),s._v("\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("work --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("smtp       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加一个服务")]),s._v("\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("work --remove-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("smtp    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除一个服务")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"配置selinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置selinux"}},[s._v("#")]),s._v(" 配置SELinux")]),s._v(" "),a("p",[s._v("很多应用需要禁用SELinux才能正常运行，配置文件位于/etc/sysconfig/selinux，\n修改配置后重启系统生效，设置为"),a("code",[s._v("SELINUX=disabled")]),s._v("关闭。")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This file controls the state of SELinux on the system.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SELINUX= can take one of these three values:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       enforcing - SELinux security policy is enforced.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       permissive - SELinux prints warnings instead of enforcing.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       disabled - SELinux is fully disabled.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("SELINUX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("disabled")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SELINUXTYPE= type of policy in use. Possible values are:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       targeted - Only targeted network daemons are protected.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       strict - Full SELinux protection.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("SELINUXTYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("targeted")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("getenforce      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disabled")]),s._v("\nsetenforce "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时设置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setenforce 1 设置SELinux 成为enforcing模式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setenforce 0 设置SELinux 成为permissive模式")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"查看系统信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统信息"}},[s._v("#")]),s._v(" 查看系统信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ql nginx                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看nginx软件包的安装位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有安装的软件包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内核/操作系统/CPU信息的linux系统信息命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" /etc/issue          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看操作系统版本，是数字1不是字母L")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看CPU信息的linux系统信息命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看计算机名的linux系统信息命令")]),s._v("\nlspci -tv                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有PCI设备")]),s._v("\nlsusb -tv                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有USB设备的linux系统信息命令")]),s._v("\nlsmod                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出加载的内核模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看环境变量资源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -m                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存使用量和交换区使用量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看各分区使用情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定目录的大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" MemTotal /proc/meminfo   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存总量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" MemFree /proc/meminfo    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看空闲内存量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统运行时间、用户数、负载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/loadavg             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统负载磁盘和分区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("column")]),s._v(" -t             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看挂接的分区状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有分区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapon")]),s._v(" -s                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有交换分区")]),s._v("\nhdparm -i /dev/hda            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看磁盘参数(仅适用于IDE设备)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dmesg")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" IDE              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看启动时IDE设备检测状况网络")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有网络接口的属性")]),s._v("\niptables -L                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙设置")]),s._v("\nroute -n                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看路由表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lntp                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有监听端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -antp                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有已经建立的连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -s                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看网络统计信息进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实时显示进程状态用户")]),s._v("\nw                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看活动用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定用户信息")]),s._v("\nlast                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看用户登录日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d: -f1 /etc/passwd       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统所有用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d: -f1 /etc/group        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统所有组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -l                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前用户的计划任务服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" –list               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有系统服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" –list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" on     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有启动的系统服务程序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看CPU相关参数的linux系统命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/partitions          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看linux硬盘和分区信息的系统信息命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/meminfo             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看linux系统内存信息的linux系统命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本，类似uname -r")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/ioports             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看设备io端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/interrupts          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看中断")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/pci                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看pci设备的信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/swaps               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有swap分区的信息")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);