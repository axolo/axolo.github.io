import{_ as i,c as a,a4 as h,o as n}from"./chunks/framework.CwOFZF19.js";const k="/assets/rbac-flowchart.CeAlZ9m4.jpg",l="/assets/rbac-er.DfJeaGIe.png",p="/assets/rbac-active.Bc_8Zj_I.png",t="/assets/rbac-app01.Cygyh9HN.gif",e="/assets/rbac-app02.B4vQi2ee.gif",c=JSON.parse('{"title":"RBAC之我见","description":"RBAC（Role-Based Access Control）即：基于角色的权限控制。通过角色关联用户，角色关联权限的方式间接赋予用户权限。","frontmatter":{"title":"RBAC之我见","description":"RBAC（Role-Based Access Control）即：基于角色的权限控制。通过角色关联用户，角色关联权限的方式间接赋予用户权限。","time":"2009-09-09T00:00:00.000Z","category":"数据库","tags":["RBAC","MySQL"]},"headers":[],"relativePath":"rbac.md","filePath":"rbac.md"}'),E={name:"rbac.md"};function r(d,s,g,y,A,F){return n(),a("div",null,s[0]||(s[0]=[h('<h1 id="rbac之我见" tabindex="-1">RBAC之我见 <a class="header-anchor" href="#rbac之我见" aria-label="Permalink to &quot;RBAC之我见&quot;">​</a></h1><blockquote><p>方跃明 2009-09-09</p></blockquote><p>最近又开始折腾权限精细控制，发现多年前发的文章，还挺有思路的。摘录如下：</p><ul><li><a href="http://bbs.phpchina.com/forum.php?mod=redirect&amp;goto=findpost&amp;ptid=105577&amp;pid=877890&amp;fromuid=8531" target="_blank" rel="noreferrer">http://bbs.phpchina.com/forum.php?mod=redirect&amp;goto=findpost&amp;ptid=105577&amp;pid=877890&amp;fromuid=8531</a></li><li><a href="http://bbs.phpchina.com/forum.php?mod=viewthread&amp;tid=151874&amp;fromuid=8531" target="_blank" rel="noreferrer">http://bbs.phpchina.com/forum.php?mod=viewthread&amp;tid=151874&amp;fromuid=8531</a></li></ul><h2 id="一、缘起-zend-acl" tabindex="-1">一、缘起 Zend_Acl <a class="header-anchor" href="#一、缘起-zend-acl" aria-label="Permalink to &quot;一、缘起 Zend_Acl&quot;">​</a></h2><h3 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h3><p>Zend_Acl 为权限管理提供轻量并灵活的访问控制列表 (ACL,access control list) 的实现。一般地，应用软件可以利用这样的功能限制某些特定对象来访问特定保护的对象。 在本文档中：</p><ul><li>resource （资源）是一个限制访问的对象。</li><li>role （角色）是一个可以发出请求去访问Resource的对象。</li></ul><p>简单地说就是：roles 请求访问 resources。例如，如果停车服务员要进入汽车，那么，这个停车服务员就是发出请求的 role，而这辆汽车就是 resource，因为不是所有人都有权进入汽车。 通过规范和访问控制列表（ACL）的使用，应用软件可以控制角色（roles）如何来访问资源（resources）。</p><h3 id="_2-关于资源-resource" tabindex="-1">2. 关于资源(Resource) <a class="header-anchor" href="#_2-关于资源-resource" aria-label="Permalink to &quot;2. 关于资源(Resource)&quot;">​</a></h3><p>在 Zend_Acl 中，创建一个 resource 非常简单。Zend_Acl 提供了 resource 接口<code>Zend_Acl_Resource_Interface</code> 使开发者在程序中创建 resources 非常容易。为了使Zend_Acl把某个对象当作一个resource，一个类只需要实现这个只包含了一个方法 getResourceId() 的接口。</p><p>另外，Zend_Acl_Resource是一个包含在 Zend_Acl 里作为一个基本的 resource 实现的类，开发者可以任意扩展它。 Zend_Acl 提供了一个树结构，它可以添加多个 resources (或者叫“访问控制下的区域”）。因为 resources 被存储在这样一个树结构， 所以它们可以被组织成从一般（树根）到特殊（树叶）。基于特殊resource的查询将自动从resource的等级结构中搜索分配给祖先rResources的规则， 它允许简单的规则继承。</p><p>例如，要把一个缺省的规则应用到一个城市的每个建筑物，就简单地把这个规则分配给这个城市， 而不是把规则分配给每个建筑物。然而，有些建筑物也许要求例外的规则，在Zend_Acl里，很容易地通过分配例外规则给每个有这样要求的建筑物来实现。 一个 resource 可以从唯一的一个父 resource 继承，而这个父 resource 也有它自己的父 resource，等等。</p><p>Zend_Acl 也支持基于 resources 的权限（例如：&quot;create&quot;, &quot;read&quot;, &quot;update&quot;, &quot;delete&quot;）， 所以开发者可以根据 resource 分配影响全部或者特殊权限的规则到一个或多个资源。</p><h3 id="_3-关于角色-role" tabindex="-1">3. 关于角色(Role) <a class="header-anchor" href="#_3-关于角色-role" aria-label="Permalink to &quot;3. 关于角色(Role)&quot;">​</a></h3><p>象 Resources 一样，创建一个 role 也非常简单。 Zend_Acl 提供了 <code>Zend_Acl_Role_Interface</code> 使开发者创建 roles 非常容易。 为了使Zend_Acl把某个对象当作一个 role，一个类只需要实现这个只包含了一个方法 getRoleId() 的接口。</p><p>另外，Zend_Acl_Role是一个包含在Zend_Acl里作为一个基本的 role 实现的类，开发者可以任意扩展它。 在 Zend_Acl, 一个 role 可以从一个或多个 role 继承，这就是在 role 中支持规则的继承。</p><p>例如，一个用户 role，如 “sally”， 可以属于一个或多个 role，如：“editor”和“administrator”。开发者可以分别给“editor”和“administrator”分配规则， 而“sally”将从它们俩继承规则，不需要直接给“sally”分配规则。 虽然从多重角色继承的能力非常有用，但是多重继承也带来了一定程度的复杂性。</p><p>下面的例子来示例含糊情形和Zend_Acl如何解决它。</p><h2 id="二、分析" tabindex="-1">二、分析 <a class="header-anchor" href="#二、分析" aria-label="Permalink to &quot;二、分析&quot;">​</a></h2><p>按ZendFramework的做法ACL（访问控制列表）与Auth（认证）是分开的，我用五张表来实现。</p><ul><li>用于ACL的有：role、resource、access</li><li>用于AUTH的有：user</li><li>AUTH和ACL结合的表是：group</li></ul><p>很多RBAC笼统的把ACL和AUTH结合在一起了，所以比较混杂，搞不清楚。下面的草图简要说明ACL和AUTH的结合。</p><p><img src="'+k+'" alt="流程图"></p><h2 id="三、数据模型分析与设计" tabindex="-1">三、数据模型分析与设计 <a class="header-anchor" href="#三、数据模型分析与设计" aria-label="Permalink to &quot;三、数据模型分析与设计&quot;">​</a></h2><p><img src="'+l+`" alt="模型ER"> 这个就不多说了，直接贴MySQL代码。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- database leogb</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DROP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DATABASE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> IF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> EXISTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hent_leogb;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DATABASE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hent_leogb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;utf8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">USE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hent_leogb;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- for first import</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- table user</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> leo_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AUTO_INCREMENT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UNIQUE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> datetime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;utf8&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TYPE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;InnoDB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- table role</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> leo_role</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AUTO_INCREMENT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    role_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FOREIGN KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (role_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> leo_role(id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CASCADE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON DELETE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RESTRICT,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UNIQUE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    comment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;utf8&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TYPE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;InnoDB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- table resource</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> leo_resource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AUTO_INCREMENT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resource_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FOREIGN KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (resource_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> leo_resource(id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CASCADE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON DELETE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RESTRICT,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UNIQUE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    comment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;utf8&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TYPE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;InnoDB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- table group</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> leo_group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FOREIGN KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (user_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> leo_user(id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CASCADE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON DELETE CASCADE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    role_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FOREIGN KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (role_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> leo_role(id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CASCADE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON DELETE CASCADE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    UNIQUE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (user_id, role_id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;utf8&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TYPE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;InnoDB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- table access</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> leo_access</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    role_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FOREIGN KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (role_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> leo_role(id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CASCADE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON DELETE CASCADE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resource_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FOREIGN KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (resource_id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REFERENCES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> leo_resource(id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CASCADE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON DELETE CASCADE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    UNIQUE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (role_id, resource_id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;utf8&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TYPE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;InnoDB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="四、应用分析与实现" tabindex="-1">四、应用分析与实现 <a class="header-anchor" href="#四、应用分析与实现" aria-label="Permalink to &quot;四、应用分析与实现&quot;">​</a></h2><p><img src="`+p+'" alt="活动图"></p><p>以下是按上面的思路做的应用，两张权限分配图是之前没有考虑多层资源结构时设计应用时的截图，供参考：</p><p><img src="'+t+'" alt="应用截图01"></p><p><img src="'+e+'" alt="应用截图02"></p><h2 id="五、后记" tabindex="-1">五、后记 <a class="header-anchor" href="#五、后记" aria-label="Permalink to &quot;五、后记&quot;">​</a></h2><p>当年的思路还是局限于MVC设计中，一堆的Controller和Action，看上去很壮观。 算是有点过设计了，不过，思路还算清晰吧。 现在要我来做多半是要REST，估计是一堆的properties或者一堆的json，代码方面要简单很多，设计方面却要费很多脑子。 前端是APP设计风格MVC，后端是API设计风格REST，两头都得折腾。</p>',34)]))}const D=i(E,[["render",r]]);export{c as __pageData,D as default};