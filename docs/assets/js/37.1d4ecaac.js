(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{579:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[s._v("#")]),s._v(" 更新")]),s._v(" "),a("p",[s._v("细微改动不再同步更新到coding.net，请移步：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/axolo/leophp",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/axolo/leophp"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://packagist.org/packages/axolo/leophp",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://packagist.org/packages/axolo/leophp"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("ul",[a("li",[s._v("ver\n"),a("ul",[a("li",[s._v("Version: 0.1.4")]),s._v(" "),a("li",[s._v("Required: PHP>=5.3 && PDO")]),s._v(" "),a("li",[s._v("初步完成MVC")])])]),s._v(" "),a("li",[s._v("app\n"),a("ul",[a("li",[s._v("完成controller、action、view映射")]),s._v(" "),a("li",[s._v("当前env存取（未完成）")])])]),s._v(" "),a("li",[s._v("controller\n"),a("ul",[a("li",[s._v("基本上完全没写")])])]),s._v(" "),a("li",[s._v("model\n"),a("ul",[a("li",[s._v("基本上完全没写")]),s._v(" "),a("li",[a("em",[a("strong",[s._v("防止SQL攻击")])]),s._v("（请手动使用Utils::sql()）")])])]),s._v(" "),a("li",[s._v("view\n"),a("ul",[a("li",[s._v("注入视图变量名："),a("code",[s._v("$res")]),s._v("（属于裸奔状态）")]),s._v(" "),a("li",[s._v("完成View::jsonp($res)")]),s._v(" "),a("li",[a("em",[a("strong",[s._v("防止XSS攻击")])]),s._v("（请手动使用Utils::xss()）")]),s._v(" "),a("li",[s._v("可指定视图渲染（未完成）")])])]),s._v(" "),a("li",[s._v("config\n"),a("ul",[a("li",[s._v("用户配置合并默认配置")])])]),s._v(" "),a("li",[s._v("plugin\n"),a("ul",[a("li",[s._v("完成用户插件按配置加载及自动忽略不存在配置")])])]),s._v(" "),a("li",[s._v("stroage\n"),a("ul",[a("li",[s._v("目前可用扩展自PDO（偷懒）")]),s._v(" "),a("li",[s._v("或者可以medoo？")])])]),s._v(" "),a("li",[s._v("utils\n"),a("ul",[a("li",[s._v("Utils::xss($htm)\n"),a("ul",[a("li",[s._v("防止XSS跨站攻击，echo和print时请考虑使用")])])]),s._v(" "),a("li",[s._v("Utils::sql($sql)\n"),a("ul",[a("li",[s._v("防止SQL注入攻击，客户端输入SQL时务必使用")])])])])])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h3",{attrs:{id:"composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer"}},[s._v("#")]),s._v(" Composer")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://docs.phpcomposer.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("Composer中文文档"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("composer.json: "),a("code",[s._v('"require": { "php": ">=5.3", "axolo/leophp": "@dev" }')])]),s._v(" "),a("li",[a("code",[s._v("composer update")])])]),s._v(" "),a("h3",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("app\n ├─ vendor            //Composer\n │    └─ axolo\n │         └─ leophp  //LeoPHP framework\n ├─ config\n │    └─ config.php   //App config\n ├─ controllers\n │    └─ Index.php\n ├─ models\n │    └─ Blog.php\n ├─ plugins\n │    └─ cros.php\n ├─ html             //(optional) only a example\n │    └─ jsonp.html  //json or jsonp response example\n └─ views\n      └─ index\n           └─ index.php\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * LeoPHP Framework config file\n * @todo  array_merge(default_config, user_config)\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'core'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//pathinfo:     /index.php/controller/action")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//querystring:  /index.php?controller=string&action=string (@todo)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//urlrewrite:   /controller/action (@todo may be just a .htaccess)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'request'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'pathinfo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//json:   JSON      Conflux Response, e.g. RESTful")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//jsonp:  JSONP     (@todo)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//xml:    XML       (@todo)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//html:   HTML      default output, view render")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'response'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//controller: ucfirst(controller)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'controller'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//action: default index")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'action'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//charset: default utf8")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'charset'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'utf8'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./plugins/plugins[key].php || framework/plugins[key].php")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Array[plugin => params]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'plugins'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'cors'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//CORS")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'rbac'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//RBAC")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'restful'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//RESTful")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'oauth'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//OAuth")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'sso'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Single Sign-On")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'debug'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Debug")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'halt'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'out of service'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Service halt")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'hash'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'String of secret'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//COOKIE, password, token ...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Database Conection")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'storage'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'engine'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'pdo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'dsn'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'mysql:host=localhost;dbname=information_schema'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'user'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'password'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'google'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Eh~~~")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'options'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Farmework Infomation (Just for funny!)")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'framework'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'name'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'LeoPHP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'version'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'0.1.4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'author'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'Yueming Fang'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'git'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'https://github.com/axolo/leophp'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])]),a("h3",{attrs:{id:"应用入口-index-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用入口-index-php"}},[s._v("#")]),s._v(" 应用入口：index.php")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'../vendor/autoload.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("leophp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("App")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("leophp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Controller")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("leophp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Model")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("leophp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Storage")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$config")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("__DIR__")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DIRECTORY_SEPARATOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'config'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DIRECTORY_SEPARATOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'config.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("控制器：controllers/Index.php")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("leophp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Controller")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'controller'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'action'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"视图-views-index-index-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图-views-index-index-php"}},[s._v("#")]),s._v(" 视图：views/index/index.php")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[s._v("<!DOCTYPE html>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("html")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("index/index"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"答疑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答疑"}},[s._v("#")]),s._v(" 答疑")]),s._v(" "),a("ul",[a("li",[s._v("配置文件为什么不用json或者ini格式？好吧，可以写注释，可以写逻辑，而且避免不小心被访问，省心。君不见"),a("code",[s._v("webpack.config.js")]),s._v("也这么干？")]),s._v(" "),a("li",[s._v("为什么很多都基本上没写？这个……好吧，的确是因为懒。懒是一种态度。我们的口号是：懒，要向Symfony、Laravel看齐！我要轮子！——这借口，没谁了吧。")])]),s._v(" "),a("h2",{attrs:{id:"由来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#由来"}},[s._v("#")]),s._v(" 由来")]),s._v(" "),a("p",[s._v("由于工作需要，重新开始用PHP，折腾好几个框架（"),a("s",[s._v("班主任：这里就不点名了")]),s._v("），臃肿厚重，可谓专治各种不服，终于被感动到哭了。")]),s._v(" "),a("p",[s._v("一个曾经辉煌在前端的服务端脚本语言，本来草根得很，一定各种作，非高大上到无人敢碰才好。")]),s._v(" "),a("p",[s._v("换做华妃娘娘来，必定又是那句经典名言：“贱人就是矫情”。有必要搞得如此混乱不堪么？清爽干净不好么？")]),s._v(" "),a("p",[s._v("非常怀念我亲爱的Node.js、Vue、Express，甚至对冷落许久的jQuery也莫名觉得亲切，相貌可人了。")]),s._v(" "),a("p",[s._v("——网上说饥渴已久的人，看到一头老母猪，都觉得眉清目秀，也许这就是这种感觉罢。")]),s._v(" "),a("p",[s._v("哭了归哭了，还是得用PHP来写，环境是用来迁就的，除非自己牛到不行，可惜我属马，那就自己写一个拉倒吧。")]),s._v(" "),a("p",[s._v("想起几年前混论坛那段时间对PHP的感悟，这么多年来PHP的发展也许更加印证了我的看法。")]),s._v(" "),a("p",[s._v("想想其实并非PHP本身的罪过，人家Facebook不是用得好好的？也许是使唤PHP的某些人暂时迷茫了方向，大炮轰蚂蚁，何其壮观！")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.iteye.com/topic/523378",target:"_blank",rel:"noopener noreferrer"}},[s._v("有感于“论PHP的倒掉”"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.iteye.com/topic/319039",target:"_blank",rel:"noopener noreferrer"}},[s._v("PHP框架的繁荣是正确的发展方向吗？"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("方跃明")])])])}),[],!1,null,null,null);t.default=e.exports}}]);