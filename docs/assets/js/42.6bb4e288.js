(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{617:function(a,s,t){"use strict";t.r(s);var e=t(6),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql自动备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql自动备份"}},[a._v("#")]),a._v(" MySQL自动备份")]),a._v(" "),t("h2",{attrs:{id:"相关软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关软件"}},[a._v("#")]),a._v(" 相关软件")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("mysqldump"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.gzip.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("gzip"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("Windows下需要用到gzip压缩软件，当然也可用zip、7z、rar等软件代替。\ngzip安装完成后，方便起见，请将gzip加入Windows的PATH环境变量。")]),a._v(" "),t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),t("h3",{attrs:{id:"编写mysql-backup-bat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写mysql-backup-bat"}},[a._v("#")]),a._v(" 编写mysql-backup.bat")]),a._v(" "),t("div",{staticClass:"language-dos line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('rem 删除一周前的备份\nforfiles /p "D:\\Backup\\databasename" /d -7 /c "cmd /c del /f @path"\nrem 按日期命名备份并压缩\nmysqldump -hhostname -uusername -ppassword --databases databasename | gzip > D:\\Backup\\databasename\\databasename-%date:~0,10%.sql.gz\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"将mysql-backup-bat加入计划任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将mysql-backup-bat加入计划任务"}},[a._v("#")]),a._v(" 将mysql-backup.bat加入计划任务")]),a._v(" "),t("h2",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),t("h3",{attrs:{id:"修改mysql配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改mysql配置"}},[a._v("#")]),a._v(" 修改MySQL配置")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/my.cnf\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加入 mysqldump 相关配置")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("mysqldump")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("user")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("password")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"编写备份脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写备份脚本"}},[a._v("#")]),a._v(" 编写备份脚本")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 定义目录")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/path/to/backup/mysql/yourdatabase\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除一周前的备份")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${dir}")]),a._v(" -ctime +7 -type f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 每日备份")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("rq")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%Y%m%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\nmysqldump --databases yourdatabase "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("gzip")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${dir}")]),a._v("/yourdatabase-"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${rq}")]),a._v(".sql.gz\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h3",{attrs:{id:"修改文件属性为可执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改文件属性为可执行"}},[a._v("#")]),a._v(" 修改文件属性为可执行")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x /path/to/backmysql.sh\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"添加到crontab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加到crontab"}},[a._v("#")]),a._v(" 添加到"),t("code",[a._v("crontab")])]),a._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# mysql-backup.cron\n# 每天3点钟执行备份\n0 3 * * * bash /path/to/backmysql.sh\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" mysql-backup.cron\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 0 3 * * * bash /path/to/backmysql.sh")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);