import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.d5af2850.js";const _=JSON.parse('{"title":"家用宽带联机开发环境部署","description":"利用家庭宽带低成本、低功耗部署联机开发环境。当然，若有阿里云等公网环境，路由服务器合一，略改即可支持。","frontmatter":{"title":"家用宽带联机开发环境部署","description":"利用家庭宽带低成本、低功耗部署联机开发环境。当然，若有阿里云等公网环境，路由服务器合一，略改即可支持。","time":"2020-05-18T00:00:00.000Z","category":"运维","tags":["Linux","CentOS","内网穿透"]},"headers":[],"relativePath":"frp-ddns.md","filePath":"frp-ddns.md"}'),l={name:"frp-ddns.md"},o=p(`<h1 id="家用宽带联机开发环境部署" tabindex="-1">家用宽带联机开发环境部署 <a class="header-anchor" href="#家用宽带联机开发环境部署" aria-label="Permalink to &quot;家用宽带联机开发环境部署&quot;">​</a></h1><blockquote><p>方跃明 2020-05-18</p></blockquote><p>利用家庭宽带低成本、低功耗部署联机开发环境。 当然，若有阿里云等公网环境，路由服务器合一，略改即可支持。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">                  +-----------+</span></span>
<span class="line"><span style="color:#e1e4e8;">                  | frpc      |</span></span>
<span class="line"><span style="color:#e1e4e8;">                  | developer |</span></span>
<span class="line"><span style="color:#e1e4e8;">                  +-----------+</span></span>
<span class="line"><span style="color:#e1e4e8;">                       |</span></span>
<span class="line"><span style="color:#e1e4e8;">                     ddns</span></span>
<span class="line"><span style="color:#e1e4e8;">                       |</span></span>
<span class="line"><span style="color:#e1e4e8;">+--------+        +--------+          +--------+</span></span>
<span class="line"><span style="color:#e1e4e8;">| dns    |        | frps   |          | web    |</span></span>
<span class="line"><span style="color:#e1e4e8;">| domain |&lt;- ns -&gt;| router |&lt;- http -&gt;| client |</span></span>
<span class="line"><span style="color:#e1e4e8;">+--------+        +--------+          +--------+</span></span>
<span class="line"><span style="color:#e1e4e8;">                       |</span></span>
<span class="line"><span style="color:#e1e4e8;">                     cname</span></span>
<span class="line"><span style="color:#e1e4e8;">                       |</span></span>
<span class="line"><span style="color:#e1e4e8;">                 +-----------+</span></span>
<span class="line"><span style="color:#e1e4e8;">                 | frpc      |</span></span>
<span class="line"><span style="color:#e1e4e8;">                 | server    |</span></span>
<span class="line"><span style="color:#e1e4e8;">                 +-----------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">                  +-----------+</span></span>
<span class="line"><span style="color:#24292e;">                  | frpc      |</span></span>
<span class="line"><span style="color:#24292e;">                  | developer |</span></span>
<span class="line"><span style="color:#24292e;">                  +-----------+</span></span>
<span class="line"><span style="color:#24292e;">                       |</span></span>
<span class="line"><span style="color:#24292e;">                     ddns</span></span>
<span class="line"><span style="color:#24292e;">                       |</span></span>
<span class="line"><span style="color:#24292e;">+--------+        +--------+          +--------+</span></span>
<span class="line"><span style="color:#24292e;">| dns    |        | frps   |          | web    |</span></span>
<span class="line"><span style="color:#24292e;">| domain |&lt;- ns -&gt;| router |&lt;- http -&gt;| client |</span></span>
<span class="line"><span style="color:#24292e;">+--------+        +--------+          +--------+</span></span>
<span class="line"><span style="color:#24292e;">                       |</span></span>
<span class="line"><span style="color:#24292e;">                     cname</span></span>
<span class="line"><span style="color:#24292e;">                       |</span></span>
<span class="line"><span style="color:#24292e;">                 +-----------+</span></span>
<span class="line"><span style="color:#24292e;">                 | frpc      |</span></span>
<span class="line"><span style="color:#24292e;">                 | server    |</span></span>
<span class="line"><span style="color:#24292e;">                 +-----------+</span></span></code></pre></div><h2 id="条件" tabindex="-1">条件 <a class="header-anchor" href="#条件" aria-label="Permalink to &quot;条件&quot;">​</a></h2><table><thead><tr><th>项目</th><th>推荐</th><th>说明</th></tr></thead><tbody><tr><td>家用宽带</td><td>电信宽带</td><td>要求ISP开通光猫桥接模式（或破解光猫）必须暴露公网IP</td></tr><tr><td>动态域名</td><td>花生壳</td><td>通过DDNS客户端动态绑定IP实现域名访问</td></tr><tr><td>服务器</td><td>手机</td><td>安卓手机root后安装Linux，x86服务器建议低功耗低噪音迷你机</td></tr><tr><td>路由器</td><td>OpenWRT</td><td>可选，内置或支持安装或刷机后可安装frp的家庭路由器</td></tr><tr><td>页面服务</td><td>GitHub Pages</td><td>可选，静态页面托管，直接支持80端口访问</td></tr><tr><td>开发机</td><td>个人电脑</td><td>可选，移动办公即时接入、随时随地为客户提供即时演示</td></tr></tbody></table><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><ul><li>frp将本地端口映射到远程服务器端口（请求转发到本地开发环境便于调试）</li><li>Ngrok接管远程服务器端口普通端口转换为80、443等端口（微信开发需要）</li></ul><h2 id="frps" tabindex="-1">frps <a class="header-anchor" href="#frps" aria-label="Permalink to &quot;frps&quot;">​</a></h2><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[common]</span></span>
<span class="line"><span style="color:#F97583;">bind_port</span><span style="color:#E1E4E8;"> = 7000</span></span>
<span class="line"><span style="color:#F97583;">dashboard_port</span><span style="color:#E1E4E8;"> = 7500</span></span>
<span class="line"><span style="color:#F97583;">dashboard_user</span><span style="color:#E1E4E8;"> = admin</span></span>
<span class="line"><span style="color:#F97583;">dashboard_pwd</span><span style="color:#E1E4E8;"> = admin</span></span>
<span class="line"><span style="color:#F97583;">vhost_http_port</span><span style="color:#E1E4E8;"> = 8080</span></span>
<span class="line"><span style="color:#F97583;">token</span><span style="color:#E1E4E8;"> = your-token</span></span>
<span class="line"><span style="color:#F97583;">subdomain_host</span><span style="color:#E1E4E8;"> = your.domain</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[common]</span></span>
<span class="line"><span style="color:#D73A49;">bind_port</span><span style="color:#24292E;"> = 7000</span></span>
<span class="line"><span style="color:#D73A49;">dashboard_port</span><span style="color:#24292E;"> = 7500</span></span>
<span class="line"><span style="color:#D73A49;">dashboard_user</span><span style="color:#24292E;"> = admin</span></span>
<span class="line"><span style="color:#D73A49;">dashboard_pwd</span><span style="color:#24292E;"> = admin</span></span>
<span class="line"><span style="color:#D73A49;">vhost_http_port</span><span style="color:#24292E;"> = 8080</span></span>
<span class="line"><span style="color:#D73A49;">token</span><span style="color:#24292E;"> = your-token</span></span>
<span class="line"><span style="color:#D73A49;">subdomain_host</span><span style="color:#24292E;"> = your.domain</span></span></code></pre></div><h2 id="frpc-server" tabindex="-1">frpc server <a class="header-anchor" href="#frpc-server" aria-label="Permalink to &quot;frpc server&quot;">​</a></h2><p>服务器端配置，建议安装为服务</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[common]</span></span>
<span class="line"><span style="color:#F97583;">server_addr</span><span style="color:#E1E4E8;"> = frps-server-host</span></span>
<span class="line"><span style="color:#F97583;">server_port</span><span style="color:#E1E4E8;"> = 7000</span></span>
<span class="line"><span style="color:#F97583;">token</span><span style="color:#E1E4E8;"> = your-token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[ssh]</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> = tcp</span></span>
<span class="line"><span style="color:#F97583;">local_ip</span><span style="color:#E1E4E8;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#F97583;">local_port</span><span style="color:#E1E4E8;"> = 22</span></span>
<span class="line"><span style="color:#F97583;">remote_port</span><span style="color:#E1E4E8;"> = 22</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[msyql]</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> = tcp</span></span>
<span class="line"><span style="color:#F97583;">local_ip</span><span style="color:#E1E4E8;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#F97583;">local_port</span><span style="color:#E1E4E8;"> = 3306</span></span>
<span class="line"><span style="color:#F97583;">remote_port</span><span style="color:#E1E4E8;"> = 3306</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[api]</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> = http</span></span>
<span class="line"><span style="color:#F97583;">subdomain</span><span style="color:#E1E4E8;"> = api </span><span style="color:#6A737D;"># http://api.your.domain:8080</span></span>
<span class="line"><span style="color:#F97583;">local_port</span><span style="color:#E1E4E8;"> = 80</span></span>
<span class="line"><span style="color:#F97583;">proxy_protocol_version</span><span style="color:#E1E4E8;"> = v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[web]</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> = http</span></span>
<span class="line"><span style="color:#F97583;">subdomain</span><span style="color:#E1E4E8;"> = web </span><span style="color:#6A737D;"># http://web.your.domain:8080</span></span>
<span class="line"><span style="color:#F97583;">local_port</span><span style="color:#E1E4E8;"> = 80</span></span>
<span class="line"><span style="color:#F97583;">proxy_protocol_version</span><span style="color:#E1E4E8;"> = v2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[common]</span></span>
<span class="line"><span style="color:#D73A49;">server_addr</span><span style="color:#24292E;"> = frps-server-host</span></span>
<span class="line"><span style="color:#D73A49;">server_port</span><span style="color:#24292E;"> = 7000</span></span>
<span class="line"><span style="color:#D73A49;">token</span><span style="color:#24292E;"> = your-token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[ssh]</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> = tcp</span></span>
<span class="line"><span style="color:#D73A49;">local_ip</span><span style="color:#24292E;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#D73A49;">local_port</span><span style="color:#24292E;"> = 22</span></span>
<span class="line"><span style="color:#D73A49;">remote_port</span><span style="color:#24292E;"> = 22</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[msyql]</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> = tcp</span></span>
<span class="line"><span style="color:#D73A49;">local_ip</span><span style="color:#24292E;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#D73A49;">local_port</span><span style="color:#24292E;"> = 3306</span></span>
<span class="line"><span style="color:#D73A49;">remote_port</span><span style="color:#24292E;"> = 3306</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[api]</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> = http</span></span>
<span class="line"><span style="color:#D73A49;">subdomain</span><span style="color:#24292E;"> = api </span><span style="color:#6A737D;"># http://api.your.domain:8080</span></span>
<span class="line"><span style="color:#D73A49;">local_port</span><span style="color:#24292E;"> = 80</span></span>
<span class="line"><span style="color:#D73A49;">proxy_protocol_version</span><span style="color:#24292E;"> = v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[web]</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> = http</span></span>
<span class="line"><span style="color:#D73A49;">subdomain</span><span style="color:#24292E;"> = web </span><span style="color:#6A737D;"># http://web.your.domain:8080</span></span>
<span class="line"><span style="color:#D73A49;">local_port</span><span style="color:#24292E;"> = 80</span></span>
<span class="line"><span style="color:#D73A49;">proxy_protocol_version</span><span style="color:#24292E;"> = v2</span></span></code></pre></div><h2 id="frpc-developer" tabindex="-1">frpc developer <a class="header-anchor" href="#frpc-developer" aria-label="Permalink to &quot;frpc developer&quot;">​</a></h2><p>开发机端配置，建议命令行运行</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[common]</span></span>
<span class="line"><span style="color:#F97583;">server_addr</span><span style="color:#E1E4E8;"> = frps-server-host</span></span>
<span class="line"><span style="color:#F97583;">server_port</span><span style="color:#E1E4E8;"> = 7000</span></span>
<span class="line"><span style="color:#F97583;">token</span><span style="color:#E1E4E8;"> = your-token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[dev-api]</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> = http</span></span>
<span class="line"><span style="color:#F97583;">local_ip</span><span style="color:#E1E4E8;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#F97583;">local_port</span><span style="color:#E1E4E8;"> = 7001</span></span>
<span class="line"><span style="color:#F97583;">custom_domains</span><span style="color:#E1E4E8;"> = api.ddns.domain </span><span style="color:#6A737D;"># http://api.ddns.domain:8080</span></span>
<span class="line"><span style="color:#F97583;">proxy_protocol_version</span><span style="color:#E1E4E8;"> = v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[dev-web]</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> = http</span></span>
<span class="line"><span style="color:#F97583;">local_ip</span><span style="color:#E1E4E8;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#F97583;">local_port</span><span style="color:#E1E4E8;"> = 3000</span></span>
<span class="line"><span style="color:#F97583;">custom_domains</span><span style="color:#E1E4E8;"> = web.ddns.domain </span><span style="color:#6A737D;"># http://web.ddns.domain:8080</span></span>
<span class="line"><span style="color:#F97583;">proxy_protocol_version</span><span style="color:#E1E4E8;"> = v2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[common]</span></span>
<span class="line"><span style="color:#D73A49;">server_addr</span><span style="color:#24292E;"> = frps-server-host</span></span>
<span class="line"><span style="color:#D73A49;">server_port</span><span style="color:#24292E;"> = 7000</span></span>
<span class="line"><span style="color:#D73A49;">token</span><span style="color:#24292E;"> = your-token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[dev-api]</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> = http</span></span>
<span class="line"><span style="color:#D73A49;">local_ip</span><span style="color:#24292E;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#D73A49;">local_port</span><span style="color:#24292E;"> = 7001</span></span>
<span class="line"><span style="color:#D73A49;">custom_domains</span><span style="color:#24292E;"> = api.ddns.domain </span><span style="color:#6A737D;"># http://api.ddns.domain:8080</span></span>
<span class="line"><span style="color:#D73A49;">proxy_protocol_version</span><span style="color:#24292E;"> = v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[dev-web]</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> = http</span></span>
<span class="line"><span style="color:#D73A49;">local_ip</span><span style="color:#24292E;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#D73A49;">local_port</span><span style="color:#24292E;"> = 3000</span></span>
<span class="line"><span style="color:#D73A49;">custom_domains</span><span style="color:#24292E;"> = web.ddns.domain </span><span style="color:#6A737D;"># http://web.ddns.domain:8080</span></span>
<span class="line"><span style="color:#D73A49;">proxy_protocol_version</span><span style="color:#24292E;"> = v2</span></span></code></pre></div><h2 id="端口映射" tabindex="-1">端口映射 <a class="header-anchor" href="#端口映射" aria-label="Permalink to &quot;端口映射&quot;">​</a></h2><p>在路由器上配置端口映射开放外网访问。</p><h2 id="客户托管" tabindex="-1">客户托管 <a class="header-anchor" href="#客户托管" aria-label="Permalink to &quot;客户托管&quot;">​</a></h2><h3 id="开发版" tabindex="-1">开发版 <a class="header-anchor" href="#开发版" aria-label="Permalink to &quot;开发版&quot;">​</a></h3><p>客户域名解析添加<code>CNAME</code>到服务器端相应的域名，并使用<code>nginx</code>反向代理。</p><h3 id="静态页" tabindex="-1">静态页 <a class="header-anchor" href="#静态页" aria-label="Permalink to &quot;静态页&quot;">​</a></h3><p>使用<code>Pages</code>服务，可支持<code>HTTPS</code>（涉及跨域谨慎使用）。</p><h2 id="ngrok" tabindex="-1">Ngrok <a class="header-anchor" href="#ngrok" aria-label="Permalink to &quot;Ngrok&quot;">​</a></h2><p><a href="https://baike.baidu.com/item/ngrok/13986278" target="_blank" rel="noreferrer">Ngrok</a> 释义</p>`,25),e=[o];function t(c,r,i,y,d,E){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{_ as __pageData,m as default};