import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.d5af2850.js";const g=JSON.parse('{"title":"nginx 配置 php-fpm","description":"PHP-FPM（PHP FastCGI Process Manager），是用于管理 PHP 进程池的软件，用于接收和处理来自 Web 服务器（如Nginx）的请求。","frontmatter":{"title":"nginx 配置 php-fpm","description":"PHP-FPM（PHP FastCGI Process Manager），是用于管理 PHP 进程池的软件，用于接收和处理来自 Web 服务器（如Nginx）的请求。","time":"2017-01-01T00:00:00.000Z","category":"运维","tags":["CentOS","nginx","PHP"]},"headers":[],"relativePath":"nginx-php-fpm.md","filePath":"nginx-php-fpm.md"}'),l={name:"nginx-php-fpm.md"},o=p(`<h1 id="nginx-配置-php-fpm" tabindex="-1">nginx 配置 php-fpm <a class="header-anchor" href="#nginx-配置-php-fpm" aria-label="Permalink to &quot;nginx 配置 php-fpm&quot;">​</a></h1><blockquote><p>方跃明 2017-01-01</p></blockquote><p>PHP-FPM（PHP FastCGI Process Manager），是用于管理 PHP 进程池的软件，用于接收和处理来自 Web 服务器（如Nginx）的请求。 PHP-FPM会创建一个主进程（通常以操作系统中根用户的身份运行），控制何时以及如何把 HTTP 请求转发给一个或多个子进程处理。 PHP-FPM 主进程还控制着什么时候创建和销毁 PHP 子进程。 PHP-FPM 进程池中的每个进程存在的时间都比单个 HTTP 请求长，可以处理10、50、100或更多的 HTTP 请求。</p><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><p>CentOS 7</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;nginx&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># https://www.nginx.com/resources/wiki/start/topics/tutorials/install/</span></span>
<span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/nginx.repo</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 具体见下文</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># https://www.nginx.com/resources/wiki/start/topics/tutorials/install/</span></span>
<span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/nginx.repo</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 具体见下文</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[nginx]</span></span>
<span class="line"><span style="color:#F97583;">name</span><span style="color:#E1E4E8;">=nginx repo</span></span>
<span class="line"><span style="color:#F97583;">baseurl</span><span style="color:#E1E4E8;">=https://nginx.org/packages/centos/$releasever/$basearch/</span></span>
<span class="line"><span style="color:#F97583;">gpgcheck</span><span style="color:#E1E4E8;">=0</span></span>
<span class="line"><span style="color:#F97583;">enabled</span><span style="color:#E1E4E8;">=1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[nginx]</span></span>
<span class="line"><span style="color:#D73A49;">name</span><span style="color:#24292E;">=nginx repo</span></span>
<span class="line"><span style="color:#D73A49;">baseurl</span><span style="color:#24292E;">=https://nginx.org/packages/centos/$releasever/$basearch/</span></span>
<span class="line"><span style="color:#D73A49;">gpgcheck</span><span style="color:#24292E;">=0</span></span>
<span class="line"><span style="color:#D73A49;">enabled</span><span style="color:#24292E;">=1</span></span></code></pre></div><h2 id="php" tabindex="-1">PHP <a class="header-anchor" href="#php" aria-label="Permalink to &quot;PHP&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">php</span></span>
<span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/php-fpm.d/www.conf</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 具体见下文</span></span>
<span class="line"><span style="color:#B392F0;">php-fpm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-R</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 以root用户和守护进程方式启动php-fpm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">php</span></span>
<span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/php-fpm.d/www.conf</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 具体见下文</span></span>
<span class="line"><span style="color:#6F42C1;">php-fpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 以root用户和守护进程方式启动php-fpm</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># /etc/php-fpm.d/www.conf</span></span>
<span class="line"><span style="color:#F97583;">user</span><span style="color:#E1E4E8;"> = root</span></span>
<span class="line"><span style="color:#F97583;">group</span><span style="color:#E1E4E8;"> = root</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># /etc/php-fpm.d/www.conf</span></span>
<span class="line"><span style="color:#D73A49;">user</span><span style="color:#24292E;"> = root</span></span>
<span class="line"><span style="color:#D73A49;">group</span><span style="color:#24292E;"> = root</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="larvael" tabindex="-1">Larvael <a class="header-anchor" href="#larvael" aria-label="Permalink to &quot;Larvael&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># /etc/nginx/conf.d/php.conf</span></span>
<span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">80;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">foo.com;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/path;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.html index.htm index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># try_files $uri $uri/ /index.php$is_args$args;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">\\.php$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri = </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_pass </span><span style="color:#E1E4E8;">127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># include fastcgi.conf;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># fastcgi_index index.php;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_param </span><span style="color:#E1E4E8;">SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">fastcgi_params;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># deny apache .htaccess</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/\\.ht </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> deny </span><span style="color:#79B8FF;"> all</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># /etc/nginx/conf.d/php.conf</span></span>
<span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">80;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;">foo.com;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> root </span><span style="color:#24292E;">/path;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> index </span><span style="color:#24292E;">index.html index.htm index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># try_files $uri $uri/ /index.php$is_args$args;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\\.php$ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri = </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> fastcgi_pass </span><span style="color:#24292E;">127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># include fastcgi.conf;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># fastcgi_index index.php;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> fastcgi_param </span><span style="color:#24292E;">SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> include </span><span style="color:#24292E;">fastcgi_params;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># deny apache .htaccess</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/\\.ht </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> deny </span><span style="color:#005CC5;"> all</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="thinkphp" tabindex="-1">ThinkPHP <a class="header-anchor" href="#thinkphp" aria-label="Permalink to &quot;ThinkPHP&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># /etc/nginx/conf.d/php.conf</span></span>
<span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;"> xxxxxxx ;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;"> www;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">X-Frame-Options </span><span style="color:#9ECBFF;">&quot;SAMEORIGIN&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">X-XSS-Protection </span><span style="color:#9ECBFF;">&quot;1; mode=block&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">X-Content-Type-Options </span><span style="color:#9ECBFF;">&quot;nosniff&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> charset </span><span style="color:#E1E4E8;">utf-8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.html index.htm index.php;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri $uri/ /index.php$uri;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/favicon.ico </span><span style="color:#E1E4E8;">{</span><span style="color:#F97583;"> access_log </span><span style="color:#E1E4E8;">off;</span><span style="color:#F97583;"> log_not_found </span><span style="color:#E1E4E8;">off; }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/robots.txt  </span><span style="color:#E1E4E8;">{</span><span style="color:#F97583;"> access_log </span><span style="color:#E1E4E8;">off;</span><span style="color:#F97583;"> log_not_found </span><span style="color:#E1E4E8;">off; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;"> error_page </span><span style="color:#E1E4E8;">404 /index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">\\.php(.*)$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_pass </span><span style="color:#E1E4E8;">  127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_index </span><span style="color:#E1E4E8;">index.php;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_split_path_info </span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">^((?U).+\\.php)(/?.+)$</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_param </span><span style="color:#E1E4E8;"> SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_param </span><span style="color:#E1E4E8;"> PATH_INFO  $fastcgi_path_info;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> fastcgi_param </span><span style="color:#E1E4E8;"> PATH_TRANSLATED  $document_root$fastcgi_path_info;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">fastcgi_params;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/\\.(?!well-known).* </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> deny </span><span style="color:#E1E4E8;">all;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># /etc/nginx/conf.d/php.conf</span></span>
<span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">      </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;"> xxxxxxx ;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> root </span><span style="color:#24292E;"> www;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> add_header </span><span style="color:#24292E;">X-Frame-Options </span><span style="color:#032F62;">&quot;SAMEORIGIN&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> add_header </span><span style="color:#24292E;">X-XSS-Protection </span><span style="color:#032F62;">&quot;1; mode=block&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> add_header </span><span style="color:#24292E;">X-Content-Type-Options </span><span style="color:#032F62;">&quot;nosniff&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> charset </span><span style="color:#24292E;">utf-8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> index </span><span style="color:#24292E;">index.html index.htm index.php;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri $uri/ /index.php$uri;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/favicon.ico </span><span style="color:#24292E;">{</span><span style="color:#D73A49;"> access_log </span><span style="color:#24292E;">off;</span><span style="color:#D73A49;"> log_not_found </span><span style="color:#24292E;">off; }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/robots.txt  </span><span style="color:#24292E;">{</span><span style="color:#D73A49;"> access_log </span><span style="color:#24292E;">off;</span><span style="color:#D73A49;"> log_not_found </span><span style="color:#24292E;">off; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;"> error_page </span><span style="color:#24292E;">404 /index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\\.php(.*)$ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> fastcgi_pass </span><span style="color:#24292E;">  127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> fastcgi_index </span><span style="color:#24292E;">index.php;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> fastcgi_split_path_info </span><span style="color:#24292E;"> </span><span style="color:#032F62;">^((?U).+\\.php)(/?.+)$</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> fastcgi_param </span><span style="color:#24292E;"> SCRIPT_FILENAME  $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> fastcgi_param </span><span style="color:#24292E;"> PATH_INFO  $fastcgi_path_info;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> fastcgi_param </span><span style="color:#24292E;"> PATH_TRANSLATED  $document_root$fastcgi_path_info;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> include </span><span style="color:#24292E;">fastcgi_params;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/\\.(?!well-known).* </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> deny </span><span style="color:#24292E;">all;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,17),e=[o];function c(t,r,E,i,y,d){return n(),a("div",null,e)}const F=s(l,[["render",c]]);export{g as __pageData,F as default};