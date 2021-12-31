(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{619:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"配置oracle-pl-sql-developer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置oracle-pl-sql-developer"}},[e._v("#")]),e._v(" 配置Oracle PL/SQL Developer")]),e._v(" "),a("p",[e._v("参见："),a("a",{attrs:{href:"http://blog.csdn.net/helifengwell/article/details/5820434",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://blog.csdn.net/helifengwell/article/details/5820434"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Instant Client")]),e._v(" "),a("p",[e._v("先到Oracle网站下载"),a("a",{attrs:{href:"http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Instant Client"),a("OutboundLink")],1),e._v("。\n根据你的操作系统选择不同的Instant Client版本。解压之后放在你喜欢的目录即可.例如:D:/instantclient_11_2。")])]),e._v(" "),a("li",[a("p",[e._v("在D:/instantclient_11_2目录下新建目录network，在network目录下再新建admin目录，在admin目录下新建文件tnsnames.ora，使用文本编辑器打开写入如下内容:")]),e._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("MWDB")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("(DESCRIPTION")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("(ADDRESS_LIST")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("(ADDRESS")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("(PROTOCOL = TCP)(HOST = 192.168.0.58)(PORT = 1521))")]),e._v("\n    )\n    "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("(CONNECT_DATA")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("(SERVICE_NAME")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("MWDB)")]),e._v("\n    )\n)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("blockquote",[a("p",[e._v("MWDB =：表示定义远程服务器的在本地主机名\nSERVICE_NAME =：远程数据库实例名")])])]),e._v(" "),a("li",[a("p",[e._v("添加一个环境变量，名为TNS_ADMIN，值为tnsnames.ora文件所在路径。比如我的本机为：D:/instantclient_11_2/network/admin")])]),e._v(" "),a("li",[a("p",[e._v("设置ORACLE的语言，添加环境变量NLS_LANG，值为SIMPLIFIED CHINESE_CHINA.ZHS16GBK。如果不清楚远程数据库的ORACLE 语言，可以ssh或者telnet到远程机器,在命令界面输入，用命令行连接到数据库。")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" nls_instance_parameters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("查看 NLS_LANGUAGE 的值\nNLS_LANGUAGE\nNLS_TERRITORY")])]),e._v(" "),a("li",[a("p",[e._v("下载并安装PL/SQL Developer配置应用，配置tools -> preferences -> connection（工具 -> 首选项 -> 连接）")]),e._v(" "),a("ul",[a("li",[e._v("Oracle Home（Oracle主目录）: D:/instantclient_11_2")]),e._v(" "),a("li",[e._v("OCI library（OCI库）: D:/instantclient_11_2/oci.dll")])])]),e._v(" "),a("li",[a("p",[e._v("关闭PL/SQL Developer，重启Developer。主机名就会出现在PL/SQL Developer的列表里，输入用户名密码，就可以登录远程oracle 11g数据库了。")])]),e._v(" "),a("li",[a("p",[e._v("补充Instant Client 说明")]),e._v(" "),a("p",[e._v("Oracle Instant client 是oracle提供的简便客户端, 支持多种平台。可从oracle网站下载, 下载地址为："),a("a",{attrs:{href:"http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Instant Client"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("包括如下内容:")]),e._v(" "),a("ul",[a("li",[e._v("Instant client Package - Basic 运行OCI, OCCI, 和JDBC-OCI应用程序需要的所有文件")]),e._v(" "),a("li",[e._v("Instant client Package - Basic Lite: 只包含英语错误信息, 只支持unicode, ascii, 西欧字符集")]),e._v(" "),a("li",[e._v("Instant client Package - JDBC Supplement  为jdbc增加了xa, 国际化和RowSet操作。")]),e._v(" "),a("li",[e._v("Instant Client Package - SQL *Plus 包含sqlplus和需要的库文件")]),e._v(" "),a("li",[e._v("Instant client Package - SDK 使用Instant Client开发Oracle 应用程序需要的头文件及示例makefile")]),e._v(" "),a("li",[e._v("Instant client package - ODBC 使用odbc时需要的库, 不是所有平台都有. linux平台包含")])]),e._v(" "),a("p",[e._v("Basic和Basic Lite两个中必须选一个, 其他包都是可选的. 我下载了 Basic, JDBC supplement, SQL *Plus, SDK, ODBC. 解压后放在一个文件夹下, 在这个文件夹下建立文件tnsnames.ora，设置环境变量LD_LIBRARY_PATH和TNS_ADMIN指向解压后的目录, 就可以使用sqlplus了。")]),e._v(" "),a("p",[e._v("我下载的instant client版本为10.2.0.2.0, 测试了联接到oracle 9.2.0.4和oracle 10.2.0.1.")]),e._v(" "),a("p",[e._v("Instant Client中不包含tnsping, exp/imp, rman, netca等工具. 如果需要这些工具则需要安装oracle client")])])]),e._v(" "),a("h2",{attrs:{id:"oracle备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle备份"}},[e._v("#")]),e._v(" Oracle备份")]),e._v(" "),a("div",{staticClass:"language-dos line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("exp newsoft/econage@ptime file=E:\\Backup\\%date:~0,10%exp.dmp log=E:\\Backup\\%date:~0,10exp.log owner=newsoft\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("方跃明\n2018-05-12")])])])}),[],!1,null,null,null);t.default=s.exports}}]);