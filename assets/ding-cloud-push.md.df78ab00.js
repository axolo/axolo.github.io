import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.d5af2850.js";const C=JSON.parse('{"title":"钉钉云推送自建RDS最佳实践","description":"被钉钉云RDS坑过的，请自觉来此报到。","frontmatter":{"title":"钉钉云推送自建RDS最佳实践","description":"被钉钉云RDS坑过的，请自觉来此报到。","time":"2019-04-08T00:00:00.000Z","category":"数据库","tags":["MySQL","钉钉"]},"headers":[],"relativePath":"ding-cloud-push.md","filePath":"ding-cloud-push.md"}'),p={name:"ding-cloud-push.md"},o=l('<h1 id="钉钉云推送自建rds最佳实践" tabindex="-1">钉钉云推送自建RDS最佳实践 <a class="header-anchor" href="#钉钉云推送自建rds最佳实践" aria-label="Permalink to &quot;钉钉云推送自建RDS最佳实践&quot;">​</a></h1><blockquote><p>方跃明 2019-04-08</p></blockquote><p>钉钉云推送常规建设方法请参见<a href="https://open-doc.dingtalk.com/microapp/ln6dmh/ib4xrf" target="_blank" rel="noreferrer">钉钉云推送自建RDS官方文档</a>。</p><p>缺陷如下：</p><ol><li><code>MySQL</code>版本必须为5.6或5.7，若应用使用同一数据库引擎，则无法使用<code>MySQL 8.x</code>的<code>CTE</code>等新特性；</li><li>跨服务器触发应用数据库操作很困难，需要应用使用轮询来处理推送数据，浪费资源，时效性差。</li></ol><p>最佳实践：</p><ol><li>钉钉云推送数据表使用<code>FEDERATED</code>引擎连接应用数据库对应表；</li><li>应用数据库的云推送数据表上建立触发器，同步钉钉云推送数据变更操作。</li></ol><p>流程如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">+------------+    +-----------------+    +---------------------+    +-------------+</span></span>\n<span class="line"><span style="color:#e1e4e8;">|  DingTalk  |    | Dingtalk RDS    |    | App Database        |    | Data Sync   |</span></span>\n<span class="line"><span style="color:#e1e4e8;">|  Cloud     | =&gt; | [FEDERATED]     | =&gt; | [TABLE]             | =&gt; | [TRIGGER]   |</span></span>\n<span class="line"><span style="color:#e1e4e8;">|  Push      |    | ding_cloud_push |    | dingtalk_cloud_push |    | other table |</span></span>\n<span class="line"><span style="color:#e1e4e8;">+------------+    +-----------------+    +---------------------+    +-------------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">+------------+    +-----------------+    +---------------------+    +-------------+</span></span>\n<span class="line"><span style="color:#24292e;">|  DingTalk  |    | Dingtalk RDS    |    | App Database        |    | Data Sync   |</span></span>\n<span class="line"><span style="color:#24292e;">|  Cloud     | =&gt; | [FEDERATED]     | =&gt; | [TABLE]             | =&gt; | [TRIGGER]   |</span></span>\n<span class="line"><span style="color:#24292e;">|  Push      |    | ding_cloud_push |    | dingtalk_cloud_push |    | other table |</span></span>\n<span class="line"><span style="color:#24292e;">+------------+    +-----------------+    +---------------------+    +-------------+</span></span></code></pre></div><h2 id="应用数据库" tabindex="-1">应用数据库 <a class="header-anchor" href="#应用数据库" aria-label="Permalink to &quot;应用数据库&quot;">​</a></h2><h3 id="创建钉钉云推送数据表" tabindex="-1">创建钉钉云推送数据表 <a class="header-anchor" href="#创建钉钉云推送数据表" aria-label="Permalink to &quot;创建钉钉云推送数据表&quot;">​</a></h3><p>根据钉钉自建RDS文档格式创建钉钉云推送数据表，请留意表可以不同名，不兼容部分有细微改动。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> `</span><span style="color:#B392F0;">dingtalk_cloud_push</span><span style="color:#E1E4E8;">` (</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`id`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">bigint</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> AUTO_INCREMENT COMMENT </span><span style="color:#9ECBFF;">&#39;ID&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`gmt_create`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">datetime</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;创建时间&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`gmt_modified`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">datetime</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;更新时间&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`subscribe_id`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">varchar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;订阅方ID&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`corp_id`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">varchar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;企业ID&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`biz_id`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">varchar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">128</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;业务ID&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`biz_type`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;业务类型&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`biz_data`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;业务数据&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`open_cursor`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">bigint</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;对账游标&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`status`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;处理状态0为未处理。其他状态开发者自行定义&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">PRIMARY KEY</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">`id`</span><span style="color:#E1E4E8;">),</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">UNIQUE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">KEY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">`uk_subscribe_corp_biz`</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">`subscribe_id`</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">`corp_id`</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">`biz_id`</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">`biz_type`</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#E1E4E8;">) AUTO_INCREMENT</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DEFAULT</span><span style="color:#E1E4E8;"> CHARSET</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">utf8mb4 COMMENT</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;钉钉云推送高优先级数据&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> `</span><span style="color:#6F42C1;">dingtalk_cloud_push</span><span style="color:#24292E;">` (</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">bigint</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> AUTO_INCREMENT COMMENT </span><span style="color:#032F62;">&#39;ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`gmt_create`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">datetime</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;创建时间&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`gmt_modified`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">datetime</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;更新时间&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`subscribe_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;订阅方ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`corp_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;企业ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`biz_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">128</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;业务ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`biz_type`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;业务类型&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`biz_data`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">text</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;业务数据&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`open_cursor`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">bigint</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;对账游标&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`status`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;处理状态0为未处理。其他状态开发者自行定义&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">PRIMARY KEY</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">`id`</span><span style="color:#24292E;">),</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">UNIQUE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">KEY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`uk_subscribe_corp_biz`</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">`subscribe_id`</span><span style="color:#24292E;">,</span><span style="color:#032F62;">`corp_id`</span><span style="color:#24292E;">,</span><span style="color:#032F62;">`biz_id`</span><span style="color:#24292E;">,</span><span style="color:#032F62;">`biz_type`</span><span style="color:#24292E;">)</span></span>\n<span class="line"><span style="color:#24292E;">) AUTO_INCREMENT</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DEFAULT</span><span style="color:#24292E;"> CHARSET</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">utf8mb4 COMMENT</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;钉钉云推送高优先级数据&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="创建触发器" tabindex="-1">创建触发器 <a class="header-anchor" href="#创建触发器" aria-label="Permalink to &quot;创建触发器&quot;">​</a></h3><p>触发器根据具体需求改为应用需要的内容，此处仅为示例。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">DELIMITER $$</span></span>\n<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TRIGGER</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dingtalk_cloud_push_update</span></span>\n<span class="line"><span style="color:#F97583;">BEFORE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">INSERT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">ON</span><span style="color:#E1E4E8;"> dingtalk_cloud_push </span><span style="color:#F97583;">FOR</span><span style="color:#E1E4E8;"> EACH </span><span style="color:#F97583;">ROW</span></span>\n<span class="line"><span style="color:#F97583;">BEGIN</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">INSERT INTO</span><span style="color:#E1E4E8;"> test (method, </span><span style="color:#F97583;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">values</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;insert&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">new</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">biz_data</span><span style="color:#E1E4E8;">);</span></span>\n<span class="line"><span style="color:#F97583;">END</span><span style="color:#E1E4E8;">$$</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">DELIMITER $$</span></span>\n<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TRIGGER</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dingtalk_cloud_push_update</span></span>\n<span class="line"><span style="color:#D73A49;">BEFORE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">INSERT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">ON</span><span style="color:#24292E;"> dingtalk_cloud_push </span><span style="color:#D73A49;">FOR</span><span style="color:#24292E;"> EACH </span><span style="color:#D73A49;">ROW</span></span>\n<span class="line"><span style="color:#D73A49;">BEGIN</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">INSERT INTO</span><span style="color:#24292E;"> test (method, </span><span style="color:#D73A49;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">values</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;insert&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">new</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">biz_data</span><span style="color:#24292E;">);</span></span>\n<span class="line"><span style="color:#D73A49;">END</span><span style="color:#24292E;">$$</span></span></code></pre></div><h2 id="钉钉云推送数据库" tabindex="-1">钉钉云推送数据库 <a class="header-anchor" href="#钉钉云推送数据库" aria-label="Permalink to &quot;钉钉云推送数据库&quot;">​</a></h2><h3 id="启用federated" tabindex="-1">启用FEDERATED <a class="header-anchor" href="#启用federated" aria-label="Permalink to &quot;启用FEDERATED&quot;">​</a></h3><p>修改<code>MySQL</code>配置文件<code>my.cnf</code>启用<code>FEDERATED</code>引擎后重启<code>MySQL</code>服务。</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[mysqld]</span></span>\n<span class="line"><span style="color:#E1E4E8;">federated</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[mysqld]</span></span>\n<span class="line"><span style="color:#24292E;">federated</span></span></code></pre></div><h3 id="创建federated表" tabindex="-1">创建FEDERATED表 <a class="header-anchor" href="#创建federated表" aria-label="Permalink to &quot;创建FEDERATED表&quot;">​</a></h3><p>此表被钉钉云推送RDS直接访问，其数据库名称、表名称、字符集、表结构符合钉钉云推送相关格式。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DATABASE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ding_cloud_push</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DEFAULT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">CHARACTER</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">SET</span><span style="color:#E1E4E8;"> utf8mb4 </span><span style="color:#F97583;">COLLATE</span><span style="color:#E1E4E8;"> utf8mb4_general_ci;</span></span>\n<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> `</span><span style="color:#B392F0;">open_sync_biz_data</span><span style="color:#E1E4E8;">` (</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`id`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">bigint</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> AUTO_INCREMENT COMMENT </span><span style="color:#9ECBFF;">&#39;ID&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`gmt_create`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">datetime</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;创建时间&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`gmt_modified`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">datetime</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;更新时间&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`subscribe_id`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">varchar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;订阅方ID&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`corp_id`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">varchar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;企业ID&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`biz_id`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">varchar</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">128</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;业务ID&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`biz_type`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;业务类型&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`biz_data`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;业务数据&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`open_cursor`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">bigint</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;对账游标&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">`status`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">NOT NULL</span><span style="color:#E1E4E8;"> COMMENT </span><span style="color:#9ECBFF;">&#39;处理状态0为未处理。其他状态开发者自行定义&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">PRIMARY KEY</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">`id`</span><span style="color:#E1E4E8;">),</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">UNIQUE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">KEY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">`uk_subscribe_corp_biz`</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">`subscribe_id`</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">`corp_id`</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">`biz_id`</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">`biz_type`</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#E1E4E8;">) ENGINE</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">FEDERATED AUTO_INCREMENT</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DEFAULT</span><span style="color:#E1E4E8;"> CHARSET</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">utf8mb4 COMMENT</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;高优先级数据&#39;</span></span>\n<span class="line"><span style="color:#E1E4E8;">CONNECTION</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;mysql://user:password@localhost:3306/appdb/dingtalk_cloud_push&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DATABASE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ding_cloud_push</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DEFAULT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">CHARACTER</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">SET</span><span style="color:#24292E;"> utf8mb4 </span><span style="color:#D73A49;">COLLATE</span><span style="color:#24292E;"> utf8mb4_general_ci;</span></span>\n<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> `</span><span style="color:#6F42C1;">open_sync_biz_data</span><span style="color:#24292E;">` (</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">bigint</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> AUTO_INCREMENT COMMENT </span><span style="color:#032F62;">&#39;ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`gmt_create`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">datetime</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;创建时间&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`gmt_modified`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">datetime</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;更新时间&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`subscribe_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;订阅方ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`corp_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;企业ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`biz_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">128</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;业务ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`biz_type`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;业务类型&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`biz_data`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">text</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;业务数据&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`open_cursor`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">bigint</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;对账游标&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`status`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;处理状态0为未处理。其他状态开发者自行定义&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">PRIMARY KEY</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">`id`</span><span style="color:#24292E;">),</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">UNIQUE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">KEY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`uk_subscribe_corp_biz`</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">`subscribe_id`</span><span style="color:#24292E;">,</span><span style="color:#032F62;">`corp_id`</span><span style="color:#24292E;">,</span><span style="color:#032F62;">`biz_id`</span><span style="color:#24292E;">,</span><span style="color:#032F62;">`biz_type`</span><span style="color:#24292E;">)</span></span>\n<span class="line"><span style="color:#24292E;">) ENGINE</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">FEDERATED AUTO_INCREMENT</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DEFAULT</span><span style="color:#24292E;"> CHARSET</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">utf8mb4 COMMENT</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;高优先级数据&#39;</span></span>\n<span class="line"><span style="color:#24292E;">CONNECTION</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;mysql://user:password@localhost:3306/appdb/dingtalk_cloud_push&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div>',23),e=[o];function c(t,E,r,y,i,F){return a(),n("div",null,e)}const N=s(p,[["render",c]]);export{C as __pageData,N as default};