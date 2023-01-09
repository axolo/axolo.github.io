import{_ as s,o as a,c as n,a as l}from"./app.3ad48a2f.js";const t="/assets/git.62c94bc4.png",e="/assets/git-subtree.2ed10f11.png",h=JSON.parse('{"title":"图解 Git 常用操作","description":"","frontmatter":{"title":"图解 Git 常用操作","time":"2018-04-28T00:00:00.000Z","layout":"post","categories":"Git","tags":["Git"]},"headers":[{"level":2,"title":"git","slug":"git","link":"#git","children":[]},{"level":2,"title":"git subtree","slug":"git-subtree","link":"#git-subtree","children":[]}],"relativePath":"git.md","lastUpdated":1673246413000}'),o={name:"git.md"},p=l('<h1 id="图解-git-常用操作" tabindex="-1">图解 Git 常用操作 <a class="header-anchor" href="#图解-git-常用操作" aria-hidden="true">#</a></h1><blockquote><p>图片来自网络，侵删</p></blockquote><h2 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h2><p>你真的需要记住那么多Git操作吗？ 也许阮一峰老师的<a href="http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html" target="_blank" rel="noreferrer">《常用Git命令清单》</a>就够了。 <img src="'+t+'" alt="Git常见操作图解"></p><h2 id="git-subtree" tabindex="-1">git subtree <a class="header-anchor" href="#git-subtree" aria-hidden="true">#</a></h2><p>项目包含子项目这么办？是时候让你出场了！show time！</p><ul><li><a href="https://segmentfault.com/a/1190000012002151" target="_blank" rel="noreferrer">git subtree教程</a></li><li><a href="https://segmentfault.com/a/1190000003969060" target="_blank" rel="noreferrer">用 Git Subtree 在多个 Git 项目间双向同步子项目</a></li></ul><p><img src="'+e+`" alt="git subtree"></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 克隆主项目仓库到本地</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://coding.net/axolo/lcoamaxy</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 建立子项目，并从远程克隆子项目到本地对应目录</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">subtree</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--prefix=www</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">coding-pages</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 主项目正常提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--all</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">use git subtree</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交子项目的变更到远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">subtree</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-P</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">www/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">coding-pages</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 从远程获取子项目的变更</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">subtree</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-P</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">www/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">coding-pages</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在子项目生成新分支hotfix-001</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">subtree</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-P</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">www/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hotfix-</span><span style="color:#F78C6C;">001</span></span>
<span class="line"></span></code></pre></div><blockquote><p>方跃明 2018-4-28</p></blockquote>`,10),r=[p];function c(i,C,y,D,A,g){return a(),n("div",null,r)}const u=s(o,[["render",c]]);export{h as __pageData,u as default};
