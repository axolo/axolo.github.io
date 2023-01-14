import{_ as R,u as et,o as _,c as P,a as m,f as W,w as at,F as Y,g as F,t as E,h as ot,V as dt,i as lt,j as ct,p as pt,k as ut,d as J}from"./app.229a586d.js";const mt={class:"MyHero"},ht={class:"container"},gt={class:"label"},ft=["src"],vt={class:"description"},St={class:"desc"},_t={__name:"hero",setup(v){const{site:b}=et();return(y,L)=>(_(),P("div",mt,[m("div",ht,[m("div",gt,[m("img",{class:"logo",src:W(at)(W(b).themeConfig.logo)},null,8,ft)]),m("div",vt,[(_(!0),P(Y,null,F(W(b).description.split("。"),(U,D)=>(_(),P("div",{key:D},[m("h3",St,E(U),1)]))),128))])])]))}},Pt=R(_t,[["__scopeId","data-v-79456519"]]),yt={gitee:'<svg t="1673407639420" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2264" width="81" height="81"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#767676" p-id="2265"></path></svg>'},Lt={__name:"author",setup(v){const b=[{avatar:"https://avatars.githubusercontent.com/u/1021935?s=400&u=eae8692c031d27310b49af5b158bd50d895c24a7&v=4",name:"方跃明",title:"Yueming Fang",links:[{link:"https://github.com/axolo",icon:"github"},{link:"https://gitee.com/axolo",icon:{svg:yt.gitee}}]}];return(y,L)=>(_(),ot(W(dt),{size:"small",members:b}))}};var Tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z={},bt={get exports(){return z},set exports(v){z=v}};(function(v,b){(function(y,L){v.exports=L()})(Tt,function(){var y=1e3,L=6e4,U=36e5,D="millisecond",f="second",C="minute",h="hour",T="day",M="week",S="month",K="quarter",x="year",H="date",X="Invalid Date",it=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,st=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,rt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var i=["th","st","nd","rd"],t=s%100;return"["+s+(i[(t-20)%10]||i[t]||i[0])+"]"}},A=function(s,i,t){var r=String(s);return!r||r.length>=i?s:""+Array(i+1-r.length).join(t)+s},nt={s:A,z:function(s){var i=-s.utcOffset(),t=Math.abs(i),r=Math.floor(t/60),e=t%60;return(i<=0?"+":"-")+A(r,2,"0")+":"+A(e,2,"0")},m:function s(i,t){if(i.date()<t.date())return-s(t,i);var r=12*(t.year()-i.year())+(t.month()-i.month()),e=i.clone().add(r,S),a=t-e<0,n=i.clone().add(r+(a?-1:1),S);return+(-(r+(t-e)/(a?e-n:n-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:S,y:x,w:M,d:T,D:H,h,m:C,s:f,ms:D,Q:K}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},Q="en",w={};w[Q]=rt;var I=function(s){return s instanceof N},B=function s(i,t,r){var e;if(!i)return Q;if(typeof i=="string"){var a=i.toLowerCase();w[a]&&(e=a),t&&(w[a]=t,e=a);var n=i.split("-");if(!e&&n.length>1)return s(n[0])}else{var o=i.name;w[o]=i,e=o}return!r&&e&&(Q=e),e||!r&&Q},p=function(s,i){if(I(s))return s.clone();var t=typeof i=="object"?i:{};return t.date=s,t.args=arguments,new N(t)},d=nt;d.l=B,d.i=I,d.w=function(s,i){return p(s,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var N=function(){function s(t){this.$L=B(t.locale,null,!0),this.parse(t)}var i=s.prototype;return i.parse=function(t){this.$d=function(r){var e=r.date,a=r.utc;if(e===null)return new Date(NaN);if(d.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var n=e.match(it);if(n){var o=n[2]-1||0,c=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,c)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,c)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},i.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},i.$utils=function(){return d},i.isValid=function(){return this.$d.toString()!==X},i.isSame=function(t,r){var e=p(t);return this.startOf(r)<=e&&e<=this.endOf(r)},i.isAfter=function(t,r){return p(t)<this.startOf(r)},i.isBefore=function(t,r){return this.endOf(r)<p(t)},i.$g=function(t,r,e){return d.u(t)?this[r]:this.set(e,t)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(t,r){var e=this,a=!!d.u(r)||r,n=d.p(t),o=function(Z,g){var k=d.w(e.$u?Date.UTC(e.$y,g,Z):new Date(e.$y,g,Z),e);return a?k:k.endOf(T)},c=function(Z,g){return d.w(e.toDate()[Z].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(g)),e)},l=this.$W,u=this.$M,O=this.$D,$="set"+(this.$u?"UTC":"");switch(n){case x:return a?o(1,0):o(31,11);case S:return a?o(1,u):o(0,u+1);case M:var V=this.$locale().weekStart||0,j=(l<V?l+7:l)-V;return o(a?O-j:O+(6-j),u);case T:case H:return c($+"Hours",0);case h:return c($+"Minutes",1);case C:return c($+"Seconds",2);case f:return c($+"Milliseconds",3);default:return this.clone()}},i.endOf=function(t){return this.startOf(t,!1)},i.$set=function(t,r){var e,a=d.p(t),n="set"+(this.$u?"UTC":""),o=(e={},e[T]=n+"Date",e[H]=n+"Date",e[S]=n+"Month",e[x]=n+"FullYear",e[h]=n+"Hours",e[C]=n+"Minutes",e[f]=n+"Seconds",e[D]=n+"Milliseconds",e)[a],c=a===T?this.$D+(r-this.$W):r;if(a===S||a===x){var l=this.clone().set(H,1);l.$d[o](c),l.init(),this.$d=l.set(H,Math.min(this.$D,l.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},i.set=function(t,r){return this.clone().$set(t,r)},i.get=function(t){return this[d.p(t)]()},i.add=function(t,r){var e,a=this;t=Number(t);var n=d.p(r),o=function(u){var O=p(a);return d.w(O.date(O.date()+Math.round(u*t)),a)};if(n===S)return this.set(S,this.$M+t);if(n===x)return this.set(x,this.$y+t);if(n===T)return o(1);if(n===M)return o(7);var c=(e={},e[C]=L,e[h]=U,e[f]=y,e)[n]||1,l=this.$d.getTime()+t*c;return d.w(l,this)},i.subtract=function(t,r){return this.add(-1*t,r)},i.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||X;var a=t||"YYYY-MM-DDTHH:mm:ssZ",n=d.z(this),o=this.$H,c=this.$m,l=this.$M,u=e.weekdays,O=e.months,$=function(g,k,q,G){return g&&(g[k]||g(r,a))||q[k].slice(0,G)},V=function(g){return d.s(o%12||12,g,"0")},j=e.meridiem||function(g,k,q){var G=g<12?"AM":"PM";return q?G.toLowerCase():G},Z={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:d.s(l+1,2,"0"),MMM:$(e.monthsShort,l,O,3),MMMM:$(O,l),D:this.$D,DD:d.s(this.$D,2,"0"),d:String(this.$W),dd:$(e.weekdaysMin,this.$W,u,2),ddd:$(e.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:d.s(o,2,"0"),h:V(1),hh:V(2),a:j(o,c,!0),A:j(o,c,!1),m:String(c),mm:d.s(c,2,"0"),s:String(this.$s),ss:d.s(this.$s,2,"0"),SSS:d.s(this.$ms,3,"0"),Z:n};return a.replace(st,function(g,k){return k||Z[g]||n.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(t,r,e){var a,n=d.p(r),o=p(t),c=(o.utcOffset()-this.utcOffset())*L,l=this-o,u=d.m(this,o);return u=(a={},a[x]=u/12,a[S]=u,a[K]=u/3,a[M]=(l-c)/6048e5,a[T]=(l-c)/864e5,a[h]=l/U,a[C]=l/L,a[f]=l/y,a)[n]||l,e?u:d.a(u)},i.daysInMonth=function(){return this.endOf(S).$D},i.$locale=function(){return w[this.$L]},i.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),a=B(t,r,!0);return a&&(e.$L=a),e},i.clone=function(){return d.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},s}(),tt=N.prototype;return p.prototype=tt,[["$ms",D],["$s",f],["$m",C],["$H",h],["$W",T],["$M",S],["$y",x],["$D",H]].forEach(function(s){tt[s[1]]=function(i){return this.$g(i,s[0],s[1])}}),p.extend=function(s,i){return s.$i||(s(i,N,p),s.$i=!0),p},p.locale=B,p.isDayjs=I,p.unix=function(s){return p(1e3*s)},p.en=w[Q],p.Ls=w,p.p={},p})})(bt);const Mt=z,$t=[{title:"读《SQL反模式》",description:"花几个小时刷完阿里云数据工程师张友东力荐《SQL反模式》，读到一半，狂妄的认为自己差不多可以写一本《反〈SQL反模式〉》了，一时兴起便有了这篇读书笔记。",frontmatter:{title:"读《SQL反模式》",description:"花几个小时刷完阿里云数据工程师张友东力荐《SQL反模式》，读到一半，狂妄的认为自己差不多可以写一本《反〈SQL反模式〉》了，一时兴起便有了这篇读书笔记。",time:"2018-05-31T00:00:00.000Z",categories:["sql"],tags:["SQL"],top:2},relativePath:"sql-antipatterns.md",lastUpdated:1673583128e3},{title:"有感于《论PHP的倒掉》",description:"其实倒掉更多的是人，我不希望见到这个倒掉，那个倒掉。朝阳喷薄，以至如日中天，亦有日薄西山时。时乎，时乎，会当有变时。",frontmatter:{title:"有感于《论PHP的倒掉》",description:"其实倒掉更多的是人，我不希望见到这个倒掉，那个倒掉。朝阳喷薄，以至如日中天，亦有日薄西山时。时乎，时乎，会当有变时。",time:"2009-11-23T00:00:00.000Z",categories:["php"],tags:["PHP"],top:1},relativePath:"php-fall.md",lastUpdated:1673583128e3},{title:"whistle 简明教程",description:"基于 Node 实现的跨平台 WEB 调试代理工具，主要用于查看、修改 HTTP、HTTPS、Websocket 的请求、响应，也可以作为 HTTP 代理服务器使用。",frontmatter:{title:"whistle 简明教程",description:"基于 Node 实现的跨平台 WEB 调试代理工具，主要用于查看、修改 HTTP、HTTPS、Websocket 的请求、响应，也可以作为 HTTP 代理服务器使用。",time:"2023-01-12T00:00:00.000Z",categories:["web"],tags:["WEB","HTTP"]},relativePath:"whistle-intro.md",lastUpdated:1673612383e3},{title:"Jekyll 从入门到放弃",description:"各种不习惯，严重受虐，从入门到放弃只需一周。Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。",frontmatter:{title:"Jekyll 从入门到放弃",description:"各种不习惯，严重受虐，从入门到放弃只需一周。Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。",time:"2022-12-15T00:00:00.000Z",categories:["web"],tags:["WEB","博客系统"]},relativePath:"jekyll-intro-to-quit.md",lastUpdated:1673600806e3},{title:"基于WSL搭建Node.js开发环境",description:"WSL 可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境，且不会产生传统虚拟机或双启动设置开销，提供 Node.js on Linux 上佳体验。",frontmatter:{title:"基于WSL搭建Node.js开发环境",description:"WSL 可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境，且不会产生传统虚拟机或双启动设置开销，提供 Node.js on Linux 上佳体验。",time:"2022-01-20T00:00:00.000Z",categories:["linux"],tags:["Linux","Node.js"]},relativePath:"node-on-wsl.md",lastUpdated:1673600806e3},{title:"Linux目录结构",description:"掌握一个操作系统，从它的目录结构开始，啥东西一般放哪得心知肚明。",frontmatter:{title:"Linux目录结构",description:"掌握一个操作系统，从它的目录结构开始，啥东西一般放哪得心知肚明。",time:"2021-12-19T00:00:00.000Z",categories:["linux"],tags:["CentOS","Linux"]},relativePath:"linux-directory.md",lastUpdated:1673600806e3},{title:"Webpack编译移除控制台输出",description:"出于安全渗透和代码审计需要，生产环境往往需要移除控制台console系列函数的输出，逐一人肉删除显然不是好办法……",frontmatter:{title:"Webpack编译移除控制台输出",description:"出于安全渗透和代码审计需要，生产环境往往需要移除控制台console系列函数的输出，逐一人肉删除显然不是好办法……",time:"2021-12-14T00:00:00.000Z",categories:["vue"],tags:["Vue.js","Webpack"]},relativePath:"webpack-drop-console.md",lastUpdated:1673600806e3},{title:"MySQL on Docker",description:"把 MySQL 部署到 Docker 上，不失为一个很好的选择。",frontmatter:{title:"MySQL on Docker",time:"2021-06-18T00:00:00.000Z",description:"把 MySQL 部署到 Docker 上，不失为一个很好的选择。",categories:["sql"],tags:["MySQL","Docker","Linux","Shell"]},relativePath:"mysql-on-docker.md",lastUpdated:1673600806e3},{title:"Git subtree",description:"和 submodule 一样，subtree 也是 Git 多人协作开发利器。",frontmatter:{title:"Git subtree",description:"和 submodule 一样，subtree 也是 Git 多人协作开发利器。",time:"2020-08-20T00:00:00.000Z",categories:["git"],tags:["Git"]},relativePath:"git-subtree.md",lastUpdated:1673342895e3},{title:"Docker Portianer",description:"Portainer是一个可视化的Docker操作界面，功能十分全面，基本能满足中小型单位对容器管理的全部需求。",frontmatter:{title:"Docker Portianer",description:"Portainer是一个可视化的Docker操作界面，功能十分全面，基本能满足中小型单位对容器管理的全部需求。",time:"2020-06-18T00:00:00.000Z",categories:["devops"],tags:["Linux","DevOps","Docker"]},relativePath:"docker-portianer.md",lastUpdated:1673600806e3},{title:"frp 内网穿透",description:"",frontmatter:{title:"frp 内网穿透",time:"2020-06-18T00:00:00.000Z",categories:["linux"],tags:["Linux","CentOS","内网穿透"]},relativePath:"frp.md",lastUpdated:1673515317e3},{title:"家用宽带联机开发环境部署",description:"",frontmatter:{title:"家用宽带联机开发环境部署",time:"2020-05-18T00:00:00.000Z",categories:["linux"],tags:["Linux","CentOS","内网穿透"]},relativePath:"frp-ddns.md",lastUpdated:1673342895e3},{title:"CentOS快速搭建开发环境",description:"CentOS 安装 Docker、MySQL、nginx、Node.js、Git 等应用，快速搭建开发环境。",frontmatter:{title:"CentOS快速搭建开发环境",description:"CentOS 安装 Docker、MySQL、nginx、Node.js、Git 等应用，快速搭建开发环境。",time:"2020-05-11T00:00:00.000Z",categories:["linux"],tags:["CentOS","Linux"]},relativePath:"centos-develop-env.md",lastUpdated:1673600806e3},{title:"localhost 开启 HTTPS",description:"如何给 localhost 开启 https ？",frontmatter:{title:"localhost 开启 HTTPS",description:"如何给 localhost 开启 https ？",time:"2020-03-28T00:00:00.000Z",categories:["web"],tags:["HTTP","WEB"]},relativePath:"localhost-ssl-cert.md",lastUpdated:1673342895e3},{title:"UmiJS 之我见",description:"到目前为止，UmiJS 还不算严谨成熟的框架，像小孩捏的泥人，随意松散，慎用。",frontmatter:{title:"UmiJS 之我见",description:"到目前为止，UmiJS 还不算严谨成熟的框架，像小孩捏的泥人，随意松散，慎用。",time:"2020-02-23T00:00:00.000Z",categories:["react"],tags:["React"]},relativePath:"umijs-ux.md",lastUpdated:1673600806e3},{title:"JavaScript async",description:"代码演示 JavaScript 同步异步操作。",frontmatter:{title:"JavaScript async",description:"代码演示 JavaScript 同步异步操作。",time:"2020-02-18T00:00:00.000Z",categories:["js"],tags:["JavaScript"]},relativePath:"javascript-async.md",lastUpdated:null},{title:"前端概念图",description:"访问什么页面？显示什么信息？页面长成什么样？对页面做了什么操作？数据从何而来？",frontmatter:{title:"前端概念图",description:"访问什么页面？显示什么信息？页面长成什么样？对页面做了什么操作？数据从何而来？",time:"2020-02-07T00:00:00.000Z",categories:["web"],tags:["WEB"]},relativePath:"frontend-map.md",lastUpdated:1673600806e3},{title:"CentOS安装配置OpenVPN",description:"这个就不多说了，真的不能多说……",frontmatter:{title:"CentOS安装配置OpenVPN",description:"这个就不多说了，真的不能多说……",time:"2020-01-29T00:00:00.000Z",categories:["linux"],tags:["CentOS","Linux","VPN"]},relativePath:"centos-openvpn.md",lastUpdated:1673600806e3},{title:"Egg.js 实现 OAuth2 授权码方式鉴权",description:"大量详尽代码图文并茂一步步的细述OAuth2授权码方式鉴权在Egg.js中的实现。",frontmatter:{title:"Egg.js 实现 OAuth2 授权码方式鉴权",description:"大量详尽代码图文并茂一步步的细述OAuth2授权码方式鉴权在Egg.js中的实现。",time:"2020-01-07T00:00:00.000Z",categories:["node"],tags:["OAuth2","Node.js","Egg.js"]},relativePath:"egg-oauth.md",lastUpdated:1673583128e3},{title:"Git 提交规范",description:"不以规矩，不成方圆。",frontmatter:{title:"Git 提交规范",description:"不以规矩，不成方圆。",time:"2020-01-02T00:00:00.000Z",categories:["git"],tags:["Git"]},relativePath:"git-commitlint.md",lastUpdated:1673342895e3},{title:"iOS开发环境搭建",description:"快速搭建 iOS 开发环境",frontmatter:{title:"iOS开发环境搭建",description:"快速搭建 iOS 开发环境",time:"2020-01-01T00:00:00.000Z",categories:["ios"],tags:["iOS"]},relativePath:"ios-develop.md",lastUpdated:1673342895e3},{title:"CentOS网络",description:"CentOS 7 开始默认使用 network-manager 来配置网络。虽然传统方式依然可以配置，但不推荐。",frontmatter:{title:"CentOS网络",description:"CentOS 7 开始默认使用 network-manager 来配置网络。虽然传统方式依然可以配置，但不推荐。",time:"2019-12-25T00:00:00.000Z",categories:["linux"],tags:["CentOS","Linux"]},relativePath:"centos-network.md",lastUpdated:1673600806e3},{title:"CentOS 防火墙",description:"CentOS 使用 firewalld 防火墙系统，大多数服务需要防火墙放行才能被访问。",frontmatter:{title:"CentOS 防火墙",description:"CentOS 使用 firewalld 防火墙系统，大多数服务需要防火墙放行才能被访问。",time:"2019-12-25T00:00:00.000Z",categories:["linux"],tags:["CentOS","Linux"]},relativePath:"centos-firewall.md",lastUpdated:1673342895e3},{title:"HTTP DELETE 方法传递参数",description:"尽管不建议 DELETE 方法携带 body，但实际业务用了，现实往往很无奈……",frontmatter:{title:"HTTP DELETE 方法传递参数",description:"尽管不建议 DELETE 方法携带 body，但实际业务用了，现实往往很无奈……",time:"2019-10-01T00:00:00.000Z",categories:["web"],tags:["HTTP","WEB"]},relativePath:"delete-with-body.md",lastUpdated:1673600806e3},{title:"Git WebHooks",description:"当代码仓库发生某些事件（提交、合并、讨论）时，触发已经定义好的WebHooks，将数据提交到WebHooks服务所在的服务器，服务端对数据解析，执行对应的脚本，实现自动部署等一系列操作。",frontmatter:{title:"Git WebHooks",description:"当代码仓库发生某些事件（提交、合并、讨论）时，触发已经定义好的WebHooks，将数据提交到WebHooks服务所在的服务器，服务端对数据解析，执行对应的脚本，实现自动部署等一系列操作。",time:"2019-09-23T00:00:00.000Z",categories:["git"],tags:["Git","Node.js"]},relativePath:"git-webhook.md",lastUpdated:1673342895e3},{title:"Git排除忽略子目录",description:".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？",frontmatter:{title:"Git排除忽略子目录",description:".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？",time:"2019-09-09T00:00:00.000Z",categories:["git"],tags:["Git"]},relativePath:"git-ignore-exclude.md",lastUpdated:1673342895e3},{title:"MySQL 多版本单服务器共存",description:"同一台下 MySQL 7 和 MySQL 8 共存",frontmatter:{title:"MySQL 多版本单服务器共存",description:"同一台下 MySQL 7 和 MySQL 8 共存",time:"2019-05-12T00:00:00.000Z",categories:["sql"],tags:["MySQL","Linux","CentOS"]},relativePath:"mysql-multi-version.md",lastUpdated:1673342895e3},{title:"CentOS 安装 MySQL 8",description:"CentOS 下快速安装配置 MySQL 8",frontmatter:{title:"CentOS 安装 MySQL 8",description:"CentOS 下快速安装配置 MySQL 8",time:"2019-05-11T00:00:00.000Z",categories:"sql",tags:["CentOS","MySQL","Linux"]},relativePath:"mysql-install.md",lastUpdated:1673342895e3},{title:"MySQL 定时备份",description:"定时自动备份 MySQL 是刚需。",frontmatter:{title:"MySQL 定时备份",description:"定时自动备份 MySQL 是刚需。",time:"2019-05-11T00:00:00.000Z",categories:"sql",tags:["MySQL","DevOps","Shell"]},relativePath:"mysql-backup.md",lastUpdated:1673342895e3},{title:"vi 基本操作",description:"vi 几乎可以说是 Linux 的默认编辑器，命令繁多但又灵活高效。爱之恨之，两极分化。",frontmatter:{title:"vi 基本操作",description:"vi 几乎可以说是 Linux 的默认编辑器，命令繁多但又灵活高效。爱之恨之，两极分化。",time:"2019-05-10T00:00:00.000Z",categories:"linux",tags:["Linux"]},relativePath:"vi.md",lastUpdated:1673342895e3},{title:"CentOS 入坑指南",description:"一入 CentOS 深似海，从此再也爬不出来。",frontmatter:{title:"CentOS 入坑指南",description:"一入 CentOS 深似海，从此再也爬不出来。",time:"2019-05-09T00:00:00.000Z",categories:["linux"],tags:["CentOS","Linux"]},relativePath:"centos-intro.md",lastUpdated:1673600806e3},{title:"钉钉云推送自建RDS最佳实践",description:"被钉钉云RDS坑过的，请自觉来此报到。",frontmatter:{title:"钉钉云推送自建RDS最佳实践",description:"被钉钉云RDS坑过的，请自觉来此报到。",time:"2019-04-08T00:00:00.000Z",categories:["sql"],tags:["MySQL","钉钉","钉钉云","阿里云"]},relativePath:"ding-cloud-push.md",lastUpdated:1673600806e3},{title:"Chrome inspect 开发钉钉应用",description:"Chrome inspect 是 Chrome 浏览器基于 webkit remote debug 的实现，支持安卓模拟器和真实设备。",frontmatter:{title:"Chrome inspect 开发钉钉应用",description:"Chrome inspect 是 Chrome 浏览器基于 webkit remote debug 的实现，支持安卓模拟器和真实设备。",time:"2019-04-07T00:00:00.000Z",categories:["web"],tags:["Chrome","WEB"]},relativePath:"chrome-inspect.md",lastUpdated:1673600806e3},{title:"Vue 父子组件通信",description:"Vue 基本功：父子组件传值和通信",frontmatter:{title:"Vue 父子组件通信",description:"Vue 基本功：父子组件传值和通信",time:"2018-09-30T00:00:00.000Z",categories:["vue"],tags:["Vue.js"]},relativePath:"vue-props.md",lastUpdated:1673342895e3},{title:"LeoVue 的由来",description:"LeoVue 是针对企业开发而创建的组件库，力求简单明了，力求开箱即用，完善80%，丢弃20%。",frontmatter:{title:"LeoVue 的由来",description:"LeoVue 是针对企业开发而创建的组件库，力求简单明了，力求开箱即用，完善80%，丢弃20%。",time:"2018-08-19T00:00:00.000Z",categories:["vue"],tags:["Vue.js"]},relativePath:"leovue-why.md",lastUpdated:1673342895e3},{title:"LeoVue 打包发布 npm 折腾记",description:"详尽步骤细述 Vue 组件库如何发布到 npm。",frontmatter:{title:"LeoVue 打包发布 npm 折腾记",description:"详尽步骤细述 Vue 组件库如何发布到 npm。",time:"2018-08-18T00:00:00.000Z",categories:["vue"],tags:["Vue.js","Node.js"]},relativePath:"leovue-npm.md",lastUpdated:1673342895e3},{title:"Lodop打印解决方案",description:"WEB 打印是 BS 架构开发的一个痛点。输出 PDF 格式，然后调用浏览器打印功能？要不试试 Lodop ？",frontmatter:{title:"Lodop打印解决方案",description:"WEB 打印是 BS 架构开发的一个痛点。输出 PDF 格式，然后调用浏览器打印功能？要不试试 Lodop ？",time:"2018-07-09T00:00:00.000Z",categories:["web"],tags:["WEB"]},relativePath:"lodop.md",lastUpdated:1673342895e3},{title:"安装配置 Oracle PL/SQL Developer",description:"Windows 下安装配置 Oracle 数据库管理器",frontmatter:{title:"安装配置 Oracle PL/SQL Developer",description:"Windows 下安装配置 Oracle 数据库管理器",time:"2018-05-12T00:00:00.000Z",categories:["sql"],tags:["Oracle","SQL","DevOps"]},relativePath:"oracle-plsql.md",lastUpdated:1673342895e3},{title:"Kubernetes 安装指南",description:"kubernetes（简称k8s）是 Google 开源的容器集群管理系统，它构建 Docker 技术之上。",frontmatter:{title:"Kubernetes 安装指南",description:"kubernetes（简称k8s）是 Google 开源的容器集群管理系统，它构建 Docker 技术之上。",time:"2018-04-29T00:00:00.000Z",categories:["devops"],tags:["DevOps","Docker","Kubernetes"]},relativePath:"kubernetes-install.md",lastUpdated:1673342895e3},{title:"Docker、kubernetes 和 Apache Mesos 之间的正确关系",description:"虽然这三种技术都可以使用容器来部署、管理和扩展应用程序，但实际上它们每个都侧重解决不同的问题，并且扎根非常不同的环境之上。",frontmatter:{title:"Docker、kubernetes 和 Apache Mesos 之间的正确关系",description:"虽然这三种技术都可以使用容器来部署、管理和扩展应用程序，但实际上它们每个都侧重解决不同的问题，并且扎根非常不同的环境之上。",time:"2018-04-29T00:00:00.000Z",categories:["devops"],tags:["DevOps","Docker","Kubernetes","虚拟化"]},relativePath:"kubernetes-docker-mesos.md",lastUpdated:1673342895e3},{title:"图解 Git 常用操作",description:"你真的需要记住那么多 Git 操作吗？也许不到十个就够用了。",frontmatter:{title:"图解 Git 常用操作",description:"你真的需要记住那么多 Git 操作吗？也许不到十个就够用了。",time:"2018-04-28T00:00:00.000Z",categories:["git"],tags:["Git"]},relativePath:"git.md",lastUpdated:1673342895e3},{title:"图解 SQL JOINS",description:"左连接、右连接、内连接、外连接……傻傻分不清",frontmatter:{title:"图解 SQL JOINS",description:"左连接、右连接、内连接、外连接……傻傻分不清",time:"2018-04-28T00:00:00.000Z",categories:["sql"],tags:["SQL"]},relativePath:"sql-join.md",lastUpdated:1673342895e3},{title:"前端常用工具",description:"工欲善其事，必先利其器。",frontmatter:{title:"前端常用工具",description:"工欲善其事，必先利其器。",time:"2018-03-02T00:00:00.000Z",categories:["node"],tags:["Node.js"]},relativePath:"frontend-tools.md",lastUpdated:1673612383e3},{title:"Linux Shell 入门",description:"师傅领进门，修行在自身。",frontmatter:{title:"Linux Shell 入门",description:"师傅领进门，修行在自身。",time:"2017-08-09T00:00:00.000Z",categories:["linux"],tags:["Linux","Shell"]},relativePath:"linux-shell.md",lastUpdated:1673342895e3},{title:"nginx 配置 php-fpm",description:"PHP-FPM（PHP FastCGI Process Manager），是用于管理 PHP 进程池的软件，用于接收和处理来自 Web 服务器（如Nginx）的请求。",frontmatter:{title:"nginx 配置 php-fpm",description:"PHP-FPM（PHP FastCGI Process Manager），是用于管理 PHP 进程池的软件，用于接收和处理来自 Web 服务器（如Nginx）的请求。",time:"2017-01-01T00:00:00.000Z",categories:["php"],tags:["CentOS","nginx","PHP"]},relativePath:"nginx-php-fpm.md",lastUpdated:1673600806e3},{title:"Internet 技术概览",description:"一图概览 Internet 技术",frontmatter:{title:"Internet 技术概览",description:"一图概览 Internet 技术",time:"2016-12-20T00:00:00.000Z",categories:["web"],tags:["WEB"]},relativePath:"web-internet.md",lastUpdated:1673342895e3},{title:"WEB前端编码变迁记",description:"话说天下大势，分久必合，合久必分。 —— 《三国演义》",frontmatter:{title:"WEB前端编码变迁记",description:"话说天下大势，分久必合，合久必分。 —— 《三国演义》",time:"2016-12-19T00:00:00.000Z",categories:["web"],tags:["WEB"]},relativePath:"web-component.md",lastUpdated:1673342895e3},{title:"LeoPHP Framework",description:"由于工作需要重拾PHP，折腾好几个框架，臃肿厚重，可谓专治各种不服，终于被感动到哭了。",frontmatter:{title:"LeoPHP Framework",description:"由于工作需要重拾PHP，折腾好几个框架，臃肿厚重，可谓专治各种不服，终于被感动到哭了。",time:"2016-12-01T00:00:00.000Z",categories:["php"],tags:["PHP"]},relativePath:"leophp.md",lastUpdated:1673342895e3},{title:"jQuery 常用表格操作",description:"jQuery 操作表格增删改查",frontmatter:{title:"jQuery 常用表格操作",description:"jQuery 操作表格增删改查",time:"2016-10-30T00:00:00.000Z",categories:["js"],tags:["WEB","JavaScript","jQuery"]},relativePath:"jquery-table.md",lastUpdated:1673342895e3},{title:"JavaScript 思维导图",description:"前人栽树，后人乘凉。",frontmatter:{title:"JavaScript 思维导图",description:"前人栽树，后人乘凉。",time:"2015-05-09T00:00:00.000Z",categories:["js"],tags:["JavaScript","WEB"]},relativePath:"javascript-mind-map.md",lastUpdated:1673342895e3},{title:"CentOS 安装 KVM",description:"很多人都使用 Openstack，通过 nova 来管理KVM，对于 KVM 本身其实很陌生，本文理论联系实践，加深对 KVM 的认识。",frontmatter:{title:"CentOS 安装 KVM",description:"很多人都使用 Openstack，通过 nova 来管理KVM，对于 KVM 本身其实很陌生，本文理论联系实践，加深对 KVM 的认识。",time:"2014-04-04T00:00:00.000Z",categories:["devops"],tags:["DevOps","CentOS","Linux","虚拟化"]},relativePath:"centos-kvm.md",lastUpdated:1673342895e3},{title:"Linux 个人目录规划",description:"分门别类收纳整理是好习惯。",frontmatter:{title:"Linux 个人目录规划",description:"分门别类收纳整理是好习惯。",time:"2014-04-03T00:00:00.000Z",categories:["linux"],tags:["CentOS","Linux"]},relativePath:"linux-home.md",lastUpdated:1673342895e3},{title:"WebVirtCloud 部署笔记",description:"图文并茂的 WebVirtCloud 部署笔记",frontmatter:{title:"WebVirtCloud 部署笔记",description:"图文并茂的 WebVirtCloud 部署笔记",time:"2013-12-30T00:00:00.000Z",categories:["linux"],tags:["CentOS","Linux","虚拟化"]},relativePath:"webvirt-cloud.md",lastUpdated:1673342895e3},{title:"CentOS查看各种信息",description:"收集常用的 CentOS 系统软硬件信息查看方法",frontmatter:{title:"CentOS查看各种信息",description:"收集常用的 CentOS 系统软硬件信息查看方法",time:"2012-04-03T00:00:00.000Z",categories:["linux"],tags:["CentOS","Linux"]},relativePath:"centos-info.md",lastUpdated:1673600806e3},{title:"Zabbix安装笔记",description:"Zabbix（[`zæbiks]）是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。",frontmatter:{title:"Zabbix安装笔记",description:"Zabbix（[`zæbiks]）是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。",time:"2011-11-11T00:00:00.000Z",categories:["linux"],tags:["Linux","DevOps"]},relativePath:"zabbix-install.md",lastUpdated:1673600806e3},{title:"php_imagick安装配置",description:"php_imagick是强大的图片处理PHP插件，提供了比GD库函数更为方便和强大的图片处理功能。",frontmatter:{title:"php_imagick安装配置",description:"php_imagick是强大的图片处理PHP插件，提供了比GD库函数更为方便和强大的图片处理功能。",time:"2010-08-02T00:00:00.000Z",categories:["php"],tags:["PHP"]},relativePath:"php-imagick-windows.md",lastUpdated:1673600806e3},{title:"RBAC之我见",description:"RBAC（Role-Based Access Control）即：基于角色的权限控制。通过角色关联用户，角色关联权限的方式间接赋予用户权限。",frontmatter:{title:"RBAC之我见",description:"RBAC（Role-Based Access Control）即：基于角色的权限控制。通过角色关联用户，角色关联权限的方式间接赋予用户权限。",time:"2009-09-09T00:00:00.000Z",categories:["sql"],tags:["RBAC","MySQL"]},relativePath:"rbac.md",lastUpdated:1673600806e3},{title:"MVC及PHP++、PHP--胡思乱想杂记",description:"长期以来PHP被杂糅进太多的东西了，要负责Db、又要负责HTML、还要负责Controller、还要负责Model，早已累成了PHP++……",frontmatter:{title:"MVC及PHP++、PHP--胡思乱想杂记",description:"长期以来PHP被杂糅进太多的东西了，要负责Db、又要负责HTML、还要负责Controller、还要负责Model，早已累成了PHP++……",time:"2009-08-01T00:00:00.000Z",categories:["php"],tags:["PHP"]},relativePath:"php-lite.md",lastUpdated:1673600806e3},{title:"Linux 编译安装命令 configure、make、install 的意义",description:"tar.gz、tar.bz2的是源代码包，需要编译之后才能安装，在编译过程中你可以指定各种参数以适应你的系统需求，比如安装位置，优化参数，要哪些功能不要哪些功能等等。",frontmatter:{title:"Linux 编译安装命令 configure、make、install 的意义",description:"tar.gz、tar.bz2的是源代码包，需要编译之后才能安装，在编译过程中你可以指定各种参数以适应你的系统需求，比如安装位置，优化参数，要哪些功能不要哪些功能等等。",time:"2008-08-08T00:00:00.000Z",categories:["linux"],tags:["Linux","Shell"]},relativePath:"linux-make-install.md",lastUpdated:1673342895e3}];const xt=v=>(pt("data-v-0b98dd26"),v=v(),ut(),v),Ot={class:"MyDocs"},kt={class:"title"},Dt=["href"],Ct={key:0,class:"my my-medal icon"},wt={class:"info"},Ut={class:"date"},Ht=xt(()=>m("i",{class:"my my-calendar icon"},null,-1)),Zt={class:"text"},Wt=["onClick"],Qt=["onClick"],Vt={__name:"docs",setup(v){const{site:b}=et(),y=f=>b.value.base+f.replace(/.(md|markdown)$/i,""),L=lt(),U=f=>L.go("/tag#"+f),D=f=>L.go(y(f.relativePath));return(f,C)=>(_(),P("div",Ot,[(_(!0),P(Y,null,F(W($t),(h,T)=>(_(),P("div",{key:T,class:"doc"},[m("div",kt,[m("a",{href:y(h.relativePath)},E(h.title),9,Dt),h.frontmatter.top?(_(),P("i",Ct)):ct("",!0)]),m("div",wt,[m("div",Ut,[Ht,m("span",Zt,E(W(Mt)(h.frontmatter.time).format("YYYY-MM-DD")),1)]),(_(!0),P(Y,null,F(h.frontmatter.tags,M=>(_(),P("div",{key:M,class:"tag",onClick:S=>U(M)},E(M),9,Wt))),128))]),m("div",{class:"desc",onClick:M=>D(h)},E(h.description),9,Qt)]))),128))]))}},jt=R(Vt,[["__scopeId","data-v-0b98dd26"]]);const Et={class:"MyHome"},Bt={class:"VPDoc"},Nt={class:"container"},Gt={class:"aside"},Jt={class:"content"},At={__name:"home",setup(v){return(b,y)=>(_(),P("div",Et,[J(Pt),m("div",Bt,[m("div",Nt,[m("div",Gt,[J(Lt)]),m("div",Jt,[J(jt)])])])]))}},It=R(At,[["__scopeId","data-v-4a49a364"]]),Ft=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","lastUpdated":false,"unsave":true},"headers":[],"relativePath":"index.md","lastUpdated":1673579497000}'),qt={name:"index.md"},zt=Object.assign(qt,{setup(v){return(b,y)=>(_(),P("div",null,[J(It)]))}});export{Ft as __pageData,zt as default};
