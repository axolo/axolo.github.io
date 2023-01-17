import{_ as s,o as a,c as n,e as l}from"./app.077a4a1b.js";const i=JSON.parse('{"title":"钉钉云推送自建RDS最佳实践","description":"被钉钉云RDS坑过的，请自觉来此报到。","frontmatter":{"title":"钉钉云推送自建RDS最佳实践","description":"被钉钉云RDS坑过的，请自觉来此报到。","time":"2019-04-08T00:00:00.000Z","category":"数据库","tags":["MySQL","钉钉"]},"headers":[{"level":2,"title":"应用数据库","slug":"应用数据库","link":"#应用数据库","children":[{"level":3,"title":"创建钉钉云推送数据表","slug":"创建钉钉云推送数据表","link":"#创建钉钉云推送数据表","children":[]},{"level":3,"title":"创建触发器","slug":"创建触发器","link":"#创建触发器","children":[]}]},{"level":2,"title":"钉钉云推送数据库","slug":"钉钉云推送数据库","link":"#钉钉云推送数据库","children":[{"level":3,"title":"启用FEDERATED","slug":"启用federated","link":"#启用federated","children":[]},{"level":3,"title":"创建FEDERATED表","slug":"创建federated表","link":"#创建federated表","children":[]}]}],"relativePath":"ding-cloud-push.md","lastUpdated":1673773212000}'),p={name:"ding-cloud-push.md"},o=l('<h1 id="钉钉云推送自建rds最佳实践" tabindex="-1">钉钉云推送自建RDS最佳实践 <a class="header-anchor" href="#钉钉云推送自建rds最佳实践" aria-hidden="true">#</a></h1><p>钉钉云推送常规建设方法请参见<a href="https://open-doc.dingtalk.com/microapp/ln6dmh/ib4xrf" target="_blank" rel="noreferrer">钉钉云推送自建RDS官方文档</a>。</p><p>缺陷如下：</p><ol><li><code>MySQL</code>版本必须为5.6或5.7，若应用使用同一数据库引擎，则无法使用<code>MySQL 8.x</code>的<code>CTE</code>等新特性；</li><li>跨服务器触发应用数据库操作很困难，需要应用使用轮询来处理推送数据，浪费资源，时效性差。</li></ol><p>最佳实践：</p><ol><li>钉钉云推送数据表使用<code>FEDERATED</code>引擎连接应用数据库对应表；</li><li>应用数据库的云推送数据表上建立触发器，同步钉钉云推送数据变更操作。</li></ol><p>流程如下：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">+------------+    +-----------------+    +---------------------+    +-------------+</span></span>\n<span class="line"><span style="color:#A6ACCD;">|  DingTalk  |    | Dingtalk RDS    |    | App Database        |    | Data Sync   |</span></span>\n<span class="line"><span style="color:#A6ACCD;">|  Cloud     | =&gt; | [FEDERATED]     | =&gt; | [TABLE]             | =&gt; | [TRIGGER]   |</span></span>\n<span class="line"><span style="color:#A6ACCD;">|  Push      |    | ding_cloud_push |    | dingtalk_cloud_push |    | other table |</span></span>\n<span class="line"><span style="color:#A6ACCD;">+------------+    +-----------------+    +---------------------+    +-------------+</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="应用数据库" tabindex="-1">应用数据库 <a class="header-anchor" href="#应用数据库" aria-hidden="true">#</a></h2><h3 id="创建钉钉云推送数据表" tabindex="-1">创建钉钉云推送数据表 <a class="header-anchor" href="#创建钉钉云推送数据表" aria-hidden="true">#</a></h3><p>根据钉钉自建RDS文档格式创建钉钉云推送数据表，请留意表可以不同名，不兼容部分有细微改动。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> `</span><span style="color:#82AAFF;">dingtalk_cloud_push</span><span style="color:#A6ACCD;">` (</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bigint</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> AUTO_INCREMENT COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">gmt_create</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">datetime</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">创建时间</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">gmt_modified</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">datetime</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">更新时间</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">subscribe_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">订阅方ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">corp_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">企业ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">业务ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_type</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">业务类型</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_data</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">业务数据</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">open_cursor</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bigint</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">对账游标</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">处理状态0为未处理。其他状态开发者自行定义</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">),</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">UNIQUE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">KEY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">uk_subscribe_corp_biz</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">subscribe_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">corp_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_type</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">) AUTO_INCREMENT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> CHARSET</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">utf8mb4 COMMENT</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">钉钉云推送高优先级数据</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre></div><h3 id="创建触发器" tabindex="-1">创建触发器 <a class="header-anchor" href="#创建触发器" aria-hidden="true">#</a></h3><p>触发器根据具体需求改为应用需要的内容，此处仅为示例。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">DELIMITER $$</span></span>\n<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TRIGGER</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dingtalk_cloud_push_update</span></span>\n<span class="line"><span style="color:#F78C6C;">BEFORE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">INSERT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> dingtalk_cloud_push FOR EACH </span><span style="color:#F78C6C;">ROW</span></span>\n<span class="line"><span style="color:#F78C6C;">BEGIN</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> test (method, </span><span style="color:#F78C6C;">data</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">values</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">insert</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, new.biz_data);</span></span>\n<span class="line"><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;">$$</span></span>\n<span class="line"></span></code></pre></div><h2 id="钉钉云推送数据库" tabindex="-1">钉钉云推送数据库 <a class="header-anchor" href="#钉钉云推送数据库" aria-hidden="true">#</a></h2><h3 id="启用federated" tabindex="-1">启用FEDERATED <a class="header-anchor" href="#启用federated" aria-hidden="true">#</a></h3><p>修改<code>MySQL</code>配置文件<code>my.cnf</code>启用<code>FEDERATED</code>引擎后重启<code>MySQL</code>服务。</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[mysqld]</span></span>\n<span class="line"><span style="color:#A6ACCD;">federated</span></span>\n<span class="line"></span></code></pre></div><h3 id="创建federated表" tabindex="-1">创建FEDERATED表 <a class="header-anchor" href="#创建federated表" aria-hidden="true">#</a></h3><p>此表被钉钉云推送RDS直接访问，其数据库名称、表名称、字符集、表结构符合钉钉云推送相关格式。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ding_cloud_push</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">CHARACTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> utf8mb4 </span><span style="color:#C792EA;">COLLATE</span><span style="color:#A6ACCD;"> utf8mb4_general_ci;</span></span>\n<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> `</span><span style="color:#82AAFF;">open_sync_biz_data</span><span style="color:#A6ACCD;">` (</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bigint</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> AUTO_INCREMENT COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">gmt_create</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">datetime</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">创建时间</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">gmt_modified</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">datetime</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">更新时间</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">subscribe_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">订阅方ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">corp_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">企业ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">128</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">业务ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_type</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">业务类型</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_data</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">业务数据</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">open_cursor</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bigint</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">对账游标</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> COMMENT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">处理状态0为未处理。其他状态开发者自行定义</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">),</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">UNIQUE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">KEY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">uk_subscribe_corp_biz</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">subscribe_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">corp_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_id</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">biz_type</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">) ENGINE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">FEDERATED AUTO_INCREMENT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> CHARSET</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">utf8mb4 COMMENT</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">高优先级数据</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">CONNECTION</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysql://user:password@localhost:3306/appdb/dingtalk_cloud_push</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre></div>',22),e=[o];function t(c,C,r,D,y,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
