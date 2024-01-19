import{_ as a,c as s,o as i,V as e}from"./chunks/framework.SbEgU9ye.js";const y=JSON.parse('{"title":"Jekyll 从入门到放弃","description":"各种不习惯，严重受虐，从入门到放弃只需一周。Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。","frontmatter":{"title":"Jekyll 从入门到放弃","description":"各种不习惯，严重受虐，从入门到放弃只需一周。Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。","time":"2022-12-15T00:00:00.000Z","category":"前端","tags":["WEB","博客系统"]},"headers":[],"relativePath":"jekyll-intro-to-quit.md","filePath":"jekyll-intro-to-quit.md"}'),l={name:"jekyll-intro-to-quit.md"},t=e(`<h1 id="jekyll-从入门到放弃" tabindex="-1">Jekyll 从入门到放弃 <a class="header-anchor" href="#jekyll-从入门到放弃" aria-label="Permalink to &quot;Jekyll 从入门到放弃&quot;">​</a></h1><blockquote><p>方跃明 2022-12-15</p></blockquote><p>各种不习惯，严重受虐，从入门到放弃只需一周。 Hugo 和 Hexo 别笑了，你俩半斤八两，五十步笑百步。</p><h2 id="准备环境" tabindex="-1">准备环境 <a class="header-anchor" href="#准备环境" aria-label="Permalink to &quot;准备环境&quot;">​</a></h2><p><a href="http://jekyllcn.com/" target="_blank" rel="noreferrer">Jekyll</a> 基于 Ruby，需要搭建 Ruby 环境。</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><ul><li>下载：<a href="https://rubyinstaller.org/downloads/" target="_blank" rel="noreferrer">https://rubyinstaller.org/downloads/</a></li><li>安装：根据提示安装，若无 msys2 安装过程中请勾选</li></ul><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><p>macOS 一般自带 Ruby ，若没有则需要安装</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruby</span></span></code></pre></div><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jekyll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bundler</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jekyll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-awesome-site</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-awesome-site</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bundle</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bundle</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jekyll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =&gt; 打开浏览器 http://localhost:4000</span></span></code></pre></div><h2 id="模板引擎" tabindex="-1">模板引擎 <a class="header-anchor" href="#模板引擎" aria-label="Permalink to &quot;模板引擎&quot;">​</a></h2><p>模板引擎基于 <a href="https://github.com/Shopify/liquid" target="_blank" rel="noreferrer">Liquid</a></p>`,14),n=[t];function h(r,o,p,k,d,c){return i(),s("div",null,n)}const F=a(l,[["render",h]]);export{y as __pageData,F as default};
