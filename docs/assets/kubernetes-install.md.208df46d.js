import{_ as s,o as n,c as e,e as a}from"./app.93924320.js";const l="/assets/kubernetes-install-container.84f8e834.jpg",t="/assets/kubernetes-install-architecture.bcc1f4e9.png",o="/assets/kubernetes-install-cluster.24bdb6f6.png",p="/assets/kubernetes-install-etcd.a315380b.png",c="/assets/kubernetes-install-docker.81fd47ff.png",r="/assets/kubernetes-install-flannel.65e57162.png",g=JSON.parse('{"title":"Kubernetes 安装指南","description":"kubernetes（简称k8s）是 Google 开源的容器集群管理系统，它构建 Docker 技术之上。","frontmatter":{"title":"Kubernetes 安装指南","description":"kubernetes（简称k8s）是 Google 开源的容器集群管理系统，它构建 Docker 技术之上。","time":"2018-04-29T00:00:00.000Z","category":"运维","tags":["DevOps","Docker","Kubernetes"]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"kubernetes","slug":"kubernetes","link":"#kubernetes","children":[]},{"level":3,"title":"kubernetes-master","slug":"kubernetes-master","link":"#kubernetes-master","children":[]},{"level":3,"title":"kubernetes-node","slug":"kubernetes-node","link":"#kubernetes-node","children":[]},{"level":3,"title":"flannel","slug":"flannel","link":"#flannel","children":[]},{"level":3,"title":"etcd","slug":"etcd","link":"#etcd","children":[]},{"level":3,"title":"docker","slug":"docker","link":"#docker","children":[]}]},{"level":2,"title":"规划","slug":"规划","link":"#规划","children":[{"level":3,"title":"前提","slug":"前提","link":"#前提","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"etcd配置","slug":"etcd配置","link":"#etcd配置","children":[]},{"level":3,"title":"node","slug":"node","link":"#node","children":[]}]}],"relativePath":"kubernetes-install.md","lastUpdated":1673773212000}'),i={name:"kubernetes-install.md"},d=a('<h1 id="kubernetes-安装指南" tabindex="-1">Kubernetes 安装指南 <a class="header-anchor" href="#kubernetes-安装指南" aria-hidden="true">#</a></h1><p><img src="'+l+'" alt="容器生态圈"></p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h2><h3 id="kubernetes" tabindex="-1">kubernetes <a class="header-anchor" href="#kubernetes" aria-hidden="true">#</a></h3><p>kubernetes（简称k8s）是Google开源的容器集群管理系统。它构建Docker技术之上，为容器化的应用提供资源调度、部署运行、服务发现、扩容缩容等整一套功能，本质上可看作是基于容器技术的mini-PaaS平台。</p><p><img src="'+t+'" alt="kubernetes"></p><h3 id="kubernetes-master" tabindex="-1">kubernetes-master <a class="header-anchor" href="#kubernetes-master" aria-hidden="true">#</a></h3><ul><li>kube-apiserver：k8s的管理接口</li><li>kube-scheduer：k8s调度器，容器的启动、迁移、扩容缩减时候，选择哪个node，就看它了。</li><li>kube-controller-manager：k8s对node的控制行为，比如怎么去调用node启动一个容器。</li></ul><h3 id="kubernetes-node" tabindex="-1">kubernetes-node <a class="header-anchor" href="#kubernetes-node" aria-hidden="true">#</a></h3><ul><li>kubelet：负责node的管理，基本所有操作都靠它。</li><li>kube-proxy：每个node里的container都在一个私有网络中，kube-proxy的作用就是做一个反向代理，让访问者访问这个node的时候，可以转发到内部对应的container。</li></ul><h3 id="flannel" tabindex="-1">flannel <a class="header-anchor" href="#flannel" aria-hidden="true">#</a></h3><p>flannel可以为容器提供网络服务。其模型为全部的容器使用一个network，然后在每个host上从network中划分一个子网subnet。为host上的容器创建网络时，从subnet中划分一个ip给容器。其采用目前比较流行的no server的方式，即不存在所谓的控制节点，而是每个host上的flanneld从一个etcd中获取相关数据，然后声明自己的子网网段，并记录在etcd中。其他的host对数据转发时，从etcd中查询到该子网所在的host的ip，然后将数据发往对应host上的flanneld，交由其进行转发。根据kubernetes的模型，即为每个pod提供一个ip。flannel的模型正好与之契合。因此flannel是最简单易用的kubernetes集群网络方案。</p><p><img src="'+o+'" alt="flannel"></p><h3 id="etcd" tabindex="-1">etcd <a class="header-anchor" href="#etcd" aria-hidden="true">#</a></h3><p>在分布式系统中，如何管理节点间的状态一直是一个难题，etcd像是专门为集群环境的服务发现和注册而设计，它提供了数据TTL失效、数据改变监视、多值、目录监听、分布式锁原子操作等功能，可以方便的跟踪并管理集群节点的状态。etcd的特性如下：</p><ul><li>简单: curl可访问的用户的API（HTTP+JSON）</li><li>安全: 可选的SSL客户端证书认证</li><li>快速: 单实例每秒 1000 次写操作</li><li>可靠: 使用Raft保证一致性</li></ul><p>etcd是CoreOS的核心组件，负责节点间的服务发现和配置共享，运行在CoreOS中的应用可以通过etcd读取或者写入数据。虽然etcd是为CoreOS而设计，但其可以运行在多个平台上，包括 OS X、Linux、BSD。角色功能如下：</p><ul><li>作为kubernetes的数据库，存储了k8s自身的信息、以及各种业务容器信息等。</li><li>存储flannel网络配置信息，供各节点协调。</li></ul><p><img src="'+p+'" alt="etcd"></p><h3 id="docker" tabindex="-1">docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h3><p>Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的Linux机器上，也可以实现虚拟化，容器是完全使用沙箱机制，相互之间不会有任何接口。一个完整的Docker有以下几个部分组成：</p><ul><li>Client：客户端</li><li>Daemon：守护进程</li><li>Container：容器</li><li>Image：镜像</li></ul><p><img src="'+c+'" alt="docker"></p><h2 id="规划" tabindex="-1">规划 <a class="header-anchor" href="#规划" aria-hidden="true">#</a></h2><p>本例虽然均用IP进行操作，但是建议部署的时候，建议用hosts或者DNS取代IP。</p><table><thead><tr><th>类型</th><th>组件</th><th style="text-align:center;">数量</th><th>IP</th></tr></thead><tbody><tr><td>Master</td><td>kubernetes-master etcd</td><td style="text-align:center;">1</td><td>192.168.20.25</td></tr><tr><td>Node</td><td>kubernetes-node docker flannel</td><td style="text-align:center;">2</td><td>192.168.20.22 192.168.20.26</td></tr></tbody></table><p><img src="'+r+`" alt="kubernetes with Flannel"></p><h3 id="前提" tabindex="-1">前提 <a class="header-anchor" href="#前提" aria-hidden="true">#</a></h3><ul><li>SELinux关闭</li><li>firewalld开放8080、2379端口</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><h3 id="etcd配置" tabindex="-1">etcd配置 <a class="header-anchor" href="#etcd配置" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">etcd</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置 /etc/etcd/etcd.conf</span></span>
<span class="line"><span style="color:#F07178;">ETCD_NAME</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">default</span></span>
<span class="line"><span style="color:#F07178;">ETCD_DATA_DIR</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/var/lib/etcd/default.etcd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">ETCD_LISTEN_CLIENT_URLS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://0.0.0.0:2379</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">ETCD_ADVERTISE_CLIENT_URLS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://192.168.20.25:2379</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启动</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">etcd</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">etcd</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">etcdctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/coreos.com/network/config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{ &quot;Network&quot;: &quot;10.1.0.0/16&quot; }</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h4 id="master" tabindex="-1">master <a class="header-anchor" href="#master" aria-hidden="true">#</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kubernetes-master</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置 /etc/kubernetes/apiserver</span></span>
<span class="line"><span style="color:#F07178;">KUBE_API_ADDRESS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--address=0.0.0.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_ETCD_SERVERS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--etcd_servers=http://192.168.20.25:2379</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_SERVICE_ADDRESSES</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--service-cluster-ip-range=10.254.0.0/16</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_ADMISSION_CONTROL</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--admission_control=NamespaceLifecycle,NamespaceExists,LimitRanger,SecurityContextDeny,ResourceQuota</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_API_ARGS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置 /etc/kubernetes/controller-manager</span></span>
<span class="line"><span style="color:#F07178;">KUBE_CONTROLLER_MANAGER_ARGS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--node-monitor-grace-period=10s --pod-eviction-timeout=10s</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置 /etc/kubernetes/config</span></span>
<span class="line"><span style="color:#F07178;">KUBE_LOGTOSTDERR</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--logtostderr=true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_LOG_LEVEL</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--v=0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_ALLOW_PRIV</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--allow_privileged=false</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_MASTER</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--master=http://192.168.20.25:8080</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kube-apiserver</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kube-scheduler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kube-controller-manager</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kube-apiserver</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kube-scheduler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kube-controller-manager</span></span>
<span class="line"></span></code></pre></div><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kubernetes-node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flannel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置 /etc/kubernetes/config</span></span>
<span class="line"><span style="color:#F07178;">KUBE_LOGTOSTDERR</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--logtostderr=true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_LOG_LEVEL</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--v=0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_ALLOW_PRIV</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--allow_privileged=false</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBE_MASTER</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--master=http://192.168.20.25:8080</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置 /etc/kubernetes/kubelet</span></span>
<span class="line"><span style="color:#F07178;">KUBELET_ADDRESS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--address=127.0.0.1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBELET_HOSTNAME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--hostname_override=192.168.20.22</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBELET_API_SERVER</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--api_servers=http://192.168.20.25:8080</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">KUBELET_ARGS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--pod-infra-container-image=kubernetes/pause</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置 /etc/sysconfig/flanneld</span></span>
<span class="line"><span style="color:#F07178;">FLANNEL_ETCD</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://192.168.20.25:2379</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">FLANNEL_ETCD_KEY</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/coreos.com/network</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kubelet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kube-proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flanenld</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kubelet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kube-proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flanneld</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span></span>
<span class="line"></span></code></pre></div>`,47),y=[d];function D(u,F,h,C,E,b){return n(),e("div",null,y)}const A=s(i,[["render",D]]);export{g as __pageData,A as default};