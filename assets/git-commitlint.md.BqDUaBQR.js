import{_ as s,c as a,o as i,a5 as t}from"./chunks/framework.b2lEul5q.js";const u=JSON.parse('{"title":"Git 提交规范","description":"不以规矩，不成方圆。","frontmatter":{"title":"Git 提交规范","description":"不以规矩，不成方圆。","time":"2020-01-02T00:00:00.000Z","category":"开发","tags":["Git"]},"headers":[],"relativePath":"git-commitlint.md","filePath":"git-commitlint.md"}'),e={name:"git-commitlint.md"},n=t(`<h1 id="git提交规范" tabindex="-1">Git提交规范 <a class="header-anchor" href="#git提交规范" aria-label="Permalink to &quot;Git提交规范&quot;">​</a></h1><blockquote><p>方跃明 2020-01-02</p></blockquote><p><code>Husky</code>接管Git钩子在commit-msg时利用<code>commitlint</code>检查提交规范。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.im/post/5d1f1e595188254b732b60a3" target="_blank" rel="noreferrer">规范构建</a></li><li><a href="https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html" target="_blank" rel="noreferrer">编写指南</a></li><li><a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noreferrer">commitlint</a></li><li><a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">Husky</a></li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="安装开发依赖" tabindex="-1">安装开发依赖 <a class="header-anchor" href="#安装开发依赖" aria-label="Permalink to &quot;安装开发依赖&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/cli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/config-conventional</span></span></code></pre></div><h3 id="配置package-json" tabindex="-1">配置<code>package.json</code> <a class="header-anchor" href="#配置package-json" aria-label="Permalink to &quot;配置\`package.json\`&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;husky&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;hooks&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;commit-msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="commit规范" tabindex="-1">commit规范 <a class="header-anchor" href="#commit规范" aria-label="Permalink to &quot;commit规范&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scope?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): subject  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#scope is optional</span></span></code></pre></div><h2 id="生成changelog" tabindex="-1">生成CHANGELOG <a class="header-anchor" href="#生成changelog" aria-label="Permalink to &quot;生成CHANGELOG&quot;">​</a></h2><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conventional-changelog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conventional-changelog-cli</span></span></code></pre></div><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;changelog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;conventional-changelog -p angular -i CHANGELOG.md -s -r 0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="生成" tabindex="-1">生成 <a class="header-anchor" href="#生成" aria-label="Permalink to &quot;生成&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changelog</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 在项目根目录生成CHANGELOG.md</span></span></code></pre></div><h3 id="git钩子执行eslint" tabindex="-1">Git钩子执行ESLint <a class="header-anchor" href="#git钩子执行eslint" aria-label="Permalink to &quot;Git钩子执行ESLint&quot;">​</a></h3><p>详见<a href="https://juejin.im/post/5d1f1e595188254b732b60a3" target="_blank" rel="noreferrer">规范构建教程</a></p>`,21),l=[n];function h(p,o,k,r,c,d){return i(),a("div",null,l)}const m=s(e,[["render",h]]);export{u as __pageData,m as default};
