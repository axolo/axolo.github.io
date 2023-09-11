import{_ as n,o as l,c as o,k as s,a,Q as p}from"./chunks/framework.cd6e3458.js";const D=JSON.parse('{"title":"JavaScript async","description":"代码演示 JavaScript 同步异步操作。","frontmatter":{"title":"JavaScript async","description":"代码演示 JavaScript 同步异步操作。","time":"2020-02-18T00:00:00.000Z","category":"前端","tags":["JavaScript"]},"headers":[],"relativePath":"javascript-async.md","filePath":"javascript-async.md"}'),e={name:"javascript-async.md"},t=s("h1",{id:"javascript-async",tabindex:"-1"},[a("JavaScript async "),s("a",{class:"header-anchor",href:"#javascript-async","aria-label":'Permalink to "JavaScript async"'},"​")],-1),c=s("blockquote",null,[s("p",null,"方跃明 2020-02-18")],-1),r=s("p",null,"代码演示 JavaScript 同步异步操作。",-1),y=s("h2",{id:"场景",tabindex:"-1"},[a("场景 "),s("a",{class:"header-anchor",href:"#场景","aria-label":'Permalink to "场景"'},"​")],-1),E=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"方法"),s("th",null,"使用"),s("th",null,"效果")])]),s("tbody",null,[s("tr",null,[s("td",null,"callback"),s("td",null,"Promise.then(callback)"),s("td",null,"别等我，你们先吃")]),s("tr",null,[s("td",null,"await"),s("td",null,"await Proimse()"),s("td",null,"等我到了再吃")]),s("tr",null,[s("td",null,"all"),s("td",null,"Promise.all([])"),s("td",null,"先到先吃，吃完一起走")]),s("tr",null,[s("td",null,"reace"),s("td",null,"Promise.race([])"),s("td",null,"先到先吃，吃饱胜出")]),s("tr",null,[s("td",null,"yield"),s("td",{yield:""},"*generator()"),s("td",null,"排队领餐")])])],-1),i=p(`<h2 id="接力赛" tabindex="-1">接力赛 <a class="header-anchor" href="#接力赛" aria-label="Permalink to &quot;接力赛&quot;">​</a></h2><p>一个接一个，下一棒等上一棒。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">step1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doStep1</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// Promise，上一步必须完成</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">setp2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doStep2</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// Promise，下一步才能继续</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">step1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doStep1</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// Promise，上一步必须完成</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">setp2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doStep2</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// Promise，下一步才能继续</span></span></code></pre></div><h2 id="排名赛" tabindex="-1">排名赛 <a class="header-anchor" href="#排名赛" aria-label="Permalink to &quot;排名赛&quot;">​</a></h2><p>齐头并进，等待最后一名到达。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [ </span><span style="color:#79B8FF;">member1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">member2</span><span style="color:#E1E4E8;"> ] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">memeber1ComingSoon</span><span style="color:#E1E4E8;">(), </span><span style="color:#6A737D;">// Promise，成员1正在赶来</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">memeber2ComingSoon</span><span style="color:#E1E4E8;">(), </span><span style="color:#6A737D;">// Promise，成员2正在赶来</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;全队到齐了，出发！&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [ </span><span style="color:#005CC5;">member1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">member2</span><span style="color:#24292E;"> ] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">memeber1ComingSoon</span><span style="color:#24292E;">(), </span><span style="color:#6A737D;">// Promise，成员1正在赶来</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">memeber2ComingSoon</span><span style="color:#24292E;">(), </span><span style="color:#6A737D;">// Promise，成员2正在赶来</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;全队到齐了，出发！&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="淘汰赛" tabindex="-1">淘汰赛 <a class="header-anchor" href="#淘汰赛" aria-label="Permalink to &quot;淘汰赛&quot;">​</a></h2><p>齐头并进，只取第一名。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">member</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">race</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">memeber1ComingSoon</span><span style="color:#E1E4E8;">(), </span><span style="color:#6A737D;">// Promise，成员1正在赶来</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">memeber2ComingSoon</span><span style="color:#E1E4E8;">(), </span><span style="color:#6A737D;">// Promise，成员2正在赶来</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;公平竞争，先到者得！&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">member</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">race</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">memeber1ComingSoon</span><span style="color:#24292E;">(), </span><span style="color:#6A737D;">// Promise，成员1正在赶来</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">memeber2ComingSoon</span><span style="color:#24292E;">(), </span><span style="color:#6A737D;">// Promise，成员2正在赶来</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;公平竞争，先到者得！&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="生成器" tabindex="-1">生成器 <a class="header-anchor" href="#生成器" aria-label="Permalink to &quot;生成器&quot;">​</a></h2><p>“下一个”，“到！”</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 以下代码是一个生成器函数的声明。</span></span>
<span class="line"><span style="color:#F97583;">function*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">countSales</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> saleList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> saleList.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">yield</span><span style="color:#E1E4E8;"> saleList[i];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 一旦生成器函数已定义，可以通过构造一个迭代器来使用它。</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> Store </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">countSales</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// Generator { }</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(Store.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()); </span><span style="color:#6A737D;">// { value: 3, done: false }</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(Store.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()); </span><span style="color:#6A737D;">// { value: 7, done: false }</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(Store.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()); </span><span style="color:#6A737D;">// { value: 5, done: false }</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(Store.</span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">()); </span><span style="color:#6A737D;">// { value: undefined, done: true }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 以下代码是一个生成器函数的声明。</span></span>
<span class="line"><span style="color:#D73A49;">function*</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">countSales</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> saleList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> saleList.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">yield</span><span style="color:#24292E;"> saleList[i];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 一旦生成器函数已定义，可以通过构造一个迭代器来使用它。</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> Store </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">countSales</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// Generator { }</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(Store.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()); </span><span style="color:#6A737D;">// { value: 3, done: false }</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(Store.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()); </span><span style="color:#6A737D;">// { value: 7, done: false }</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(Store.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()); </span><span style="color:#6A737D;">// { value: 5, done: false }</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(Store.</span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">()); </span><span style="color:#6A737D;">// { value: undefined, done: true }</span></span></code></pre></div>`,12),d=[t,c,r,y,E,i];function F(u,m,h,C,g,v){return l(),o("div",null,d)}const b=n(e,[["render",F]]);export{D as __pageData,b as default};
