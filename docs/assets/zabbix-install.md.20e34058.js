import{_ as s,o as a,c as n,e as l}from"./app.077a4a1b.js";const e="/assets/zabbix-schema.17ada2f1.jpg",p="/assets/zabbix-proxy.2f28d250.png",D=JSON.parse('{"title":"Zabbix 安装笔记","description":"Zabbix（[`zæbiks]）是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。","frontmatter":{"title":"Zabbix 安装笔记","description":"Zabbix（[`zæbiks]）是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。","time":"2011-11-11T00:00:00.000Z","category":"运维","tags":["Linux","DevOps"]},"headers":[{"level":2,"title":"Zabbix Server","slug":"zabbix-server","link":"#zabbix-server","children":[{"level":3,"title":"安装数据库","slug":"安装数据库","link":"#安装数据库","children":[]},{"level":3,"title":"安装服务端","slug":"安装服务端","link":"#安装服务端","children":[]},{"level":3,"title":"修改服务器配置","slug":"修改服务器配置","link":"#修改服务器配置","children":[]},{"level":3,"title":"修改WEB服务器配置文件","slug":"修改web服务器配置文件","link":"#修改web服务器配置文件","children":[]},{"level":3,"title":"启动Zabbix服务器和WEB服务器","slug":"启动zabbix服务器和web服务器","link":"#启动zabbix服务器和web服务器","children":[]}]},{"level":2,"title":"Zabbix Agent","slug":"zabbix-agent","link":"#zabbix-agent","children":[{"level":3,"title":"CentOS","slug":"centos","link":"#centos","children":[]},{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]}]},{"level":2,"title":"Zabbix Proxy","slug":"zabbix-proxy","link":"#zabbix-proxy","children":[{"level":3,"title":"安装服务器","slug":"安装服务器","link":"#安装服务器","children":[]},{"level":3,"title":"分配帐号、授权及建立数据库","slug":"分配帐号、授权及建立数据库","link":"#分配帐号、授权及建立数据库","children":[]},{"level":3,"title":"导入数据库","slug":"导入数据库","link":"#导入数据库","children":[]},{"level":3,"title":"修改服务器配置文件","slug":"修改服务器配置文件","link":"#修改服务器配置文件","children":[]},{"level":3,"title":"打开Zabbix Agent端口（默认入站端口10050）","slug":"打开zabbix-agent端口-默认入站端口10050","link":"#打开zabbix-agent端口-默认入站端口10050","children":[]},{"level":3,"title":"启动Zabbix服务器","slug":"启动zabbix服务器","link":"#启动zabbix服务器","children":[]},{"level":3,"title":"Zabbix Server Web 对应的设置","slug":"zabbix-server-web-对应的设置","link":"#zabbix-server-web-对应的设置","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]},{"level":2,"title":"Zabbix SNMP","slug":"zabbix-snmp","link":"#zabbix-snmp","children":[]}],"relativePath":"zabbix-install.md","lastUpdated":1673773212000}'),o={name:"zabbix-install.md"},t=l('<h1 id="zabbix安装笔记" tabindex="-1">Zabbix安装笔记 <a class="header-anchor" href="#zabbix安装笔记" aria-hidden="true">#</a></h1><p>Zabbix（[`zæbiks]）是一个基于WEB界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。</p><p>详细安装步骤参见：<a href="https://www.zabbix.com/documentation/3.0/manual/installation/install_from_packages" target="_blank" rel="noreferrer">官方安装手册</a></p><h2 id="zabbix-server" tabindex="-1">Zabbix Server <a class="header-anchor" href="#zabbix-server" aria-hidden="true">#</a></h2><p><img src="'+e+`" alt="Zabbix部署示意图"></p><h3 id="安装数据库" tabindex="-1">安装数据库 <a class="header-anchor" href="#安装数据库" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装 MariaDB 服务器和客户端</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb-server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-uroot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ppassword</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 进入MySQL命令行</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- MariaDB新建zabbix用户</span></span>
<span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> user </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">password</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">PASSWORD</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zabbix</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zabbix</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IF</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">EXISTS</span><span style="color:#A6ACCD;"> zabbix </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">CHARACTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> utf8 </span><span style="color:#C792EA;">COLLATE</span><span style="color:#A6ACCD;"> utf8_general_ci;</span></span>
<span class="line"><span style="color:#A6ACCD;">FLUSH PRIVILEGES;</span></span>
<span class="line"><span style="color:#A6ACCD;">QUIT</span></span>
<span class="line"></span></code></pre></div><h3 id="安装服务端" tabindex="-1">安装服务端 <a class="header-anchor" href="#安装服务端" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ivh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://repo.zabbix.com/zabbix/</span><span style="color:#F78C6C;">3.0</span><span style="color:#C3E88D;">/rhel/</span><span style="color:#F78C6C;">7</span><span style="color:#C3E88D;">/x86_64/zabbix-release-</span><span style="color:#F78C6C;">3.0</span><span style="color:#C3E88D;">-1.el7.noarch.rpm</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zabbix-server-mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zabbix-web-mysql</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/doc/zabbix-server-mysql-3.0.3</span></span>
<span class="line"><span style="color:#FFCB6B;">zcat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create.sql.gz</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-uzabbix</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-pzabbix</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zabbix</span></span>
<span class="line"></span></code></pre></div><h3 id="修改服务器配置" tabindex="-1">修改服务器配置 <a class="header-anchor" href="#修改服务器配置" aria-hidden="true">#</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## vi /etc/zabbix/zabbix_server.conf</span></span>
<span class="line"><span style="color:#F07178;">DBHost</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">localhost</span></span>
<span class="line"><span style="color:#F07178;">DBName</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zabbix</span></span>
<span class="line"><span style="color:#F07178;">DBUser</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zabbix</span></span>
<span class="line"><span style="color:#F07178;">DBPassword</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zabbix</span></span>
<span class="line"></span></code></pre></div><h3 id="修改web服务器配置文件" tabindex="-1">修改WEB服务器配置文件 <a class="header-anchor" href="#修改web服务器配置文件" aria-hidden="true">#</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## vi /etc/httpd/conf.d/zabbix.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">php_value data.timezone Asia/Shanghai</span></span>
<span class="line"></span></code></pre></div><h3 id="启动zabbix服务器和web服务器" tabindex="-1">启动Zabbix服务器和WEB服务器 <a class="header-anchor" href="#启动zabbix服务器和web服务器" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zabbix-server</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">httpd</span></span>
<span class="line"></span></code></pre></div><h2 id="zabbix-agent" tabindex="-1">Zabbix Agent <a class="header-anchor" href="#zabbix-agent" aria-hidden="true">#</a></h2><p><img src="`+p+`" alt="Zabbix分布式部署示意图"></p><h3 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-hidden="true">#</a></h3><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zabbix-agent</span></span>
<span class="line"></span></code></pre></div><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># vi /etc/zabbix/zabbix_agent.conf</span></span>
<span class="line"><span style="color:#F07178;">LogFile</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/var/log/zabbix/zabbix_agentd.log   </span><span style="color:#676E95;font-style:italic;"># 日志</span></span>
<span class="line"><span style="color:#F07178;">Server</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">127.0.0.1                            </span><span style="color:#676E95;font-style:italic;"># Zabbix Server（直接连接）或者Zabbix Proxy（通过Proxy）</span></span>
<span class="line"><span style="color:#F07178;">Hostname</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Zabbix Server                      </span><span style="color:#676E95;font-style:italic;"># 对应zabbix web里面的host，不一定是os本机名称</span></span>
<span class="line"><span style="color:#F07178;">ServerActive</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">127.0.0.1                      </span><span style="color:#676E95;font-style:italic;"># Zabbix Server或Zabbix Proxy</span></span>
<span class="line"></span></code></pre></div><h4 id="配置防火墙-打开zabbix-agent端口-默认入站端口10050" tabindex="-1">配置防火墙，打开Zabbix Agent端口（默认入站端口10050） <a class="header-anchor" href="#配置防火墙-打开zabbix-agent端口-默认入站端口10050" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zabbix-agent</span></span>
<span class="line"></span></code></pre></div><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-hidden="true">#</a></h3><h4 id="下载并解压到运行目录" tabindex="-1">下载并解压到运行目录 <a class="header-anchor" href="#下载并解压到运行目录" aria-hidden="true">#</a></h4><p><a href="http://www.zabbix.com/download.php" target="_blank" rel="noreferrer">Zabbix pre-compiled agents for Windows</a></p><h4 id="配置conf-conf-zabbix-agentd-win-conf" tabindex="-1">配置conf(conf\\zabbix-agentd.win.conf) <a class="header-anchor" href="#配置conf-conf-zabbix-agentd-win-conf" aria-hidden="true">#</a></h4><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">LogFile</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">c:\\zabbix_agentd.log  </span><span style="color:#676E95;font-style:italic;"># 日志</span></span>
<span class="line"><span style="color:#F07178;">Server</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">127.0.0.1              </span><span style="color:#676E95;font-style:italic;"># Zabbix服务器</span></span>
<span class="line"><span style="color:#F07178;">Hostname</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Windows Host         </span><span style="color:#676E95;font-style:italic;"># 对应zabbix web里面的host，不一定是本机名称</span></span>
<span class="line"><span style="color:#F07178;">ServerActive</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">127.0.0.1        </span><span style="color:#676E95;font-style:italic;"># Zabbix服务器</span></span>
<span class="line"></span></code></pre></div><ul><li>注册为Windows服务：<code>bin\\zabbix_agentd.exe -c \\conf\\zabbix_agentd.win.conf –i</code></li><li>打开Zabbix Agent端口（默认入站端口10050）</li><li>从Windows服务启动Zabbix Agent客户端</li></ul><h2 id="zabbix-proxy" tabindex="-1">Zabbix Proxy <a class="header-anchor" href="#zabbix-proxy" aria-hidden="true">#</a></h2><h3 id="安装服务器" tabindex="-1">安装服务器 <a class="header-anchor" href="#安装服务器" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ivh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://repo.zabbix.com/zabbix/</span><span style="color:#F78C6C;">3.0</span><span style="color:#C3E88D;">/rhel/</span><span style="color:#F78C6C;">7</span><span style="color:#C3E88D;">/x86_64/zabbix-release-</span><span style="color:#F78C6C;">3.0</span><span style="color:#C3E88D;">-1.el7.noarch.rpm</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb-server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zabbix-proxy-mysql</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mariadb</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;font-style:italic;"># 进入MySQL命令行</span></span>
<span class="line"></span></code></pre></div><h3 id="分配帐号、授权及建立数据库" tabindex="-1">分配帐号、授权及建立数据库 <a class="header-anchor" href="#分配帐号、授权及建立数据库" aria-hidden="true">#</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> user </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">password</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">PASSWORD</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zabbix</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zabbix</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">FLUSH PRIVILEGES;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IF</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">EXISTS</span><span style="color:#A6ACCD;"> zabbix_proxy </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">CHARACTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> utf8 </span><span style="color:#C792EA;">COLLATE</span><span style="color:#A6ACCD;"> utf8_general_ci;</span></span>
<span class="line"><span style="color:#A6ACCD;">QUIT</span></span>
<span class="line"></span></code></pre></div><h3 id="导入数据库" tabindex="-1">导入数据库 <a class="header-anchor" href="#导入数据库" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># cd /usr/share/doc/zabbix-proxy-mysql-3.0.3</span></span>
<span class="line"><span style="color:#FFCB6B;">zcat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">schema.sql.gz</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-uzabbix</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-pzabbix</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zabbix_proxy</span></span>
<span class="line"></span></code></pre></div><h3 id="修改服务器配置文件" tabindex="-1">修改服务器配置文件 <a class="header-anchor" href="#修改服务器配置文件" aria-hidden="true">#</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># vi /etc/zabbix/zabbix_proxy.conf</span></span>
<span class="line"><span style="color:#F07178;">Server</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zabbix.server.url      </span><span style="color:#676E95;font-style:italic;"># Zabbix Server 所在IP或者DNS Name</span></span>
<span class="line"><span style="color:#F07178;">Hostname</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">proxy.zabbix.name    </span><span style="color:#676E95;font-style:italic;"># Zabbix Proxy 名字（对应Server里的Proxies名字）</span></span>
<span class="line"><span style="color:#F07178;">DBHost</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">localhost</span></span>
<span class="line"><span style="color:#F07178;">DBName</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zabbix_proxy</span></span>
<span class="line"><span style="color:#F07178;">DBUser</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zabbix</span></span>
<span class="line"><span style="color:#F07178;">DBPassword</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">zabbix</span></span>
<span class="line"></span></code></pre></div><h3 id="打开zabbix-agent端口-默认入站端口10050" tabindex="-1">打开Zabbix Agent端口（默认入站端口10050） <a class="header-anchor" href="#打开zabbix-agent端口-默认入站端口10050" aria-hidden="true">#</a></h3><h3 id="启动zabbix服务器" tabindex="-1">启动Zabbix服务器 <a class="header-anchor" href="#启动zabbix服务器" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zabbix-proxy</span></span>
<span class="line"></span></code></pre></div><h3 id="zabbix-server-web-对应的设置" tabindex="-1">Zabbix Server Web 对应的设置 <a class="header-anchor" href="#zabbix-server-web-对应的设置" aria-hidden="true">#</a></h3><ul><li>添加代理：Administration -&gt; Proxies -&gt; Create proxy -&gt; Proxy name -&gt; <a href="http://proxy.zabbix.name" target="_blank" rel="noreferrer">proxy.zabbix.name</a></li><li>添加代理下的主机：Configuration -&gt; Hosts -&gt; Create Host -&gt; Monitored by proxy -&gt; <a href="http://proxy.zabbix.name" target="_blank" rel="noreferrer">proxy.zabbix.name</a></li></ul><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-hidden="true">#</a></h3><ul><li>Proxy只能使用proxy的数据库，不能使用Server的数据库</li><li>注意Server端和Proxy端的IP/DNS名称、配置主机名称、Web端名称、各选项正确且一一对应</li></ul><h2 id="zabbix-snmp" tabindex="-1">Zabbix SNMP <a class="header-anchor" href="#zabbix-snmp" aria-hidden="true">#</a></h2><ul><li><p>Windows Server 2008 R2</p><ul><li>客户机端安装：SNMP Service</li><li>客户机端设置：服务 -&gt; SNMP Service -&gt; 安全 -&gt; 接受的社区名称：public，只读 -&gt; 添加接受主机：Zabbix服务器</li><li>客户机端防火墙：入站规则 -&gt; 默认端口161 -&gt; 协议UDP</li><li>Zabbix Web端添加SNMP主机及端口号</li></ul></li><li><p>CentOS</p><ul><li>安装：<code>yum install net-snmp net-snmp-utils</code></li><li>参见：<a href="https://blog.csdn.net/sinat_21302587/article/details/75099915" target="_blank" rel="noreferrer">https://blog.csdn.net/sinat_21302587/article/details/75099915</a></li></ul></li></ul>`,49),r=[t];function i(c,b,y,C,d,h){return a(),n("div",null,r)}const x=s(o,[["render",i]]);export{D as __pageData,x as default};
