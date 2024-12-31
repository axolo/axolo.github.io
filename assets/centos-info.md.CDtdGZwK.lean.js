import{_ as i,c as a,a4 as n,o as h}from"./chunks/framework.CwOFZF19.js";const g=JSON.parse('{"title":"CentOS 查看各种信息","description":"收集常用的 CentOS 系统软硬件信息查看方法","frontmatter":{"title":"CentOS 查看各种信息","description":"收集常用的 CentOS 系统软硬件信息查看方法","time":"2012-04-03T00:00:00.000Z","category":"运维","tags":["CentOS","Linux"]},"headers":[],"relativePath":"centos-info.md","filePath":"centos-info.md"}'),k={name:"centos-info.md"};function p(l,s,t,e,F,r){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="centos查看各种信息" tabindex="-1">CentOS查看各种信息 <a class="header-anchor" href="#centos查看各种信息" aria-label="Permalink to &quot;CentOS查看各种信息&quot;">​</a></h1><blockquote><p>方跃明 2012-04-03</p></blockquote><p>收集常用的 CentOS 系统软硬件信息查看方法</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 查看nginx软件包的安装位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qa</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # 查看所有安装的软件包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uname</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 查看内核/操作系统/CPU信息的linux系统信息命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">head</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/issue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 查看操作系统版本，是数字1不是字母L</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/cpuinfo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 查看CPU信息的linux系统信息命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hostname</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 查看计算机名的linux系统信息命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lspci</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -tv</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 列出所有PCI设备</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsusb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -tv</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 列出所有USB设备的linux系统信息命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsmod</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 列出加载的内核模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">env</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           # 查看环境变量资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">free</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # 查看内存使用量和交换区使用量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 查看各分区使用情况</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">du</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 查看指定目录的大小</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MemTotal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/meminfo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 查看内存总量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MemFree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/meminfo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 查看空闲内存量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uptime</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 查看系统运行时间、用户数、负载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/loadavg</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 查看系统负载磁盘和分区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> column</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 查看挂接的分区状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fdisk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 查看所有分区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">swapon</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 查看所有交换分区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hdparm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/hda</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 查看磁盘参数(仅适用于IDE设备)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dmesg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IDE</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 查看启动时IDE设备检测状况网络</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ifconfig</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 查看所有网络接口的属性</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # 查看防火墙设置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">route</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 查看路由表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -lntp</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 查看所有监听端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -antp</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 查看所有已经建立的连接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 查看网络统计信息进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ef</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 查看所有进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">top</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           # 实时显示进程状态用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">w</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                             # 查看活动用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">id</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                            # 查看指定用户信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">last</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                          # 查看用户登录日志</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/passwd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 查看系统所有用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/group</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 查看系统所有组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">crontab</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 查看当前用户的计划任务服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chkconfig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> –list</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               # 列出所有系统服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chkconfig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> –list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 列出所有启动的系统服务程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/cpuinfo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 查看CPU相关参数的linux系统命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/partitions</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 查看linux硬盘和分区信息的系统信息命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/meminfo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 查看linux系统内存信息的linux系统命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/version</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 查看版本，类似uname -r</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/ioports</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 查看设备io端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/interrupts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 查看中断</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/pci</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 查看pci设备的信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/swaps</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               # 查看所有swap分区的信息</span></span></code></pre></div>`,4)]))}const y=i(k,[["render",p]]);export{g as __pageData,y as default};
