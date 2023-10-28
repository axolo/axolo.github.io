import{_ as t,o as e,c as a,Q as s}from"./chunks/framework.d5af2850.js";const u=JSON.parse('{"title":"HTTP DELETE 方法传递参数","description":"尽管不建议 DELETE 方法携带 body，但实际业务用了，现实往往很无奈……","frontmatter":{"title":"HTTP DELETE 方法传递参数","description":"尽管不建议 DELETE 方法携带 body，但实际业务用了，现实往往很无奈……","time":"2019-10-01T00:00:00.000Z","category":"前端","tags":["HTTP","WEB"]},"headers":[],"relativePath":"delete-with-body.md","filePath":"delete-with-body.md"}'),o={name:"delete-with-body.md"},l=s(`<h1 id="http-delete-方法传递参数" tabindex="-1">HTTP DELETE 方法传递参数 <a class="header-anchor" href="#http-delete-方法传递参数" aria-label="Permalink to &quot;HTTP DELETE 方法传递参数&quot;">​</a></h1><blockquote><p>方跃明 2019-10-01</p></blockquote><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><a href="https://tools.ietf.org/html/rfc2616" target="_blank" rel="noreferrer">RFC2616</a> 不建议 DELETE 方法甚至是 GET 方法 body 携带参数。</p></div><h2 id="约束" tabindex="-1">约束 <a class="header-anchor" href="#约束" aria-label="Permalink to &quot;约束&quot;">​</a></h2><p>尽管如此，实际业务中还是有可能不可回避的遇到，具体实现有以下约束：</p><ul><li>参数必须被<code>data</code>包裹才能正确传递，请务必遵循。</li><li>请求头的<code>Content-Type</code>必须是<code>application/json</code></li></ul><h2 id="请求" tabindex="-1">请求 <a class="header-anchor" href="#请求" aria-label="Permalink to &quot;请求&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-X</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">DELETE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/car/:id&#39;</span></span>
<span class="line"><span style="color:#B392F0;">-H</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Content-Type: application/json&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">-d </span><span style="color:#9ECBFF;">&#39;{ &quot;data&quot;: { &quot;deletedBy&quot;: &quot;测试删除车辆17&quot; } }&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-X</span><span style="color:#24292E;"> </span><span style="color:#032F62;">DELETE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/car/:id&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">-H</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Content-Type: application/json&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-d </span><span style="color:#032F62;">&#39;{ &quot;data&quot;: { &quot;deletedBy&quot;: &quot;测试删除车辆17&quot; } }&#39;</span></span></code></pre></div><table><thead><tr><th>参数</th><th style="text-align:center;">必须</th><th>说明</th></tr></thead><tbody><tr><td>headers</td><td style="text-align:center;">是</td><td>Content-Type: application/json</td></tr><tr><td>:id</td><td style="text-align:center;">是</td><td>车辆id</td></tr><tr><td>deletedBy</td><td style="text-align:center;"></td><td>停用原因</td></tr></tbody></table>`,9),n=[l];function p(c,r,d,i,E,y){return e(),a("div",null,n)}const T=t(o,[["render",p]]);export{u as __pageData,T as default};