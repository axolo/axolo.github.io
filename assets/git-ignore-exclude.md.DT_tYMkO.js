import{_ as s,c as n,a4 as p,o as e}from"./chunks/framework.CwOFZF19.js";const g=JSON.parse('{"title":"Git 排除忽略子目录","description":".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？","frontmatter":{"title":"Git 排除忽略子目录","description":".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？","time":"2019-09-09T00:00:00.000Z","category":"开发","tags":["Git"]},"headers":[],"relativePath":"git-ignore-exclude.md","filePath":"git-ignore-exclude.md"}'),l={name:"git-ignore-exclude.md"};function i(t,a,c,o,d,r){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="git排除忽略子目录" tabindex="-1">Git排除忽略子目录 <a class="header-anchor" href="#git排除忽略子目录" aria-label="Permalink to &quot;Git排除忽略子目录&quot;">​</a></h1><blockquote><p>方跃明 2019-09-09</p></blockquote><p>想忽略某个目录，但又不想忽略这个目录下的某个子目录？</p><p>排除此目录，改为忽略*，然后忽略子目录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># exclude ignore cn</span></span>
<span class="line"><span>!app/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app/*</span></span>
<span class="line"><span>!app/locale/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app/locale/*</span></span>
<span class="line"><span>!app/locale/cn/</span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>uni-app项目忽略unpackage下但排除h5和res</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>unpackage</span></span>
<span class="line"><span>|-- cache</span></span>
<span class="line"><span>|-- dist</span></span>
<span class="line"><span>|   |-- build</span></span>
<span class="line"><span>|   |   |-- .automator</span></span>
<span class="line"><span>|   |   |-- app-plus</span></span>
<span class="line"><span>|   |   \`-- h5              # 排除</span></span>
<span class="line"><span>|   |       \`-- static</span></span>
<span class="line"><span>|   |           |-- js</span></span>
<span class="line"><span>|   |           |-- pages</span></span>
<span class="line"><span>|   |           \`-- styles</span></span>
<span class="line"><span>|   \`-- dev</span></span>
<span class="line"><span>|-- release</span></span>
<span class="line"><span>|   \`-- apk</span></span>
<span class="line"><span>\`-- res                     # 排除</span></span>
<span class="line"><span>    \`-- icons</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># uni-app dist</span></span>
<span class="line"><span>!unpackage/</span></span>
<span class="line"><span>unpackage/*</span></span>
<span class="line"><span>!unpackage/res</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!unpackage/dist</span></span>
<span class="line"><span>unpackage/dist/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!unpackage/dist/build</span></span>
<span class="line"><span>unpackage/dist/build/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!unpackage/dist/build/h5</span></span>
<span class="line"><span>!unpackage/dist/build/README.md</span></span>
<span class="line"><span>!unpackage/dist/build/.gitignore</span></span></code></pre></div>`,9)]))}const h=s(l,[["render",i]]);export{g as __pageData,h as default};
