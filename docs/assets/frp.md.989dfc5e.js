import{_ as s,o as a,c as n,b as l}from"./app.23d12aae.js";const d=JSON.parse('{"title":"frp内网穿透","description":"","frontmatter":{"title":"frp内网穿透","time":"2020-06-18T00:00:00.000Z","categories":"Linux","tags":["Linux","CentOS","内网穿透"]},"headers":[{"level":2,"title":"frps","slug":"frps","link":"#frps","children":[{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"端口","slug":"端口","link":"#端口","children":[]},{"level":3,"title":"服务","slug":"服务","link":"#服务","children":[]}]},{"level":2,"title":"frpc","slug":"frpc","link":"#frpc","children":[{"level":3,"title":"配置","slug":"配置-1","link":"#配置-1","children":[]},{"level":3,"title":"服务","slug":"服务-1","link":"#服务-1","children":[]}]}],"relativePath":"frp.md","lastUpdated":1673342895000}'),p={name:"frp.md"},e=l(`<h1 id="frp内网穿透" tabindex="-1">frp内网穿透 <a class="header-anchor" href="#frp内网穿透" aria-hidden="true">#</a></h1><p>内网穿透利器，官网：<a href="https://github.com/fatedier/frp" target="_blank" rel="noreferrer">https://github.com/fatedier/frp</a></p><h2 id="frps" tabindex="-1">frps <a class="header-anchor" href="#frps" aria-hidden="true">#</a></h2><p>frp服务端</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">frps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">frps.ini</span></span>
<span class="line"></span></code></pre></div><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[common]</span></span>
<span class="line"><span style="color:#F07178;">bind_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7000</span></span>
<span class="line"><span style="color:#F07178;">dashboard_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7500</span></span>
<span class="line"><span style="color:#F07178;">vhost_http_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 8080</span></span>
<span class="line"><span style="color:#F07178;">token</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> frps-token</span></span>
<span class="line"><span style="color:#F07178;">subdomain_host</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> your.domain</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># dashboard 用户名密码，默认都为 admin</span></span>
<span class="line"><span style="color:#F07178;">dashboard_user</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> admin</span></span>
<span class="line"><span style="color:#F07178;">dashboard_pwd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> admin</span></span>
<span class="line"></span></code></pre></div><h3 id="端口" tabindex="-1">端口 <a class="header-anchor" href="#端口" aria-hidden="true">#</a></h3><p>frps所在系统的防火墙需放行以下端口</p><table><thead><tr><th style="text-align:right;">端口</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:right;">7000</td><td>frps server</td></tr><tr><td style="text-align:right;">7500</td><td>frps dashboard</td></tr><tr><td style="text-align:right;">8080</td><td>frps vhost http</td></tr><tr><td style="text-align:right;">*</td><td>frpc remote port</td></tr></tbody></table><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 防火墙放行端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=public</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=7000/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># success</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--zone=public</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--add-port=3306/tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># success</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--reload</span></span>
<span class="line"></span></code></pre></div><h3 id="服务" tabindex="-1">服务 <a class="header-anchor" href="#服务" aria-hidden="true">#</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[Unit]</span></span>
<span class="line"><span style="color:#F07178;">Description</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Frp Server Service</span></span>
<span class="line"><span style="color:#F07178;">After</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[Service]</span></span>
<span class="line"><span style="color:#F07178;">Type</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">simple</span></span>
<span class="line"><span style="color:#F07178;">User</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">nobody</span></span>
<span class="line"><span style="color:#F07178;">Restart</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">on-failure</span></span>
<span class="line"><span style="color:#F07178;">RestartSec</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">5s</span></span>
<span class="line"><span style="color:#F07178;">ExecStart</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/usr/bin/frps -c /etc/frp/frps.ini</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建软链接</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ln -s /etc/frp/frps /usr/bin/frps</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ln -s /etc/frp/frpc /usr/bin/frpc</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或，修改以下内容指向正确位置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ExecStart=/etc/frp/frps -c /etc/frp/frps.ini</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[Install]</span></span>
<span class="line"><span style="color:#F07178;">WantedBy</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">multi-user.target</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 创建软链接，设置为自动启动，并启动frpc</span></span>
<span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/frp/systemd/frps.service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/systemd/system/frps.service</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">frps</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">frps</span></span>
<span class="line"></span></code></pre></div><h2 id="frpc" tabindex="-1">frpc <a class="header-anchor" href="#frpc" aria-hidden="true">#</a></h2><p>frp客户端</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">frpc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">frpc.ini</span></span>
<span class="line"></span></code></pre></div><h3 id="配置-1" tabindex="-1">配置 <a class="header-anchor" href="#配置-1" aria-hidden="true">#</a></h3><p>通常，除了http外，需在frps所在系统的防火墙和路由器放行客户端配置的端口</p><p><strong>注意：</strong> 客户端无需放行端口，这就是“内网穿透”</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[common]</span></span>
<span class="line"><span style="color:#F07178;">server_addr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> frps-server</span></span>
<span class="line"><span style="color:#F07178;">server_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7000</span></span>
<span class="line"><span style="color:#F07178;">token</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> frps-token</span></span>
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
<span class="line"><span style="color:#89DDFF;">[dev]</span></span>
<span class="line"><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span></span>
<span class="line"><span style="color:#F07178;">subdomain</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dev</span></span>
<span class="line"><span style="color:#F07178;">local_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 80</span></span>
<span class="line"><span style="color:#F07178;">proxy_protocol_version</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[egg]</span></span>
<span class="line"><span style="color:#F07178;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> tcp</span></span>
<span class="line"><span style="color:#F07178;">local_ip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 127.0.0.1</span></span>
<span class="line"><span style="color:#F07178;">local_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7001</span></span>
<span class="line"><span style="color:#F07178;">remote_port</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 7001</span></span>
<span class="line"><span style="color:#F07178;">proxy_protocol_version</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> v2</span></span>
<span class="line"></span></code></pre></div><h3 id="服务-1" tabindex="-1">服务 <a class="header-anchor" href="#服务-1" aria-hidden="true">#</a></h3><p>类似frps</p><blockquote><p>方跃明 2020-06-18</p></blockquote>`,24),o=[e];function t(r,c,i,y,C,D){return a(),n("div",null,o)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};