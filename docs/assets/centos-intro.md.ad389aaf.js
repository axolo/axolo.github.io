import{_ as s,o as n,c as a,e as l}from"./app.077a4a1b.js";const D=JSON.parse('{"title":"CentOS 入坑指南","description":"一入 CentOS 深似海，从此再也爬不出来。","frontmatter":{"title":"CentOS 入坑指南","description":"一入 CentOS 深似海，从此再也爬不出来。","time":"2019-05-09T00:00:00.000Z","category":"运维","tags":["CentOS","Linux"]},"headers":[{"level":2,"title":"基本命令","slug":"基本命令","link":"#基本命令","children":[]},{"level":2,"title":"网络配置","slug":"网络配置","link":"#网络配置","children":[]},{"level":2,"title":"安装EPEL和net-tools","slug":"安装epel和net-tools","link":"#安装epel和net-tools","children":[]},{"level":2,"title":"开启SSH","slug":"开启ssh","link":"#开启ssh","children":[]},{"level":2,"title":"防火墙firewalld","slug":"防火墙firewalld","link":"#防火墙firewalld","children":[]},{"level":2,"title":"配置SELinux","slug":"配置selinux","link":"#配置selinux","children":[]},{"level":2,"title":"查看系统信息","slug":"查看系统信息","link":"#查看系统信息","children":[]}],"relativePath":"centos-intro.md","lastUpdated":1673773212000}'),p={name:"centos-intro.md"},t=l(`<h1 id="centos入坑指南" tabindex="-1">CentOS入坑指南 <a class="header-anchor" href="#centos入坑指南" aria-hidden="true">#</a></h1><p>一入 CentOS 深似海，从此再也爬不出来。</p><h2 id="基本命令" tabindex="-1">基本命令 <a class="header-anchor" href="#基本命令" aria-hidden="true">#</a></h2><p>若没有命令行基础，操作 Linux 将寸步难行。 最好的学习命令的方法是使用<code>--help</code>参数查看在线帮助。</p><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>help</code></td><td>系统帮助</td></tr><tr><td><code>ls --help</code></td><td>ls命令的系统帮助</td></tr><tr><td><code>ls -la</code></td><td>格式化列出当前目录下所有文件（含隐藏文件）</td></tr><tr><td>\`ls</td><td>grep &#39;user&#39;\`</td></tr><tr><td><code>ll</code></td><td>即<code>ls -l</code>，通常情况下ll是Linux的一个别名，使用频繁的命令建议定义别名</td></tr><tr><td><code>find -name &#39;user&#39;</code></td><td>查找当前目录及子目录含有user的文件和目录</td></tr><tr><td><code>grep &#39;user&#39; file</code></td><td>查找file文件包含user的内容</td></tr><tr><td><code>cd ~</code></td><td>切换到用户主目录</td></tr><tr><td><code>mkdir dir</code></td><td>在当前目录下新建dir目录</td></tr><tr><td><code>rm file</code></td><td>删除当前目录下的file文件</td></tr><tr><td><code>rm -rf dir</code></td><td>强制删除dir目录且不提示（<strong>传说中的从删库到跑路</strong>）</td></tr><tr><td><code>cp file1 file2</code></td><td>将文件file1复制到file2</td></tr><tr><td><code>cp -r dir1 dir2</code></td><td>将目录dir1复制到dir2</td></tr><tr><td><code>mv file1 file2</code></td><td>将file1重命名为file2；若file2是已存在目录，则将file1移动到file2目录下</td></tr><tr><td><code>ln -s file link</code></td><td>创建file的符号连接link</td></tr><tr><td><code>cat &gt;&gt; file &lt;&lt;EOF</code></td><td>将标准输入写入file并创建（换行输入EOF结束）</td></tr><tr><td>\`cat file</td><td>more\`</td></tr><tr><td><code>ps</code></td><td>显示当前活动进程</td></tr><tr><td><code>kill pid</code></td><td>杀掉id为pid的进程</td></tr><tr><td><code>chmod -R 755 web</code></td><td>将web目录及子目录设置读写权限为755</td></tr><tr><td><code>tar -zxf file.tar.gz -C ~</code></td><td>将file.tar.gz解压到用户主目录</td></tr><tr><td><code>df</code></td><td>显示磁盘占用情况</td></tr><tr><td><code>free</code></td><td>显示内存及交换器占用情况</td></tr><tr><td><code>rpm -ivh file.rpm</code></td><td>全新安装file.rpm</td></tr><tr><td><code>./configure &amp;&amp; make &amp;&amp; make install</code></td><td>编译源码并安装</td></tr><tr><td><code>ping host</code></td><td>查询到host主机的网络连接情况</td></tr><tr><td><code>wget url-to-file/file</code></td><td>下载<code>url-to-file/file</code>到当前目录</td></tr><tr><td><code>exit</code></td><td>注销当前会话</td></tr></tbody></table><h2 id="网络配置" tabindex="-1">网络配置 <a class="header-anchor" href="#网络配置" aria-hidden="true">#</a></h2><p>一般情况下，Linux安装完成后第一项任务是将其联网。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 默认情况第一张网卡为ifcfg-eth0，不排除被命名成其他名称的可能</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 一般情况下只需要指定IPADDR、NETMASK、GATEWAY和DNS1、DNS2即可</span></span>
<span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/sysconfig/network-scripts/ifcfg-eth0</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">TYPE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Ethernet</span></span>
<span class="line"><span style="color:#F07178;">BOOTPROTO</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">static</span></span>
<span class="line"><span style="color:#F07178;">IPADDR</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.20.25</span></span>
<span class="line"><span style="color:#F07178;">NETMASK</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">255.255.252.0</span></span>
<span class="line"><span style="color:#F07178;">GATEWAY</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.20.1</span></span>
<span class="line"><span style="color:#F07178;">DNS1</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">8.8.8.8</span></span>
<span class="line"><span style="color:#F07178;">DNS2</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">8.8.4.4</span></span>
<span class="line"><span style="color:#F07178;">NETWORK</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.20.0</span></span>
<span class="line"><span style="color:#F07178;">BROADCAST</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.23.255</span></span>
<span class="line"><span style="color:#F07178;">DEFROUTE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">PEERDNS</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">no</span></span>
<span class="line"><span style="color:#F07178;">PEERROUTES</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV4_FAILURE_FATAL</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">no</span></span>
<span class="line"><span style="color:#F07178;">IPV6INIT</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_AUTOCONF</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_DEFROUTE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_PEERDNS</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_PEERROUTES</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_FAILURE_FATAL</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">no</span></span>
<span class="line"><span style="color:#F07178;">NAME</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">eth0</span></span>
<span class="line"><span style="color:#F07178;">UUID</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">5b0a7d76-1602-4e19-aee6-29f57618ca01</span></span>
<span class="line"><span style="color:#F07178;">ONBOOT</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">no</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/resolv.conf</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># 配置DNS</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /etc/resolv.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">nameserver 114.114.114.114</span></span>
<span class="line"><span style="color:#A6ACCD;">nameserver 8.8.8.8</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 重启网络服务使其生效</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>参数</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>DEVICE</td><td>name</td><td>设备名称通常是eth0</td></tr><tr><td>BOOTPROTO</td><td>proto</td><td>proto为none、static、dhcp、bootp，IP分配协议</td></tr><tr><td>IPADDR</td><td>addr</td><td>IP地址</td></tr><tr><td>NETMASK</td><td>mask</td><td>子网掩码</td></tr><tr><td>GATEWAY</td><td>addr</td><td>网关地址</td></tr><tr><td>DNS1</td><td>dns</td><td>DNS1服务器IP</td></tr><tr><td>DNS2</td><td>dns</td><td>DNS2服务器IP</td></tr><tr><td>NETWORK</td><td>addr</td><td>所属网络</td></tr><tr><td>BROADCAST</td><td>addr</td><td>广播地址</td></tr><tr><td>HWADDR</td><td>mac</td><td>MAC地址</td></tr><tr><td>ONBOOT</td><td>answer</td><td>answer为yes或no，是否系统启动时激活连接</td></tr><tr><td>USERCTL</td><td>answer</td><td>answer为yes或no，非root用户是否可以控制该设备</td></tr><tr><td>PEERDNS</td><td>answer</td><td>answer为yes或no，是否重写/etc/resolv.conf</td></tr></tbody></table><h2 id="安装epel和net-tools" tabindex="-1">安装EPEL和net-tools <a class="header-anchor" href="#安装epel和net-tools" aria-hidden="true">#</a></h2><p>EPEL (Extra Packages for Enterprise Linux)是基于Fedora的一个项目，为“红帽系”的操作系统提供额外的软件包，适用于RHEL、CentOS和Fedora. CentOS最小安装默认不带基本的网络命令，需要手动安装net-tools。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">epel-release</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">net-tools</span></span>
<span class="line"></span></code></pre></div><h2 id="开启ssh" tabindex="-1">开启SSH <a class="header-anchor" href="#开启ssh" aria-hidden="true">#</a></h2><p>Linux主机一般通过SSH来远程管理</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 除非自定义取消，CentOS默认安装包含了OpenSSH Server</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">installed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 若此处没有openssh-server信息，请务必安装</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-server</span></span>
<span class="line"></span></code></pre></div><h2 id="防火墙firewalld" tabindex="-1">防火墙firewalld <a class="header-anchor" href="#防火墙firewalld" aria-hidden="true">#</a></h2><p>CentOS 7 使用新的防火墙系统firewalld，大多数服务需要开启防火墙端口才能被正确访问。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 开启80端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=public</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=80/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># success</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--reload</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>参数</th><th>解释</th></tr></thead><tbody><tr><td>--zone</td><td>作用域</td></tr><tr><td>--add-port=80/tcp</td><td>添加端口，格式为：端口/通讯协议</td></tr><tr><td>--permanent</td><td>永久生效，没有此参数重启后失效</td></tr></tbody></table><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 常用服务</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">firewalld</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 启动</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">firewalld</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 停止</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 重启</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">firewalld</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 状态</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">firewalld</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 禁用</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 常用配置</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;">                            </span><span style="color:#676E95;font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">                               </span><span style="color:#676E95;font-style:italic;"># 查看帮助</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--state</span><span style="color:#A6ACCD;">                              </span><span style="color:#676E95;font-style:italic;"># 状态</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--reload</span><span style="color:#A6ACCD;">                             </span><span style="color:#676E95;font-style:italic;"># 更新防火墙规则</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--complete-reload</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;"># 更新防火墙规则（断开连接）</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--panic-on</span><span style="color:#A6ACCD;">                           </span><span style="color:#676E95;font-style:italic;"># 拒绝所有包</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--panic-off</span><span style="color:#A6ACCD;">                          </span><span style="color:#676E95;font-style:italic;"># 取消拒绝状态</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--query-panic</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;font-style:italic;"># 查看是否拒绝</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--get-active-zones</span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;font-style:italic;"># 查看区域信息</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--set-default-zone=public</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 设置默认区域</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--get-zone-of-interface=eth0</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 查看指定接口所属区域</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=dmz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list-ports</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 查看所有打开的端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=public</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-interface=eth0</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 指定区域加入接口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=dmz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=8080/tcp</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># 加入一个端口到区域</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=work</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-service=smtp</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># 添加一个服务</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=work</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--remove-service=smtp</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 移除一个服务</span></span>
<span class="line"></span></code></pre></div><h2 id="配置selinux" tabindex="-1">配置SELinux <a class="header-anchor" href="#配置selinux" aria-hidden="true">#</a></h2><p>很多应用需要禁用SELinux才能正常运行，配置文件位于/etc/sysconfig/selinux， 修改配置后重启系统生效，设置为<code>SELINUX=disabled</code>关闭。</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># This file controls the state of SELinux on the system.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># SELINUX= can take one of these three values:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#       enforcing - SELinux security policy is enforced.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#       permissive - SELinux prints warnings instead of enforcing.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#       disabled - SELinux is fully disabled.</span></span>
<span class="line"><span style="color:#F07178;">SELINUX</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">disabled</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># SELINUXTYPE= type of policy in use. Possible values are:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#       targeted - Only targeted network daemons are protected.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#       strict - Full SELinux protection.</span></span>
<span class="line"><span style="color:#F07178;">SELINUXTYPE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">targeted</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">getenforce</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># 查询状态</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># disabled</span></span>
<span class="line"><span style="color:#FFCB6B;">setenforce</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 临时设置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># setenforce 1 设置SELinux 成为enforcing模式</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># setenforce 0 设置SELinux 成为permissive模式</span></span>
<span class="line"></span></code></pre></div><h2 id="查看系统信息" tabindex="-1">查看系统信息 <a class="header-anchor" href="#查看系统信息" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># 查看nginx软件包的安装位置</span></span>
<span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-qa</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;font-style:italic;"># 查看所有安装的软件包</span></span>
<span class="line"><span style="color:#FFCB6B;">uname</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;font-style:italic;"># 查看内核/操作系统/CPU信息的linux系统信息命令</span></span>
<span class="line"><span style="color:#FFCB6B;">head</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/issue</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 查看操作系统版本，是数字1不是字母L</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/cpuinfo</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 查看CPU信息的linux系统信息命令</span></span>
<span class="line"><span style="color:#FFCB6B;">hostname</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;font-style:italic;"># 查看计算机名的linux系统信息命令</span></span>
<span class="line"><span style="color:#FFCB6B;">lspci</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tv</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 列出所有PCI设备</span></span>
<span class="line"><span style="color:#FFCB6B;">lsusb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tv</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 列出所有USB设备的linux系统信息命令</span></span>
<span class="line"><span style="color:#FFCB6B;">lsmod</span><span style="color:#A6ACCD;">                         </span><span style="color:#676E95;font-style:italic;"># 列出加载的内核模块</span></span>
<span class="line"><span style="color:#FFCB6B;">env</span><span style="color:#A6ACCD;">                           </span><span style="color:#676E95;font-style:italic;"># 查看环境变量资源</span></span>
<span class="line"><span style="color:#FFCB6B;">free</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;font-style:italic;"># 查看内存使用量和交换区使用量</span></span>
<span class="line"><span style="color:#FFCB6B;">df</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;">                         </span><span style="color:#676E95;font-style:italic;"># 查看各分区使用情况</span></span>
<span class="line"><span style="color:#FFCB6B;">du</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sh</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;font-style:italic;"># 查看指定目录的大小</span></span>
<span class="line"><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MemTotal</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/meminfo</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 查看内存总量</span></span>
<span class="line"><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MemFree</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/meminfo</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 查看空闲内存量</span></span>
<span class="line"><span style="color:#FFCB6B;">uptime</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;font-style:italic;"># 查看系统运行时间、用户数、负载</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/loadavg</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 查看系统负载磁盘和分区</span></span>
<span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">column</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 查看挂接的分区状态</span></span>
<span class="line"><span style="color:#FFCB6B;">fdisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;font-style:italic;"># 查看所有分区</span></span>
<span class="line"><span style="color:#FFCB6B;">swapon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 查看所有交换分区</span></span>
<span class="line"><span style="color:#FFCB6B;">hdparm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/hda</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 查看磁盘参数(仅适用于IDE设备)</span></span>
<span class="line"><span style="color:#FFCB6B;">dmesg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IDE</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 查看启动时IDE设备检测状况网络</span></span>
<span class="line"><span style="color:#FFCB6B;">ifconfig</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;font-style:italic;"># 查看所有网络接口的属性</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;font-style:italic;"># 查看防火墙设置</span></span>
<span class="line"><span style="color:#FFCB6B;">route</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#A6ACCD;">                      </span><span style="color:#676E95;font-style:italic;"># 查看路由表</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-lntp</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># 查看所有监听端口</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-antp</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># 查看所有已经建立的连接</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;"># 查看网络统计信息进程</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;font-style:italic;"># 查看所有进程</span></span>
<span class="line"><span style="color:#FFCB6B;">top</span><span style="color:#A6ACCD;">                           </span><span style="color:#676E95;font-style:italic;"># 实时显示进程状态用户</span></span>
<span class="line"><span style="color:#FFCB6B;">w</span><span style="color:#A6ACCD;">                             </span><span style="color:#676E95;font-style:italic;"># 查看活动用户</span></span>
<span class="line"><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;">                            </span><span style="color:#676E95;font-style:italic;"># 查看指定用户信息</span></span>
<span class="line"><span style="color:#FFCB6B;">last</span><span style="color:#A6ACCD;">                          </span><span style="color:#676E95;font-style:italic;"># 查看用户登录日志</span></span>
<span class="line"><span style="color:#FFCB6B;">cut</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/passwd</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># 查看系统所有用户</span></span>
<span class="line"><span style="color:#FFCB6B;">cut</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/group</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 查看系统所有组</span></span>
<span class="line"><span style="color:#FFCB6B;">crontab</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;"># 查看当前用户的计划任务服务</span></span>
<span class="line"><span style="color:#FFCB6B;">chkconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">–list</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 列出所有系统服务</span></span>
<span class="line"><span style="color:#FFCB6B;">chkconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">–list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 列出所有启动的系统服务程序</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/cpuinfo</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 查看CPU相关参数的linux系统命令</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/partitions</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 查看linux硬盘和分区信息的系统信息命令</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/meminfo</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 查看linux系统内存信息的linux系统命令</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/version</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 查看版本，类似uname -r</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/ioports</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 查看设备io端口</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/interrupts</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 查看中断</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/pci</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># 查看pci设备的信息</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/swaps</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 查看所有swap分区的信息</span></span>
<span class="line"></span></code></pre></div>`,31),o=[t];function e(c,r,i,y,C,d){return n(),a("div",null,o)}const F=s(p,[["render",e]]);export{D as __pageData,F as default};
