import{_ as s,o as a,c as n,e as l}from"./app.077a4a1b.js";const F=JSON.parse('{"title":"MySQL on Docker","description":"把 MySQL 部署到 Docker 上，不失为一个很好的选择。","frontmatter":{"title":"MySQL on Docker","time":"2021-06-18T00:00:00.000Z","description":"把 MySQL 部署到 Docker 上，不失为一个很好的选择。","category":"数据库","tags":["MySQL","Docker","Linux","Shell"]},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"Backup","slug":"backup","link":"#backup","children":[]},{"level":2,"title":"CLI","slug":"cli","link":"#cli","children":[]}],"relativePath":"mysql-on-docker.md","lastUpdated":1673773212000}'),p={name:"mysql-on-docker.md"},o=l(`<h1 id="mysql-on-docker" tabindex="-1">MySQL on Docker <a class="header-anchor" href="#mysql-on-docker" aria-hidden="true">#</a></h1><p>把 MySQL 部署到 Docker 上不失为一个很好的选择。</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#author: Yueming Fang</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/root/docker/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/conf:/etc/mysql/conf.d</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/root/docker/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/logs:/usr/local/mysql/logs</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/root/docker/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/data:/var/lib/mysql</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v </span><span style="color:#C3E88D;">/etc/localtime:/etc/localtime</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e </span><span style="color:#C3E88D;">MYSQL_ROOT_PASSWORD=password</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p </span><span style="color:#F78C6C;">3306</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">3306</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql:latest</span></span>
<span class="line"></span></code></pre></div><h2 id="backup" tabindex="-1">Backup <a class="header-anchor" href="#backup" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Author: Yueming Fang</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Update: 2021-06-18</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Usage:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 1. add user to mysql</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># create user &#39;backup&#39;@&#39;localhost&#39; identified by &#39;backup&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># grant all on *.* to &#39;backup&#39;@&#39;localhost&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2. my.cnf</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [mysqldump]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># user = backup</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># password = backup</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3. bash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ./mysql-backup db1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 4. crontab -e</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 0 1 * * * bash /root/bash/mysql-backup.sh db1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># define</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ex</span></span>
<span class="line"><span style="color:#A6ACCD;">date</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">date</span><span style="color:#C3E88D;"> +%Y%m%d</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/root/backup/mysql/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">date</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;font-style:italic;">$1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;">\\&gt; </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># create dir</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span><span style="color:#A6ACCD;"> mkdir -p </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># rm file of backup a week ago</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># find \${dir} -ctime +7 -type f | xargs rm -rf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># rm dir of backup a week ago</span></span>
<span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root/backup/mysql/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ctime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># backup everyday</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># db1 =&gt; /root/backup/mysql/20210314/db1-20210314.sql.gz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># db2 =&gt; /root/backup/mysql/20210314/db2-20210314.sql.gz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ...</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysqldump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--skip-opt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--databases</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\\</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">db</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">date</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.sql.gz</span></span>
<span class="line"></span></code></pre></div><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(c,r,y,i,C,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
