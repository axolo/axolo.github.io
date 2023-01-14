import{_ as s,o as a,c as n,b as p}from"./app.229a586d.js";const g=JSON.parse('{"title":"Git排除忽略子目录","description":".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？","frontmatter":{"title":"Git排除忽略子目录","description":".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？","time":"2019-09-09T00:00:00.000Z","categories":["git"],"tags":["Git"]},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"relativePath":"git-ignore-exclude.md","lastUpdated":1673684899000}'),l={name:"git-ignore-exclude.md"},e=p(`<h1 id="git排除忽略子目录" tabindex="-1">Git排除忽略子目录 <a class="header-anchor" href="#git排除忽略子目录" aria-hidden="true">#</a></h1><p>想忽略某个目录，但又不想忽略这个目录下的某个子目录？</p><p>排除此目录，改为忽略*，然后忽略子目录。</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># exclude ignore cn</span></span>
<span class="line"><span style="color:#A6ACCD;">!app/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app/*</span></span>
<span class="line"><span style="color:#A6ACCD;">!app/locale/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app/locale/*</span></span>
<span class="line"><span style="color:#A6ACCD;">!app/locale/cn/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><p>uni-app项目忽略unpackage下但排除h5和res</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">unpackage</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- cache</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- dist</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |-- build</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- .automator</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   |-- app-plus</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |   \`-- h5              # 排除</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |       \`-- static</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |           |-- js</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |           |-- pages</span></span>
<span class="line"><span style="color:#A6ACCD;">|   |           \`-- styles</span></span>
<span class="line"><span style="color:#A6ACCD;">|   \`-- dev</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- release</span></span>
<span class="line"><span style="color:#A6ACCD;">|   \`-- apk</span></span>
<span class="line"><span style="color:#A6ACCD;">\`-- res                     # 排除</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`-- icons</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># uni-app dist</span></span>
<span class="line"><span style="color:#A6ACCD;">!unpackage/</span></span>
<span class="line"><span style="color:#A6ACCD;">unpackage/*</span></span>
<span class="line"><span style="color:#A6ACCD;">!unpackage/res</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">!unpackage/dist</span></span>
<span class="line"><span style="color:#A6ACCD;">unpackage/dist/*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">!unpackage/dist/build</span></span>
<span class="line"><span style="color:#A6ACCD;">unpackage/dist/build/*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">!unpackage/dist/build/h5</span></span>
<span class="line"><span style="color:#A6ACCD;">!unpackage/dist/build/README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">!unpackage/dist/build/.gitignore</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>方跃明 2019-09-09</p></blockquote>`,9),c=[e];function t(o,i,r,C,A,d){return a(),n("div",null,c)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
