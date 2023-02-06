import{_ as s,o as a,c as n,g as l}from"./app.275c7683.js";const D=JSON.parse('{"title":"iOS 开发环境搭建","description":"快速搭建 iOS 开发环境","frontmatter":{"title":"iOS 开发环境搭建","description":"快速搭建 iOS 开发环境","time":"2020-01-01T00:00:00.000Z","category":"前端","tags":["iOS"]},"headers":[{"level":2,"title":"全局","slug":"全局","link":"#全局","children":[]},{"level":2,"title":"项目","slug":"项目","link":"#项目","children":[]}],"relativePath":"ios-develop.md","lastUpdated":1675675175000}'),o={name:"ios-develop.md"},e=l(`<h1 id="ios开发环境搭建" tabindex="-1">iOS开发环境搭建 <a class="header-anchor" href="#ios开发环境搭建" aria-hidden="true">#</a></h1><p>快速搭建 iOS 开发环境</p><h2 id="全局" tabindex="-1">全局 <a class="header-anchor" href="#全局" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">xcode-select</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--install</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装xcode开发依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">gcc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 出现版本号表示成功</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gem</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cocoapods</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装依赖管理工具</span></span>
<span class="line"><span style="color:#FFCB6B;">pod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 出现版本号表示成功</span></span>
<span class="line"><span style="color:#FFCB6B;">pod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 设置pod</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装brew，此处使用国内源，参见：https://brew.sh</span></span>
<span class="line"><span style="color:#FFCB6B;">/bin/zsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 出现版本号表示成功</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装git</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 出现版本号表示成功</span></span>
<span class="line"></span></code></pre></div><h2 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/Projects/your-project</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 建议将Podfile的源更换为国内源后执行安装</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># source &#39;https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">pod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span></code></pre></div><blockquote><p>方跃明 2020-01-01</p></blockquote>`,7),p=[e];function t(c,r,i,y,C,d){return a(),n("div",null,p)}const h=s(o,[["render",t]]);export{D as __pageData,h as default};
