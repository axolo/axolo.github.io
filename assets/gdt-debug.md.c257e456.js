import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.cd6e3458.js";const g=JSON.parse('{"title":"专有钉调试","description":"没有开发工具的加持，专有钉容器内调试，犹如黑灯瞎火走夜路，苦不堪言。","frontmatter":{"title":"专有钉调试","description":"没有开发工具的加持，专有钉容器内调试，犹如黑灯瞎火走夜路，苦不堪言。","time":"2023-09-06T00:00:00.000Z","category":"前端","tags":["钉钉","专有钉","浙政钉"]},"headers":[],"relativePath":"gdt-debug.md","filePath":"gdt-debug.md"}'),p={name:"gdt-debug.md"},o=l(`<h1 id="专有钉调试" tabindex="-1">专有钉调试 <a class="header-anchor" href="#专有钉调试" aria-label="Permalink to &quot;专有钉调试&quot;">​</a></h1><blockquote><p>方跃明 2023-09-06</p></blockquote><p>没有开发工具的加持，专有钉容器内调试，犹如黑灯瞎火走夜路，苦不堪言。</p><table><thead><tr><th>场景</th><th style="text-align:center;">应用类型</th><th>说明</th></tr></thead><tbody><tr><td>官方工具</td><td style="text-align:center;">小程序</td><td>目前仍不支持H5项目调试（貌似不打算支持）</td></tr><tr><td>vConsole</td><td style="text-align:center;">H5</td><td>容器内开发者调试面板</td></tr><tr><td>跳转协议</td><td style="text-align:center;">H5</td><td>容器内打开，获得容器能力，如：鉴权、定位</td></tr><tr><td>H5调试</td><td style="text-align:center;">H5</td><td>应用容器内运行，开发者调试面板容器外展示</td></tr><tr><td>纯HTML</td><td style="text-align:center;">H5</td><td>少量需要获得容器能力</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">浙政钉</p><p>浙政钉是专有钉的一个实现，这里提供的方法同样适用于浙政钉。</p></div><h2 id="官方工具" tabindex="-1">官方工具 <a class="header-anchor" href="#官方工具" aria-label="Permalink to &quot;官方工具&quot;">​</a></h2><p>如果专有钉应用类型为<a href="https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=DEV_GUIDE&amp;docKey=3355059" target="_blank" rel="noreferrer">专有钉小程序</a>，请下载并使用官方提供的<a href="https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=DEV_GUIDE&amp;docKey=3355060" target="_blank" rel="noreferrer">小程序开发工具</a>。</p><h2 id="vconsole" tabindex="-1">vConsole <a class="header-anchor" href="#vconsole" aria-label="Permalink to &quot;vConsole&quot;">​</a></h2><p><a href="https://github.com/Tencent/vConsole/blob/HEAD/README_CN.md" target="_blank" rel="noreferrer">vConsole</a> 是<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/usability/vConsole.html" target="_blank" rel="noreferrer">微信小程序官方调试工具</a>，一个轻量、可拓展、针对手机网页的前端开发者调试面板。 配合 <a href="https://github.com/KeJunMao/vite-plugin-conditional-compile" target="_blank" rel="noreferrer">vite-plugin-conditional-compiler</a> 条件编译使用，效果更佳。</p><h2 id="跳转协议" tabindex="-1">跳转协议 <a class="header-anchor" href="#跳转协议" aria-label="Permalink to &quot;跳转协议&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">专有钉浏览器支持滞后</p><p>专有钉容器对浏览器技术的现代特性支持严重滞后，请谨慎使用。 比如不支持<code>module</code>模块化，不支持<code>flex</code>布局的<code>gap</code>等。</p></div><table><thead><tr><th>浏览器</th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>系统浏览器</td><td>开发人员工具调试面板、现代化特性支持</td><td>无法获得容器能力</td></tr><tr><td>专有钉浏览器</td><td>可获得容器能力，如：获取鉴权码<code>dd.getAuthCode()</code></td><td>调试困难 😦</td></tr></tbody></table><p>专有钉PC端提供了系统浏览器（容器外）和专有钉浏览器（容器内）两种方式打开页面。 默认的，PC端链接打开方式为系统浏览器，而非像App那样使用专有钉浏览器打开。</p><p>涉及容器能力的页面，建议使用<a href="https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=DEV_GUIDE&amp;docKey=3355278" target="_blank" rel="noreferrer">统一跳转协议说明</a>和<a href="https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=serverapi&amp;docKey=2674860" target="_blank" rel="noreferrer">服务端API之工作通知</a>所示的跳转协议，在容器内打开，进行调试。 比如：专有钉内发消息给自己，内容为以下链接，点击即可在专有钉侧边栏打开，获得容器能力。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">taurus://taurusclient/page/link?pc_slide=true&amp;url=http%3A%2F%2Flocalhost%3A5173%2F</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">taurus://taurusclient/page/link?pc_slide=true&amp;url=http%3A%2F%2Flocalhost%3A5173%2F</span></span></code></pre></div><h2 id="h5调试" tabindex="-1">H5调试 <a class="header-anchor" href="#h5调试" aria-label="Permalink to &quot;H5调试&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">重要提醒</p><p>发布到生产环境时，请务必关闭vConsole等调试工具，并删除相关调试代码。</p></div><p>在容器内打开的页面，若未启用 <a href="https://github.com/Tencent/vConsole/blob/HEAD/README_CN.md" target="_blank" rel="noreferrer">vConsole</a>，可按<a href="https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=TOOL_SOURCES&amp;docKey=3863416" target="_blank" rel="noreferrer">H5应用调试工具</a>所示，利用<code>uuid</code>进行调试，在系统浏览器打开调试面板。</p><ol><li>修改入口文件<code>index.html</code>，添加调试代码到<code>&lt;head&gt;</code>：</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://g.alicdn.com/code/npm/@ali/dingtalk-h5-remote-debug-sdk/0.1.3/app.bundle.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    h5RemoteDebugSdk.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      uuid: </span><span style="color:#9ECBFF;">&quot;7b032350-10cb-436e-a6d8-482f9650253e&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 按应用不同，请自行生成</span></span>
<span class="line"><span style="color:#E1E4E8;">      observerElement: document.documentElement</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://g.alicdn.com/code/npm/@ali/dingtalk-h5-remote-debug-sdk/0.1.3/app.bundle.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    h5RemoteDebugSdk.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      uuid: </span><span style="color:#032F62;">&quot;7b032350-10cb-436e-a6d8-482f9650253e&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 按应用不同，请自行生成</span></span>
<span class="line"><span style="color:#24292E;">      observerElement: document.documentElement</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ol start="2"><li>重启应用后，在系统浏览器打开对应链接：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">https://render.alipay-eco.com/p/s/devtools-web/index.html?ch2=7b032350-10cb-436e-a6d8-482f9650253e&amp;chInfo=dingtalk-h5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">https://render.alipay-eco.com/p/s/devtools-web/index.html?ch2=7b032350-10cb-436e-a6d8-482f9650253e&amp;chInfo=dingtalk-h5</span></span></code></pre></div><h2 id="纯html" tabindex="-1">纯HTML <a class="header-anchor" href="#纯html" aria-label="Permalink to &quot;纯HTML&quot;">​</a></h2><p>由于专有钉内置浏览器对<code>module</code>支持滞后，导致<code>Vite</code>默认配置编译的页面打开异常（白屏）。 因此，少量涉及容器能力的页面建议使用纯HTML编码。如：</p><blockquote><p>获取鉴权码并拼接，以系统浏览器打开指定<code>url</code></p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;鉴权&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://g.alicdn.com/gdt/jsapi/1.9.43/index.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    dd.</span><span style="color:#B392F0;">ready</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dd.</span><span style="color:#B392F0;">getAuthCode</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">code</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res.code </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> res.auth_code</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">origin</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">pathname</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">href</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> location</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">base</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> origin </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pathname </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;?url=&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> href.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(base.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> link </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (link.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;?&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&amp;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;?&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;code=&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> code</span></span>
<span class="line"><span style="color:#E1E4E8;">        document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;message&#39;</span><span style="color:#E1E4E8;">).innerHTML </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url</span></span>
<span class="line"><span style="color:#E1E4E8;">        dd.</span><span style="color:#B392F0;">openLink</span><span style="color:#E1E4E8;">({ url }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> dd.</span><span style="color:#B392F0;">closePage</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">message</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;请咨询管理员&#39;</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> error</span></span>
<span class="line"><span style="color:#E1E4E8;">        dd.</span><span style="color:#B392F0;">confirm</span><span style="color:#E1E4E8;">({ title: </span><span style="color:#9ECBFF;">&#39;出错了&#39;</span><span style="color:#E1E4E8;">, message })</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;message&quot;</span><span style="color:#E1E4E8;">&gt;加载中，请稍候……&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;鉴权&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://g.alicdn.com/gdt/jsapi/1.9.43/index.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    dd.</span><span style="color:#6F42C1;">ready</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      dd.</span><span style="color:#6F42C1;">getAuthCode</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">code</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res.code </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> res.auth_code</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">origin</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">pathname</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">href</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> location</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">base</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> origin </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pathname </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;?url=&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">link</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> href.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(base.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> link </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> (link.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;?&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&amp;&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;?&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;code=&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> code</span></span>
<span class="line"><span style="color:#24292E;">        document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;message&#39;</span><span style="color:#24292E;">).innerHTML </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> url</span></span>
<span class="line"><span style="color:#24292E;">        dd.</span><span style="color:#6F42C1;">openLink</span><span style="color:#24292E;">({ url }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> dd.</span><span style="color:#6F42C1;">closePage</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">message</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;请咨询管理员&#39;</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> error</span></span>
<span class="line"><span style="color:#24292E;">        dd.</span><span style="color:#6F42C1;">confirm</span><span style="color:#24292E;">({ title: </span><span style="color:#032F62;">&#39;出错了&#39;</span><span style="color:#24292E;">, message })</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;message&quot;</span><span style="color:#24292E;">&gt;加载中，请稍候……&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">legacy模式</p><p>大量页面涉及容器能力，则需要配置 <a href="https://cn.vitejs.dev/plugins/#vitejsplugin-legacy" target="_blank" rel="noreferrer">@vitejs/plugin-legacy</a> 以兼容容器。 Vite plugins 配置：<code>legacy({ targets: [&#39;Chrome 64&#39;, &#39;iOS 10&#39;] })</code>。</p></div>`,27),t=[o];function e(c,r,E,y,i,d){return a(),n("div",null,t)}const F=s(p,[["render",e]]);export{g as __pageData,F as default};
