import{_ as s,c as i,o as a,V as n}from"./chunks/framework.SbEgU9ye.js";const l="/assets/zabbix-schema.WskkR8PX.jpg",e="/assets/zabbix-proxy.68EsUBIq.png",E=JSON.parse('{"title":"Zabbix 安装笔记","description":"Zabbix（[`zæbiks]）是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。","frontmatter":{"title":"Zabbix 安装笔记","description":"Zabbix（[`zæbiks]）是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。","time":"2011-11-11T00:00:00.000Z","category":"运维","tags":["Linux","DevOps"]},"headers":[],"relativePath":"zabbix-install.md","filePath":"zabbix-install.md"}'),t={name:"zabbix-install.md"},h=n('<h1 id="zabbix安装笔记" tabindex="-1">Zabbix安装笔记 <a class="header-anchor" href="#zabbix安装笔记" aria-label="Permalink to &quot;Zabbix安装笔记&quot;">​</a></h1><blockquote><p>方跃明 2011-11-11</p></blockquote><p>Zabbix（[`zæbiks]）是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。</p><p>详细安装步骤参见：<a href="https://www.zabbix.com/documentation/3.0/manual/installation/install_from_packages" target="_blank" rel="noreferrer">官方安装手册</a></p><h2 id="zabbix-server" tabindex="-1">Zabbix Server <a class="header-anchor" href="#zabbix-server" aria-label="Permalink to &quot;Zabbix Server&quot;">​</a></h2><p><img src="'+l+`" alt="Zabbix部署示意图"></p><h3 id="安装数据库" tabindex="-1">安装数据库 <a class="header-anchor" href="#安装数据库" aria-label="Permalink to &quot;安装数据库&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 MariaDB 服务器和客户端</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -uroot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ppassword</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 进入MySQL命令行</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- MariaDB新建zabbix用户</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> password=PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zabbix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zabbix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DATABASE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zabbix </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COLLATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8_general_ci;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FLUSH PRIVILEGES;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QUIT</span></span></code></pre></div><h3 id="安装服务端" tabindex="-1">安装服务端 <a class="header-anchor" href="#安装服务端" aria-label="Permalink to &quot;安装服务端&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ivh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://repo.zabbix.com/zabbix/3.0/rhel/7/x86_64/zabbix-release-3.0-1.el7.noarch.rpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zabbix-server-mysql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zabbix-web-mysql</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/doc/zabbix-server-mysql-3.0.3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">zcat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create.sql.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -uzabbix</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -pzabbix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zabbix</span></span></code></pre></div><h3 id="修改服务器配置" tabindex="-1">修改服务器配置 <a class="header-anchor" href="#修改服务器配置" aria-label="Permalink to &quot;修改服务器配置&quot;">​</a></h3><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## vi /etc/zabbix/zabbix_server.conf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DBHost</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=localhost</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DBName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=zabbix</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DBUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=zabbix</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DBPassword</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=zabbix</span></span></code></pre></div><h3 id="修改web服务器配置文件" tabindex="-1">修改WEB服务器配置文件 <a class="header-anchor" href="#修改web服务器配置文件" aria-label="Permalink to &quot;修改WEB服务器配置文件&quot;">​</a></h3><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## vi /etc/httpd/conf.d/zabbix.conf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">php_value data.timezone Asia/Shanghai</span></span></code></pre></div><h3 id="启动zabbix服务器和web服务器" tabindex="-1">启动Zabbix服务器和WEB服务器 <a class="header-anchor" href="#启动zabbix服务器和web服务器" aria-label="Permalink to &quot;启动Zabbix服务器和WEB服务器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zabbix-server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httpd</span></span></code></pre></div><h2 id="zabbix-agent" tabindex="-1">Zabbix Agent <a class="header-anchor" href="#zabbix-agent" aria-label="Permalink to &quot;Zabbix Agent&quot;">​</a></h2><p><img src="`+e+`" alt="Zabbix分布式部署示意图"></p><h3 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-label="Permalink to &quot;CentOS&quot;">​</a></h3><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zabbix-agent</span></span></code></pre></div><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h4><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># vi /etc/zabbix/zabbix_agent.conf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LogFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=/var/log/zabbix/zabbix_agentd.log   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日志</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=127.0.0.1                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Zabbix Server（直接连接）或者Zabbix Proxy（通过Proxy）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=Zabbix Server                      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 对应zabbix web里面的host，不一定是os本机名称</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ServerActive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=127.0.0.1                      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Zabbix Server或Zabbix Proxy</span></span></code></pre></div><h4 id="配置防火墙-打开zabbix-agent端口-默认入站端口10050" tabindex="-1">配置防火墙，打开Zabbix Agent端口（默认入站端口10050） <a class="header-anchor" href="#配置防火墙-打开zabbix-agent端口-默认入站端口10050" aria-label="Permalink to &quot;配置防火墙，打开Zabbix Agent端口（默认入站端口10050）&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zabbix-agent</span></span></code></pre></div><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><h4 id="下载并解压到运行目录" tabindex="-1">下载并解压到运行目录 <a class="header-anchor" href="#下载并解压到运行目录" aria-label="Permalink to &quot;下载并解压到运行目录&quot;">​</a></h4><p><a href="http://www.zabbix.com/download.php" target="_blank" rel="noreferrer">Zabbix pre-compiled agents for Windows</a></p><h4 id="配置conf-conf-zabbix-agentd-win-conf" tabindex="-1">配置conf(conf\\zabbix-agentd.win.conf) <a class="header-anchor" href="#配置conf-conf-zabbix-agentd-win-conf" aria-label="Permalink to &quot;配置conf(conf\\zabbix-agentd.win.conf)&quot;">​</a></h4><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LogFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=c:\\zabbix_agentd.log  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日志</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=127.0.0.1              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Zabbix服务器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=Windows Host         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 对应zabbix web里面的host，不一定是本机名称</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ServerActive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=127.0.0.1        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Zabbix服务器</span></span></code></pre></div><ul><li>注册为Windows服务：<code>bin\\zabbix_agentd.exe -c \\conf\\zabbix_agentd.win.conf –i</code></li><li>打开Zabbix Agent端口（默认入站端口10050）</li><li>从Windows服务启动Zabbix Agent客户端</li></ul><h2 id="zabbix-proxy" tabindex="-1">Zabbix Proxy <a class="header-anchor" href="#zabbix-proxy" aria-label="Permalink to &quot;Zabbix Proxy&quot;">​</a></h2><h3 id="安装服务器" tabindex="-1">安装服务器 <a class="header-anchor" href="#安装服务器" aria-label="Permalink to &quot;安装服务器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ivh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://repo.zabbix.com/zabbix/3.0/rhel/7/x86_64/zabbix-release-3.0-1.el7.noarch.rpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zabbix-proxy-mysql</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # 进入MySQL命令行</span></span></code></pre></div><h3 id="分配帐号、授权及建立数据库" tabindex="-1">分配帐号、授权及建立数据库 <a class="header-anchor" href="#分配帐号、授权及建立数据库" aria-label="Permalink to &quot;分配帐号、授权及建立数据库&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> password=PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zabbix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zabbix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FLUSH PRIVILEGES;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DATABASE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> zabbix_proxy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COLLATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8_general_ci;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QUIT</span></span></code></pre></div><h3 id="导入数据库" tabindex="-1">导入数据库 <a class="header-anchor" href="#导入数据库" aria-label="Permalink to &quot;导入数据库&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># cd /usr/share/doc/zabbix-proxy-mysql-3.0.3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">zcat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> schema.sql.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -uzabbix</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -pzabbix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zabbix_proxy</span></span></code></pre></div><h3 id="修改服务器配置文件" tabindex="-1">修改服务器配置文件 <a class="header-anchor" href="#修改服务器配置文件" aria-label="Permalink to &quot;修改服务器配置文件&quot;">​</a></h3><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># vi /etc/zabbix/zabbix_proxy.conf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=zabbix.server.url      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Zabbix Server 所在IP或者DNS Name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=proxy.zabbix.name    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Zabbix Proxy 名字（对应Server里的Proxies名字）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DBHost</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=localhost</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DBName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=zabbix_proxy</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DBUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=zabbix</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DBPassword</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=zabbix</span></span></code></pre></div><h3 id="打开zabbix-agent端口-默认入站端口10050" tabindex="-1">打开Zabbix Agent端口（默认入站端口10050） <a class="header-anchor" href="#打开zabbix-agent端口-默认入站端口10050" aria-label="Permalink to &quot;打开Zabbix Agent端口（默认入站端口10050）&quot;">​</a></h3><h3 id="启动zabbix服务器" tabindex="-1">启动Zabbix服务器 <a class="header-anchor" href="#启动zabbix服务器" aria-label="Permalink to &quot;启动Zabbix服务器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zabbix-proxy</span></span></code></pre></div><h3 id="zabbix-server-web-对应的设置" tabindex="-1">Zabbix Server Web 对应的设置 <a class="header-anchor" href="#zabbix-server-web-对应的设置" aria-label="Permalink to &quot;Zabbix Server Web 对应的设置&quot;">​</a></h3><ul><li>添加代理：Administration -&gt; Proxies -&gt; Create proxy -&gt; Proxy name -&gt; proxy.zabbix.name</li><li>添加代理下的主机：Configuration -&gt; Hosts -&gt; Create Host -&gt; Monitored by proxy -&gt; proxy.zabbix.name</li></ul><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li>Proxy只能使用proxy的数据库，不能使用Server的数据库</li><li>注意Server端和Proxy端的IP/DNS名称、配置主机名称、Web端名称、各选项正确且一一对应</li></ul><h2 id="zabbix-snmp" tabindex="-1">Zabbix SNMP <a class="header-anchor" href="#zabbix-snmp" aria-label="Permalink to &quot;Zabbix SNMP&quot;">​</a></h2><ul><li><p>Windows Server 2008 R2</p><ul><li>客户机端安装：SNMP Service</li><li>客户机端设置：服务 -&gt; SNMP Service -&gt; 安全 -&gt; 接受的社区名称：public，只读 -&gt; 添加接受主机：Zabbix服务器</li><li>客户机端防火墙：入站规则 -&gt; 默认端口161 -&gt; 协议UDP</li><li>Zabbix Web端添加SNMP主机及端口号</li></ul></li><li><p>CentOS</p><ul><li>安装：<code>yum install net-snmp net-snmp-utils</code></li><li>参见：<a href="https://blog.csdn.net/sinat_21302587/article/details/75099915" target="_blank" rel="noreferrer">https://blog.csdn.net/sinat_21302587/article/details/75099915</a></li></ul></li></ul>`,50),p=[h];function k(r,d,b,o,g,c){return a(),i("div",null,p)}const F=s(t,[["render",k]]);export{E as __pageData,F as default};
