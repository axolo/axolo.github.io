(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{597:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"家用宽带联机开发环境部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#家用宽带联机开发环境部署"}},[a._v("#")]),a._v(" 家用宽带联机开发环境部署")]),a._v(" "),s("p",[a._v("利用家庭宽带低成本、低功耗部署联机开发环境。\n当然，若有阿里云等公网环境，路由服务器合一，略改即可支持。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("                  +-----------+\n                  | frpc      |\n                  | developer |\n                  +-----------+\n                       |\n                     ddns\n                       |\n+--------+        +--------+          +--------+\n| dns    |        | frps   |          | web    |\n| domain |<- ns ->| router |<- http ->| client |\n+--------+        +--------+          +--------+\n                       |\n                     cname\n                       |\n                 +-----------+\n                 | frpc      |\n                 | server    |\n                 +-----------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])]),s("h2",{attrs:{id:"条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件"}},[a._v("#")]),a._v(" 条件")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("项目")]),a._v(" "),s("th",[a._v("推荐")]),a._v(" "),s("th",[a._v("说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("家用宽带")]),a._v(" "),s("td",[a._v("电信宽带")]),a._v(" "),s("td",[a._v("要求ISP开通光猫桥接模式（或破解光猫）必须暴露公网IP")])]),a._v(" "),s("tr",[s("td",[a._v("动态域名")]),a._v(" "),s("td",[a._v("花生壳")]),a._v(" "),s("td",[a._v("通过DDNS客户端动态绑定IP实现域名访问")])]),a._v(" "),s("tr",[s("td",[a._v("服务器")]),a._v(" "),s("td",[a._v("工控机")]),a._v(" "),s("td",[a._v("x86服务器，建议使用低功耗被动散热低噪音迷你机")])]),a._v(" "),s("tr",[s("td",[a._v("路由器")]),a._v(" "),s("td",[a._v("OpenWRT")]),a._v(" "),s("td",[a._v("可选，内置或支持安装或刷机后可安装frp的家庭路由器")])]),a._v(" "),s("tr",[s("td",[a._v("页面服务")]),a._v(" "),s("td",[a._v("GitHub Pages")]),a._v(" "),s("td",[a._v("可选，静态页面托管，直接支持80端口访问")])]),a._v(" "),s("tr",[s("td",[a._v("开发机")]),a._v(" "),s("td",[a._v("个人电脑")]),a._v(" "),s("td",[a._v("可选，移动办公即时接入、随时随地为客户提供即时演示")])])])]),a._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[a._v("#")]),a._v(" 思路")]),a._v(" "),s("ul",[s("li",[a._v("frp将本地端口映射到远程服务器端口（请求转发到本地开发环境便于调试）")]),a._v(" "),s("li",[a._v("Ngrok接管远程服务器端口普通端口转换为80、443等端口（微信开发需要）")])]),a._v(" "),s("h2",{attrs:{id:"frps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frps"}},[a._v("#")]),a._v(" frps")]),a._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("common")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("bind_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("7000")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("dashboard_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("7500")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("dashboard_user")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("admin")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("dashboard_pwd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("admin")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("vhost_http_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("8080")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("token")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("your-token")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("subdomain_host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("your.domain")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h2",{attrs:{id:"frpc-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frpc-server"}},[a._v("#")]),a._v(" frpc server")]),a._v(" "),s("p",[a._v("服务器端配置，建议安装为服务")]),a._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("common")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server_addr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("frps-server-host")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("7000")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("token")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("your-token")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("ssh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("tcp")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_ip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("127.0.0.1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("22")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("remote_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("22")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("msyql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("tcp")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_ip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("127.0.0.1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("3306")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("remote_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("3306")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("subdomain")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("api # http://api.your.domain:8080")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("80")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("proxy_protocol_version")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("v2")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("subdomain")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("web # http://web.your.domain:8080")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("80")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("proxy_protocol_version")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("v2")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br")])]),s("h2",{attrs:{id:"frpc-developer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frpc-developer"}},[a._v("#")]),a._v(" frpc developer")]),a._v(" "),s("p",[a._v("开发机端配置，建议命令行运行")]),a._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("common")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server_addr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("frps-server-host")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("7000")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("token")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("your-token")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("dev-api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_ip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("127.0.0.1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("7001")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("custom_domains")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("api.ddns.domain # http://api.ddns.domain:8080")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("proxy_protocol_version")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("v2")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("dev-web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_ip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("127.0.0.1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("local_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("3000")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("custom_domains")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("web.ddns.domain # http://web.ddns.domain:8080")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("proxy_protocol_version")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("v2")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])]),s("h2",{attrs:{id:"端口映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端口映射"}},[a._v("#")]),a._v(" 端口映射")]),a._v(" "),s("p",[a._v("在路由器上配置端口映射开放外网访问。")]),a._v(" "),s("h2",{attrs:{id:"客户托管"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户托管"}},[a._v("#")]),a._v(" 客户托管")]),a._v(" "),s("h3",{attrs:{id:"开发版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发版"}},[a._v("#")]),a._v(" 开发版")]),a._v(" "),s("p",[a._v("客户域名解析添加"),s("code",[a._v("CNAME")]),a._v("到服务器端相应的域名，并使用"),s("code",[a._v("nginx")]),a._v("反向代理。")]),a._v(" "),s("h3",{attrs:{id:"静态页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态页"}},[a._v("#")]),a._v(" 静态页")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("Pages")]),a._v("服务，可支持"),s("code",[a._v("HTTPS")]),a._v("（涉及跨域谨慎使用）。")]),a._v(" "),s("h2",{attrs:{id:"ngrok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngrok"}},[a._v("#")]),a._v(" Ngrok")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://baike.baidu.com/item/ngrok/13986278",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ngrok"),s("OutboundLink")],1),a._v(" 释义")]),a._v(" "),s("blockquote",[s("p",[a._v("方跃明\n2020-05-18")])])])}),[],!1,null,null,null);t.default=e.exports}}]);