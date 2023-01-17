import{_ as s,o as a,c as n,e as l}from"./app.077a4a1b.js";const A=JSON.parse('{"title":"基于WSL搭建Node.js开发环境","description":"WSL 可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境，且不会产生传统虚拟机或双启动设置开销，提供 Node.js on Linux 上佳体验。","frontmatter":{"title":"基于WSL搭建Node.js开发环境","description":"WSL 可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境，且不会产生传统虚拟机或双启动设置开销，提供 Node.js on Linux 上佳体验。","time":"2022-01-20T00:00:00.000Z","category":"运维","tags":["Linux","Node.js"]},"headers":[{"level":2,"title":"安装WSL","slug":"安装wsl","link":"#安装wsl","children":[{"level":3,"title":"微软应用商店","slug":"微软应用商店","link":"#微软应用商店","children":[]},{"level":3,"title":"命令行安装","slug":"命令行安装","link":"#命令行安装","children":[]},{"level":3,"title":"下载安装","slug":"下载安装","link":"#下载安装","children":[]}]},{"level":2,"title":"使用WSL","slug":"使用wsl","link":"#使用wsl","children":[]},{"level":2,"title":"配置Ubuntu源","slug":"配置ubuntu源","link":"#配置ubuntu源","children":[]},{"level":2,"title":"启用SSH登录","slug":"启用ssh登录","link":"#启用ssh登录","children":[]},{"level":2,"title":"安装Node.js","slug":"安装node-js","link":"#安装node-js","children":[{"level":3,"title":"Node.js二进制包","slug":"node-js二进制包","link":"#node-js二进制包","children":[]},{"level":3,"title":"NodeSource","slug":"nodesource","link":"#nodesource","children":[]},{"level":3,"title":"nvm","slug":"nvm","link":"#nvm","children":[]}]},{"level":2,"title":"安装Yarn","slug":"安装yarn","link":"#安装yarn","children":[]},{"level":2,"title":"安装git","slug":"安装git","link":"#安装git","children":[]},{"level":2,"title":"安装nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":2,"title":"安装MySql","slug":"安装mysql","link":"#安装mysql","children":[]},{"level":2,"title":"安装Python2","slug":"安装python2","link":"#安装python2","children":[]},{"level":2,"title":"安装Java","slug":"安装java","link":"#安装java","children":[]},{"level":2,"title":"Maven","slug":"maven","link":"#maven","children":[{"level":3,"title":"安装Maven","slug":"安装maven","link":"#安装maven","children":[]},{"level":3,"title":"配置仓库地址","slug":"配置仓库地址","link":"#配置仓库地址","children":[]},{"level":3,"title":"Spring Boot项目相关命令","slug":"spring-boot项目相关命令","link":"#spring-boot项目相关命令","children":[]}]}],"relativePath":"node-on-wsl.md","lastUpdated":1673773212000}'),e={name:"node-on-wsl.md"},o=l(`<h1 id="基于wsl搭建node-js开发环境" tabindex="-1">基于WSL搭建Node.js开发环境 <a class="header-anchor" href="#基于wsl搭建node-js开发环境" aria-hidden="true">#</a></h1><p>适用于 Linux 的 Windows 子系统（WSL）可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境（包括大多数命令行工具、实用工具和应用程序），且不会产生传统虚拟机或双启动设置开销。</p><p>以下操作基于Windows 10 企业版 LTSC 21H2版，安装默认的WSL发行版（Ubuntu 20.04 LTS），配置Node.js开发环境。</p><h2 id="安装wsl" tabindex="-1">安装WSL <a class="header-anchor" href="#安装wsl" aria-hidden="true">#</a></h2><p>可以选择以下任一方式进行安装。但由于Windows 10 企业版 LTSC默认未搭载<a href="#%E5%BE%AE%E8%BD%AF%E5%BA%94%E7%94%A8%E5%95%86%E5%BA%97">微软应用商店</a>（AppStore），且受限于网络环境，<a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%89%E8%A3%85">命令行安装</a>模式容易失败，推荐使用<a href="#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85">下载安装</a>进行安装。</p><h3 id="微软应用商店" tabindex="-1">微软应用商店 <a class="header-anchor" href="#微软应用商店" aria-hidden="true">#</a></h3><p>搜索“Ubuntu”下载安装。</p><h3 id="命令行安装" tabindex="-1">命令行安装 <a class="header-anchor" href="#命令行安装" aria-hidden="true">#</a></h3><p>以管理员身份运行PowerShell使用以下命令安装。</p><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d Ubuntu</span></span>
<span class="line"></span></code></pre></div><h3 id="下载安装" tabindex="-1">下载安装 <a class="header-anchor" href="#下载安装" aria-hidden="true">#</a></h3><p><a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#downloading-distributions" target="_blank" rel="noreferrer">下载WSL发行版</a>，后以管理员身份运行PowerShell使用以下命令安装。</p><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">Add-AppxPackage</span><span style="color:#A6ACCD;"> .\\Ubuntu_2004.</span><span style="color:#F78C6C;">2020.424</span><span style="color:#A6ACCD;">.0_x64.appx</span></span>
<span class="line"></span></code></pre></div><blockquote><p>设置默认版本为WSL 2</p></blockquote><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">wsl </span><span style="color:#89DDFF;">--</span><span style="color:#82AAFF;">set-default</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">version </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span></code></pre></div><h2 id="使用wsl" tabindex="-1">使用WSL <a class="header-anchor" href="#使用wsl" aria-hidden="true">#</a></h2><table><thead><tr><th>方式</th><th>操作</th><th>推荐</th></tr></thead><tbody><tr><td>VSCode</td><td>左下角 → 打开远程窗口 → New WSL Window use Distro...</td><td>是</td></tr><tr><td>右键菜单</td><td>Shift + 右键 → 在此处打开Linux Shell</td><td></td></tr><tr><td>快捷方式</td><td>开始菜单 → Ubuntu LTS 快捷方式</td><td></td></tr></tbody></table><h2 id="配置ubuntu源" tabindex="-1">配置Ubuntu源 <a class="header-anchor" href="#配置ubuntu源" aria-hidden="true">#</a></h2><p>这里示例使用<a href="https://developer.aliyun.com/mirror/ubuntu" target="_blank" rel="noreferrer">Ubuntu阿里源</a></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/apt/sources.list</span></span>
<span class="line"></span></code></pre></div><p>替换默认的 <a href="http://archive.ubuntu.com/" target="_blank" rel="noreferrer">http://archive.ubuntu.com/</a> 为 <a href="http://mirrors.aliyun.com" target="_blank" rel="noreferrer">mirrors.aliyun.com</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="启用ssh登录" tabindex="-1">启用SSH登录 <a class="header-anchor" href="#启用ssh登录" aria-hidden="true">#</a></h2><blockquote><p>安装SSH服务</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">passwd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 修改root密码</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-server</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 安装SSH服务</span></span>
<span class="line"></span></code></pre></div><blockquote><p>启用root用户密码SSH登录</p></blockquote><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># vi /etc/ssh/sshd_config</span></span>
<span class="line"><span style="color:#A6ACCD;">PasswordAuthentication yes        </span><span style="color:#676E95;font-style:italic;"># 开启密码验证登录</span></span>
<span class="line"><span style="color:#A6ACCD;">PermitRootLogin yes               </span><span style="color:#676E95;font-style:italic;"># 开启root用户登录</span></span>
<span class="line"></span></code></pre></div><blockquote><p>启动SSH服务</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"></span></code></pre></div><h2 id="安装node-js" tabindex="-1">安装Node.js <a class="header-anchor" href="#安装node-js" aria-hidden="true">#</a></h2><p>可根据需要选择以下任一方式安装Node.js。若需要多版本切换，建议使用nvm方式安装。</p><p>微软官方亦有<a href="https://docs.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl" target="_blank" rel="noreferrer">WSL Node.js</a>安装文档，供参考。</p><h3 id="node-js二进制包" tabindex="-1">Node.js二进制包 <a class="header-anchor" href="#node-js二进制包" aria-hidden="true">#</a></h3><p>参见<a href="https://github.com/nodejs/help/wiki/Installation" target="_blank" rel="noreferrer">Node.js二进制包安装</a>。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://nodejs.org/dist/v16.</span><span style="color:#F78C6C;">13.2</span><span style="color:#C3E88D;">/node-v16.13.2.tar.gz</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-xzvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node-v16.13.2.tar.gz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/lib/nodejs</span></span>
<span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.profile</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 添加到PATH，增加以下一行</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.profile</span></span>
<span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 安装成功输出Node.js版本</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 安装成功输出NPM版本</span></span>
<span class="line"></span></code></pre></div><h3 id="nodesource" tabindex="-1">NodeSource <a class="header-anchor" href="#nodesource" aria-hidden="true">#</a></h3><p>参见<a href="https://github.com/nodesource/distributions#deb" target="_blank" rel="noreferrer">NodeSource Ubuntu</a>安装。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-fsSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://deb.nodesource.com/setup_17.x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-E</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nodejs</span></span>
<span class="line"></span></code></pre></div><h3 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-hidden="true">#</a></h3><p>采用以下命令安装nvm：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.</span><span style="color:#F78C6C;">39.1</span><span style="color:#C3E88D;">/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span></code></pre></div><p>若以上方式失败，请下载发行包安装nvm：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.1.tar.gz</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-xzvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v0.39.1.tar.gz</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nvm-0.39.1</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/install.sh</span></span>
<span class="line"></span></code></pre></div><p>安装Node.js</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">14.18.3</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 安装Node.js v14.18.3 LTS</span></span>
<span class="line"></span></code></pre></div><h2 id="安装yarn" tabindex="-1">安装Yarn <a class="header-anchor" href="#安装yarn" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># version 1.x</span></span>
<span class="line"></span></code></pre></div><blockquote><p>解决yarn node-sass失败</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node-sass-install</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 或</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sass_binary_site</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://cdn.npm.taobao.org/dist/node-sass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"></span></code></pre></div><h2 id="安装git" tabindex="-1">安装git <a class="header-anchor" href="#安装git" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">credential.helper</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">store</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 记住密码</span></span>
<span class="line"></span></code></pre></div><h2 id="安装nginx" tabindex="-1">安装nginx <a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 安装nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 启动nginx代理服务</span></span>
<span class="line"></span></code></pre></div><h2 id="安装mysql" tabindex="-1">安装MySql <a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 默认安装MySQL 8</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 启动MySQL数据库</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-uroot</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 首次访问务必root用户权限</span></span>
<span class="line"></span></code></pre></div><h2 id="安装python2" tabindex="-1">安装Python2 <a class="header-anchor" href="#安装python2" aria-hidden="true">#</a></h2><p>WSL Ubuntu默认安装了Python3，如需使用Python2请使用以下命令安装：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python2</span></span>
<span class="line"><span style="color:#FFCB6B;">python2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装成功输出Python2版本号</span></span>
<span class="line"></span></code></pre></div><h2 id="安装java" tabindex="-1">安装Java <a class="header-anchor" href="#安装java" aria-hidden="true">#</a></h2><p>需要使用Java环境的，建议安装OpenJDK和Maven。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openjdk-jdk-</span><span style="color:#F78C6C;">11</span></span>
<span class="line"><span style="color:#FFCB6B;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 安装成功输出Java版本号</span></span>
<span class="line"></span></code></pre></div><h2 id="maven" tabindex="-1">Maven <a class="header-anchor" href="#maven" aria-hidden="true">#</a></h2><h3 id="安装maven" tabindex="-1">安装Maven <a class="header-anchor" href="#安装maven" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install maven</span></span>
<span class="line"><span style="color:#A6ACCD;">mvn --version     # 安装成功输出Maven版本号</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="配置仓库地址" tabindex="-1">配置仓库地址 <a class="header-anchor" href="#配置仓库地址" aria-hidden="true">#</a></h3><p>Maven安装目录<code>conf/settings.xml</code>或当前用户<code>.m2/setttings.xml</code></p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mirrors</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mirror</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">aliyunmaven</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">mirrorOf</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mirrorOf</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">阿里云公共仓库</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">https://maven.aliyun.com/repository/public</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mirror</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">mirrors</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="spring-boot项目相关命令" tabindex="-1">Spring Boot项目相关命令 <a class="header-anchor" href="#spring-boot项目相关命令" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your-project</span></span>
<span class="line"><span style="color:#FFCB6B;">mvn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">spring-boot:run</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 开发</span></span>
<span class="line"><span style="color:#FFCB6B;">mvn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clean</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;"># 清理</span></span>
<span class="line"><span style="color:#FFCB6B;">mvn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compile</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 编译</span></span>
<span class="line"><span style="color:#FFCB6B;">mvn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 打包</span></span>
<span class="line"><span style="color:#FFCB6B;">mvn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"></span></code></pre></div><blockquote><p>方跃明 2022-01-20</p></blockquote>`,70),p=[o];function t(r,c,i,y,C,d){return a(),n("div",null,p)}const u=s(e,[["render",t]]);export{A as __pageData,u as default};
