import{_ as t,o as e,c as a,b as s}from"./app.88b23440.js";const E=JSON.parse('{"title":"HTTP DELETE 方法传递参数","description":"尽管不建议 DELETE 方法携带 body，但实际业务用了，现实往往很无奈……","frontmatter":{"title":"HTTP DELETE 方法传递参数","description":"尽管不建议 DELETE 方法携带 body，但实际业务用了，现实往往很无奈……","time":"2019-10-01T00:00:00.000Z","category":"前端","tags":["HTTP","WEB"]},"headers":[{"level":2,"title":"约束","slug":"约束","link":"#约束","children":[]},{"level":2,"title":"请求","slug":"请求","link":"#请求","children":[]}],"relativePath":"delete-with-body.md","lastUpdated":1673773212000}'),l={name:"delete-with-body.md"},n=s(`<h1 id="http-delete-方法传递参数" tabindex="-1">HTTP DELETE 方法传递参数 <a class="header-anchor" href="#http-delete-方法传递参数" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><a href="https://tools.ietf.org/html/rfc2616" target="_blank" rel="noreferrer">RFC2616</a> 不建议 DELETE 方法甚至是 GET 方法 body 携带参数。</p></div><h2 id="约束" tabindex="-1">约束 <a class="header-anchor" href="#约束" aria-hidden="true">#</a></h2><p>尽管如此，实际业务中还是有可能不可回避的遇到，具体实现有以下约束：</p><ul><li>参数必须被<code>data</code>包裹才能正确传递，请务必遵循。</li><li>请求头的<code>Content-Type</code>必须是<code>application/json</code></li></ul><h2 id="请求" tabindex="-1">请求 <a class="header-anchor" href="#请求" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DELETE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/car/:id</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type: application/json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-d </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{ &quot;data&quot;: { &quot;deletedBy&quot;: &quot;测试删除车辆17&quot; } }</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>参数</th><th style="text-align:center;">必须</th><th>说明</th></tr></thead><tbody><tr><td>headers</td><td style="text-align:center;">是</td><td>Content-Type: application/json</td></tr><tr><td>:id</td><td style="text-align:center;">是</td><td>车辆id</td></tr><tr><td>deletedBy</td><td style="text-align:center;"></td><td>停用原因</td></tr></tbody></table>`,8),o=[n];function d(r,p,c,i,h,y){return e(),a("div",null,o)}const _=t(l,[["render",d]]);export{E as __pageData,_ as default};
