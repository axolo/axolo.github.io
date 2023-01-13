import{_ as s,o as n,c as a,b as l}from"./app.d0dcae55.js";const h=JSON.parse('{"title":"Linux目录结构","description":"掌握一个操作系统，从它的目录结构开始，啥东西一般放哪得心知肚明。","frontmatter":{"title":"Linux目录结构","description":"掌握一个操作系统，从它的目录结构开始，啥东西一般放哪得心知肚明。","time":"2021-12-19T00:00:00.000Z","categories":"Linux","tags":["CentOS","Linux"]},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"系统服务","slug":"系统服务","link":"#系统服务","children":[]},{"level":2,"title":"启动顺序","slug":"启动顺序","link":"#启动顺序","children":[]}],"relativePath":"linux-directory.md","lastUpdated":1673342895000}'),e={name:"linux-directory.md"},p=l(`<h1 id="linux目录结构" tabindex="-1">Linux目录结构 <a class="header-anchor" href="#linux目录结构" aria-hidden="true">#</a></h1><p>Linux目录树的主要部分有<code>/</code>、<code>/usr</code>、<code>/var</code>、<code>/home</code>等等。 下面是一个典型的Linux目录结构如下：</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">\`-- /               # 根目录</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- efi             # EFI启动分区</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- boot            # 存放内核以及启动所需的文件等</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- etc             # 系统的配置文件（系统级）</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   |-- rc            # 主启动文件，不要修改它</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   |-- rc.conf       # 决定启动哪些系统自带的守护进程，不要修改它</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   |-- rc.local      # 启动文件，覆盖rc</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   |-- rc.conf.local # 系统启动时启动的守护进程，覆盖rc.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   |-- profile       # 全局登录启动文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   \`-- bashrc        # 全局bash启动文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- root            # 超级用户的主目录</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   |-- .profile      # 超级用户登录启动文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   \`-- .bashrc       # 超级用bash启动文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- home            # 用户文件的主目录，用户数据存放在其主目录中</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- mnt             # 临时的映射文件系统，如挂载光驱到cdrom</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- dev             # 设备文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- bin             # 必要的命令</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- lib             # 必要的运行库</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- proc            # 存放存储进程和系统信息</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- sbin            # 系统管理程序</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- tmp             # 临时文件的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">  |-- var             # 系统产生的经常变化的文件，例如日志文件、应用程序的数据文件等等</span></span>
<span class="line"><span style="color:#A6ACCD;">  \`-- usr             # 一般不需要修改的应用程序，命令程序文件、程序库、手册和其它文档</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- etc             # 设置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- systemd         # 系统守护进程</span></span>
<span class="line"><span style="color:#A6ACCD;">    |   \`--system         # 系统服务</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- bin             # 增加的用户程序</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- lib             # 库文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- sbin            # 增加的管理程序</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- share           # 结构独立的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- local           # 本地产生的增加的应用程序</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- x11             # X Window系统</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- dict            # 字典</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- doc             # 追加的文档</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- games           # 游戏和教学文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- info            # 存放GNU信息文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- man             # 在线帮助文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- include         #  C开发工具的头文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`-- src             # 程序的源代码</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="系统服务" tabindex="-1">系统服务 <a class="header-anchor" href="#系统服务" aria-hidden="true">#</a></h2><p>系统服务目录位于：<code>/usr/lib/systemd/system</code></p><h2 id="启动顺序" tabindex="-1">启动顺序 <a class="header-anchor" href="#启动顺序" aria-hidden="true">#</a></h2><p>Linux会按以下顺序读取4个环境配置文件：</p><ol><li><code>/etc/profile</code>：所有用户登录时均执行此脚本</li><li><code>/etc/bashrc</code>：所有用户运行<code>bash shell</code>时均执行此脚本</li><li><code>~/.profile</code>：当前户登录时执行此脚本</li><li><code>~/.bashrc</code>：当前用户运行<code>bash shell</code>时执行此脚本</li></ol><blockquote><p>方跃明 2021-12-19</p></blockquote>`,10),c=[p];function o(i,t,r,C,A,d){return n(),a("div",null,c)}const D=s(e,[["render",o]]);export{h as __pageData,D as default};
