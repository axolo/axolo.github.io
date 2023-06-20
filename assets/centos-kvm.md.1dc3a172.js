import{_ as s,o as a,c as n,R as t}from"./chunks/framework.6ea6e512.js";const e="/assets/centos-kvm-openstack.c4c10132.png",l="/assets/centos-kvm-network-brige.ee054bbc.png",o="/assets/centos-kvm-virt-manager-client.f0bacadb.png",p="/assets/centos-kvm-virt-manager-install.96293dd5.png",i="/assets/centos-kvm-virt-manager-connection.fa8b4b96.png",r="/assets/centos-kvm-vm.c4dacbf5.png",u=JSON.parse('{"title":"CentOS 安装 KVM","description":"很多人都使用 Openstack，通过 nova 来管理KVM，对于 KVM 本身其实很陌生，本文理论联系实践，加深对 KVM 的认识。","frontmatter":{"title":"CentOS 安装 KVM","description":"很多人都使用 Openstack，通过 nova 来管理KVM，对于 KVM 本身其实很陌生，本文理论联系实践，加深对 KVM 的认识。","time":"2014-04-04T00:00:00.000Z","category":"运维","tags":["DevOps","CentOS","Linux","虚拟化"]},"headers":[],"relativePath":"centos-kvm.md","filePath":"centos-kvm.md"}'),c={name:"centos-kvm.md"},d=t('<h1 id="centos-安装-kvm" tabindex="-1">CentOS 安装 KVM <a class="header-anchor" href="#centos-安装-kvm" aria-label="Permalink to &quot;CentOS 安装 KVM&quot;">​</a></h1><blockquote><p>方跃明 2014-04-04</p></blockquote><p>很多人都使用 Openstack，通过 nova 来管理 KVM，对于 KVM 本身其实很陌生，本文理论联系实践，加深对 KVM 的认识。先弄清楚几个概念和关系：</p><h2 id="openstack、kvm、qemu-kvm、libvirt的关系" tabindex="-1">Openstack、kvm、qemu-kvm、libvirt的关系 <a class="header-anchor" href="#openstack、kvm、qemu-kvm、libvirt的关系" aria-label="Permalink to &quot;Openstack、kvm、qemu-kvm、libvirt的关系&quot;">​</a></h2><ul><li>KVM是最底层的hypervisor，它是用来模拟CPU的运行，它缺少了对network和周边I/O的支持，是没法直接用的。</li><li>QEMU-KVM就是建基于KVM上面的，它提供了完整的网络和I/O支持。</li><li>Openstack不直接控制qemu-kvm，它使用一个叫libvirt的库间接控制qemu-lvm。</li><li>libvirt提供了跨VM平台的功能，除了QEMU的模拟器，还可以控制vmware、virtualbox、xen等。为了实现openstack的跨VM特性，openstack使用libvirt，而不直接用qemu-kvm。libvirt还提供了一些高级的功能，例如pool/vol管理。</li></ul><p><img src="'+e+`" alt="centos-kvm-openstack"></p><h2 id="虚拟机服务器和客户端的关系" tabindex="-1">虚拟机服务器和客户端的关系 <a class="header-anchor" href="#虚拟机服务器和客户端的关系" aria-label="Permalink to &quot;虚拟机服务器和客户端的关系&quot;">​</a></h2><table><thead><tr><th>位置</th><th style="text-align:center;">组件</th></tr></thead><tbody><tr><td>服务端</td><td style="text-align:center;">kvm、qemu-kvm、libvirt、python-virtinst、virt-viewer</td></tr><tr><td>客户端</td><td style="text-align:center;">virt-manager</td></tr></tbody></table><p>一般来说，服务器端尽可能的只安装必要的服务器组件，以避免性能问题、误操作和漏洞攻击等等，而管理服务器的客户端软件安装在客户端。当然，服务端和客户端在同一个操作系统的情况也是允许的，经常用在实验环境，但部署在生产环境应该极力避免。</p><h2 id="部署kvm" tabindex="-1">部署KVM <a class="header-anchor" href="#部署kvm" aria-label="Permalink to &quot;部署KVM&quot;">​</a></h2><h3 id="一、前提条件" tabindex="-1">一、前提条件 <a class="header-anchor" href="#一、前提条件" aria-label="Permalink to &quot;一、前提条件&quot;">​</a></h3><p>检查CPU虚拟化是否支持kvm；最小化安装CentOS；关闭SELinux、关闭iptables或者打开相应的防火墙端口。</p><p>检查CPU是否支持虚拟化，用以下命令，其中vmx对应intel，svm对应amd，运行后如果有对应输出则支持虚拟化，无输出则表面不支持虚拟化。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/cpuinfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-E</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(vmx|svm)</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>在/etc/sysconfig/selinux中设置参数selinux=0，关闭SELinux。</p><h3 id="二、服务器端安装kvm服务" tabindex="-1">二、服务器端安装KVM服务 <a class="header-anchor" href="#二、服务器端安装kvm服务" aria-label="Permalink to &quot;二、服务器端安装KVM服务&quot;">​</a></h3><p>安装kvm服务端及相关组件，其中python-virtinst用于在创建虚拟机时编辑配置文件， virt-viewer用于客户端管理器管理虚拟机时开启图形控制台，防止黑屏。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">qemu-kvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libvirt</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">python-virtinst</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">virt-viewer</span></span></code></pre></div><p>启动libvirt服务</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/etc/init.d/libvirtd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span></code></pre></div><p>查看kvm服务是否正常，目前没任何虚拟机，所以没有内容显示 进入virsh后，可以使用virsh的相关指令。help为帮助，exit退出virsh。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">virsh</span></span>
<span class="line"><span style="color:#FFCB6B;">list</span></span></code></pre></div><h3 id="三、服务器端网络设置" tabindex="-1">三、服务器端网络设置 <a class="header-anchor" href="#三、服务器端网络设置" aria-label="Permalink to &quot;三、服务器端网络设置&quot;">​</a></h3><p>虚拟机接入网络常用有两种方式，一种是NAT一种是Brigde，一般采用Brigde方式。</p><p><img src="`+l+`" alt="network-brige"></p><p>桥接模式需要设置，首先，创建一个文件“/etc/sysconfig/network-scripts/ifcfg-br0”：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /etc/sysconfig/network-scripts/ifcfg-br0</span></span>
<span class="line"><span style="color:#F07178;">DEVICE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">br0</span></span>
<span class="line"><span style="color:#F07178;">ONBOOT</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"><span style="color:#F07178;">TYPE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Bridge             </span><span style="color:#676E95;font-style:italic;">#注意大小写</span></span>
<span class="line"><span style="color:#F07178;">BOOTPROTO</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">static</span></span>
<span class="line"><span style="color:#F07178;">IPADDR</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.255.180</span></span>
<span class="line"><span style="color:#F07178;">NETMASK</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">255.255.255.0</span></span>
<span class="line"><span style="color:#F07178;">GATEWAY</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">192.168.255.254</span></span></code></pre></div><p>其次，修改“/etc/sysconfig/network-scripts/ifcfg-eth0”：</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /etc/sysconfig/network-scripts/ifcfg-eth0</span></span>
<span class="line"><span style="color:#F07178;">DEVICE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">eth0</span></span>
<span class="line"><span style="color:#F07178;">NM_CONTROLLED</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">no    </span><span style="color:#676E95;font-style:italic;">#必须关闭NM_CONTROLLED</span></span>
<span class="line"><span style="color:#F07178;">BOOTPROTO</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">none      </span><span style="color:#676E95;font-style:italic;">#由于是桥接，BOOTPROTO=none，不要配置IP等信息</span></span>
<span class="line"><span style="color:#F07178;">ONBOOT</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes          </span><span style="color:#676E95;font-style:italic;">#启动时连接网卡</span></span>
<span class="line"><span style="color:#F07178;">BRIDGE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">br0          </span><span style="color:#676E95;font-style:italic;">#桥接到br0</span></span></code></pre></div><p>重启网络服务</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/etc/init.d/network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span></code></pre></div><p>查看桥接网络</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span></span></code></pre></div><table><thead><tr><th>bridge name</th><th>bridge id</th><th>STP enabled</th><th>interfaces</th></tr></thead><tbody><tr><td>br0</td><td>8000.00e081de016c</td><td>no</td><td>eth0</td></tr><tr><td>virbr0</td><td>8000.5254009219a2</td><td>yes</td><td>virbr0-nic</td></tr></tbody></table><p>四、kvm与virt-manager的关系**</p><p>virt-manager图形化管理工具一般装在客户端桌面系统上，管理kvm host的虚拟网络、存储、网络接口，vm的创建、配置、删除、启动关机等。</p><p><img src="`+o+'" alt="virt-manager客户端"></p><h3 id="五、客户端安装及使用virt-manager" tabindex="-1">五、客户端安装及使用virt-manager <a class="header-anchor" href="#五、客户端安装及使用virt-manager" aria-label="Permalink to &quot;五、客户端安装及使用virt-manager&quot;">​</a></h3><ul><li>客户端需要CentOS桌面系统。在“主菜单”→“系统”→“管理”→“添加/删除软件”中查找“virt-manager”，找到后，点击“应用”，进行安装。</li><li>安装完成后，打开方式位于“主菜单”→“系统工具”→“虚拟系统管理器”。</li></ul><p><img src="'+p+'" alt="安装virt-manager"></p><p><img src="'+i+'" alt="连接KVM服务器"></p><p><img src="'+r+'" alt="虚拟机配置"></p><h3 id="六、vnc的使用" tabindex="-1">六、VNC的使用 <a class="header-anchor" href="#六、vnc的使用" aria-label="Permalink to &quot;六、VNC的使用&quot;">​</a></h3><p>对应KVM服务器一般采用OpenStack、CloudStack等等工具利用浏览器来进行管理，这些工具安装配置更加复杂。 而virt-manager虽然简单，但目前为止还没有Windows版本。对于习惯Windows的用户，随时随地就能使用Linux桌面比较困难。因此需要VNC连接到Linux桌面客户端再利用virt-manager管理虚拟服务器。 建议在装有virt-manager的Linux桌面上安装VNC服务器，并开启VNC服务，以便Windows用户使用VNC客户端进行控制。</p><h3 id="七、需要进阶掌握的内容" tabindex="-1">七、需要进阶掌握的内容 <a class="header-anchor" href="#七、需要进阶掌握的内容" aria-label="Permalink to &quot;七、需要进阶掌握的内容&quot;">​</a></h3><ol><li>libvirt命令行</li><li>深入理解kvm相关概念</li><li>linux相关概念、命令及shell编程</li></ol>',46),h=[d];function y(m,v,C,g,b,k){return a(),n("div",null,h)}const A=s(c,[["render",y]]);export{u as __pageData,A as default};
