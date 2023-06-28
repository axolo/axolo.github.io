import{_ as s,o as a,c as n,R as p}from"./chunks/framework.da26b7ea.js";const y=JSON.parse('{"title":"Git 排除忽略子目录","description":".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？","frontmatter":{"title":"Git 排除忽略子目录","description":".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？","time":"2019-09-09T00:00:00.000Z","category":"开发","tags":["Git"]},"headers":[],"relativePath":"git-ignore-exclude.md","filePath":"git-ignore-exclude.md"}'),l={name:"git-ignore-exclude.md"},e=p(`<h1 id="git排除忽略子目录" tabindex="-1">Git排除忽略子目录 <a class="header-anchor" href="#git排除忽略子目录" aria-label="Permalink to &quot;Git排除忽略子目录&quot;">​</a></h1><blockquote><p>方跃明 2019-09-09</p></blockquote><p>想忽略某个目录，但又不想忽略这个目录下的某个子目录？</p><p>排除此目录，改为忽略*，然后忽略子目录。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># exclude ignore cn</span></span>
<span class="line"><span style="color:#A6ACCD;">!app/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app/*</span></span>
<span class="line"><span style="color:#A6ACCD;">!app/locale/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app/locale/*</span></span>
<span class="line"><span style="color:#A6ACCD;">!app/locale/cn/</span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>uni-app项目忽略unpackage下但排除h5和res</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">unpackage</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    \`-- icons</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># uni-app dist</span></span>
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
<span class="line"><span style="color:#A6ACCD;">!unpackage/dist/build/.gitignore</span></span></code></pre></div>`,9),c=[e];function o(t,i,r,C,A,d){return a(),n("div",null,c)}const g=s(l,[["render",o]]);export{y as __pageData,g as default};
