(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{587:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos-快速安装常用开发工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-快速安装常用开发工具"}},[s._v("#")]),s._v(" CentOS 快速安装常用开发工具")]),s._v(" "),t("h2",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://docs.docker.com/engine/install/centos/")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"mysql-8-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-8-x"}},[s._v("#")]),s._v(" MySQL 8.x")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装官方仓库")]),s._v("\nyum localinstall https://repo.mysql.com/mysql80-community-release-el7-1.noarch.rpm\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 MySQL Server")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动MySQL")]),s._v("\nsystemctl start mysqld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查服务状态")]),s._v("\nsystemctl status mysqld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看初始密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temporary password'")]),s._v(" /var/log/mysqld.log\nmysql -uroot -p\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入密码进入mysql命令行")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[s._v("#")]),s._v(" Node.js")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://github.com/nodesource/distributions#rpm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sL https://rpm.nodesource.com/setup_16.x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[s._v("#")]),s._v(" Yarn")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://yarn.bootcss.com/docs/install/#centos-stable")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --silent --location https://dl.yarnpkg.com/rpm/yarn.repo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/yum.repos.d/yarn.repo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://stackoverflow.com/questions/21820715/how-to-install-latest-version-of-git-on-centos-7-x-6-x")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" http://opensource.wandisco.com/centos/7/git/x86_64/wandisco-git-release-7-2.noarch.rpm\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" NGiNX")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://www.nginx.com/resources/wiki/start/topics/tutorials/install/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/yum.repos.d/nginx.repo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("nginx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("nginx repo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("https://nginx.org/packages/centos/$releasever/$basearch/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("blockquote",[t("p",[s._v("方跃明\n2020-05-11")])])])}),[],!1,null,null,null);a.default=e.exports}}]);