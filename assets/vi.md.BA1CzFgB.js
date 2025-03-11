import{_ as d,c as e,o,a4 as r}from"./chunks/framework.Drrtq2Mk.js";const c="/assets/vi-keymap.DGIpT8aq.png",v=JSON.parse('{"title":"vi 基本操作","description":"vi 几乎可以说是 Linux 的默认编辑器，命令繁多但又灵活高效。爱之恨之，两极分化。","frontmatter":{"title":"vi 基本操作","description":"vi 几乎可以说是 Linux 的默认编辑器，命令繁多但又灵活高效。爱之恨之，两极分化。","time":"2019-05-10T00:00:00.000Z","category":"运维","tags":["Linux"]},"headers":[],"relativePath":"vi.md","filePath":"vi.md"}'),a={name:"vi.md"};function i(n,t,s,l,p,h){return o(),e("div",null,t[0]||(t[0]=[r('<h1 id="vi基本操作" tabindex="-1">vi基本操作 <a class="header-anchor" href="#vi基本操作" aria-label="Permalink to &quot;vi基本操作&quot;">​</a></h1><blockquote><p>方跃明 2019-05-10</p></blockquote><p>Linux上有大量的配置操作，需要掌握文本编辑器，通常使用vi。 vi是上Linux非常常用的编辑器，很多Linux发行版都默认安装了vi。 vi命令繁多但是如果使用灵活之后将会大大提高效率。 vi是“visual interface”的缩写，vim是vi IMproved(增强版的vi)。 在一般的系统管理维护中vi就够用，如果想使用代码加亮的话可以使用vim。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [filename]     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用vi打开文件filename</span></span></code></pre></div><h2 id="command-mode-命令模式" tabindex="-1">command mode（命令模式） <a class="header-anchor" href="#command-mode-命令模式" aria-label="Permalink to &quot;command mode（命令模式）&quot;">​</a></h2><p>任何时候，不管用户处于何种模式，只要按一下“ESC”键，即可使vi进入命令行模式；我们在shell环境（提示符为$）下输入启动vi命令，进入编辑器时，也是处于该模式下。在该模式下，用户可以输入各种合法的vi命令，用于管理自己的文档。此时从键盘上输入的任何字符都被当做编辑命令来解释，若输入的字符是合法的vi命令，则vi在接受用户命令之后完成相应的动作。但需注意的是，所输入的命令并不在屏幕上显示出来。若输入的字符不是vi的合法命令，vi会响铃报警。</p><h2 id="input-mode-编辑模式" tabindex="-1">input mode（编辑模式） <a class="header-anchor" href="#input-mode-编辑模式" aria-label="Permalink to &quot;input mode（编辑模式）&quot;">​</a></h2><p>在命令模式下输入插入命令i（insert）、附加命令a （append）、打开命令o（open）、修改命令c（change）、取代命令r或替换命令s都可以进入文本输入模式。在该模式下，用户输入的任何字符都被vi当做文件内容保存起来，并将其显示在屏幕上。在文本输入过程中，若想回到命令模式下，按&quot;ESC&quot;键即可。</p><h2 id="last-line-mode-行末模式" tabindex="-1">last line mode（行末模式） <a class="header-anchor" href="#last-line-mode-行末模式" aria-label="Permalink to &quot;last line mode（行末模式）&quot;">​</a></h2><p>末行模式也称ex转义模式。vi和Ex编辑器的功能是相同的，二者主要区别是用户界面。在vi中，命令通常是单个键，例如i、a、o等；而在Ex中，命令是以按回车键结束的正文行。vi有一个专门的“转义”命令，可访问很多面向行的Ex命令。在命令模式下，用户按“:”键即可进入末行模式下，此时vi会在显示窗口的最后一行（通常也是屏幕的最后一行）显示一个“:”作为末行模式的提示符，等待用户输入命令。多数文件管理命令都是在此模式下执行的（如把编辑缓冲区的内容写到文件中等）。末行命令执行完后，vi自动回到命令模式。</p><p><img src="'+c+'" alt="vi-keymap"></p><table tabindex="0"><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>:w</code></td><td>保存文件</td></tr><tr><td><code>:w filename</code></td><td>保存至filename文件</td></tr><tr><td><code>:q</code></td><td>退出编辑器（文件未被修改）</td></tr><tr><td><code>:q!</code></td><td>退出编辑器，且不保存</td></tr><tr><td><code>:wq</code></td><td>退出编辑器，且保存文件</td></tr><tr><td><code>:x</code></td><td>退出编辑器，且保存文件</td></tr><tr><td><code>:set nu</code></td><td>显示行号</td></tr><tr><td><code>:set nonu</code></td><td>取消显示行号</td></tr><tr><td><code>:set fileformat=unix</code></td><td>将文件修改为unix格式，如win下面的文本文件在linux下会出现^M</td></tr><tr><td><code>:s/old/new</code></td><td>用new替换行中首次出现的old</td></tr><tr><td><code>:s/old/new/g</code></td><td>用new替换行中所有的old</td></tr><tr><td><code>:n,m s/old/new/g</code></td><td>用new替换从n到m行里所有的old</td></tr><tr><td><code>:%s/old/new/g</code></td><td>用new替换当前文件里所有的old</td></tr><tr><td><code>:e otherfilename</code></td><td>编辑文件名为otherfilename的文件</td></tr><tr><td><code>/keyword</code></td><td>向光标下搜索keyword字符串</td></tr><tr><td><code>?keyword</code></td><td>向光标上搜索keyword字符串</td></tr><tr><td><code>a</code></td><td>在当前光标位置的右边添加文本</td></tr><tr><td><code>i</code></td><td>在当前光标位置的左边添加文本</td></tr><tr><td><code>A</code></td><td>在当前行的末尾位置添加文本</td></tr><tr><td><code>I</code></td><td>在当前行的开始处添加文本(非空字符的行首)</td></tr><tr><td><code>O</code></td><td>在当前行的上面新建一行</td></tr><tr><td><code>o</code></td><td>在当前行的下面新建一行</td></tr><tr><td><code>R</code></td><td>替换(覆盖)当前光标位置及后面的若干文本</td></tr><tr><td><code>J</code></td><td>合并光标所在行及下一行为一行(依然在命令模式)</td></tr><tr><td><code>x</code></td><td>删除当前字符</td></tr><tr><td><code>nx</code></td><td>删除从光标开始的n个字符</td></tr><tr><td><code>dd</code></td><td>删除当前行</td></tr><tr><td><code>ndd</code></td><td>向下删除当前行在内的n行</td></tr><tr><td><code>u</code></td><td>撤销上一步操作</td></tr><tr><td><code>U</code></td><td>撤销对当前行的所有操作</td></tr><tr><td><code>yy</code></td><td>将当前行复制到缓存区</td></tr><tr><td><code>ayy</code></td><td>复制当前行到a缓冲区，a也可以替换为a到z的任意字母，可以完成多个复制任务</td></tr><tr><td><code>nyy</code></td><td>将当前行向下n行复制到缓冲区</td></tr><tr><td><code>anyy</code></td><td>复制前行向下n行到a 缓冲区，a也可以替换为a到z的任意字母，可以完成多个复制任务</td></tr><tr><td><code>yw</code></td><td>复制从光标开始到词尾的字符</td></tr><tr><td><code>nyw</code></td><td>复制从光标开始的n个单词</td></tr><tr><td><code>y^</code></td><td>复制从光标到行首的内容</td></tr><tr><td><code>y$</code></td><td>复制从光标到行尾的内容</td></tr><tr><td><code>p</code></td><td>粘贴剪切板里的内容在光标后，如果使用了前面的自定义缓冲区，建议使用ap进行粘贴</td></tr><tr><td><code>P</code></td><td>粘贴剪切板里的内容在光标前，如果使用了前面的自定义缓冲区，建议使用aP进行粘贴</td></tr><tr><td><code>h</code></td><td>向左</td></tr><tr><td><code>j</code></td><td>向下</td></tr><tr><td><code>k</code></td><td>向上</td></tr><tr><td><code>l</code></td><td>向右</td></tr><tr><td><code>Space</code></td><td>向右</td></tr><tr><td><code>Backspace</code></td><td>向左</td></tr><tr><td><code>Enter</code></td><td>移动到下一行首</td></tr><tr><td><code>-</code></td><td>移动到上一行首</td></tr><tr><td><code>n</code></td><td>向下搜索前一个搜素动作</td></tr><tr><td><code>N</code></td><td>向上搜索前一个搜索动作</td></tr><tr><td><code>n+</code></td><td>向下跳n行</td></tr><tr><td><code>n-</code></td><td>向上跳n行</td></tr><tr><td><code>nG</code></td><td>跳到行号为n的行</td></tr><tr><td><code>G</code></td><td>跳至文件的底部</td></tr></tbody></table>',12)]))}const u=d(a,[["render",i]]);export{v as __pageData,u as default};
