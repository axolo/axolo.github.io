import{_ as e,C as l,o as s,c as o,b as c,w as n,a0 as t,Q as a,H as r,a as y}from"./chunks/framework.cd6e3458.js";const m=JSON.parse('{"title":"CentOS 安装配置 OpenVPN","description":"这个就不多说了，真的不能多说……","frontmatter":{"title":"CentOS 安装配置 OpenVPN","description":"这个就不多说了，真的不能多说……","time":"2020-01-29T00:00:00.000Z","category":"运维","tags":["CentOS","Linux","VPN"]},"headers":[],"relativePath":"centos-openvpn.md","filePath":"centos-openvpn.md"}'),i={name:"centos-openvpn.md"},E=a('<h1 id="centos安装配置openvpn" tabindex="-1">CentOS安装配置OpenVPN <a class="header-anchor" href="#centos安装配置openvpn" aria-label="Permalink to &quot;CentOS安装配置OpenVPN&quot;">​</a></h1><blockquote><p>方跃明 2020-01-29</p></blockquote><p>这个就不多说了，真的不能多说……</p><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><table><thead><tr><th>环境</th><th>版本</th><th>说明</th></tr></thead><tbody><tr><td>CentOS</td><td>el8</td><td>兼容el7</td></tr><tr><td>easy-rsa</td><td>3.0.6-1.el7</td><td></td></tr><tr><td>openvpn</td><td>2.4.8-1.el7</td><td></td></tr></tbody></table><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h2>',6),F=a(`<h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">net-tools</span></span>
<span class="line"><span style="color:#6A737D;"># 强烈建议使用国内repo源，如：阿里云</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-O</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/epel.repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://mirrors.aliyun.com/repo/epel-7.repo</span></span>
<span class="line"><span style="color:#B392F0;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">openvpn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">easy-rsa</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">net-tools</span></span>
<span class="line"><span style="color:#6A737D;"># 强烈建议使用国内repo源，如：阿里云</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-O</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/epel.repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://mirrors.aliyun.com/repo/epel-7.repo</span></span>
<span class="line"><span style="color:#6F42C1;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">openvpn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">easy-rsa</span></span></code></pre></div><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">|-- easy-rsa                # 证书制作工具</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- pki                 #   PKI</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- vars                #   easy-rsa配置</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- certs                   # 证书存放目录</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- server              #   服务端</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |   |-- ca.crt          #     CA根证书</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |   |-- ta.key          #     TLS鉴权密钥</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |   |-- dh.pem          #     SSL协商DH</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |   |-- server.crt      #     服务器证书</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |   \`-- server.key      #     服务器私钥</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- client              # 证书客户端</span></span>
<span class="line"><span style="color:#e1e4e8;">|       \`-- user01          #   用户01</span></span>
<span class="line"><span style="color:#e1e4e8;">|           |-- ca.crt      #     CA根证书</span></span>
<span class="line"><span style="color:#e1e4e8;">|           |-- ta.key      #     TLS鉴权密钥</span></span>
<span class="line"><span style="color:#e1e4e8;">|           |-- user01.crt  #     用户证书</span></span>
<span class="line"><span style="color:#e1e4e8;">|           |-- user01.key  #     用户私钥</span></span>
<span class="line"><span style="color:#e1e4e8;">|           \`-- user01.ovpn #     OpenVPN客户端集成配置</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- client                  # 密码用户配置（固定IP）</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- user1               #   用户1</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- user2               #   用户2</span></span>
<span class="line"><span style="color:#e1e4e8;">\`-- sever.conf              # 服务端配置：openvpn@server</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">|-- easy-rsa                # 证书制作工具</span></span>
<span class="line"><span style="color:#24292e;">|   |-- pki                 #   PKI</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- vars                #   easy-rsa配置</span></span>
<span class="line"><span style="color:#24292e;">|-- certs                   # 证书存放目录</span></span>
<span class="line"><span style="color:#24292e;">|   |-- server              #   服务端</span></span>
<span class="line"><span style="color:#24292e;">|   |   |-- ca.crt          #     CA根证书</span></span>
<span class="line"><span style="color:#24292e;">|   |   |-- ta.key          #     TLS鉴权密钥</span></span>
<span class="line"><span style="color:#24292e;">|   |   |-- dh.pem          #     SSL协商DH</span></span>
<span class="line"><span style="color:#24292e;">|   |   |-- server.crt      #     服务器证书</span></span>
<span class="line"><span style="color:#24292e;">|   |   \`-- server.key      #     服务器私钥</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- client              # 证书客户端</span></span>
<span class="line"><span style="color:#24292e;">|       \`-- user01          #   用户01</span></span>
<span class="line"><span style="color:#24292e;">|           |-- ca.crt      #     CA根证书</span></span>
<span class="line"><span style="color:#24292e;">|           |-- ta.key      #     TLS鉴权密钥</span></span>
<span class="line"><span style="color:#24292e;">|           |-- user01.crt  #     用户证书</span></span>
<span class="line"><span style="color:#24292e;">|           |-- user01.key  #     用户私钥</span></span>
<span class="line"><span style="color:#24292e;">|           \`-- user01.ovpn #     OpenVPN客户端集成配置</span></span>
<span class="line"><span style="color:#24292e;">|-- client                  # 密码用户配置（固定IP）</span></span>
<span class="line"><span style="color:#24292e;">|   |-- user1               #   用户1</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- user2               #   用户2</span></span>
<span class="line"><span style="color:#24292e;">\`-- sever.conf              # 服务端配置：openvpn@server</span></span></code></pre></div><h2 id="配置easy-rsa" tabindex="-1">配置easy-rsa <a class="header-anchor" href="#配置easy-rsa" aria-label="Permalink to &quot;配置easy-rsa&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/easy-rsa/3.0.6/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/share/doc/easy-rsa-3.0.3/vars.example</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/vars</span></span>
<span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/vars</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/share/easy-rsa/3.0.6/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/share/doc/easy-rsa-3.0.3/vars.example</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/vars</span></span>
<span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/vars</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 请根据需要修改，否则使用默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">set_var EASYRSA_REQ_COUNTRY    </span><span style="color:#9ECBFF;">&quot;US&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">set_var EASYRSA_REQ_PROVINCE   </span><span style="color:#9ECBFF;">&quot;California&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">set_var EASYRSA_REQ_CITY       </span><span style="color:#9ECBFF;">&quot;San Francisco&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">set_var EASYRSA_REQ_ORG        </span><span style="color:#9ECBFF;">&quot;Copyleft Certificate Co&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">set_var EASYRSA_REQ_EMAIL      </span><span style="color:#9ECBFF;">&quot;me@example.net&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">set_var EASYRSA_REQ_OU         </span><span style="color:#9ECBFF;">&quot;My Organizational Unit&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 请根据需要修改，否则使用默认值</span></span>
<span class="line"><span style="color:#24292E;">set_var EASYRSA_REQ_COUNTRY    </span><span style="color:#032F62;">&quot;US&quot;</span></span>
<span class="line"><span style="color:#24292E;">set_var EASYRSA_REQ_PROVINCE   </span><span style="color:#032F62;">&quot;California&quot;</span></span>
<span class="line"><span style="color:#24292E;">set_var EASYRSA_REQ_CITY       </span><span style="color:#032F62;">&quot;San Francisco&quot;</span></span>
<span class="line"><span style="color:#24292E;">set_var EASYRSA_REQ_ORG        </span><span style="color:#032F62;">&quot;Copyleft Certificate Co&quot;</span></span>
<span class="line"><span style="color:#24292E;">set_var EASYRSA_REQ_EMAIL      </span><span style="color:#032F62;">&quot;me@example.net&quot;</span></span>
<span class="line"><span style="color:#24292E;">set_var EASYRSA_REQ_OU         </span><span style="color:#032F62;">&quot;My Organizational Unit&quot;</span></span></code></pre></div><h2 id="服务端" tabindex="-1">服务端 <a class="header-anchor" href="#服务端" aria-label="Permalink to &quot;服务端&quot;">​</a></h2><h3 id="创建pki、ca、证书、密钥" tabindex="-1">创建PKI、CA、证书、密钥 <a class="header-anchor" href="#创建pki、ca、证书、密钥" aria-label="Permalink to &quot;创建PKI、CA、证书、密钥&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa</span></span>
<span class="line"><span style="color:#6A737D;">### 创建PKI</span></span>
<span class="line"><span style="color:#B392F0;">./easyrsa</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init-pki</span></span>
<span class="line"><span style="color:#6A737D;"># Note: using Easy-RSA configuration from: ./vars</span></span>
<span class="line"><span style="color:#6A737D;"># Your newly created PKI dir is: /etc/openvpn/easy-rsa/pki</span></span>
<span class="line"><span style="color:#6A737D;">### 创建新的CA，不使用密码</span></span>
<span class="line"><span style="color:#B392F0;">./easyrsa</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-ca</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nopass</span></span>
<span class="line"><span style="color:#6A737D;"># Common Name (eg: your user, host, or server name) [Easy-RSA CA]: # 直接回车</span></span>
<span class="line"><span style="color:#6A737D;"># Your new CA certificate file for publishing is at: /etc/openvpn/easy-rsa/pki/ca.crt</span></span>
<span class="line"><span style="color:#6A737D;">### 创建服务端证书和密钥</span></span>
<span class="line"><span style="color:#B392F0;">./easyrsa</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gen-req</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nopass</span></span>
<span class="line"><span style="color:#6A737D;"># Common Name (eg: your user, host, or server name) [server]: # 直接回车，默认server</span></span>
<span class="line"><span style="color:#6A737D;"># Keypair and certificate request completed. Your files are:</span></span>
<span class="line"><span style="color:#6A737D;"># req: /etc/openvpn/easy-rsa/pki/reqs/server.req</span></span>
<span class="line"><span style="color:#6A737D;"># key: /etc/openvpn/easy-rsa/pki/private/server.key</span></span>
<span class="line"><span style="color:#6A737D;">### 签约服务端证书</span></span>
<span class="line"><span style="color:#B392F0;">./easyrsa</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sign</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server</span></span>
<span class="line"><span style="color:#6A737D;"># Request subject, to be signed as a server certificate for 1080 days:</span></span>
<span class="line"><span style="color:#6A737D;"># subject=</span></span>
<span class="line"><span style="color:#6A737D;">#    commonName                = server</span></span>
<span class="line"><span style="color:#6A737D;"># Type the word &#39;yes&#39; to continue, or any other input to abort.</span></span>
<span class="line"><span style="color:#6A737D;">#  Confirm request details: yes # 输入yes回车</span></span>
<span class="line"><span style="color:#6A737D;">### 创建Diffie-Hellman</span></span>
<span class="line"><span style="color:#B392F0;">./easyrsa</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gen-dh</span></span>
<span class="line"><span style="color:#6A737D;"># DH parameters of size 2048 created at /etc/openvpn/easy-rsa/pki/dh.pem</span></span>
<span class="line"><span style="color:#6A737D;">### 创建tls-auth key</span></span>
<span class="line"><span style="color:#B392F0;">openvpn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--genkey</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--secret</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ta.key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa</span></span>
<span class="line"><span style="color:#6A737D;">### 创建PKI</span></span>
<span class="line"><span style="color:#6F42C1;">./easyrsa</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init-pki</span></span>
<span class="line"><span style="color:#6A737D;"># Note: using Easy-RSA configuration from: ./vars</span></span>
<span class="line"><span style="color:#6A737D;"># Your newly created PKI dir is: /etc/openvpn/easy-rsa/pki</span></span>
<span class="line"><span style="color:#6A737D;">### 创建新的CA，不使用密码</span></span>
<span class="line"><span style="color:#6F42C1;">./easyrsa</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-ca</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nopass</span></span>
<span class="line"><span style="color:#6A737D;"># Common Name (eg: your user, host, or server name) [Easy-RSA CA]: # 直接回车</span></span>
<span class="line"><span style="color:#6A737D;"># Your new CA certificate file for publishing is at: /etc/openvpn/easy-rsa/pki/ca.crt</span></span>
<span class="line"><span style="color:#6A737D;">### 创建服务端证书和密钥</span></span>
<span class="line"><span style="color:#6F42C1;">./easyrsa</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gen-req</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nopass</span></span>
<span class="line"><span style="color:#6A737D;"># Common Name (eg: your user, host, or server name) [server]: # 直接回车，默认server</span></span>
<span class="line"><span style="color:#6A737D;"># Keypair and certificate request completed. Your files are:</span></span>
<span class="line"><span style="color:#6A737D;"># req: /etc/openvpn/easy-rsa/pki/reqs/server.req</span></span>
<span class="line"><span style="color:#6A737D;"># key: /etc/openvpn/easy-rsa/pki/private/server.key</span></span>
<span class="line"><span style="color:#6A737D;">### 签约服务端证书</span></span>
<span class="line"><span style="color:#6F42C1;">./easyrsa</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sign</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server</span></span>
<span class="line"><span style="color:#6A737D;"># Request subject, to be signed as a server certificate for 1080 days:</span></span>
<span class="line"><span style="color:#6A737D;"># subject=</span></span>
<span class="line"><span style="color:#6A737D;">#    commonName                = server</span></span>
<span class="line"><span style="color:#6A737D;"># Type the word &#39;yes&#39; to continue, or any other input to abort.</span></span>
<span class="line"><span style="color:#6A737D;">#  Confirm request details: yes # 输入yes回车</span></span>
<span class="line"><span style="color:#6A737D;">### 创建Diffie-Hellman</span></span>
<span class="line"><span style="color:#6F42C1;">./easyrsa</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gen-dh</span></span>
<span class="line"><span style="color:#6A737D;"># DH parameters of size 2048 created at /etc/openvpn/easy-rsa/pki/dh.pem</span></span>
<span class="line"><span style="color:#6A737D;">### 创建tls-auth key</span></span>
<span class="line"><span style="color:#6F42C1;">openvpn</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--genkey</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--secret</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ta.key</span></span></code></pre></div><h3 id="整理密钥和证书" tabindex="-1">整理密钥和证书 <a class="header-anchor" href="#整理密钥和证书" aria-label="Permalink to &quot;整理密钥和证书&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/certs/server</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/pki/dh.pem</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/ta.key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/pki/ca.crt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/pki/issued/server.crt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/pki/private/server.key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/certs/server</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/pki/dh.pem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/ta.key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/pki/ca.crt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/pki/issued/server.crt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/pki/private/server.key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div><h3 id="配置服务器" tabindex="-1">配置服务器 <a class="header-anchor" href="#配置服务器" aria-label="Permalink to &quot;配置服务器&quot;">​</a></h3><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># /etc/openvpn/server.conf</span></span>
<span class="line"><span style="color:#6A737D;"># 其样本位于/usr/share/doc/openvpn-2.4.8/sample/sample-config-files/server.conf</span></span>
<span class="line"><span style="color:#E1E4E8;">port 1194 </span><span style="color:#6A737D;"># 监听的端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">proto udp </span><span style="color:#6A737D;"># 服务端用的协议，一般用稍快的udp</span></span>
<span class="line"><span style="color:#E1E4E8;">dev tun</span></span>
<span class="line"><span style="color:#E1E4E8;">ca /etc/openvpn/server/certs/ca.crt </span><span style="color:#6A737D;"># CA 根证书路径</span></span>
<span class="line"><span style="color:#E1E4E8;">cert /etc/openvpn/server/certs/server.crt </span><span style="color:#6A737D;"># open VPN 服务器证书路径</span></span>
<span class="line"><span style="color:#E1E4E8;">key /etc/openvpn/server/certs/server.key </span><span style="color:#6A737D;"># open VPN 服务器密钥路径，请勿泄露！</span></span>
<span class="line"><span style="color:#E1E4E8;">dh /etc/openvpn/server/certs/dh.pem </span><span style="color:#6A737D;"># Diffie-Hellman 算法密钥文件路径</span></span>
<span class="line"><span style="color:#6A737D;"># tls-auth key，参数 0 可以省略，如果不省略，那么客户端配置相应的参数该配成 1。</span></span>
<span class="line"><span style="color:#6A737D;"># 如果省略，那么客户端不需要 tls-auth 配置</span></span>
<span class="line"><span style="color:#E1E4E8;">tls-auth /etc/openvpn/server/certs/ta.key 0</span></span>
<span class="line"><span style="color:#E1E4E8;">server 10.8.0.0 255.255.255.0 </span><span style="color:#6A737D;"># OpenVPN子网，默认为 10.8.0.0/24</span></span>
<span class="line"><span style="color:#E1E4E8;">compress lzo</span></span>
<span class="line"><span style="color:#E1E4E8;">duplicate-cn   </span><span style="color:#6A737D;"># 允许一个用户多个终端连接</span></span>
<span class="line"><span style="color:#E1E4E8;">keepalive 10 120</span></span>
<span class="line"><span style="color:#E1E4E8;">comp-lzo</span></span>
<span class="line"><span style="color:#E1E4E8;">persist-key</span></span>
<span class="line"><span style="color:#E1E4E8;">persist-tun</span></span>
<span class="line"><span style="color:#E1E4E8;">verb 3</span></span>
<span class="line"><span style="color:#E1E4E8;">explicit-exit-notify 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># /etc/openvpn/server.conf</span></span>
<span class="line"><span style="color:#6A737D;"># 其样本位于/usr/share/doc/openvpn-2.4.8/sample/sample-config-files/server.conf</span></span>
<span class="line"><span style="color:#24292E;">port 1194 </span><span style="color:#6A737D;"># 监听的端口号</span></span>
<span class="line"><span style="color:#24292E;">proto udp </span><span style="color:#6A737D;"># 服务端用的协议，一般用稍快的udp</span></span>
<span class="line"><span style="color:#24292E;">dev tun</span></span>
<span class="line"><span style="color:#24292E;">ca /etc/openvpn/server/certs/ca.crt </span><span style="color:#6A737D;"># CA 根证书路径</span></span>
<span class="line"><span style="color:#24292E;">cert /etc/openvpn/server/certs/server.crt </span><span style="color:#6A737D;"># open VPN 服务器证书路径</span></span>
<span class="line"><span style="color:#24292E;">key /etc/openvpn/server/certs/server.key </span><span style="color:#6A737D;"># open VPN 服务器密钥路径，请勿泄露！</span></span>
<span class="line"><span style="color:#24292E;">dh /etc/openvpn/server/certs/dh.pem </span><span style="color:#6A737D;"># Diffie-Hellman 算法密钥文件路径</span></span>
<span class="line"><span style="color:#6A737D;"># tls-auth key，参数 0 可以省略，如果不省略，那么客户端配置相应的参数该配成 1。</span></span>
<span class="line"><span style="color:#6A737D;"># 如果省略，那么客户端不需要 tls-auth 配置</span></span>
<span class="line"><span style="color:#24292E;">tls-auth /etc/openvpn/server/certs/ta.key 0</span></span>
<span class="line"><span style="color:#24292E;">server 10.8.0.0 255.255.255.0 </span><span style="color:#6A737D;"># OpenVPN子网，默认为 10.8.0.0/24</span></span>
<span class="line"><span style="color:#24292E;">compress lzo</span></span>
<span class="line"><span style="color:#24292E;">duplicate-cn   </span><span style="color:#6A737D;"># 允许一个用户多个终端连接</span></span>
<span class="line"><span style="color:#24292E;">keepalive 10 120</span></span>
<span class="line"><span style="color:#24292E;">comp-lzo</span></span>
<span class="line"><span style="color:#24292E;">persist-key</span></span>
<span class="line"><span style="color:#24292E;">persist-tun</span></span>
<span class="line"><span style="color:#24292E;">verb 3</span></span>
<span class="line"><span style="color:#24292E;">explicit-exit-notify 1</span></span></code></pre></div><h3 id="启动服务" tabindex="-1">启动服务 <a class="header-anchor" href="#启动服务" aria-label="Permalink to &quot;启动服务&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">openvpn@server</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 启动</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">openvepn@server</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 设置自启动</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--zone=public</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--add-port=1194/udp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--permanent</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># success</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--reload</span><span style="color:#E1E4E8;">             </span><span style="color:#6A737D;"># 开发防火墙端口并重载防火墙</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">openvpn@server</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 启动</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">openvepn@server</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 设置自启动</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--zone=public</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--add-port=1194/udp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--permanent</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># success</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--reload</span><span style="color:#24292E;">             </span><span style="color:#6A737D;"># 开发防火墙端口并重载防火墙</span></span></code></pre></div><h2 id="证书客户端" tabindex="-1">证书客户端 <a class="header-anchor" href="#证书客户端" aria-label="Permalink to &quot;证书客户端&quot;">​</a></h2><p>多个客户端请自行重复以下操作</p><h3 id="创建证书和密钥" tabindex="-1">创建证书和密钥 <a class="header-anchor" href="#创建证书和密钥" aria-label="Permalink to &quot;创建证书和密钥&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa</span></span>
<span class="line"><span style="color:#6A737D;">### 创建服务端证书和密钥</span></span>
<span class="line"><span style="color:#B392F0;">./easyrsa</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gen-req</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user01</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nopass</span></span>
<span class="line"><span style="color:#6A737D;"># Common Name (eg: your user, host, or server name) [user01]: # 直接回车</span></span>
<span class="line"><span style="color:#6A737D;"># Keypair and certificate request completed. Your files are:</span></span>
<span class="line"><span style="color:#6A737D;"># req: /etc/openvpn/client/easy-rsa/pki/reqs/user01.req</span></span>
<span class="line"><span style="color:#6A737D;"># key: /etc/openvpn/client/easy-rsa/pki/private/user01.key</span></span>
<span class="line"><span style="color:#6A737D;">### 签约客户端证书</span></span>
<span class="line"><span style="color:#B392F0;">./easyrsa</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sign</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">user01</span></span>
<span class="line"><span style="color:#6A737D;"># Request subject, to be signed as a client certificate for 1080 days:</span></span>
<span class="line"><span style="color:#6A737D;"># subject=</span></span>
<span class="line"><span style="color:#6A737D;">#     commonName                = user01</span></span>
<span class="line"><span style="color:#6A737D;"># Type the word &#39;yes&#39; to continue, or any other input to abort.</span></span>
<span class="line"><span style="color:#6A737D;">#  Confirm request details: yes # 输入yes回车</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa</span></span>
<span class="line"><span style="color:#6A737D;">### 创建服务端证书和密钥</span></span>
<span class="line"><span style="color:#6F42C1;">./easyrsa</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gen-req</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user01</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nopass</span></span>
<span class="line"><span style="color:#6A737D;"># Common Name (eg: your user, host, or server name) [user01]: # 直接回车</span></span>
<span class="line"><span style="color:#6A737D;"># Keypair and certificate request completed. Your files are:</span></span>
<span class="line"><span style="color:#6A737D;"># req: /etc/openvpn/client/easy-rsa/pki/reqs/user01.req</span></span>
<span class="line"><span style="color:#6A737D;"># key: /etc/openvpn/client/easy-rsa/pki/private/user01.key</span></span>
<span class="line"><span style="color:#6A737D;">### 签约客户端证书</span></span>
<span class="line"><span style="color:#6F42C1;">./easyrsa</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sign</span><span style="color:#24292E;"> </span><span style="color:#032F62;">client</span><span style="color:#24292E;"> </span><span style="color:#032F62;">user01</span></span>
<span class="line"><span style="color:#6A737D;"># Request subject, to be signed as a client certificate for 1080 days:</span></span>
<span class="line"><span style="color:#6A737D;"># subject=</span></span>
<span class="line"><span style="color:#6A737D;">#     commonName                = user01</span></span>
<span class="line"><span style="color:#6A737D;"># Type the word &#39;yes&#39; to continue, or any other input to abort.</span></span>
<span class="line"><span style="color:#6A737D;">#  Confirm request details: yes # 输入yes回车</span></span></code></pre></div><h3 id="整理证书和密钥" tabindex="-1">整理证书和密钥 <a class="header-anchor" href="#整理证书和密钥" aria-label="Permalink to &quot;整理证书和密钥&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/certs/client/user01</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/ta.key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/pki/ca.crt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/pki/issued/user01.crt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/easy-rsa/pki/private/user01.key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/certs/client/user01</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/ta.key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/pki/ca.crt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/pki/issued/user01.crt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/easy-rsa/pki/private/user01.key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div><h3 id="证书客户端配置ovpn文件" tabindex="-1">证书客户端配置ovpn文件 <a class="header-anchor" href="#证书客户端配置ovpn文件" aria-label="Permalink to &quot;证书客户端配置ovpn文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">client</span></span>
<span class="line"><span style="color:#e1e4e8;">dev tun</span></span>
<span class="line"><span style="color:#e1e4e8;">proto udp</span></span>
<span class="line"><span style="color:#e1e4e8;">remote your.openvpn.server 1194</span></span>
<span class="line"><span style="color:#e1e4e8;">resolv-retry infinite</span></span>
<span class="line"><span style="color:#e1e4e8;">nobind</span></span>
<span class="line"><span style="color:#e1e4e8;">persist-key</span></span>
<span class="line"><span style="color:#e1e4e8;">persist-tun</span></span>
<span class="line"><span style="color:#e1e4e8;">remote-cert-tls server</span></span>
<span class="line"><span style="color:#e1e4e8;">cipher AES-256-CBC</span></span>
<span class="line"><span style="color:#e1e4e8;">comp-lzo</span></span>
<span class="line"><span style="color:#e1e4e8;">nice 0</span></span>
<span class="line"><span style="color:#e1e4e8;">verb 3</span></span>
<span class="line"><span style="color:#e1e4e8;">mute 10</span></span>
<span class="line"><span style="color:#e1e4e8;">key-direction 1</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;tls-auth&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">ta.key 文件内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/tls-auth&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ca&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">ca.crt 文件内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ca&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;cert&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">client.crt 文件内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/cert&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;key&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">client.key 文件内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/key&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">client</span></span>
<span class="line"><span style="color:#24292e;">dev tun</span></span>
<span class="line"><span style="color:#24292e;">proto udp</span></span>
<span class="line"><span style="color:#24292e;">remote your.openvpn.server 1194</span></span>
<span class="line"><span style="color:#24292e;">resolv-retry infinite</span></span>
<span class="line"><span style="color:#24292e;">nobind</span></span>
<span class="line"><span style="color:#24292e;">persist-key</span></span>
<span class="line"><span style="color:#24292e;">persist-tun</span></span>
<span class="line"><span style="color:#24292e;">remote-cert-tls server</span></span>
<span class="line"><span style="color:#24292e;">cipher AES-256-CBC</span></span>
<span class="line"><span style="color:#24292e;">comp-lzo</span></span>
<span class="line"><span style="color:#24292e;">nice 0</span></span>
<span class="line"><span style="color:#24292e;">verb 3</span></span>
<span class="line"><span style="color:#24292e;">mute 10</span></span>
<span class="line"><span style="color:#24292e;">key-direction 1</span></span>
<span class="line"><span style="color:#24292e;">&lt;tls-auth&gt;</span></span>
<span class="line"><span style="color:#24292e;">ta.key 文件内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;/tls-auth&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;ca&gt;</span></span>
<span class="line"><span style="color:#24292e;">ca.crt 文件内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ca&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;cert&gt;</span></span>
<span class="line"><span style="color:#24292e;">client.crt 文件内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;/cert&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;key&gt;</span></span>
<span class="line"><span style="color:#24292e;">client.key 文件内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;/key&gt;</span></span></code></pre></div><h2 id="密码客户端" tabindex="-1">密码客户端 <a class="header-anchor" href="#密码客户端" aria-label="Permalink to &quot;密码客户端&quot;">​</a></h2><h3 id="用户认证脚本" tabindex="-1">用户认证脚本 <a class="header-anchor" href="#用户认证脚本" aria-label="Permalink to &quot;用户认证脚本&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="color:#6A737D;">###########################################################</span></span>
<span class="line"><span style="color:#6A737D;"># checkpsw.sh (C) 2004 Mathias Sundman &lt;mathias@openvpn.se&gt;</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># This script will authenticate OpenVPN users against</span></span>
<span class="line"><span style="color:#6A737D;"># a plain text file. The passfile should simply contain</span></span>
<span class="line"><span style="color:#6A737D;"># one row per user with the username first followed by</span></span>
<span class="line"><span style="color:#6A737D;"># one or more space(s) or tab(s) and then the password.</span></span>
<span class="line"><span style="color:#6A737D;">###########################################################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">PASSFILE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/etc/openvpn/psw-file&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">LOG_FILE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/etc/openvpn/openvpn-password.log&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">TIME_STAMP</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">date</span><span style="color:#9ECBFF;"> &quot;+%Y-%m-%d %T&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">PASSFILE</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">TIME_STAMP</span><span style="color:#9ECBFF;">}: Could not open password file </span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">PASSFILE</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;"> for reading.&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> \${LOG_FILE}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">CORRECT_PASSWORD</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">awk</span><span style="color:#9ECBFF;"> &#39;!/^;/&amp;&amp;!/^#/&amp;&amp;$1==&quot;&#39;\${</span><span style="color:#E1E4E8;">username</span><span style="color:#9ECBFF;">}&#39;&quot;{print $2;exit}&#39; \${</span><span style="color:#E1E4E8;">PASSFILE</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">CORRECT_PASSWORD</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">TIME_STAMP</span><span style="color:#9ECBFF;">}: User does not exist: username=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">username</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">, password=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">password</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">.&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> \${LOG_FILE}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">password</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">CORRECT_PASSWORD</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;"> ]; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">TIME_STAMP</span><span style="color:#9ECBFF;">}: Successful authentication: username=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">username</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">.&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> \${LOG_FILE}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">TIME_STAMP</span><span style="color:#9ECBFF;">}: Incorrect password: username=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">username</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">, password=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">\${</span><span style="color:#E1E4E8;">password</span><span style="color:#9ECBFF;">}</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">.&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> \${LOG_FILE}</span></span>
<span class="line"><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="color:#6A737D;">###########################################################</span></span>
<span class="line"><span style="color:#6A737D;"># checkpsw.sh (C) 2004 Mathias Sundman &lt;mathias@openvpn.se&gt;</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># This script will authenticate OpenVPN users against</span></span>
<span class="line"><span style="color:#6A737D;"># a plain text file. The passfile should simply contain</span></span>
<span class="line"><span style="color:#6A737D;"># one row per user with the username first followed by</span></span>
<span class="line"><span style="color:#6A737D;"># one or more space(s) or tab(s) and then the password.</span></span>
<span class="line"><span style="color:#6A737D;">###########################################################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">PASSFILE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/etc/openvpn/psw-file&quot;</span></span>
<span class="line"><span style="color:#24292E;">LOG_FILE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/etc/openvpn/openvpn-password.log&quot;</span></span>
<span class="line"><span style="color:#24292E;">TIME_STAMP</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">date</span><span style="color:#032F62;"> &quot;+%Y-%m-%d %T&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">PASSFILE</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;"> ]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">TIME_STAMP</span><span style="color:#032F62;">}: Could not open password file </span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">\${</span><span style="color:#24292E;">PASSFILE</span><span style="color:#032F62;">}</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;"> for reading.&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> \${LOG_FILE}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">CORRECT_PASSWORD</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">awk</span><span style="color:#032F62;"> &#39;!/^;/&amp;&amp;!/^#/&amp;&amp;$1==&quot;&#39;\${</span><span style="color:#24292E;">username</span><span style="color:#032F62;">}&#39;&quot;{print $2;exit}&#39; \${</span><span style="color:#24292E;">PASSFILE</span><span style="color:#032F62;">}\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">CORRECT_PASSWORD</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> ]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">TIME_STAMP</span><span style="color:#032F62;">}: User does not exist: username=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">\${</span><span style="color:#24292E;">username</span><span style="color:#032F62;">}</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">, password=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">\${</span><span style="color:#24292E;">password</span><span style="color:#032F62;">}</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">.&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> \${LOG_FILE}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">password</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">CORRECT_PASSWORD</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;"> ]; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">TIME_STAMP</span><span style="color:#032F62;">}: Successful authentication: username=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">\${</span><span style="color:#24292E;">username</span><span style="color:#032F62;">}</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">.&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> \${LOG_FILE}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">TIME_STAMP</span><span style="color:#032F62;">}: Incorrect password: username=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">\${</span><span style="color:#24292E;">username</span><span style="color:#032F62;">}</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">, password=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">\${</span><span style="color:#24292E;">password</span><span style="color:#032F62;">}</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">.&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> \${LOG_FILE}</span></span>
<span class="line"><span style="color:#005CC5;">exit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 赋予可执行权限</span></span>
<span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/checkpsw.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 赋予可执行权限</span></span>
<span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/checkpsw.sh</span></span></code></pre></div><h3 id="用户密码文件" tabindex="-1">用户密码文件 <a class="header-anchor" href="#用户密码文件" aria-label="Permalink to &quot;用户密码文件&quot;">​</a></h3><p>位于<code>/etc/openvpn/psw-file</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">user1 passwd1</span></span>
<span class="line"><span style="color:#e1e4e8;">user2 passwd2</span></span>
<span class="line"><span style="color:#e1e4e8;"># chown nobody.nobody /etc/openvpn/psw-file</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">user1 passwd1</span></span>
<span class="line"><span style="color:#24292e;">user2 passwd2</span></span>
<span class="line"><span style="color:#24292e;"># chown nobody.nobody /etc/openvpn/psw-file</span></span></code></pre></div><h3 id="用户固定ip配置" tabindex="-1">用户固定IP配置 <a class="header-anchor" href="#用户固定ip配置" aria-label="Permalink to &quot;用户固定IP配置&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">vi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/openvpn/client/user1</span></span>
<span class="line"><span style="color:#6A737D;"># chown -R nobody.nobody /etc/openvpn/client</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">vi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/openvpn/client/user1</span></span>
<span class="line"><span style="color:#6A737D;"># chown -R nobody.nobody /etc/openvpn/client</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ifconfig-push  10.8.0.9  10.8.0.10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ifconfig-push  10.8.0.9  10.8.0.10</span></span></code></pre></div><p><code>ifconfig-push</code>中的每一对IP地址表示虚拟客户端和服务器的IP端点。 它们必须从连续的/30子网网段中获取(这里是/30表示xxx.xxx.xxx.xxx/30，即子网掩码位数为30)，以便于与Windows客户端和TAP-Windows驱动兼容。 明确地说，每个端点的IP地址对的最后8位字节必须取自下面的集合：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[1, 2]    [5, 6]    [9, 10]   [ 13, 14] [ 17, 18]</span></span>
<span class="line"><span style="color:#e1e4e8;">[21, 22]  [25, 26]  [ 29, 30] [ 33, 34] [ 37, 38]</span></span>
<span class="line"><span style="color:#e1e4e8;">[41, 42]  [45, 46]  [ 49, 50] [ 53, 54] [ 57, 58]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ 61, 62] [65, 66]  [ 69, 70] [ 73, 74] [ 77, 78]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ 81, 82] [ 85, 86] [ 89, 90] [ 93, 94] [ 97, 98]</span></span>
<span class="line"><span style="color:#e1e4e8;">[101,102] [105,106] [109,110] [113,114] [117,118]</span></span>
<span class="line"><span style="color:#e1e4e8;">[121,122] [125,126] [129,130] [133,134] [137,138]</span></span>
<span class="line"><span style="color:#e1e4e8;">[141,142] [145,146] [149,150] [153,154] [157,158]</span></span>
<span class="line"><span style="color:#e1e4e8;">[161,162] [165,166] [169,170] [173,174] [177,178]</span></span>
<span class="line"><span style="color:#e1e4e8;">[181,182] [185,186] [189,190] [193,194] [197,198]</span></span>
<span class="line"><span style="color:#e1e4e8;">[201,202] [205,206] [209,210] [213,214] [217,218]</span></span>
<span class="line"><span style="color:#e1e4e8;">[221,222] [225,226] [229,230] [233,234] [237,238]</span></span>
<span class="line"><span style="color:#e1e4e8;">[241,242] [245,246] [249,250] [253,254]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[1, 2]    [5, 6]    [9, 10]   [ 13, 14] [ 17, 18]</span></span>
<span class="line"><span style="color:#24292e;">[21, 22]  [25, 26]  [ 29, 30] [ 33, 34] [ 37, 38]</span></span>
<span class="line"><span style="color:#24292e;">[41, 42]  [45, 46]  [ 49, 50] [ 53, 54] [ 57, 58]</span></span>
<span class="line"><span style="color:#24292e;">[ 61, 62] [65, 66]  [ 69, 70] [ 73, 74] [ 77, 78]</span></span>
<span class="line"><span style="color:#24292e;">[ 81, 82] [ 85, 86] [ 89, 90] [ 93, 94] [ 97, 98]</span></span>
<span class="line"><span style="color:#24292e;">[101,102] [105,106] [109,110] [113,114] [117,118]</span></span>
<span class="line"><span style="color:#24292e;">[121,122] [125,126] [129,130] [133,134] [137,138]</span></span>
<span class="line"><span style="color:#24292e;">[141,142] [145,146] [149,150] [153,154] [157,158]</span></span>
<span class="line"><span style="color:#24292e;">[161,162] [165,166] [169,170] [173,174] [177,178]</span></span>
<span class="line"><span style="color:#24292e;">[181,182] [185,186] [189,190] [193,194] [197,198]</span></span>
<span class="line"><span style="color:#24292e;">[201,202] [205,206] [209,210] [213,214] [217,218]</span></span>
<span class="line"><span style="color:#24292e;">[221,222] [225,226] [229,230] [233,234] [237,238]</span></span>
<span class="line"><span style="color:#24292e;">[241,242] [245,246] [249,250] [253,254]</span></span></code></pre></div><h3 id="修改服务器配置支持用户密码登录" tabindex="-1">修改服务器配置支持用户密码登录 <a class="header-anchor" href="#修改服务器配置支持用户密码登录" aria-label="Permalink to &quot;修改服务器配置支持用户密码登录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">script-security 3</span></span>
<span class="line"><span style="color:#e1e4e8;">auth-user-pass-verify /etc/openvpn/checkpsw.sh via-env # 指定用户认证脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">username-as-common-name</span></span>
<span class="line"><span style="color:#e1e4e8;">verify-client-cert none</span></span>
<span class="line"><span style="color:#e1e4e8;">client-cert-not-required              # 非双重验证，仅用户名密码验证</span></span>
<span class="line"><span style="color:#e1e4e8;">client-config-dir /etc/openvpn/client # 客户端配置（固定IP）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">script-security 3</span></span>
<span class="line"><span style="color:#24292e;">auth-user-pass-verify /etc/openvpn/checkpsw.sh via-env # 指定用户认证脚本</span></span>
<span class="line"><span style="color:#24292e;">username-as-common-name</span></span>
<span class="line"><span style="color:#24292e;">verify-client-cert none</span></span>
<span class="line"><span style="color:#24292e;">client-cert-not-required              # 非双重验证，仅用户名密码验证</span></span>
<span class="line"><span style="color:#24292e;">client-config-dir /etc/openvpn/client # 客户端配置（固定IP）</span></span></code></pre></div><h3 id="密码客户端配置文件ovpn" tabindex="-1">密码客户端配置文件ovpn <a class="header-anchor" href="#密码客户端配置文件ovpn" aria-label="Permalink to &quot;密码客户端配置文件ovpn&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">client</span></span>
<span class="line"><span style="color:#e1e4e8;">dev tun</span></span>
<span class="line"><span style="color:#e1e4e8;">proto udp</span></span>
<span class="line"><span style="color:#e1e4e8;">remote your.openvpn.server 1194</span></span>
<span class="line"><span style="color:#e1e4e8;">resolv-retry infinite</span></span>
<span class="line"><span style="color:#e1e4e8;">nobind</span></span>
<span class="line"><span style="color:#e1e4e8;">persist-key</span></span>
<span class="line"><span style="color:#e1e4e8;">persist-tun</span></span>
<span class="line"><span style="color:#e1e4e8;">remote-cert-tls server</span></span>
<span class="line"><span style="color:#e1e4e8;">auth-nocache</span></span>
<span class="line"><span style="color:#e1e4e8;">auth-user-pass</span></span>
<span class="line"><span style="color:#e1e4e8;">cipher AES-256-CBC</span></span>
<span class="line"><span style="color:#e1e4e8;">comp-lzo</span></span>
<span class="line"><span style="color:#e1e4e8;">nice 0</span></span>
<span class="line"><span style="color:#e1e4e8;">verb 3</span></span>
<span class="line"><span style="color:#e1e4e8;">mute 10</span></span>
<span class="line"><span style="color:#e1e4e8;">key-direction 1</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;tls-auth&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">ta.key 文件内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/tls-auth&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ca&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">ca.crt 文件内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ca&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">client</span></span>
<span class="line"><span style="color:#24292e;">dev tun</span></span>
<span class="line"><span style="color:#24292e;">proto udp</span></span>
<span class="line"><span style="color:#24292e;">remote your.openvpn.server 1194</span></span>
<span class="line"><span style="color:#24292e;">resolv-retry infinite</span></span>
<span class="line"><span style="color:#24292e;">nobind</span></span>
<span class="line"><span style="color:#24292e;">persist-key</span></span>
<span class="line"><span style="color:#24292e;">persist-tun</span></span>
<span class="line"><span style="color:#24292e;">remote-cert-tls server</span></span>
<span class="line"><span style="color:#24292e;">auth-nocache</span></span>
<span class="line"><span style="color:#24292e;">auth-user-pass</span></span>
<span class="line"><span style="color:#24292e;">cipher AES-256-CBC</span></span>
<span class="line"><span style="color:#24292e;">comp-lzo</span></span>
<span class="line"><span style="color:#24292e;">nice 0</span></span>
<span class="line"><span style="color:#24292e;">verb 3</span></span>
<span class="line"><span style="color:#24292e;">mute 10</span></span>
<span class="line"><span style="color:#24292e;">key-direction 1</span></span>
<span class="line"><span style="color:#24292e;">&lt;tls-auth&gt;</span></span>
<span class="line"><span style="color:#24292e;">ta.key 文件内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;/tls-auth&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;ca&gt;</span></span>
<span class="line"><span style="color:#24292e;">ca.crt 文件内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ca&gt;</span></span></code></pre></div><h2 id="openvpn客户端" tabindex="-1">OpenVPN客户端 <a class="header-anchor" href="#openvpn客户端" aria-label="Permalink to &quot;OpenVPN客户端&quot;">​</a></h2><p>OpenVPN UI <a href="https://openvpn.net/community-downloads" target="_blank" rel="noreferrer">官方下载地址</a>，鉴于需科学上网，请自行解决下载。</p><p>安装并运行，导入制作好的ovpn文件，连接，若启用密码验证，输入用户名密码，确定，即可连接VPN。</p><h2 id="提醒" tabindex="-1">提醒 <a class="header-anchor" href="#提醒" aria-label="Permalink to &quot;提醒&quot;">​</a></h2><ul><li>启用密码验证则不能仅依赖证书通过验证，但密码验证可启用证书进行双重验证</li><li>大型商业用户可以使用付费便于管理的<code>OpenVPN Access Server</code>，使用<code>OpenVPN Connect</code>客户端连接VPN。</li></ul>`,45);function d(u,h,v,C,A,g){const p=l("Mermaid");return s(),o("div",null,[E,(s(),c(t,null,{default:n(()=>[r(p,{id:"mermaid-67",class:"eita",graph:"graph%20TB%0AA(%E5%AE%89%E8%A3%85OpenVPN%E5%92%8C%E8%AF%81%E4%B9%A6%E7%94%9F%E6%88%90%E7%9B%B8%E5%85%B3%E4%BE%9D%E8%B5%96)%0AA%20--%3E%20B(%E7%94%9F%E6%88%90CA%E5%92%8C%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%AF%81%E4%B9%A6)%0AB%20--%3E%20C(%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AEserver.conf)%0AC%20--%3E%20D(%E6%B7%BB%E5%8A%A0%E9%98%B2%E7%81%AB%E5%A2%99%E8%A7%84%E5%88%99)%0AD%20--%3E%20E(%E5%90%AF%E5%8A%A8OpenVPN%E6%9C%8D%E5%8A%A1)%0AE%20--%3E%20F(%E7%94%9F%E6%88%90%E5%AE%A2%E6%88%B7%E7%AB%AFCA%E5%92%8C%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6)%0AF%20--%3E%20G(%E6%89%93%E5%8C%85%E7%9B%B8%E5%85%B3%E6%96%87%E4%BB%B6%E6%88%90.ovpn%E4%BE%9B%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BD%BF%E7%94%A8)%0AG%20--%3E%20H(%E5%AE%89%E8%A3%85OpenVPN%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5VPN)%0A"})]),fallback:n(()=>[y(" Loading... ")]),_:1})),F])}const k=e(i,[["render",d]]);export{m as __pageData,k as default};
