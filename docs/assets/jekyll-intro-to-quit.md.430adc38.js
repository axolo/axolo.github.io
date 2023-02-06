import{_ as s,o as a,c as e,g as l}from"./app.5487b0bb.js";const u=JSON.parse('{"title":"Jekyll 从入门到放弃","description":"各种不习惯，严重受虐，从入门到放弃只需一周。Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。","frontmatter":{"title":"Jekyll 从入门到放弃","description":"各种不习惯，严重受虐，从入门到放弃只需一周。Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。","time":"2022-12-15T00:00:00.000Z","category":"前端","tags":["WEB","博客系统"]},"headers":[{"level":2,"title":"准备环境","slug":"准备环境","link":"#准备环境","children":[{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":3,"title":"macOS","slug":"macos","link":"#macos","children":[]}]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":2,"title":"模板引擎","slug":"模板引擎","link":"#模板引擎","children":[]}],"relativePath":"jekyll-intro-to-quit.md","lastUpdated":1673773212000}'),n={name:"jekyll-intro-to-quit.md"},o=l(`<h1 id="jekyll-从入门到放弃" tabindex="-1">Jekyll 从入门到放弃 <a class="header-anchor" href="#jekyll-从入门到放弃" aria-hidden="true">#</a></h1><p>各种不习惯，严重受虐，从入门到放弃只需一周。 Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。</p><h2 id="准备环境" tabindex="-1">准备环境 <a class="header-anchor" href="#准备环境" aria-hidden="true">#</a></h2><p><a href="http://jekyllcn.com/" target="_blank" rel="noreferrer">Jekyll</a> 基于 Ruby，需要搭建 Ruby 环境。</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-hidden="true">#</a></h3><ul><li>下载：<a href="https://rubyinstaller.org/downloads/" target="_blank" rel="noreferrer">https://rubyinstaller.org/downloads/</a></li><li>安装：根据提示安装，若无 msys2 安装过程中请勾选</li></ul><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-hidden="true">#</a></h3><p>macOS 一般自带 Ruby ，若没有则需要安装</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ruby</span></span>
<span class="line"></span></code></pre></div><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">gem</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jekyll</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bundler</span></span>
<span class="line"><span style="color:#FFCB6B;">jekyll</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-awesome-site</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-awesome-site</span></span>
<span class="line"><span style="color:#FFCB6B;">bundle</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">bundle</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jekyll</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serve</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># =&gt; 打开浏览器 http://localhost:4000</span></span>
<span class="line"></span></code></pre></div><h2 id="模板引擎" tabindex="-1">模板引擎 <a class="header-anchor" href="#模板引擎" aria-hidden="true">#</a></h2><p>模板引擎基于 <a href="https://github.com/Shopify/liquid" target="_blank" rel="noreferrer">Liquid</a></p><blockquote><p>方跃明 2022-12-15</p></blockquote>`,14),t=[o];function r(p,c,i,d,h,y){return a(),e("div",null,t)}const _=s(n,[["render",r]]);export{u as __pageData,_ as default};