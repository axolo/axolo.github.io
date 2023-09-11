import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.cd6e3458.js";const F=JSON.parse('{"title":"frp 内网穿透","description":"内网穿透利器，比如将内网的开发机作为 frpc 实现实时更新的演示。","frontmatter":{"title":"frp 内网穿透","description":"内网穿透利器，比如将内网的开发机作为 frpc 实现实时更新的演示。","time":"2020-06-18T00:00:00.000Z","category":"运维","tags":["Linux","CentOS","内网穿透"]},"headers":[],"relativePath":"frp.md","filePath":"frp.md"}'),l={name:"frp.md"},o=p(`<h1 id="frp-内网穿透" tabindex="-1">frp 内网穿透 <a class="header-anchor" href="#frp-内网穿透" aria-label="Permalink to &quot;frp 内网穿透&quot;">​</a></h1><blockquote><p>方跃明 2020-06-18</p></blockquote><p>内网穿透利器，官网：<a href="https://gofrp.org/" target="_blank" rel="noreferrer">https://gofrp.org/</a></p><h2 id="frps" tabindex="-1">frps <a class="header-anchor" href="#frps" aria-label="Permalink to &quot;frps&quot;">​</a></h2><p>frp服务端</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">frps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">frps.ini</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">frps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">frps.ini</span></span></code></pre></div><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[common]</span></span>
<span class="line"><span style="color:#F97583;">bind_port</span><span style="color:#E1E4E8;"> = 7000</span></span>
<span class="line"><span style="color:#F97583;">dashboard_port</span><span style="color:#E1E4E8;"> = 7500</span></span>
<span class="line"><span style="color:#F97583;">vhost_http_port</span><span style="color:#E1E4E8;"> = 8080</span></span>
<span class="line"><span style="color:#F97583;">token</span><span style="color:#E1E4E8;"> = frps-token</span></span>
<span class="line"><span style="color:#F97583;">subdomain_host</span><span style="color:#E1E4E8;"> = your.domain</span></span>
<span class="line"><span style="color:#6A737D;"># dashboard 用户名密码，默认都为 admin</span></span>
<span class="line"><span style="color:#F97583;">dashboard_user</span><span style="color:#E1E4E8;"> = admin</span></span>
<span class="line"><span style="color:#F97583;">dashboard_pwd</span><span style="color:#E1E4E8;"> = admin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[common]</span></span>
<span class="line"><span style="color:#D73A49;">bind_port</span><span style="color:#24292E;"> = 7000</span></span>
<span class="line"><span style="color:#D73A49;">dashboard_port</span><span style="color:#24292E;"> = 7500</span></span>
<span class="line"><span style="color:#D73A49;">vhost_http_port</span><span style="color:#24292E;"> = 8080</span></span>
<span class="line"><span style="color:#D73A49;">token</span><span style="color:#24292E;"> = frps-token</span></span>
<span class="line"><span style="color:#D73A49;">subdomain_host</span><span style="color:#24292E;"> = your.domain</span></span>
<span class="line"><span style="color:#6A737D;"># dashboard 用户名密码，默认都为 admin</span></span>
<span class="line"><span style="color:#D73A49;">dashboard_user</span><span style="color:#24292E;"> = admin</span></span>
<span class="line"><span style="color:#D73A49;">dashboard_pwd</span><span style="color:#24292E;"> = admin</span></span></code></pre></div><h3 id="端口" tabindex="-1">端口 <a class="header-anchor" href="#端口" aria-label="Permalink to &quot;端口&quot;">​</a></h3><p>frps所在系统的防火墙需放行以下端口</p><table><thead><tr><th style="text-align:right;">端口</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:right;">7000</td><td>frps server</td></tr><tr><td style="text-align:right;">7500</td><td>frps dashboard</td></tr><tr><td style="text-align:right;">8080</td><td>frps vhost http</td></tr><tr><td style="text-align:right;">*</td><td>frpc remote port</td></tr></tbody></table><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">## 防火墙放行端口</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--zone=public</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--add-port=7000/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--permanent</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># success</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--zone=public</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--add-port=3306/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--permanent</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># success</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--reload</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">## 防火墙放行端口</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--zone=public</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--add-port=7000/tcp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--permanent</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># success</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--zone=public</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--add-port=3306/tcp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--permanent</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># success</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--reload</span></span></code></pre></div><h3 id="服务" tabindex="-1">服务 <a class="header-anchor" href="#服务" aria-label="Permalink to &quot;服务&quot;">​</a></h3><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[Unit]</span></span>
<span class="line"><span style="color:#F97583;">Description</span><span style="color:#E1E4E8;">=Frp Server Service</span></span>
<span class="line"><span style="color:#F97583;">After</span><span style="color:#E1E4E8;">=network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[Service]</span></span>
<span class="line"><span style="color:#F97583;">Type</span><span style="color:#E1E4E8;">=simple</span></span>
<span class="line"><span style="color:#F97583;">User</span><span style="color:#E1E4E8;">=nobody</span></span>
<span class="line"><span style="color:#F97583;">Restart</span><span style="color:#E1E4E8;">=on-failure</span></span>
<span class="line"><span style="color:#F97583;">RestartSec</span><span style="color:#E1E4E8;">=5s</span></span>
<span class="line"><span style="color:#F97583;">ExecStart</span><span style="color:#E1E4E8;">=/etc/frp/frps -c /etc/frp/frps.ini</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[Install]</span></span>
<span class="line"><span style="color:#F97583;">WantedBy</span><span style="color:#E1E4E8;">=multi-user.target</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[Unit]</span></span>
<span class="line"><span style="color:#D73A49;">Description</span><span style="color:#24292E;">=Frp Server Service</span></span>
<span class="line"><span style="color:#D73A49;">After</span><span style="color:#24292E;">=network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[Service]</span></span>
<span class="line"><span style="color:#D73A49;">Type</span><span style="color:#24292E;">=simple</span></span>
<span class="line"><span style="color:#D73A49;">User</span><span style="color:#24292E;">=nobody</span></span>
<span class="line"><span style="color:#D73A49;">Restart</span><span style="color:#24292E;">=on-failure</span></span>
<span class="line"><span style="color:#D73A49;">RestartSec</span><span style="color:#24292E;">=5s</span></span>
<span class="line"><span style="color:#D73A49;">ExecStart</span><span style="color:#24292E;">=/etc/frp/frps -c /etc/frp/frps.ini</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[Install]</span></span>
<span class="line"><span style="color:#D73A49;">WantedBy</span><span style="color:#24292E;">=multi-user.target</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建软链接，设置为自动启动，并启动frpc</span></span>
<span class="line"><span style="color:#B392F0;">ln</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/frp/systemd/frps.service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/systemd/system/frps.service</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">frps</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">frps</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建软链接，设置为自动启动，并启动frpc</span></span>
<span class="line"><span style="color:#6F42C1;">ln</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/frp/systemd/frps.service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/systemd/system/frps.service</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">frps</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">frps</span></span></code></pre></div><h2 id="frpc" tabindex="-1">frpc <a class="header-anchor" href="#frpc" aria-label="Permalink to &quot;frpc&quot;">​</a></h2><p>frp客户端</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">frpc</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">frpc.ini</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">frpc</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">frpc.ini</span></span></code></pre></div><h3 id="配置-1" tabindex="-1">配置 <a class="header-anchor" href="#配置-1" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>通常，除了http外，需在frps所在系统的防火墙和路由器放行客户端配置的端口</p><p><strong>注意：</strong> 客户端无需放行端口，这就是“内网穿透”</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[common]</span></span>
<span class="line"><span style="color:#F97583;">server_addr</span><span style="color:#E1E4E8;"> = frps-server</span></span>
<span class="line"><span style="color:#F97583;">server_port</span><span style="color:#E1E4E8;"> = 7000</span></span>
<span class="line"><span style="color:#F97583;">token</span><span style="color:#E1E4E8;"> = frps-token</span></span>
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
<span class="line"><span style="color:#B392F0;">[dev]</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> = http</span></span>
<span class="line"><span style="color:#F97583;">subdomain</span><span style="color:#E1E4E8;"> = dev</span></span>
<span class="line"><span style="color:#F97583;">local_port</span><span style="color:#E1E4E8;"> = 80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[egg]</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> = tcp</span></span>
<span class="line"><span style="color:#F97583;">local_ip</span><span style="color:#E1E4E8;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#F97583;">local_port</span><span style="color:#E1E4E8;"> = 7001</span></span>
<span class="line"><span style="color:#F97583;">remote_port</span><span style="color:#E1E4E8;"> = 7001</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[common]</span></span>
<span class="line"><span style="color:#D73A49;">server_addr</span><span style="color:#24292E;"> = frps-server</span></span>
<span class="line"><span style="color:#D73A49;">server_port</span><span style="color:#24292E;"> = 7000</span></span>
<span class="line"><span style="color:#D73A49;">token</span><span style="color:#24292E;"> = frps-token</span></span>
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
<span class="line"><span style="color:#6F42C1;">[dev]</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> = http</span></span>
<span class="line"><span style="color:#D73A49;">subdomain</span><span style="color:#24292E;"> = dev</span></span>
<span class="line"><span style="color:#D73A49;">local_port</span><span style="color:#24292E;"> = 80</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[egg]</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> = tcp</span></span>
<span class="line"><span style="color:#D73A49;">local_ip</span><span style="color:#24292E;"> = 127.0.0.1</span></span>
<span class="line"><span style="color:#D73A49;">local_port</span><span style="color:#24292E;"> = 7001</span></span>
<span class="line"><span style="color:#D73A49;">remote_port</span><span style="color:#24292E;"> = 7001</span></span></code></pre></div><h3 id="服务-1" tabindex="-1">服务 <a class="header-anchor" href="#服务-1" aria-label="Permalink to &quot;服务&quot;">​</a></h3><p>类似frps</p>`,24),e=[o];function t(c,r,i,y,E,d){return a(),n("div",null,e)}const f=s(l,[["render",t]]);export{F as __pageData,f as default};
