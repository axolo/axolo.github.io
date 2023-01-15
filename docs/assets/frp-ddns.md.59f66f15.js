import{_ as s,o as a,c as n,b as p}from"./app.88b23440.js";const d=JSON.parse('{"title":"家用宽带联机开发环境部署","description":"利用家庭宽带低成本、低功耗部署联机开发环境。当然，若有阿里云等公网环境，路由服务器合一，略改即可支持。","frontmatter":{"title":"家用宽带联机开发环境部署","description":"利用家庭宽带低成本、低功耗部署联机开发环境。当然，若有阿里云等公网环境，路由服务器合一，略改即可支持。","time":"2020-05-18T00:00:00.000Z","categories":["linux"],"tags":["Linux","CentOS","内网穿透"]},"relativePath":"frp-ddns.md","lastUpdated":1673694143000}'),l={name:"frp-ddns.md"},o=p(`<h1 id="家用宽带联机开发环境部署" tabindex="-1">家用宽带联机开发环境部署 <a class="header-anchor" href="#家用宽带联机开发环境部署" aria-hidden="true">#</a></h1><p>利用家庭宽带低成本、低功耗部署联机开发环境。 当然，若有阿里云等公网环境，路由服务器合一，略改即可支持。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">                  +-----------+</span></span>
<span class="line"><span style="color:#A6ACCD;">                  | frpc      |</span></span>
<span class="line"><span style="color:#A6ACCD;">                  | developer |</span></span>
<span class="line"><span style="color:#A6ACCD;">                  +-----------+</span></span>
<span class="line"><span style="color:#A6ACCD;">                       |</span></span>
<span class="line"><span style="color:#A6ACCD;">                     ddns</span></span>
<span class="line"><span style="color:#A6ACCD;">                       |</span></span>
<span class="line"><span style="color:#A6ACCD;">+--------+        +--------+          +--------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| dns    |        | frps   |          | web    |</span></span>
<span class="line"><span style="color:#A6ACCD;">| domain |&lt;- ns -&gt;| router |&lt;- http -&gt;| client |</span></span>
<span class="line"><span style="color:#A6ACCD;">+--------+        +--------+          +--------+</span></span>
<span class="line"><span style="color:#A6ACCD;">                       |</span></span>
<span class="line"><span style="color:#A6ACCD;">                     cname</span></span>
<span class="line"><span style="color:#A6ACCD;">                       |</span></span>
<span class="line"><span style="color:#A6ACCD;">                 +-----------+</span></span>
<span class="line"><span style="color:#A6ACCD;">                 | frpc      |</span></span>
<span class="line"><span style="color:#A6ACCD;">                 | server    |</span></span>
<span class="line"><span style="color:#A6ACCD;">                 +-----------+</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="条件" tabindex="-1">条件 <a class="header-anchor" href="#条件" aria-hidden="true">#</a></h2><table><thead><tr><th>项目</th><th>推荐</th><th>说明</th></tr></thead><tbody><tr><td>家用宽带</td><td>电信宽带</td><td>要求ISP开通光猫桥接模式（或破解光猫）必须暴露公网IP</td></tr><tr><td>动态域名</td><td>花生壳</td><td>通过DDNS客户端动态绑定IP实现域名访问</td></tr><tr><td>服务器</td><td>工控机</td><td>x86服务器，建议使用低功耗被动散热低噪音迷你机</td></tr><tr><td>路由器</td><td>OpenWRT</td><td>可选，内置或支持安装或刷机后可安装frp的家庭路由器</td></tr><tr><td>页面服务</td><td>GitHub Pages</td><td>可选，静态页面托管，直接支持80端口访问</td></tr><tr><td>开发机</td><td>个人电脑</td><td>可选，移动办公即时接入、随时随地为客户提供即时演示</td></tr></tbody></table><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-hidden="true">#</a></h2><ul><li>frp将本地端口映射到远程服务器端口（请求转发到本地开发环境便于调试）</li><li>Ngrok接管远程服务器端口普通端口转换为80、443等端口（微信开发需要）</li></ul><h2 id="frps" tabindex="-1">frps <a class="header-anchor" href="#frps" aria-hidden="true">#</a></h2><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[common]</span></span>
<span class="line"><span style="color:#F07178;">bind_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7000</span></span>
<span class="line"><span style="color:#F07178;">dashboard_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7500</span></span>
<span class="line"><span style="color:#F07178;">dashboard_user</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> admin</span></span>
<span class="line"><span style="color:#F07178;">dashboard_pwd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> admin</span></span>
<span class="line"><span style="color:#F07178;">vhost_http_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 8080</span></span>
<span class="line"><span style="color:#F07178;">token</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> your-token</span></span>
<span class="line"><span style="color:#F07178;">subdomain_host</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> your.domain</span></span>
<span class="line"></span></code></pre></div><h2 id="frpc-server" tabindex="-1">frpc server <a class="header-anchor" href="#frpc-server" aria-hidden="true">#</a></h2><p>服务器端配置，建议安装为服务</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[common]</span></span>
<span class="line"><span style="color:#F07178;">server_addr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> frps-server-host</span></span>
<span class="line"><span style="color:#F07178;">server_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7000</span></span>
<span class="line"><span style="color:#F07178;">token</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> your-token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[ssh]</span></span>
<span class="line"><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tcp</span></span>
<span class="line"><span style="color:#F07178;">local_ip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 127.0.0.1</span></span>
<span class="line"><span style="color:#F07178;">local_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 22</span></span>
<span class="line"><span style="color:#F07178;">remote_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 22</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[msyql]</span></span>
<span class="line"><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tcp</span></span>
<span class="line"><span style="color:#F07178;">local_ip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 127.0.0.1</span></span>
<span class="line"><span style="color:#F07178;">local_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 3306</span></span>
<span class="line"><span style="color:#F07178;">remote_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 3306</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[api]</span></span>
<span class="line"><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span></span>
<span class="line"><span style="color:#F07178;">subdomain</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> api </span><span style="color:#676E95;font-style:italic;"># http://api.your.domain:8080</span></span>
<span class="line"><span style="color:#F07178;">local_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 80</span></span>
<span class="line"><span style="color:#F07178;">proxy_protocol_version</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[web]</span></span>
<span class="line"><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span></span>
<span class="line"><span style="color:#F07178;">subdomain</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> web </span><span style="color:#676E95;font-style:italic;"># http://web.your.domain:8080</span></span>
<span class="line"><span style="color:#F07178;">local_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 80</span></span>
<span class="line"><span style="color:#F07178;">proxy_protocol_version</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v2</span></span>
<span class="line"></span></code></pre></div><h2 id="frpc-developer" tabindex="-1">frpc developer <a class="header-anchor" href="#frpc-developer" aria-hidden="true">#</a></h2><p>开发机端配置，建议命令行运行</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[common]</span></span>
<span class="line"><span style="color:#F07178;">server_addr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> frps-server-host</span></span>
<span class="line"><span style="color:#F07178;">server_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7000</span></span>
<span class="line"><span style="color:#F07178;">token</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> your-token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[dev-api]</span></span>
<span class="line"><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span></span>
<span class="line"><span style="color:#F07178;">local_ip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 127.0.0.1</span></span>
<span class="line"><span style="color:#F07178;">local_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7001</span></span>
<span class="line"><span style="color:#F07178;">custom_domains</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> api.ddns.domain </span><span style="color:#676E95;font-style:italic;"># http://api.ddns.domain:8080</span></span>
<span class="line"><span style="color:#F07178;">proxy_protocol_version</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[dev-web]</span></span>
<span class="line"><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span></span>
<span class="line"><span style="color:#F07178;">local_ip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 127.0.0.1</span></span>
<span class="line"><span style="color:#F07178;">local_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 3000</span></span>
<span class="line"><span style="color:#F07178;">custom_domains</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> web.ddns.domain </span><span style="color:#676E95;font-style:italic;"># http://web.ddns.domain:8080</span></span>
<span class="line"><span style="color:#F07178;">proxy_protocol_version</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v2</span></span>
<span class="line"></span></code></pre></div><h2 id="端口映射" tabindex="-1">端口映射 <a class="header-anchor" href="#端口映射" aria-hidden="true">#</a></h2><p>在路由器上配置端口映射开放外网访问。</p><h2 id="客户托管" tabindex="-1">客户托管 <a class="header-anchor" href="#客户托管" aria-hidden="true">#</a></h2><h3 id="开发版" tabindex="-1">开发版 <a class="header-anchor" href="#开发版" aria-hidden="true">#</a></h3><p>客户域名解析添加<code>CNAME</code>到服务器端相应的域名，并使用<code>nginx</code>反向代理。</p><h3 id="静态页" tabindex="-1">静态页 <a class="header-anchor" href="#静态页" aria-hidden="true">#</a></h3><p>使用<code>Pages</code>服务，可支持<code>HTTPS</code>（涉及跨域谨慎使用）。</p><h2 id="ngrok" tabindex="-1">Ngrok <a class="header-anchor" href="#ngrok" aria-hidden="true">#</a></h2><p><a href="https://baike.baidu.com/item/ngrok/13986278" target="_blank" rel="noreferrer">Ngrok</a> 释义</p><blockquote><p>方跃明 2020-05-18</p></blockquote>`,25),e=[o];function t(r,c,i,y,C,A){return a(),n("div",null,e)}const F=s(l,[["render",t]]);export{d as __pageData,F as default};
