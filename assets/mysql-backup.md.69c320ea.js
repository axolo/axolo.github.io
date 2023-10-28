import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.d5af2850.js";const u=JSON.parse('{"title":"MySQL 定时备份","description":"定时自动备份 MySQL 是刚需。","frontmatter":{"title":"MySQL 定时备份","description":"定时自动备份 MySQL 是刚需。","time":"2019-05-12T00:00:00.000Z","category":"数据库","tags":["MySQL","DevOps","Shell"]},"headers":[],"relativePath":"mysql-backup.md","filePath":"mysql-backup.md"}'),p={name:"mysql-backup.md"},o=l(`<h1 id="mysql定时备份" tabindex="-1">MySQL定时备份 <a class="header-anchor" href="#mysql定时备份" aria-label="Permalink to &quot;MySQL定时备份&quot;">​</a></h1><blockquote><p>方跃明 2019-05-12</p></blockquote><h2 id="相关软件" tabindex="-1">相关软件 <a class="header-anchor" href="#相关软件" aria-label="Permalink to &quot;相关软件&quot;">​</a></h2><ul><li><a href="https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html" target="_blank" rel="noreferrer">mysqldump</a></li><li><a href="http://www.gzip.org" target="_blank" rel="noreferrer">gzip</a></li></ul><p>Windows下需要用到gzip压缩软件，当然也可用zip、7z、rar等软件代替。 gzip安装完成后，方便起见，请将gzip加入Windows的PATH环境变量。</p><h2 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h2><h3 id="编写mysql-backup-bat" tabindex="-1">编写mysql-backup.bat <a class="header-anchor" href="#编写mysql-backup-bat" aria-label="Permalink to &quot;编写mysql-backup.bat&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">rem 删除一周前的备份</span></span>
<span class="line"><span style="color:#E1E4E8;">forfiles </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">p </span><span style="color:#9ECBFF;">&quot;D:\\Backup\\databasename&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">d </span><span style="color:#79B8FF;">-7</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">c </span><span style="color:#9ECBFF;">&quot;cmd /c del /f @path&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">rem 按日期命名备份并压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">mysqldump </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">hhostname </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">uusername </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">ppassword </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">databases databasename </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> gzip </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> D:\\Backup\\databasename\\databasename</span><span style="color:#F97583;">-%</span><span style="color:#E1E4E8;">date:~</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">,</span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">.sql.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">rem 删除一周前的备份</span></span>
<span class="line"><span style="color:#24292E;">forfiles </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">p </span><span style="color:#032F62;">&quot;D:\\Backup\\databasename&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">d </span><span style="color:#005CC5;">-7</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">c </span><span style="color:#032F62;">&quot;cmd /c del /f @path&quot;</span></span>
<span class="line"><span style="color:#24292E;">rem 按日期命名备份并压缩</span></span>
<span class="line"><span style="color:#24292E;">mysqldump </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">hhostname </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">uusername </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">ppassword </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">databases databasename </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> gzip </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> D:\\Backup\\databasename\\databasename</span><span style="color:#D73A49;">-%</span><span style="color:#24292E;">date:~</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">,</span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">.sql.gz</span></span></code></pre></div><h3 id="将mysql-backup-bat加入计划任务" tabindex="-1">将mysql-backup.bat加入计划任务 <a class="header-anchor" href="#将mysql-backup-bat加入计划任务" aria-label="Permalink to &quot;将mysql-backup.bat加入计划任务&quot;">​</a></h3><h2 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h2><h3 id="修改mysql配置" tabindex="-1">修改MySQL配置 <a class="header-anchor" href="#修改mysql配置" aria-label="Permalink to &quot;修改MySQL配置&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">vi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/my.cnf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">vi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/my.cnf</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 加入 mysqldump 相关配置</span></span>
<span class="line"><span style="color:#B392F0;">[mysqldump]</span></span>
<span class="line"><span style="color:#F97583;">user</span><span style="color:#E1E4E8;">=user</span></span>
<span class="line"><span style="color:#F97583;">password</span><span style="color:#E1E4E8;">=password</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 加入 mysqldump 相关配置</span></span>
<span class="line"><span style="color:#6F42C1;">[mysqldump]</span></span>
<span class="line"><span style="color:#D73A49;">user</span><span style="color:#24292E;">=user</span></span>
<span class="line"><span style="color:#D73A49;">password</span><span style="color:#24292E;">=password</span></span></code></pre></div><h3 id="编写备份脚本" tabindex="-1">编写备份脚本 <a class="header-anchor" href="#编写备份脚本" aria-label="Permalink to &quot;编写备份脚本&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;"># 定义目录</span></span>
<span class="line"><span style="color:#E1E4E8;">dir</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">/path/to/backup/mysql/yourdatabase</span></span>
<span class="line"><span style="color:#6A737D;"># 删除一周前的备份</span></span>
<span class="line"><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;"> \${dir} </span><span style="color:#79B8FF;">-ctime</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+7</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">f</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xargs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span></span>
<span class="line"><span style="color:#6A737D;"># 每日备份</span></span>
<span class="line"><span style="color:#E1E4E8;">rq</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">date</span><span style="color:#9ECBFF;"> +%Y%m%d\`</span></span>
<span class="line"><span style="color:#B392F0;">mysqldump</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--databases</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yourdatabase</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gzip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> \${dir}</span><span style="color:#9ECBFF;">/yourdatabase-</span><span style="color:#E1E4E8;">\${rq}</span><span style="color:#9ECBFF;">.sql.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;"># 定义目录</span></span>
<span class="line"><span style="color:#24292E;">dir</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/path/to/backup/mysql/yourdatabase</span></span>
<span class="line"><span style="color:#6A737D;"># 删除一周前的备份</span></span>
<span class="line"><span style="color:#6F42C1;">find</span><span style="color:#24292E;"> \${dir} </span><span style="color:#005CC5;">-ctime</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+7</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">f</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xargs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span></span>
<span class="line"><span style="color:#6A737D;"># 每日备份</span></span>
<span class="line"><span style="color:#24292E;">rq</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">date</span><span style="color:#032F62;"> +%Y%m%d\`</span></span>
<span class="line"><span style="color:#6F42C1;">mysqldump</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--databases</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yourdatabase</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gzip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> \${dir}</span><span style="color:#032F62;">/yourdatabase-</span><span style="color:#24292E;">\${rq}</span><span style="color:#032F62;">.sql.gz</span></span></code></pre></div><h3 id="修改文件属性为可执行" tabindex="-1">修改文件属性为可执行 <a class="header-anchor" href="#修改文件属性为可执行" aria-label="Permalink to &quot;修改文件属性为可执行&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/path/to/backmysql.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/path/to/backmysql.sh</span></span></code></pre></div><h3 id="添加到crontab" tabindex="-1">添加到<code>crontab</code> <a class="header-anchor" href="#添加到crontab" aria-label="Permalink to &quot;添加到\`crontab\`&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># mysql-backup.cron</span></span>
<span class="line"><span style="color:#e1e4e8;"># 每天3点钟执行备份</span></span>
<span class="line"><span style="color:#e1e4e8;">0 3 * * * bash /path/to/backmysql.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># mysql-backup.cron</span></span>
<span class="line"><span style="color:#24292e;"># 每天3点钟执行备份</span></span>
<span class="line"><span style="color:#24292e;">0 3 * * * bash /path/to/backmysql.sh</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">crontab</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql-backup.cron</span></span>
<span class="line"><span style="color:#B392F0;">crontab</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-l</span></span>
<span class="line"><span style="color:#6A737D;"># 0 3 * * * bash /path/to/backmysql.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">crontab</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql-backup.cron</span></span>
<span class="line"><span style="color:#6F42C1;">crontab</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-l</span></span>
<span class="line"><span style="color:#6A737D;"># 0 3 * * * bash /path/to/backmysql.sh</span></span></code></pre></div>`,20),e=[o];function t(c,r,y,i,d,E){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};