import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.cd6e3458.js";const h=JSON.parse('{"title":"Linux 个人目录规划","description":"分门别类收纳整理是好习惯。","frontmatter":{"title":"Linux 个人目录规划","description":"分门别类收纳整理是好习惯。","time":"2014-04-03T00:00:00.000Z","category":"运维","tags":["CentOS","Linux"]},"headers":[],"relativePath":"linux-home.md","filePath":"linux-home.md"}'),l={name:"linux-home.md"},p=e(`<h1 id="linux-个人目录规划" tabindex="-1">Linux 个人目录规划 <a class="header-anchor" href="#linux-个人目录规划" aria-label="Permalink to &quot;Linux 个人目录规划&quot;">​</a></h1><blockquote><p>方跃明 2014-04-03</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">~</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- .bashrc                                 # 启动配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- bin                                     # 可执行脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- mysql-back.sh                       #   MySQL备份</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- mysql57.sh                          #   MySQL 5.7 相关</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- usr                                     # 应用目录</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- mysql-5.7                           #   MySQL 5.7</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- nginx                               #   NGiNX</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- node                                #   Node.js</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- redis                               #   Redis</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- backup                                  # 备份目录</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- mysql                               #   MySQL</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- crontab                             #   自动任务</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- certs                               #   证书</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- projects                                # 项目</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- github                              #   GitHUB</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- coding                              #   Coding.net</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- downloads                               # 下载</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- git-2.9.5.tar                       #   Git</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- node-v9.11.2-linux-x86.tar.gz       #   Node.js</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- yarn-v1.12.3.tar.gz                 #   Yarn</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- nginx-5.7.tar.gz                    #   NGiNX</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- logs                                    # 日志</span></span>
<span class="line"><span style="color:#e1e4e8;">\`-- tmp                                     # 临时文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">~</span></span>
<span class="line"><span style="color:#24292e;">|-- .bashrc                                 # 启动配置文件</span></span>
<span class="line"><span style="color:#24292e;">|-- bin                                     # 可执行脚本</span></span>
<span class="line"><span style="color:#24292e;">|   |-- mysql-back.sh                       #   MySQL备份</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- mysql57.sh                          #   MySQL 5.7 相关</span></span>
<span class="line"><span style="color:#24292e;">|-- usr                                     # 应用目录</span></span>
<span class="line"><span style="color:#24292e;">|   |-- mysql-5.7                           #   MySQL 5.7</span></span>
<span class="line"><span style="color:#24292e;">|   |-- nginx                               #   NGiNX</span></span>
<span class="line"><span style="color:#24292e;">|   |-- node                                #   Node.js</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- redis                               #   Redis</span></span>
<span class="line"><span style="color:#24292e;">|-- backup                                  # 备份目录</span></span>
<span class="line"><span style="color:#24292e;">|   |-- mysql                               #   MySQL</span></span>
<span class="line"><span style="color:#24292e;">|   |-- crontab                             #   自动任务</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- certs                               #   证书</span></span>
<span class="line"><span style="color:#24292e;">|-- projects                                # 项目</span></span>
<span class="line"><span style="color:#24292e;">|   |-- github                              #   GitHUB</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- coding                              #   Coding.net</span></span>
<span class="line"><span style="color:#24292e;">|-- downloads                               # 下载</span></span>
<span class="line"><span style="color:#24292e;">|   |-- git-2.9.5.tar                       #   Git</span></span>
<span class="line"><span style="color:#24292e;">|   |-- node-v9.11.2-linux-x86.tar.gz       #   Node.js</span></span>
<span class="line"><span style="color:#24292e;">|   |-- yarn-v1.12.3.tar.gz                 #   Yarn</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- nginx-5.7.tar.gz                    #   NGiNX</span></span>
<span class="line"><span style="color:#24292e;">|-- logs                                    # 日志</span></span>
<span class="line"><span style="color:#24292e;">\`-- tmp                                     # 临时文件</span></span></code></pre></div>`,3),o=[p];function c(t,i,r,y,d,u){return n(),a("div",null,o)}const _=s(l,[["render",c]]);export{h as __pageData,_ as default};
