import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.cd6e3458.js";const E=JSON.parse('{"title":"localhost 开启 HTTPS","description":"如何给 localhost 开启 https ？","frontmatter":{"title":"localhost 开启 HTTPS","description":"如何给 localhost 开启 https ？","time":"2020-03-28T00:00:00.000Z","category":"运维","tags":["HTTP","WEB"]},"headers":[],"relativePath":"localhost-ssl-cert.md","filePath":"localhost-ssl-cert.md"}'),o={name:"localhost-ssl-cert.md"},e=n(`<h1 id="localhost开启https" tabindex="-1">localhost开启HTTPS <a class="header-anchor" href="#localhost开启https" aria-label="Permalink to &quot;localhost开启HTTPS&quot;">​</a></h1><blockquote><p>方跃明 2020-03-28</p></blockquote><p>以下操作均处于Windows环境</p><h2 id="证书工具" tabindex="-1">证书工具 <a class="header-anchor" href="#证书工具" aria-label="Permalink to &quot;证书工具&quot;">​</a></h2><ul><li><a href="https://golang.org/dl/" target="_blank" rel="noreferrer">Go语言环境</a></li><li><a href="https://github.com/jsha/minica" target="_blank" rel="noreferrer">minica</a></li></ul><p>下载并安装Go语言安装包，编译<code>minica</code>为可执行文件：<code>minica.exe</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/jsha/minica.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">minica</span></span>
<span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/jsha/minica.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">minica</span></span>
<span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div><h3 id="生成证书" tabindex="-1">生成证书 <a class="header-anchor" href="#生成证书" aria-label="Permalink to &quot;生成证书&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 若根证书存在，同时生成根证书和叶证书（localhost）</span></span>
<span class="line"><span style="color:#B392F0;">./minica</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--domains</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost</span></span>
<span class="line"><span style="color:#6A737D;"># 若根证书存在，为其生成叶证书（localhost.com）</span></span>
<span class="line"><span style="color:#B392F0;">./minica</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--domains</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost.com</span></span>
<span class="line"><span style="color:#6A737D;"># 执行成功localhost.com目录下有对应证书</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 若根证书存在，同时生成根证书和叶证书（localhost）</span></span>
<span class="line"><span style="color:#6F42C1;">./minica</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--domains</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost</span></span>
<span class="line"><span style="color:#6A737D;"># 若根证书存在，为其生成叶证书（localhost.com）</span></span>
<span class="line"><span style="color:#6F42C1;">./minica</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--domains</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost.com</span></span>
<span class="line"><span style="color:#6A737D;"># 执行成功localhost.com目录下有对应证书</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">|-- minica.exe          # 可执行文件</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- minica.pem          # minica根证书</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- minica-key.pem      # minica根证书私钥</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- localhost           # 域名：localhost</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- cert.pem        #   域名叶证书</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- key.pem         #   域名叶证书私钥</span></span>
<span class="line"><span style="color:#e1e4e8;">\`-- localhost.com       # 域名：localhost.com</span></span>
<span class="line"><span style="color:#e1e4e8;">    |-- cert.pem        #   域名叶证书</span></span>
<span class="line"><span style="color:#e1e4e8;">    \`-- key.pem         #   域名叶证书私钥</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">|-- minica.exe          # 可执行文件</span></span>
<span class="line"><span style="color:#24292e;">|-- minica.pem          # minica根证书</span></span>
<span class="line"><span style="color:#24292e;">|-- minica-key.pem      # minica根证书私钥</span></span>
<span class="line"><span style="color:#24292e;">|-- localhost           # 域名：localhost</span></span>
<span class="line"><span style="color:#24292e;">|   |-- cert.pem        #   域名叶证书</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- key.pem         #   域名叶证书私钥</span></span>
<span class="line"><span style="color:#24292e;">\`-- localhost.com       # 域名：localhost.com</span></span>
<span class="line"><span style="color:#24292e;">    |-- cert.pem        #   域名叶证书</span></span>
<span class="line"><span style="color:#24292e;">    \`-- key.pem         #   域名叶证书私钥</span></span></code></pre></div><h2 id="信任根证书" tabindex="-1">信任根证书 <a class="header-anchor" href="#信任根证书" aria-label="Permalink to &quot;信任根证书&quot;">​</a></h2><ul><li>生成：进入<a href="https://console.cloud.tencent.com/ssl" target="_blank" rel="noreferrer">腾讯云控制台SSL管理</a>，上传证书，将根证书和根证书私钥填入，生成证书</li><li>导入：下载此证书包，打开IIS目录，双击pfx证书填入对应导入密码，导入</li><li>信任：存储位置选择“受信任的根证书颁发机构”</li></ul><blockquote><p>阿里云可以导入本地证书，生成可导入格式，但无法被下载</p></blockquote><h2 id="配置https" tabindex="-1">配置HTTPS <a class="header-anchor" href="#配置https" aria-label="Permalink to &quot;配置HTTPS&quot;">​</a></h2><p>以http-server为例，将叶证书拷贝到对应目录，如<code>certs/localhost</code>下，以HTTPS协议运行。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">http-server</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./certs/localhost/cert.pem</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-K</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./certs/localhost/key.pem</span></span>
<span class="line"><span style="color:#6A737D;"># Starting up http-server, serving ./ through https</span></span>
<span class="line"><span style="color:#6A737D;"># Available on: https://127.0.0.1:8080</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">http-server</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./certs/localhost/cert.pem</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-K</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./certs/localhost/key.pem</span></span>
<span class="line"><span style="color:#6A737D;"># Starting up http-server, serving ./ through https</span></span>
<span class="line"><span style="color:#6A737D;"># Available on: https://127.0.0.1:8080</span></span></code></pre></div><p>访问 <code>https://localhost:8080</code> ，成功判定如下： 显示连接安全、证书有效、证书路径localhost在minica下、该证书没有问题。</p><h2 id="局域网客户端" tabindex="-1">局域网客户端 <a class="header-anchor" href="#局域网客户端" aria-label="Permalink to &quot;局域网客户端&quot;">​</a></h2><ul><li>参照<a href="#生成证书">生成证书</a><strong>再次</strong>生成<code>localhost.com</code>的叶证书</li><li>在需要的局域网客户端上导入并信任根证书</li><li>需改<code>hosts</code>将<code>lcoalhost.com</code>指向对应IP</li><li>局域网客户端访问<code>https://localhost.com:8080</code></li></ul>`,19),p=[e];function c(t,r,i,h,y,d){return a(),l("div",null,p)}const u=s(o,[["render",c]]);export{E as __pageData,u as default};
