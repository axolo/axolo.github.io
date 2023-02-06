import{_ as l,o as e,c as n,g as a,a as s}from"./app.275c7683.js";const t="/assets/linux-shell-01.068ad982.jpg",o="/assets/linux-shell-02.779c5c4c.jpg",r="/assets/linux-shell-03.76b5318b.jpg",p="/assets/linux-shell-04.dbd69efd.jpg",c="/assets/linux-shell-05.f6f1651a.jpg",i="/assets/linux-shell-06.14758fc9.jpg",x=JSON.parse('{"title":"Linux Shell 入门","description":"师傅领进门，修行在自身。","frontmatter":{"title":"Linux Shell 入门","description":"师傅领进门，修行在自身。","time":"2017-08-09T00:00:00.000Z","category":"运维","tags":["Linux","Shell"]},"headers":[{"level":2,"title":"脚本文件","slug":"脚本文件","link":"#脚本文件","children":[]},{"level":2,"title":"脚本内部执行命令","slug":"脚本内部执行命令","link":"#脚本内部执行命令","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[{"level":3,"title":"系统变量","slug":"系统变量","link":"#系统变量","children":[]},{"level":3,"title":"用户变量","slug":"用户变量","link":"#用户变量","children":[]},{"level":3,"title":"字符串变量","slug":"字符串变量","link":"#字符串变量","children":[]},{"level":3,"title":"数组变量","slug":"数组变量","link":"#数组变量","children":[]}]},{"level":2,"title":"运算符","slug":"运算符","link":"#运算符","children":[]},{"level":2,"title":"控制语句","slug":"控制语句","link":"#控制语句","children":[]},{"level":2,"title":"思维导图","slug":"思维导图","link":"#思维导图","children":[]}],"relativePath":"linux-shell.md","lastUpdated":1675675175000}'),d={name:"linux-shell.md"},h=a('<h1 id="linux-shell-入门" tabindex="-1">Linux Shell 入门 <a class="header-anchor" href="#linux-shell-入门" aria-hidden="true">#</a></h1><blockquote><p>图片来自网络，侵删</p></blockquote><p>师傅领进门，修行在自身。</p><h2 id="脚本文件" tabindex="-1">脚本文件 <a class="header-anchor" href="#脚本文件" aria-hidden="true">#</a></h2><ul><li>扩展名：<code>.sh</code></li><li>第一行：<code>#!/bin/bash</code></li><li>执行 <ul><li><code>chmod +x shell脚本</code></li><li><code>./shell脚本</code></li></ul></li></ul><h2 id="脚本内部执行命令" tabindex="-1">脚本内部执行命令 <a class="header-anchor" href="#脚本内部执行命令" aria-hidden="true">#</a></h2><p>反引号</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-hidden="true">#</a></h2><h3 id="系统变量" tabindex="-1">系统变量 <a class="header-anchor" href="#系统变量" aria-hidden="true">#</a></h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>PATH</td><td>shell查找命令的目录列表，由冒号分隔</td></tr><tr><td>HOSTNAME</td><td>当前主机名</td></tr><tr><td>HOME</td><td>当前用户主目录</td></tr><tr><td>SHELL</td><td>当前shell</td></tr><tr><td>USER</td><td>当前用户</td></tr><tr><td>UID</td><td>当前用户ID</td></tr><tr><td>GID</td><td>当前用户组ID</td></tr><tr><td>PWD</td><td>当前所在目录</td></tr><tr><td>OLDPWD</td><td>上次所在目录</td></tr><tr><td>0</td><td>当前命令名称</td></tr><tr><td>n</td><td>当前命令的第n个参数，n=1,2,...,9</td></tr><tr><td>*</td><td>以”参数1，参数2…..”形式保存所有参数</td></tr><tr><td>@</td><td>以”参数1”，”参数2”…..”形式保存所有参数</td></tr><tr><td>#</td><td>命令行参数的个数</td></tr><tr><td>?</td><td>执行上一个指令或函数的返回值，0=没有错误</td></tr><tr><td>$</td><td>本程序的PID（ProcessID）</td></tr><tr><td>!</td><td>后台运行的最后一个进程的进程ID号</td></tr><tr><td>-</td><td>显示shell使用的当前选项，与set命令功能相同</td></tr><tr><td>_</td><td>shell的绝对路径名，最近执行的命令，最近命令最后一个参数</td></tr><tr><td>LINENO</td><td>当前执行的脚本行号</td></tr></tbody></table><h3 id="用户变量" tabindex="-1">用户变量 <a class="header-anchor" href="#用户变量" aria-hidden="true">#</a></h3><h4 id="定义变量" tabindex="-1">定义变量 <a class="header-anchor" href="#定义变量" aria-hidden="true">#</a></h4><ul><li>变量名=变量值</li></ul><h4 id="引用变量" tabindex="-1">引用变量 <a class="header-anchor" href="#引用变量" aria-hidden="true">#</a></h4>',14),y=s("ul",null,[s("li",null,"$变量名"),s("li",{变量名:""},"$")],-1),D=a(`<h4 id="只读变量" tabindex="-1">只读变量 <a class="header-anchor" href="#只读变量" aria-hidden="true">#</a></h4><ul><li>变量名=变量值</li><li>readonly 变量名</li></ul><h4 id="删除变量" tabindex="-1">删除变量 <a class="header-anchor" href="#删除变量" aria-hidden="true">#</a></h4><ul><li>变量名=变量值</li><li>unset 变量名</li></ul><h3 id="字符串变量" tabindex="-1">字符串变量 <a class="header-anchor" href="#字符串变量" aria-hidden="true">#</a></h3><h4 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-hidden="true">#</a></h4><ul><li>单引号字符串变量=&#39;不可转义字符串&#39;</li><li>双引号字符串变量=&quot;可转义字符串&quot;</li></ul><h4 id="获取字符串长度" tabindex="-1">获取字符串长度 <a class="header-anchor" href="#获取字符串长度" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abcd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${#</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 4</span></span>
<span class="line"></span></code></pre></div><h4 id="提取字符串" tabindex="-1">提取字符串 <a class="header-anchor" href="#提取字符串" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">runoob is a great site</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">4</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># unoo</span></span>
<span class="line"></span></code></pre></div><h4 id="查找字符串位置" tabindex="-1">查找字符串位置 <a class="header-anchor" href="#查找字符串位置" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">runoob is a great company</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">expr</span><span style="color:#C3E88D;"> index </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> is</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 8</span></span>
<span class="line"></span></code></pre></div><h3 id="数组变量" tabindex="-1">数组变量 <a class="header-anchor" href="#数组变量" aria-hidden="true">#</a></h3><h4 id="定义数组" tabindex="-1">定义数组 <a class="header-anchor" href="#定义数组" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">array_name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">value0</span><span style="color:#A6ACCD;"> value1 value2 value3)  </span><span style="color:#676E95;font-style:italic;"># 整体定义，可分行</span></span>
<span class="line"><span style="color:#FFCB6B;">array_name[0</span><span style="color:#A6ACCD;">]=value0                      </span><span style="color:#676E95;font-style:italic;"># 可单独定义</span></span>
<span class="line"></span></code></pre></div><h4 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">array_name</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">]}</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 读取第n个数组，数组下标从0开始</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">array_name</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">]}</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 读取所有数组</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">array_name</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 读取所有数组</span></span>
<span class="line"></span></code></pre></div><h4 id="获取长度" tabindex="-1">获取长度 <a class="header-anchor" href="#获取长度" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">\${#</span><span style="color:#A6ACCD;">array_name</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">]}</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 第n个数组长度</span></span>
<span class="line"><span style="color:#89DDFF;">\${#</span><span style="color:#A6ACCD;">array_name</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">]}</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 整个数组长度</span></span>
<span class="line"><span style="color:#89DDFF;">\${#</span><span style="color:#A6ACCD;">array_name</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">]}</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># 整个数组长度</span></span>
<span class="line"></span></code></pre></div><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-hidden="true">#</a></h2><h2 id="控制语句" tabindex="-1">控制语句 <a class="header-anchor" href="#控制语句" aria-hidden="true">#</a></h2><h2 id="思维导图" tabindex="-1">思维导图 <a class="header-anchor" href="#思维导图" aria-hidden="true">#</a></h2><p><img src="`+t+'" alt="基础知识"><img src="'+o+'" alt="文件目录"><img src="'+r+'" alt="文本处理"><img src="'+p+'" alt="Shell脚本1"><img src="'+c+'" alt="Shell脚本2"><img src="'+i+'" alt="Shell脚本3"></p><blockquote><p>未完待续……</p></blockquote><blockquote><p>方跃明 2017-08-09</p></blockquote>',26),u=[h,y,D];function C(A,F,_,g,b,f){return e(),n("div",null,u)}const v=l(d,[["render",C]]);export{x as __pageData,v as default};
