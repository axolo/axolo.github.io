(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{588:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql多版本单服务器共存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql多版本单服务器共存"}},[s._v("#")]),s._v(" MySQL多版本单服务器共存")]),s._v(" "),t("h2",{attrs:{id:"mysql-8-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-8-x"}},[s._v("#")]),s._v(" MySQL 8.x")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/blog/mysql-8-install.html"}},[s._v("CentOS 安装 MySQL 8")])],1),s._v(" "),t("h2",{attrs:{id:"mysql-5-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-7"}},[s._v("#")]),s._v(" MySQL 5.7")]),s._v(" "),t("h3",{attrs:{id:"依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 通常依赖早已被安装，可事先使用`yum list installed | gerp -E "make|gcc-c++..."`查询')]),s._v("\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" gcc-c++ cmake bison-devel ncurses ncurses-devel libaio-devel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 由于服务器环境是CentOS i386，选择5.7版本的Linux Generic的i686版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.25-linux-glibc2.12-i686.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压到`/opt`目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf mysql-5.7.25-linux-glibc2.12-i686.tar.gz -C /opt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686\n|-- bin                 # 命令\n|-- data                # 数据\n|-- log                 # 日志\n|-- support-files       # 支持\n|   `-- mysql.server    # 服务\n|-- mysql.sock          # 端口\n`-- my.cnf              # 配置\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# my.cnf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为了防止乱码建议设定默认编码格式为：utf8mb4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[mysqld]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("3307")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("basedir")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("datadir")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686/data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("socket")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686/mysql.sock")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("log-error")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686/log/error.log")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("default-character-set")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("utf8mb4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[client]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("3307")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("socket")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686/mysql.sock")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("default-character-set")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("utf8mb4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[mysql]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("default-character-set")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("utf8mb4")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[s._v("#")]),s._v(" 权限")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" mysql\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" mysql -g mysql\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R mysql:mysql /opt/mysql-5.7.25-linux-glibc2.12-i686/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /opt/mysql-5.7.25-linux-glibc2.12-i686/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务"}},[s._v("#")]),s._v(" 服务")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# support-files/mysql.server 对应的部分修改为")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("basedir")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("datadir")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686/data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("conf")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686/etc/my.cnf")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./bin/mysqld --defaults-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my.cnf --initialize --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请务必留意输出的`temporary password`部分，获得`root`初始密码")]),s._v("\n./support-files/mysql.server start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[s._v("#")]),s._v(" 命令行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./bin/mysql --socket"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql.sock --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(" -u root -p\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入获得的初始密码，以root身份进入系统，进行必要的初期操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建议开启高强度密码验证插件：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install plugin validate_password soname 'validate_password.so'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[s._v("#")]),s._v(" 脚本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mysql")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/mysql-5.7.25-linux-glibc2.12-i686\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--help'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 帮助")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${0}")]),s._v(' [start | stop | --help]"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'start'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务器")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql}")]),s._v("/bin/mysqld --defaults-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql}")]),s._v("/my.cnf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql}")]),s._v("/support-files/mysql.server start\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stop'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止服务器")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql}")]),s._v("/bin/mysqladmin --socket"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql}")]),s._v("/mysql.sock --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" -uroot -ppass\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("                                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入命令行")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql}")]),s._v("/bin/mysql --socket"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mysql}")]),s._v("/mysql.sock --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(" -uroot -ppass\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);