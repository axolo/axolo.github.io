import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.d5af2850.js";const h=JSON.parse('{"title":"iOS 开发环境搭建","description":"快速搭建 iOS 开发环境","frontmatter":{"title":"iOS 开发环境搭建","description":"快速搭建 iOS 开发环境","time":"2020-01-01T00:00:00.000Z","category":"前端","tags":["iOS"]},"headers":[],"relativePath":"ios-develop.md","filePath":"ios-develop.md"}'),o={name:"ios-develop.md"},p=l(`<h1 id="ios开发环境搭建" tabindex="-1">iOS开发环境搭建 <a class="header-anchor" href="#ios开发环境搭建" aria-label="Permalink to &quot;iOS开发环境搭建&quot;">​</a></h1><blockquote><p>方跃明 2020-01-01</p></blockquote><p>快速搭建 iOS 开发环境</p><h2 id="全局" tabindex="-1">全局 <a class="header-anchor" href="#全局" aria-label="Permalink to &quot;全局&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">xcode-select</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--install</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 安装xcode开发依赖</span></span>
<span class="line"><span style="color:#B392F0;">gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 出现版本号表示成功</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gem</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cocoapods</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 安装依赖管理工具</span></span>
<span class="line"><span style="color:#B392F0;">pod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 出现版本号表示成功</span></span>
<span class="line"><span style="color:#B392F0;">pod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 设置pod</span></span>
<span class="line"><span style="color:#6A737D;"># 安装brew，此处使用国内源，参见：https://brew.sh</span></span>
<span class="line"><span style="color:#B392F0;">/bin/zsh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-fsSL</span><span style="color:#9ECBFF;"> https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 出现版本号表示成功</span></span>
<span class="line"><span style="color:#B392F0;">brew</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 安装git</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 出现版本号表示成功</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">xcode-select</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--install</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 安装xcode开发依赖</span></span>
<span class="line"><span style="color:#6F42C1;">gcc</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 出现版本号表示成功</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cocoapods</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 安装依赖管理工具</span></span>
<span class="line"><span style="color:#6F42C1;">pod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 出现版本号表示成功</span></span>
<span class="line"><span style="color:#6F42C1;">pod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">setup</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 设置pod</span></span>
<span class="line"><span style="color:#6A737D;"># 安装brew，此处使用国内源，参见：https://brew.sh</span></span>
<span class="line"><span style="color:#6F42C1;">/bin/zsh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-fsSL</span><span style="color:#032F62;"> https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 出现版本号表示成功</span></span>
<span class="line"><span style="color:#6F42C1;">brew</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 安装git</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 出现版本号表示成功</span></span></code></pre></div><h2 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-label="Permalink to &quot;项目&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/Projects/your-project</span></span>
<span class="line"><span style="color:#6A737D;"># 建议将Podfile的源更换为国内源后执行安装</span></span>
<span class="line"><span style="color:#6A737D;"># source &#39;https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git&#39;</span></span>
<span class="line"><span style="color:#B392F0;">pod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/Projects/your-project</span></span>
<span class="line"><span style="color:#6A737D;"># 建议将Podfile的源更换为国内源后执行安装</span></span>
<span class="line"><span style="color:#6A737D;"># source &#39;https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">pod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div>`,7),e=[p];function t(c,r,y,i,E,d){return a(),n("div",null,e)}const C=s(o,[["render",t]]);export{h as __pageData,C as default};