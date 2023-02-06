import{_ as s,o as a,c as n,g as l}from"./app.275c7683.js";const D=JSON.parse('{"title":"Git 提交规范","description":"不以规矩，不成方圆。","frontmatter":{"title":"Git 提交规范","description":"不以规矩，不成方圆。","time":"2020-01-02T00:00:00.000Z","category":"开发","tags":["Git"]},"headers":[{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[{"level":3,"title":"安装开发依赖","slug":"安装开发依赖","link":"#安装开发依赖","children":[]},{"level":3,"title":"配置package.json","slug":"配置package-json","link":"#配置package-json","children":[]}]},{"level":2,"title":"commit规范","slug":"commit规范","link":"#commit规范","children":[]},{"level":2,"title":"生成CHANGELOG","slug":"生成changelog","link":"#生成changelog","children":[{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":3,"title":"package.json","slug":"package-json","link":"#package-json","children":[]},{"level":3,"title":"生成","slug":"生成","link":"#生成","children":[]},{"level":3,"title":"Git钩子执行ESLint","slug":"git钩子执行eslint","link":"#git钩子执行eslint","children":[]}]}],"relativePath":"git-commitlint.md","lastUpdated":1675675175000}'),e={name:"git-commitlint.md"},o=l(`<h1 id="git提交规范" tabindex="-1">Git提交规范 <a class="header-anchor" href="#git提交规范" aria-hidden="true">#</a></h1><p><code>Husky</code>接管Git钩子在commit-msg时利用<code>commitlint</code>检查提交规范。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.im/post/5d1f1e595188254b732b60a3" target="_blank" rel="noreferrer">规范构建</a></li><li><a href="https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html" target="_blank" rel="noreferrer">编写指南</a></li><li><a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noreferrer">commitlint</a></li><li><a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">Husky</a></li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-hidden="true">#</a></h2><h3 id="安装开发依赖" tabindex="-1">安装开发依赖 <a class="header-anchor" href="#安装开发依赖" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">husky</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@commitlint/cli</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@commitlint/config-conventional</span></span>
<span class="line"></span></code></pre></div><h3 id="配置package-json" tabindex="-1">配置<code>package.json</code> <a class="header-anchor" href="#配置package-json" aria-hidden="true">#</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">husky</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">hooks</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">commit-msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">commitlint -E HUSKY_GIT_PARAMS</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="commit规范" tabindex="-1">commit规范 <a class="header-anchor" href="#commit规范" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">type</span><span style="color:#FFCB6B;">(scope?</span><span style="color:#A6ACCD;">): subject  </span><span style="color:#676E95;font-style:italic;">#scope is optional</span></span>
<span class="line"></span></code></pre></div><h2 id="生成changelog" tabindex="-1">生成CHANGELOG <a class="header-anchor" href="#生成changelog" aria-hidden="true">#</a></h2><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">conventional-changelog</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">conventional-changelog-cli</span></span>
<span class="line"></span></code></pre></div><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">changelog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">conventional-changelog -p angular -i CHANGELOG.md -s -r 0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="生成" tabindex="-1">生成 <a class="header-anchor" href="#生成" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">changelog</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在项目根目录生成CHANGELOG.md</span></span>
<span class="line"></span></code></pre></div><h3 id="git钩子执行eslint" tabindex="-1">Git钩子执行ESLint <a class="header-anchor" href="#git钩子执行eslint" aria-hidden="true">#</a></h3><p>详见<a href="https://juejin.im/post/5d1f1e595188254b732b60a3" target="_blank" rel="noreferrer">规范构建教程</a></p><blockquote><p>方跃明 2020-01-02</p></blockquote>`,21),t=[o];function p(c,i,r,h,d,y){return a(),n("div",null,t)}const g=s(e,[["render",p]]);export{D as __pageData,g as default};
