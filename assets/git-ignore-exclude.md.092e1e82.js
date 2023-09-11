import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.cd6e3458.js";const h=JSON.parse('{"title":"Git 排除忽略子目录","description":".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？","frontmatter":{"title":"Git 排除忽略子目录","description":".gitignore 想忽略某个目录，但又不想忽略这个目录下的某个子目录？","time":"2019-09-09T00:00:00.000Z","category":"开发","tags":["Git"]},"headers":[],"relativePath":"git-ignore-exclude.md","filePath":"git-ignore-exclude.md"}'),p={name:"git-ignore-exclude.md"},l=e(`<h1 id="git排除忽略子目录" tabindex="-1">Git排除忽略子目录 <a class="header-anchor" href="#git排除忽略子目录" aria-label="Permalink to &quot;Git排除忽略子目录&quot;">​</a></h1><blockquote><p>方跃明 2019-09-09</p></blockquote><p>想忽略某个目录，但又不想忽略这个目录下的某个子目录？</p><p>排除此目录，改为忽略*，然后忽略子目录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># exclude ignore cn</span></span>
<span class="line"><span style="color:#e1e4e8;">!app/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">app/*</span></span>
<span class="line"><span style="color:#e1e4e8;">!app/locale/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">app/locale/*</span></span>
<span class="line"><span style="color:#e1e4e8;">!app/locale/cn/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># exclude ignore cn</span></span>
<span class="line"><span style="color:#24292e;">!app/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">app/*</span></span>
<span class="line"><span style="color:#24292e;">!app/locale/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">app/locale/*</span></span>
<span class="line"><span style="color:#24292e;">!app/locale/cn/</span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>uni-app项目忽略unpackage下但排除h5和res</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">unpackage</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- cache</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- dist</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- build</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |   |-- .automator</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |   |-- app-plus</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |   \`-- h5              # 排除</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |       \`-- static</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |           |-- js</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |           |-- pages</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |           \`-- styles</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- dev</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- release</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- apk</span></span>
<span class="line"><span style="color:#e1e4e8;">\`-- res                     # 排除</span></span>
<span class="line"><span style="color:#e1e4e8;">    \`-- icons</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">unpackage</span></span>
<span class="line"><span style="color:#24292e;">|-- cache</span></span>
<span class="line"><span style="color:#24292e;">|-- dist</span></span>
<span class="line"><span style="color:#24292e;">|   |-- build</span></span>
<span class="line"><span style="color:#24292e;">|   |   |-- .automator</span></span>
<span class="line"><span style="color:#24292e;">|   |   |-- app-plus</span></span>
<span class="line"><span style="color:#24292e;">|   |   \`-- h5              # 排除</span></span>
<span class="line"><span style="color:#24292e;">|   |       \`-- static</span></span>
<span class="line"><span style="color:#24292e;">|   |           |-- js</span></span>
<span class="line"><span style="color:#24292e;">|   |           |-- pages</span></span>
<span class="line"><span style="color:#24292e;">|   |           \`-- styles</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- dev</span></span>
<span class="line"><span style="color:#24292e;">|-- release</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- apk</span></span>
<span class="line"><span style="color:#24292e;">\`-- res                     # 排除</span></span>
<span class="line"><span style="color:#24292e;">    \`-- icons</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># uni-app dist</span></span>
<span class="line"><span style="color:#e1e4e8;">!unpackage/</span></span>
<span class="line"><span style="color:#e1e4e8;">unpackage/*</span></span>
<span class="line"><span style="color:#e1e4e8;">!unpackage/res</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">!unpackage/dist</span></span>
<span class="line"><span style="color:#e1e4e8;">unpackage/dist/*</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">!unpackage/dist/build</span></span>
<span class="line"><span style="color:#e1e4e8;">unpackage/dist/build/*</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">!unpackage/dist/build/h5</span></span>
<span class="line"><span style="color:#e1e4e8;">!unpackage/dist/build/README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">!unpackage/dist/build/.gitignore</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># uni-app dist</span></span>
<span class="line"><span style="color:#24292e;">!unpackage/</span></span>
<span class="line"><span style="color:#24292e;">unpackage/*</span></span>
<span class="line"><span style="color:#24292e;">!unpackage/res</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">!unpackage/dist</span></span>
<span class="line"><span style="color:#24292e;">unpackage/dist/*</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">!unpackage/dist/build</span></span>
<span class="line"><span style="color:#24292e;">unpackage/dist/build/*</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">!unpackage/dist/build/h5</span></span>
<span class="line"><span style="color:#24292e;">!unpackage/dist/build/README.md</span></span>
<span class="line"><span style="color:#24292e;">!unpackage/dist/build/.gitignore</span></span></code></pre></div>`,9),c=[l];function o(t,i,r,d,y,u){return a(),n("div",null,c)}const k=s(p,[["render",o]]);export{h as __pageData,k as default};
