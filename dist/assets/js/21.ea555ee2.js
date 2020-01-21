(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{400:function(a,s,t){a.exports=t.p+"assets/img/zabbix-schema.1f2ef9e8.jpg"},401:function(a,s,t){a.exports=t.p+"assets/img/zabbix-proxy.c72249bb.png"},459:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"zabbix安装笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zabbix安装笔记"}},[a._v("#")]),a._v(" Zabbix安装笔记")]),a._v(" "),e("p",[a._v("详细安装步骤参见："),e("a",{attrs:{href:"https://www.zabbix.com/documentation/3.0/manual/installation/install_from_packages",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方安装手册"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"zabbix-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-server"}},[a._v("#")]),a._v(" Zabbix Server")]),a._v(" "),e("p",[e("img",{attrs:{src:t(400),alt:"Zabbix部署示意图"}})]),a._v(" "),e("h3",{attrs:{id:"安装数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装数据库"}},[a._v("#")]),a._v(" 安装数据库")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装 MariaDB 服务器和客户端")]),a._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mariadb-server mariadb\nsystemctl start mariadb\nmysql -uroot -ppassword    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入MySQL命令行")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-- MariaDB新建zabbix用户")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("user")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" password"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PASSWORD"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zabbix'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zabbix'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" zabbix "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CHARACTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" utf8 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLLATE")]),a._v(" utf8_general_ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nFLUSH "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nQUIT\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"安装服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装服务端"}},[a._v("#")]),a._v(" 安装服务端")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh http://repo.zabbix.com/zabbix/3.0/rhel/7/x86_64/zabbix-release-3.0-1.el7.noarch.rpm\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" zabbix-server-mysql zabbix-web-mysql\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/share/doc/zabbix-server-mysql-3.0.3\nzcat create.sql.gz "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" mysql -uzabbix -pzabbix zabbix\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"修改服务器配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改服务器配置"}},[a._v("#")]),a._v(" 修改服务器配置")]),a._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## vi /etc/zabbix/zabbix_server.conf")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DBHost")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("localhost")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DBName")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("zabbix")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DBUser")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("zabbix")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DBPassword")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("zabbix")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"修改web服务器配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改web服务器配置文件"}},[a._v("#")]),a._v(" 修改WEB服务器配置文件")]),a._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## vi /etc/httpd/conf.d/zabbix.conf")]),a._v("\nphp_value data.timezone Asia/Shanghai\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"启动zabbix服务器和web服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动zabbix服务器和web服务器"}},[a._v("#")]),a._v(" 启动Zabbix服务器和WEB服务器")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("systemctl start zabbix-server\nsystemctl start httpd\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"zabbix-agent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-agent"}},[a._v("#")]),a._v(" Zabbix Agent")]),a._v(" "),e("p",[e("img",{attrs:{src:t(401),alt:"Zabbix分布式部署示意图"}})]),a._v(" "),e("h3",{attrs:{id:"centos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[a._v("#")]),a._v(" CentOS")]),a._v(" "),e("h4",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" zabbix-agent\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vi /etc/zabbix/zabbix_agent.conf")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("LogFile")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("/var/log/zabbix/zabbix_agentd.log   # 日志")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Server")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("127.0.0.1                            # Zabbix Server（直接连接）或者Zabbix Proxy（通过Proxy）")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Hostname")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("Zabbix Server                      # 对应zabbix web里面的host，不一定是os本机名称")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ServerActive")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("127.0.0.1                      # Zabbix Server或Zabbix Proxy")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h4",{attrs:{id:"配置防火墙，打开zabbix-agent端口（默认入站端口10050）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置防火墙，打开zabbix-agent端口（默认入站端口10050）"}},[a._v("#")]),a._v(" 配置防火墙，打开Zabbix Agent端口（默认入站端口10050）")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("systemctl start zabbix-agent\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),e("h4",{attrs:{id:"下载并解压到运行目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载并解压到运行目录"}},[a._v("#")]),a._v(" 下载并解压到运行目录")]),a._v(" "),e("p",[e("a",{attrs:{href:"http://www.zabbix.com/download.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("Zabbix pre-compiled agents for Windows"),e("OutboundLink")],1)]),a._v(" "),e("h4",{attrs:{id:"配置conf-conf-zabbix-agentd-win-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置conf-conf-zabbix-agentd-win-conf"}},[a._v("#")]),a._v(" 配置conf(conf\\zabbix-agentd.win.conf)")]),a._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("LogFile")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("c:\\zabbix_agentd.log  # 日志")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Server")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("127.0.0.1              # Zabbix服务器")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Hostname")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("Windows Host         # 对应zabbix web里面的host，不一定是本机名称")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ServerActive")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("127.0.0.1        # Zabbix服务器")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("ul",[e("li",[a._v("注册为Windows服务："),e("code",[a._v("bin\\zabbix_agentd.exe -c \\conf\\zabbix_agentd.win.conf –i")])]),a._v(" "),e("li",[a._v("打开Zabbix Agent端口（默认入站端口10050）")]),a._v(" "),e("li",[a._v("从Windows服务启动Zabbix Agent客户端")])]),a._v(" "),e("h2",{attrs:{id:"zabbix-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-proxy"}},[a._v("#")]),a._v(" Zabbix Proxy")]),a._v(" "),e("h3",{attrs:{id:"安装服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装服务器"}},[a._v("#")]),a._v(" 安装服务器")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh http://repo.zabbix.com/zabbix/3.0/rhel/7/x86_64/zabbix-release-3.0-1.el7.noarch.rpm\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mariadb-server mariadb zabbix-proxy-mysql\nsystemctl start mariadb\nmysql                       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入MySQL命令行")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"分配帐号、授权及建立数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分配帐号、授权及建立数据库"}},[a._v("#")]),a._v(" 分配帐号、授权及建立数据库")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("user")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" password"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PASSWORD"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zabbix'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zabbix'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nFLUSH "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" zabbix_proxy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CHARACTER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" utf8 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLLATE")]),a._v(" utf8_general_ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nQUIT\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"导入数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库"}},[a._v("#")]),a._v(" 导入数据库")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cd /usr/share/doc/zabbix-proxy-mysql-3.0.3")]),a._v("\nzcat schema.sql.gz "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" mysql -uzabbix -pzabbix zabbix_proxy\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"修改服务器配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改服务器配置文件"}},[a._v("#")]),a._v(" 修改服务器配置文件")]),a._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vi /etc/zabbix/zabbix_proxy.conf")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Server")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("zabbix.server.url      # Zabbix Server 所在IP或者DNS Name")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("Hostname")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("proxy.zabbix.name    # Zabbix Proxy 名字（对应Server里的Proxies名字）")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DBHost")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("localhost")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DBName")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("zabbix_proxy")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DBUser")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("zabbix")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DBPassword")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("zabbix")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h3",{attrs:{id:"打开zabbix-agent端口（默认入站端口10050）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打开zabbix-agent端口（默认入站端口10050）"}},[a._v("#")]),a._v(" 打开Zabbix Agent端口（默认入站端口10050）")]),a._v(" "),e("h3",{attrs:{id:"启动zabbix服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动zabbix服务器"}},[a._v("#")]),a._v(" 启动Zabbix服务器")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("systemctl start zabbix-proxy\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"zabbix-server-web-对应的设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-server-web-对应的设置"}},[a._v("#")]),a._v(" Zabbix Server Web 对应的设置")]),a._v(" "),e("ul",[e("li",[a._v("添加代理：Administration -> Proxies -> Create proxy -> Proxy name -> proxy.zabbix.name")]),a._v(" "),e("li",[a._v("添加代理下的主机：Configuration -> Hosts -> Create Host -> Monitored by proxy -> proxy.zabbix.name")])]),a._v(" "),e("h3",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),e("ul",[e("li",[a._v("Proxy只能使用proxy的数据库，不能使用Server的数据库")]),a._v(" "),e("li",[a._v("注意Server端和Proxy端的IP/DNS名称、配置主机名称、Web端名称、各选项正确且一一对应")])]),a._v(" "),e("h2",{attrs:{id:"zabbix-snmp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-snmp"}},[a._v("#")]),a._v(" Zabbix SNMP")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Windows Server 2008 R2")]),a._v(" "),e("ul",[e("li",[a._v("客户机端安装：SNMP Service")]),a._v(" "),e("li",[a._v("客户机端设置：服务 -> SNMP Service -> 安全 -> 接受的社区名称：public，只读 -> 添加接受主机：Zabbix服务器")]),a._v(" "),e("li",[a._v("客户机端防火墙：入站规则 -> 默认端口161 -> 协议UDP")]),a._v(" "),e("li",[a._v("Zabbix Web端添加SNMP主机及端口号")])])]),a._v(" "),e("li",[e("p",[a._v("CentOS")]),a._v(" "),e("ul",[e("li",[a._v("安装："),e("code",[a._v("yum install net-snmp net-snmp-utils")])]),a._v(" "),e("li",[a._v("参见："),e("a",{attrs:{href:"https://blog.csdn.net/sinat_21302587/article/details/75099915",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/sinat_21302587/article/details/75099915"),e("OutboundLink")],1)])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);