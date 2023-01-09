import{_ as s,o as n,c as a,a as l}from"./app.3ad48a2f.js";const A=JSON.parse('{"title":"CentOS网络","description":"","frontmatter":{"title":"CentOS网络","time":"2019-12-25T00:00:00.000Z","layout":"post","categories":"Linux","tags":["CentOS","Linux"]},"headers":[{"level":2,"title":"nmcli方式","slug":"nmcli方式","link":"#nmcli方式","children":[]},{"level":2,"title":"dhcp方式","slug":"dhcp方式","link":"#dhcp方式","children":[]},{"level":2,"title":"传统方式","slug":"传统方式","link":"#传统方式","children":[]}],"relativePath":"centos-network.md","lastUpdated":1673246413000}'),p={name:"centos-network.md"},t=l(`<h1 id="centos-网络" tabindex="-1">CentOS 网络 <a class="header-anchor" href="#centos-网络" aria-hidden="true">#</a></h1><h2 id="nmcli方式" tabindex="-1">nmcli方式 <a class="header-anchor" href="#nmcli方式" aria-hidden="true">#</a></h2><p><code>CentOS 7</code>开始默认使用<code>network-manager</code>来配置网络，虽然传统方式依然可以配置但不推荐。</p><p>以下为配置无线连接，其他网络管理命令参照帮助。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 扫描并查看wifi情况</span></span>
<span class="line"><span style="color:#FFCB6B;">nmcli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wifi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">iface</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获取网卡描述，一般默认wlan0，连接KFC_free，密码12345678</span></span>
<span class="line"><span style="color:#FFCB6B;">nmcli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wifi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">KFC_free</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12345678</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wlan0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 禁用连接</span></span>
<span class="line"><span style="color:#FFCB6B;">nmcli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dis</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wlan0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 断开连接</span></span>
<span class="line"><span style="color:#FFCB6B;">nmcli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">con</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KFC_free</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获取到当前设备所有连接过多的历史连接及对应UUID号码</span></span>
<span class="line"><span style="color:#FFCB6B;">nmcli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">c</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除连接</span></span>
<span class="line"><span style="color:#FFCB6B;">nmcli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">72ffd5f4-71f8-</span><span style="color:#F78C6C;">0001</span><span style="color:#C3E88D;">-b434-6122908cfd4e</span></span>
<span class="line"></span></code></pre></div><h2 id="dhcp方式" tabindex="-1">dhcp方式 <a class="header-anchor" href="#dhcp方式" aria-hidden="true">#</a></h2><p>设置网卡为开机自动连接，开启DHCP，然后在路由器上配置MAC和IP绑定，家庭和小型局域网推荐使用。</p><h2 id="传统方式" tabindex="-1">传统方式 <a class="header-anchor" href="#传统方式" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 默认情况第一张网卡为ifcfg-eth0，不排除被命名成其他名称的可能</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 一般情况下只需要指定IPADDR、NETMASK、GATEWAY和DNS1、DNS2即可</span></span>
<span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/sysconfig/network-scripts/ifcfg-eth0</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">TYPE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Ethernet</span></span>
<span class="line"><span style="color:#F07178;">BOOTPROTO</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">static</span></span>
<span class="line"><span style="color:#F07178;">IPADDR</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.20.25</span></span>
<span class="line"><span style="color:#F07178;">NETMASK</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">255.255.252.0</span></span>
<span class="line"><span style="color:#F07178;">GATEWAY</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.20.1</span></span>
<span class="line"><span style="color:#F07178;">DNS1</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">8.8.8.8</span></span>
<span class="line"><span style="color:#F07178;">DNS2</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">8.8.4.4</span></span>
<span class="line"><span style="color:#F07178;">NETWORK</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.20.0</span></span>
<span class="line"><span style="color:#F07178;">BROADCAST</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.23.255</span></span>
<span class="line"><span style="color:#F07178;">DEFROUTE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">PEERDNS</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">no</span></span>
<span class="line"><span style="color:#F07178;">PEERROUTES</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV4_FAILURE_FATAL</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">no</span></span>
<span class="line"><span style="color:#F07178;">IPV6INIT</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_AUTOCONF</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_DEFROUTE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_PEERDNS</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_PEERROUTES</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">IPV6_FAILURE_FATAL</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">no</span></span>
<span class="line"><span style="color:#F07178;">NAME</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">eth0</span></span>
<span class="line"><span style="color:#F07178;">UUID</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">5b0a7d76-1602-4e19-aee6-29f57618ca01</span></span>
<span class="line"><span style="color:#F07178;">ONBOOT</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">no</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/resolv.conf</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># 配置DNS</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /etc/resolv.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">nameserver 114.114.114.114</span></span>
<span class="line"><span style="color:#A6ACCD;">nameserver 8.8.8.8</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 重启网络服务使其生效</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>参数</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>DEVICE</td><td>name</td><td>设备名称通常是eth0</td></tr><tr><td>BOOTPROTO</td><td>proto</td><td>proto为none、static、dhcp、bootp，IP分配协议</td></tr><tr><td>IPADDR</td><td>addr</td><td>IP地址</td></tr><tr><td>NETMASK</td><td>mask</td><td>子网掩码</td></tr><tr><td>GATEWAY</td><td>addr</td><td>网关地址</td></tr><tr><td>DNS1</td><td>dns</td><td>DNS1服务器IP</td></tr><tr><td>DNS2</td><td>dns</td><td>DNS2服务器IP</td></tr><tr><td>NETWORK</td><td>addr</td><td>所属网络</td></tr><tr><td>BROADCAST</td><td>addr</td><td>广播地址</td></tr><tr><td>HWADDR</td><td>mac</td><td>MAC地址</td></tr><tr><td>ONBOOT</td><td>answer</td><td>answer为yes或no，是否系统启动时激活连接</td></tr><tr><td>USERCTL</td><td>answer</td><td>answer为yes或no，非root用户是否可以控制该设备</td></tr><tr><td>PEERDNS</td><td>answer</td><td>answer为yes或no，是否重写/etc/resolv.conf</td></tr></tbody></table><blockquote><p>方跃明 2019-12-25</p></blockquote>`,15),o=[t];function e(c,r,i,y,d,C){return n(),a("div",null,o)}const F=s(p,[["render",e]]);export{A as __pageData,F as default};
