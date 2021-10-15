(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{566:function(s,n,t){"use strict";t.r(n);var a=t(5),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos-查看各种信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-查看各种信息"}},[s._v("#")]),s._v(" CentOS 查看各种信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ql nginx                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看nginx软件包的安装位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有安装的软件包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内核/操作系统/CPU信息的linux系统信息命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" /etc/issue          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看操作系统版本，是数字1不是字母L")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看CPU信息的linux系统信息命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看计算机名的linux系统信息命令")]),s._v("\nlspci -tv                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有PCI设备")]),s._v("\nlsusb -tv                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有USB设备的linux系统信息命令")]),s._v("\nlsmod                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出加载的内核模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看环境变量资源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -m                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存使用量和交换区使用量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看各分区使用情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定目录的大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" MemTotal /proc/meminfo   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存总量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" MemFree /proc/meminfo    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看空闲内存量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统运行时间、用户数、负载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/loadavg             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统负载磁盘和分区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("column")]),s._v(" -t             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看挂接的分区状态")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有分区")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapon")]),s._v(" -s                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有交换分区")]),s._v("\nhdparm -i /dev/hda            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看磁盘参数(仅适用于IDE设备)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dmesg")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" IDE              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看启动时IDE设备检测状况网络")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有网络接口的属性")]),s._v("\niptables -L                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙设置")]),s._v("\nroute -n                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看路由表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lntp                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有监听端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -antp                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有已经建立的连接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -s                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看网络统计信息进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实时显示进程状态用户")]),s._v("\nw                             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看活动用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("                            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定用户信息")]),s._v("\nlast                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看用户登录日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d: -f1 /etc/passwd       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统所有用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d: -f1 /etc/group        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统所有组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -l                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前用户的计划任务服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" –list               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有系统服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" –list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" on     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有启动的系统服务程序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看CPU相关参数的linux系统命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/partitions          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看linux硬盘和分区信息的系统信息命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/meminfo             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看linux系统内存信息的linux系统命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本，类似uname -r")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/ioports             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看设备io端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/interrupts          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看中断")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/pci                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看pci设备的信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/swaps               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有swap分区的信息")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);