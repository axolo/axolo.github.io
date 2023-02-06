import{_ as s,o as a,c as l,g as n}from"./app.275c7683.js";const A=JSON.parse('{"title":"localhost 开启 HTTPS","description":"如何给 localhost 开启 https ？","frontmatter":{"title":"localhost 开启 HTTPS","description":"如何给 localhost 开启 https ？","time":"2020-03-28T00:00:00.000Z","category":"运维","tags":["HTTP","WEB"]},"headers":[{"level":2,"title":"证书工具","slug":"证书工具","link":"#证书工具","children":[{"level":3,"title":"生成证书","slug":"生成证书","link":"#生成证书","children":[]}]},{"level":2,"title":"信任根证书","slug":"信任根证书","link":"#信任根证书","children":[]},{"level":2,"title":"配置HTTPS","slug":"配置https","link":"#配置https","children":[]},{"level":2,"title":"局域网客户端","slug":"局域网客户端","link":"#局域网客户端","children":[]}],"relativePath":"localhost-ssl-cert.md","lastUpdated":1675675175000}'),e={name:"localhost-ssl-cert.md"},o=n(`<h1 id="localhost开启https" tabindex="-1">localhost开启HTTPS <a class="header-anchor" href="#localhost开启https" aria-hidden="true">#</a></h1><p>以下操作均处于Windows环境</p><h2 id="证书工具" tabindex="-1">证书工具 <a class="header-anchor" href="#证书工具" aria-hidden="true">#</a></h2><ul><li><a href="https://golang.org/dl/" target="_blank" rel="noreferrer">Go语言环境</a></li><li><a href="https://github.com/jsha/minica" target="_blank" rel="noreferrer">minica</a></li></ul><p>下载并安装Go语言安装包，编译<code>minica</code>为可执行文件：<code>minica.exe</code></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/jsha/minica.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minica</span></span>
<span class="line"><span style="color:#FFCB6B;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span></code></pre></div><h3 id="生成证书" tabindex="-1">生成证书 <a class="header-anchor" href="#生成证书" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 若根证书存在，同时生成根证书和叶证书（localhost）</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/minica</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--domains</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 若根证书存在，为其生成叶证书（localhost.com）</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/minica</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--domains</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 执行成功localhost.com目录下有对应证书</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- minica.exe          # 可执行文件</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- minica.pem          # minica根证书</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- minica-key.pem      # minica根证书私钥</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- localhost           # 域名：localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- cert.pem        #   域名叶证书</span></span>
<span class="line"><span style="color:#A6ACCD;">|   \`-- key.pem         #   域名叶证书私钥</span></span>
<span class="line"><span style="color:#A6ACCD;">\`-- localhost.com       # 域名：localhost.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- cert.pem        #   域名叶证书</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`-- key.pem         #   域名叶证书私钥</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="信任根证书" tabindex="-1">信任根证书 <a class="header-anchor" href="#信任根证书" aria-hidden="true">#</a></h2><ul><li>生成：进入<a href="https://console.cloud.tencent.com/ssl" target="_blank" rel="noreferrer">腾讯云控制台SSL管理</a>，上传证书，将根证书和根证书私钥填入，生成证书</li><li>导入：下载此证书包，打开IIS目录，双击pfx证书填入对应导入密码，导入</li><li>信任：存储位置选择“受信任的根证书颁发机构”</li></ul><blockquote><p>阿里云可以导入本地证书，生成可导入格式，但无法被下载</p></blockquote><h2 id="配置https" tabindex="-1">配置HTTPS <a class="header-anchor" href="#配置https" aria-hidden="true">#</a></h2><p>以http-server为例，将叶证书拷贝到对应目录，如<code>certs/localhost</code>下，以HTTPS协议运行。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">http-server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./certs/localhost/cert.pem</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-K</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./certs/localhost/key.pem</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Starting up http-server, serving ./ through https</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Available on: https://127.0.0.1:8080</span></span>
<span class="line"></span></code></pre></div><p>访问 <code>https://localhost:8080</code> ，成功判定如下： 显示连接安全、证书有效、证书路径localhost在minica下、该证书没有问题。</p><h2 id="局域网客户端" tabindex="-1">局域网客户端 <a class="header-anchor" href="#局域网客户端" aria-hidden="true">#</a></h2><ul><li>参照<a href="#%E7%94%9F%E6%88%90%E8%AF%81%E4%B9%A6">生成证书</a><strong>再次</strong>生成<code>localhost.com</code>的叶证书</li><li>在需要的局域网客户端上导入并信任根证书</li><li>需改<code>hosts</code>将<code>lcoalhost.com</code>指向对应IP</li><li>局域网客户端访问<code>https://localhost.com:8080</code></li></ul><blockquote><p>方跃明 2020-03-28</p></blockquote>`,19),t=[o];function c(p,i,r,h,d,C){return a(),l("div",null,t)}const m=s(e,[["render",c]]);export{A as __pageData,m as default};
