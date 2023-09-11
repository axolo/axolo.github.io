import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.cd6e3458.js";const m=JSON.parse('{"title":"MySQL on Docker","description":"把 MySQL 部署到 Docker 上，不失为一个很好的选择。","frontmatter":{"title":"MySQL on Docker","time":"2021-06-18T00:00:00.000Z","description":"把 MySQL 部署到 Docker 上，不失为一个很好的选择。","category":"数据库","tags":["MySQL","Docker","Linux","Shell"]},"headers":[],"relativePath":"mysql-on-docker.md","filePath":"mysql-on-docker.md"}'),p={name:"mysql-on-docker.md"},o=l(`<h1 id="mysql-on-docker" tabindex="-1">MySQL on Docker <a class="header-anchor" href="#mysql-on-docker" aria-label="Permalink to &quot;MySQL on Docker&quot;">​</a></h1><blockquote><p>方跃明 2021-06-18</p></blockquote><p>把 MySQL 部署到 Docker 上不失为一个很好的选择。</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;">#author: Yueming Fang</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> \${name} </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">-v </span><span style="color:#9ECBFF;">/root/docker/</span><span style="color:#E1E4E8;">\${name}</span><span style="color:#9ECBFF;">/conf:/etc/mysql/conf.d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">-v </span><span style="color:#9ECBFF;">/root/docker/</span><span style="color:#E1E4E8;">\${name}</span><span style="color:#9ECBFF;">/logs:/usr/local/mysql/logs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">-v </span><span style="color:#9ECBFF;">/root/docker/</span><span style="color:#E1E4E8;">\${name}</span><span style="color:#9ECBFF;">/data:/var/lib/mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">-v </span><span style="color:#9ECBFF;">/etc/localtime:/etc/localtime</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">-e </span><span style="color:#9ECBFF;">MYSQL_ROOT_PASSWORD=password</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">-p </span><span style="color:#79B8FF;">3306</span><span style="color:#9ECBFF;">:3306</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">mysql:latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;">#author: Yueming Fang</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> \${name} </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-v </span><span style="color:#032F62;">/root/docker/</span><span style="color:#24292E;">\${name}</span><span style="color:#032F62;">/conf:/etc/mysql/conf.d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-v </span><span style="color:#032F62;">/root/docker/</span><span style="color:#24292E;">\${name}</span><span style="color:#032F62;">/logs:/usr/local/mysql/logs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-v </span><span style="color:#032F62;">/root/docker/</span><span style="color:#24292E;">\${name}</span><span style="color:#032F62;">/data:/var/lib/mysql</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-v </span><span style="color:#032F62;">/etc/localtime:/etc/localtime</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-e </span><span style="color:#032F62;">MYSQL_ROOT_PASSWORD=password</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-p </span><span style="color:#005CC5;">3306</span><span style="color:#032F62;">:3306</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">mysql:latest</span></span></code></pre></div><h2 id="backup" tabindex="-1">Backup <a class="header-anchor" href="#backup" aria-label="Permalink to &quot;Backup&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;"># Author: Yueming Fang</span></span>
<span class="line"><span style="color:#6A737D;"># Update: 2021-06-18</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Usage:</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 1. add user to mysql</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># create user &#39;backup&#39;@&#39;localhost&#39; identified by &#39;backup&#39;;</span></span>
<span class="line"><span style="color:#6A737D;"># grant all on *.* to &#39;backup&#39;@&#39;localhost&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 2. my.cnf</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># [mysqldump]</span></span>
<span class="line"><span style="color:#6A737D;"># user = backup</span></span>
<span class="line"><span style="color:#6A737D;"># password = backup</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 3. bash</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># ./mysql-backup db1</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 4. crontab -e</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 0 1 * * * bash /root/bash/mysql-backup.sh db1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># define</span></span>
<span class="line"><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ex</span></span>
<span class="line"><span style="color:#E1E4E8;">date</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">date</span><span style="color:#9ECBFF;"> +%Y%m%d\`</span></span>
<span class="line"><span style="color:#E1E4E8;">dir</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">/root/backup/mysql/</span><span style="color:#E1E4E8;">\${date}</span></span>
<span class="line"><span style="color:#E1E4E8;">db</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">$1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> \${db} </span><span style="color:#9ECBFF;">=</span><span style="color:#79B8FF;">\\&gt;</span><span style="color:#E1E4E8;"> \${dir} </span><span style="color:#9ECBFF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># create dir</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-d</span><span style="color:#E1E4E8;"> \${dir} ]; </span><span style="color:#F97583;">then</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> \${dir}; </span><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># rm file of backup a week ago</span></span>
<span class="line"><span style="color:#6A737D;"># find \${dir} -ctime +7 -type f | xargs rm -rf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># rm dir of backup a week ago</span></span>
<span class="line"><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root/backup/mysql/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ctime</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+7</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">d</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xargs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># backup everyday</span></span>
<span class="line"><span style="color:#6A737D;"># db1 =&gt; /root/backup/mysql/20210314/db1-20210314.sql.gz</span></span>
<span class="line"><span style="color:#6A737D;"># db2 =&gt; /root/backup/mysql/20210314/db2-20210314.sql.gz</span></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysqldump</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--skip-opt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--databases</span><span style="color:#E1E4E8;"> \${db} </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#B392F0;">gzip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> \${dir}</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">\${db}</span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;">\${date}</span><span style="color:#9ECBFF;">.sql.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;"># Author: Yueming Fang</span></span>
<span class="line"><span style="color:#6A737D;"># Update: 2021-06-18</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># Usage:</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 1. add user to mysql</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># create user &#39;backup&#39;@&#39;localhost&#39; identified by &#39;backup&#39;;</span></span>
<span class="line"><span style="color:#6A737D;"># grant all on *.* to &#39;backup&#39;@&#39;localhost&#39;;</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 2. my.cnf</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># [mysqldump]</span></span>
<span class="line"><span style="color:#6A737D;"># user = backup</span></span>
<span class="line"><span style="color:#6A737D;"># password = backup</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 3. bash</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># ./mysql-backup db1</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 4. crontab -e</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 0 1 * * * bash /root/bash/mysql-backup.sh db1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># define</span></span>
<span class="line"><span style="color:#005CC5;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ex</span></span>
<span class="line"><span style="color:#24292E;">date</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">date</span><span style="color:#032F62;"> +%Y%m%d\`</span></span>
<span class="line"><span style="color:#24292E;">dir</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/root/backup/mysql/</span><span style="color:#24292E;">\${date}</span></span>
<span class="line"><span style="color:#24292E;">db</span><span style="color:#D73A49;">=</span><span style="color:#E36209;">$1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> \${db} </span><span style="color:#032F62;">=</span><span style="color:#005CC5;">\\&gt;</span><span style="color:#24292E;"> \${dir} </span><span style="color:#032F62;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># create dir</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-d</span><span style="color:#24292E;"> \${dir} ]; </span><span style="color:#D73A49;">then</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> \${dir}; </span><span style="color:#D73A49;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># rm file of backup a week ago</span></span>
<span class="line"><span style="color:#6A737D;"># find \${dir} -ctime +7 -type f | xargs rm -rf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># rm dir of backup a week ago</span></span>
<span class="line"><span style="color:#6F42C1;">find</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root/backup/mysql/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ctime</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+7</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">d</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xargs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># backup everyday</span></span>
<span class="line"><span style="color:#6A737D;"># db1 =&gt; /root/backup/mysql/20210314/db1-20210314.sql.gz</span></span>
<span class="line"><span style="color:#6A737D;"># db2 =&gt; /root/backup/mysql/20210314/db2-20210314.sql.gz</span></span>
<span class="line"><span style="color:#6A737D;"># ...</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysqldump</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--skip-opt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--databases</span><span style="color:#24292E;"> \${db} </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#6F42C1;">gzip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> \${dir}</span><span style="color:#032F62;">/</span><span style="color:#24292E;">\${db}</span><span style="color:#032F62;">-</span><span style="color:#24292E;">\${date}</span><span style="color:#032F62;">.sql.gz</span></span></code></pre></div><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bash</span></span></code></pre></div>`,9),e=[o];function c(t,r,y,E,i,d){return a(),n("div",null,e)}const b=s(p,[["render",c]]);export{m as __pageData,b as default};
