import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.d5af2850.js";const u=JSON.parse('{"title":"Linux 目录结构","description":"掌握一个操作系统，从它的目录结构开始，啥东西一般放哪得心知肚明。","frontmatter":{"title":"Linux 目录结构","description":"掌握一个操作系统，从它的目录结构开始，啥东西一般放哪得心知肚明。","time":"2021-12-19T00:00:00.000Z","category":"运维","tags":["CentOS","Linux"]},"headers":[],"relativePath":"linux-directory.md","filePath":"linux-directory.md"}'),l={name:"linux-directory.md"},p=e(`<h1 id="linux目录结构" tabindex="-1">Linux目录结构 <a class="header-anchor" href="#linux目录结构" aria-label="Permalink to &quot;Linux目录结构&quot;">​</a></h1><blockquote><p>方跃明 2021-12-19</p></blockquote><p>Linux目录树的主要部分有<code>/</code>、<code>/usr</code>、<code>/var</code>、<code>/home</code>等等。 下面是一个典型的Linux目录结构如下：</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`-- /               # 根目录</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- efi             # EFI启动分区</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- boot            # 存放内核以及启动所需的文件等</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- etc             # 系统的配置文件（系统级）</span></span>
<span class="line"><span style="color:#e1e4e8;">  |   |-- rc            # 主启动文件，不要修改它</span></span>
<span class="line"><span style="color:#e1e4e8;">  |   |-- rc.conf       # 决定启动哪些系统自带的守护进程，不要修改它</span></span>
<span class="line"><span style="color:#e1e4e8;">  |   |-- rc.local      # 启动文件，覆盖rc</span></span>
<span class="line"><span style="color:#e1e4e8;">  |   |-- rc.conf.local # 系统启动时启动的守护进程，覆盖rc.conf</span></span>
<span class="line"><span style="color:#e1e4e8;">  |   |-- profile       # 全局登录启动文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  |   \`-- bashrc        # 全局bash启动文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- root            # 超级用户的主目录</span></span>
<span class="line"><span style="color:#e1e4e8;">  |   |-- .profile      # 超级用户登录启动文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  |   \`-- .bashrc       # 超级用bash启动文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- home            # 用户文件的主目录，用户数据存放在其主目录中</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- mnt             # 临时的映射文件系统，如挂载光驱到cdrom</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- dev             # 设备文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- bin             # 必要的命令</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- lib             # 必要的运行库</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- proc            # 存放存储进程和系统信息</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- sbin            # 系统管理程序</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- tmp             # 临时文件的目录</span></span>
<span class="line"><span style="color:#e1e4e8;">  |-- var             # 系统产生的经常变化的文件，例如日志文件、应用程序的数据文件等等</span></span>
<span class="line"><span style="color:#e1e4e8;">  \`-- usr             # 一般不需要修改的应用程序，命令程序文件、程序库、手册和其它文档</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- etc             # 设置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- systemd         # 系统守护进程</span></span>
<span class="line"><span style="color:#e1e4e8;">    |   \`--system         # 系统服务</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- bin             # 增加的用户程序</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- lib             # 库文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- sbin            # 增加的管理程序</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- share           # 结构独立的数据</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- local           # 本地产生的增加的应用程序</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- x11             # X Window系统</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- dict            # 字典</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- doc             # 追加的文档</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- games           # 游戏和教学文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- info            # 存放GNU信息文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- man             # 在线帮助文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- include         #  C开发工具的头文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    \`-- src             # 程序的源代码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`-- /               # 根目录</span></span>
<span class="line"><span style="color:#24292e;">  |-- efi             # EFI启动分区</span></span>
<span class="line"><span style="color:#24292e;">  |-- boot            # 存放内核以及启动所需的文件等</span></span>
<span class="line"><span style="color:#24292e;">  |-- etc             # 系统的配置文件（系统级）</span></span>
<span class="line"><span style="color:#24292e;">  |   |-- rc            # 主启动文件，不要修改它</span></span>
<span class="line"><span style="color:#24292e;">  |   |-- rc.conf       # 决定启动哪些系统自带的守护进程，不要修改它</span></span>
<span class="line"><span style="color:#24292e;">  |   |-- rc.local      # 启动文件，覆盖rc</span></span>
<span class="line"><span style="color:#24292e;">  |   |-- rc.conf.local # 系统启动时启动的守护进程，覆盖rc.conf</span></span>
<span class="line"><span style="color:#24292e;">  |   |-- profile       # 全局登录启动文件</span></span>
<span class="line"><span style="color:#24292e;">  |   \`-- bashrc        # 全局bash启动文件</span></span>
<span class="line"><span style="color:#24292e;">  |-- root            # 超级用户的主目录</span></span>
<span class="line"><span style="color:#24292e;">  |   |-- .profile      # 超级用户登录启动文件</span></span>
<span class="line"><span style="color:#24292e;">  |   \`-- .bashrc       # 超级用bash启动文件</span></span>
<span class="line"><span style="color:#24292e;">  |-- home            # 用户文件的主目录，用户数据存放在其主目录中</span></span>
<span class="line"><span style="color:#24292e;">  |-- mnt             # 临时的映射文件系统，如挂载光驱到cdrom</span></span>
<span class="line"><span style="color:#24292e;">  |-- dev             # 设备文件</span></span>
<span class="line"><span style="color:#24292e;">  |-- bin             # 必要的命令</span></span>
<span class="line"><span style="color:#24292e;">  |-- lib             # 必要的运行库</span></span>
<span class="line"><span style="color:#24292e;">  |-- proc            # 存放存储进程和系统信息</span></span>
<span class="line"><span style="color:#24292e;">  |-- sbin            # 系统管理程序</span></span>
<span class="line"><span style="color:#24292e;">  |-- tmp             # 临时文件的目录</span></span>
<span class="line"><span style="color:#24292e;">  |-- var             # 系统产生的经常变化的文件，例如日志文件、应用程序的数据文件等等</span></span>
<span class="line"><span style="color:#24292e;">  \`-- usr             # 一般不需要修改的应用程序，命令程序文件、程序库、手册和其它文档</span></span>
<span class="line"><span style="color:#24292e;">    |-- etc             # 设置文件</span></span>
<span class="line"><span style="color:#24292e;">    |-- systemd         # 系统守护进程</span></span>
<span class="line"><span style="color:#24292e;">    |   \`--system         # 系统服务</span></span>
<span class="line"><span style="color:#24292e;">    |-- bin             # 增加的用户程序</span></span>
<span class="line"><span style="color:#24292e;">    |-- lib             # 库文件</span></span>
<span class="line"><span style="color:#24292e;">    |-- sbin            # 增加的管理程序</span></span>
<span class="line"><span style="color:#24292e;">    |-- share           # 结构独立的数据</span></span>
<span class="line"><span style="color:#24292e;">    |-- local           # 本地产生的增加的应用程序</span></span>
<span class="line"><span style="color:#24292e;">    |-- x11             # X Window系统</span></span>
<span class="line"><span style="color:#24292e;">    |-- dict            # 字典</span></span>
<span class="line"><span style="color:#24292e;">    |-- doc             # 追加的文档</span></span>
<span class="line"><span style="color:#24292e;">    |-- games           # 游戏和教学文件</span></span>
<span class="line"><span style="color:#24292e;">    |-- info            # 存放GNU信息文件</span></span>
<span class="line"><span style="color:#24292e;">    |-- man             # 在线帮助文件</span></span>
<span class="line"><span style="color:#24292e;">    |-- include         #  C开发工具的头文件</span></span>
<span class="line"><span style="color:#24292e;">    \`-- src             # 程序的源代码</span></span></code></pre></div><h2 id="系统服务" tabindex="-1">系统服务 <a class="header-anchor" href="#系统服务" aria-label="Permalink to &quot;系统服务&quot;">​</a></h2><p>系统服务目录位于：<code>/usr/lib/systemd/system</code></p><h2 id="启动顺序" tabindex="-1">启动顺序 <a class="header-anchor" href="#启动顺序" aria-label="Permalink to &quot;启动顺序&quot;">​</a></h2><p>Linux会按以下顺序读取4个环境配置文件：</p><ol><li><code>/etc/profile</code>：所有用户登录时均执行此脚本</li><li><code>/etc/bashrc</code>：所有用户运行<code>bash shell</code>时均执行此脚本</li><li><code>~/.profile</code>：当前户登录时执行此脚本</li><li><code>~/.bashrc</code>：当前用户运行<code>bash shell</code>时执行此脚本</li></ol>`,10),o=[p];function c(i,r,t,y,d,h){return n(),a("div",null,o)}const m=s(l,[["render",c]]);export{u as __pageData,m as default};