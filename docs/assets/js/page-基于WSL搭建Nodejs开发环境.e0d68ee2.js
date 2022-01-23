(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{621:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基于wsl搭建node-js开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于wsl搭建node-js开发环境"}},[s._v("#")]),s._v(" 基于WSL搭建Node.js开发环境")]),s._v(" "),a("p",[s._v("适用于 Linux 的 Windows 子系统（WSL）可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境（包括大多数命令行工具、实用工具和应用程序），且不会产生传统虚拟机或双启动设置开销。")]),s._v(" "),a("p",[s._v("以下操作基于Windows 10 企业版 LTSC 21H2版，安装默认的WSL发行版（Ubuntu 20.04 LTS），配置Node.js开发环境。")]),s._v(" "),a("h2",{attrs:{id:"安装wsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装wsl"}},[s._v("#")]),s._v(" 安装WSL")]),s._v(" "),a("p",[s._v("可以选择以下任一方式进行安装。但由于Windows 10 企业版 LTSC默认未搭载"),a("a",{attrs:{href:"#%E5%BE%AE%E8%BD%AF%E5%BA%94%E7%94%A8%E5%95%86%E5%BA%97"}},[s._v("微软应用商店")]),s._v("（AppStore），且受限于网络环境，"),a("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AE%89%E8%A3%85"}},[s._v("命令行安装")]),s._v("模式容易失败，推荐使用"),a("a",{attrs:{href:"#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85"}},[s._v("下载安装")]),s._v("进行安装。")]),s._v(" "),a("h3",{attrs:{id:"微软应用商店"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微软应用商店"}},[s._v("#")]),s._v(" 微软应用商店")]),s._v(" "),a("p",[s._v("搜索“Ubuntu”下载安装。")]),s._v(" "),a("h3",{attrs:{id:"命令行安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行安装"}},[s._v("#")]),s._v(" 命令行安装")]),s._v(" "),a("p",[s._v("以管理员身份运行PowerShell使用以下命令安装。")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("wsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d Ubuntu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#downloading-distributions",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载WSL发行版"),a("OutboundLink")],1),s._v("，后以管理员身份运行PowerShell使用以下命令安装。")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Add-AppxPackage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\Ubuntu_2004"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("2020"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("424"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0_x64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("appx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"使用wsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用wsl"}},[s._v("#")]),s._v(" 使用WSL")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("方式")]),s._v(" "),a("th",[s._v("操作")]),s._v(" "),a("th",[s._v("推荐")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("右键菜单")]),s._v(" "),a("td",[s._v("Shift + 右键 → 在此处打开Linux Shell")]),s._v(" "),a("td",[s._v("是")])]),s._v(" "),a("tr",[a("td",[s._v("快捷方式")]),s._v(" "),a("td",[s._v("开始菜单 → Ubuntu LTS 快捷方式")]),s._v(" "),a("td")])])]),s._v(" "),a("h2",{attrs:{id:"配置ubuntu源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置ubuntu源"}},[s._v("#")]),s._v(" 配置Ubuntu源")]),s._v(" "),a("p",[s._v("这里示例使用"),a("a",{attrs:{href:"https://developer.aliyun.com/mirror/ubuntu",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu阿里源"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/apt/sources.list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("替换默认的 http://archive.ubuntu.com/ 为 mirrors.aliyun.com")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"启用ssh登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用ssh登录"}},[s._v("#")]),s._v(" 启用SSH登录")]),s._v(" "),a("blockquote",[a("p",[s._v("安装SSH服务")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" root                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改root密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装SSH服务")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("启用root用户密码SSH登录")])]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vi /etc/ssh/sshd_config")]),s._v("\nPasswordAuthentication yes        # 开启密码验证登录\nPermitRootLogin yes               # 开启root用户登录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("启动SSH服务")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安装node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装node-js"}},[s._v("#")]),s._v(" 安装Node.js")]),s._v(" "),a("p",[s._v("可根据需要选择以下任一方式安装Node.js。若需要多版本切换，建议使用nvm方式安装。")]),s._v(" "),a("p",[s._v("微软官方亦有"),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl",target:"_blank",rel:"noopener noreferrer"}},[s._v("WSL Node.js"),a("OutboundLink")],1),s._v("安装文档，供参考。")]),s._v(" "),a("h3",{attrs:{id:"node-js二进制包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js二进制包"}},[s._v("#")]),s._v(" Node.js二进制包")]),s._v(" "),a("p",[s._v("参见"),a("a",{attrs:{href:"https://github.com/nodejs/help/wiki/Installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js二进制包安装"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nodejs.org/dist/v16.13.2/node-v16.13.2.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf node-v16.13.2.tar.gz -C /usr/local/lib/nodejs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.profile "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加到PATH，增加以下一行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ~/.profile\nnode --version  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装成功输出Node.js版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" --version   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装成功输出NPM版本")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"nodesource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodesource"}},[s._v("#")]),s._v(" NodeSource")]),s._v(" "),a("p",[s._v("参见"),a("a",{attrs:{href:"https://github.com/nodesource/distributions#deb",target:"_blank",rel:"noopener noreferrer"}},[s._v("NodeSource Ubuntu"),a("OutboundLink")],1),s._v("安装。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://deb.nodesource.com/setup_17.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -E "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nodejs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[s._v("#")]),s._v(" nvm")]),s._v(" "),a("p",[s._v("采用以下命令安装nvm：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("若以上方式失败，请下载发行包安装nvm：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.1.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf v0.39.1.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nvm-0.39.1\n./install.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("安装Node.js")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.18")]),s._v(".3   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装Node.js v14.18.3 LTS")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[s._v("#")]),s._v(" 安装nginx")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动nginx代理服务")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装MySql")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认安装MySQL 8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql start  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动MySQL数据库服务")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"安装python2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装python2"}},[s._v("#")]),s._v(" 安装Python2")]),s._v(" "),a("p",[s._v("WSL Ubuntu默认安装了Python3，如需使用Python2请使用以下命令安装：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python2\npython2 --version "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装成功输出Python2版本号")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"安装java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装java"}},[s._v("#")]),s._v(" 安装Java")]),s._v(" "),a("p",[s._v("需要使用Java环境的，建议安装OpenJDK和Maven。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openjdk-jdk-11\njava --version    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装成功输出Java版本号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" maven\nmvn --version     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装成功输出Maven版本号")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("示例：运行Spring Boot项目")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" your-project\nmvn spring-boot:run\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("方跃明\n2022-01-20")])])])}),[],!1,null,null,null);t.default=e.exports}}]);