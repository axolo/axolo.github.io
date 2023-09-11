import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.cd6e3458.js";const l="/assets/kubernetes-install-container.84f8e834.jpg",o="/assets/kubernetes-install-architecture.bcc1f4e9.png",p="/assets/kubernetes-install-cluster.24bdb6f6.png",t="/assets/kubernetes-install-etcd.a315380b.png",c="/assets/kubernetes-install-docker.81fd47ff.png",r="/assets/kubernetes-install-flannel.65e57162.png",q=JSON.parse('{"title":"Kubernetes 安装指南","description":"kubernetes（简称k8s）是 Google 开源的容器集群管理系统，它构建 Docker 技术之上。","frontmatter":{"title":"Kubernetes 安装指南","description":"kubernetes（简称k8s）是 Google 开源的容器集群管理系统，它构建 Docker 技术之上。","time":"2018-04-29T00:00:00.000Z","category":"运维","tags":["DevOps","Docker","Kubernetes"]},"headers":[],"relativePath":"kubernetes-install.md","filePath":"kubernetes-install.md"}'),i={name:"kubernetes-install.md"},E=e('<h1 id="kubernetes-安装指南" tabindex="-1">Kubernetes 安装指南 <a class="header-anchor" href="#kubernetes-安装指南" aria-label="Permalink to &quot;Kubernetes 安装指南&quot;">​</a></h1><blockquote><p>方跃明 2018-04-29</p></blockquote><p><img src="'+l+'" alt="容器生态圈"></p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><h3 id="kubernetes" tabindex="-1">kubernetes <a class="header-anchor" href="#kubernetes" aria-label="Permalink to &quot;kubernetes&quot;">​</a></h3><p>kubernetes（简称k8s）是Google开源的容器集群管理系统。它构建Docker技术之上，为容器化的应用提供资源调度、部署运行、服务发现、扩容缩容等整一套功能，本质上可看作是基于容器技术的mini-PaaS平台。</p><p><img src="'+o+'" alt="kubernetes"></p><h3 id="kubernetes-master" tabindex="-1">kubernetes-master <a class="header-anchor" href="#kubernetes-master" aria-label="Permalink to &quot;kubernetes-master&quot;">​</a></h3><ul><li>kube-apiserver：k8s的管理接口</li><li>kube-scheduer：k8s调度器，容器的启动、迁移、扩容缩减时候，选择哪个node，就看它了。</li><li>kube-controller-manager：k8s对node的控制行为，比如怎么去调用node启动一个容器。</li></ul><h3 id="kubernetes-node" tabindex="-1">kubernetes-node <a class="header-anchor" href="#kubernetes-node" aria-label="Permalink to &quot;kubernetes-node&quot;">​</a></h3><ul><li>kubelet：负责node的管理，基本所有操作都靠它。</li><li>kube-proxy：每个node里的container都在一个私有网络中，kube-proxy的作用就是做一个反向代理，让访问者访问这个node的时候，可以转发到内部对应的container。</li></ul><h3 id="flannel" tabindex="-1">flannel <a class="header-anchor" href="#flannel" aria-label="Permalink to &quot;flannel&quot;">​</a></h3><p>flannel可以为容器提供网络服务。其模型为全部的容器使用一个network，然后在每个host上从network中划分一个子网subnet。为host上的容器创建网络时，从subnet中划分一个ip给容器。其采用目前比较流行的no server的方式，即不存在所谓的控制节点，而是每个host上的flanneld从一个etcd中获取相关数据，然后声明自己的子网网段，并记录在etcd中。其他的host对数据转发时，从etcd中查询到该子网所在的host的ip，然后将数据发往对应host上的flanneld，交由其进行转发。根据kubernetes的模型，即为每个pod提供一个ip。flannel的模型正好与之契合。因此flannel是最简单易用的kubernetes集群网络方案。</p><p><img src="'+p+'" alt="flannel"></p><h3 id="etcd" tabindex="-1">etcd <a class="header-anchor" href="#etcd" aria-label="Permalink to &quot;etcd&quot;">​</a></h3><p>在分布式系统中，如何管理节点间的状态一直是一个难题，etcd像是专门为集群环境的服务发现和注册而设计，它提供了数据TTL失效、数据改变监视、多值、目录监听、分布式锁原子操作等功能，可以方便的跟踪并管理集群节点的状态。etcd的特性如下：</p><ul><li>简单: curl可访问的用户的API（HTTP+JSON）</li><li>安全: 可选的SSL客户端证书认证</li><li>快速: 单实例每秒 1000 次写操作</li><li>可靠: 使用Raft保证一致性</li></ul><p>etcd是CoreOS的核心组件，负责节点间的服务发现和配置共享，运行在CoreOS中的应用可以通过etcd读取或者写入数据。虽然etcd是为CoreOS而设计，但其可以运行在多个平台上，包括 OS X、Linux、BSD。角色功能如下：</p><ul><li>作为kubernetes的数据库，存储了k8s自身的信息、以及各种业务容器信息等。</li><li>存储flannel网络配置信息，供各节点协调。</li></ul><p><img src="'+t+'" alt="etcd"></p><h3 id="docker" tabindex="-1">docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;docker&quot;">​</a></h3><p>Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的Linux机器上，也可以实现虚拟化，容器是完全使用沙箱机制，相互之间不会有任何接口。一个完整的Docker有以下几个部分组成：</p><ul><li>Client：客户端</li><li>Daemon：守护进程</li><li>Container：容器</li><li>Image：镜像</li></ul><p><img src="'+c+'" alt="docker"></p><h2 id="规划" tabindex="-1">规划 <a class="header-anchor" href="#规划" aria-label="Permalink to &quot;规划&quot;">​</a></h2><p>本例虽然均用IP进行操作，但是建议部署的时候，建议用hosts或者DNS取代IP。</p><table><thead><tr><th>类型</th><th>组件</th><th style="text-align:center;">数量</th><th>IP</th></tr></thead><tbody><tr><td>Master</td><td>kubernetes-master etcd</td><td style="text-align:center;">1</td><td>192.168.20.25</td></tr><tr><td>Node</td><td>kubernetes-node docker flannel</td><td style="text-align:center;">2</td><td>192.168.20.22 192.168.20.26</td></tr></tbody></table><p><img src="'+r+`" alt="kubernetes with Flannel"></p><h3 id="前提" tabindex="-1">前提 <a class="header-anchor" href="#前提" aria-label="Permalink to &quot;前提&quot;">​</a></h3><ul><li>SELinux关闭</li><li>firewalld开放8080、2379端口</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="etcd配置" tabindex="-1">etcd配置 <a class="header-anchor" href="#etcd配置" aria-label="Permalink to &quot;etcd配置&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">etcd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">etcd</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/etcd/etcd.conf</span></span>
<span class="line"><span style="color:#F97583;">ETCD_NAME</span><span style="color:#E1E4E8;">=default</span></span>
<span class="line"><span style="color:#F97583;">ETCD_DATA_DIR</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/var/lib/etcd/default.etcd&quot;</span></span>
<span class="line"><span style="color:#F97583;">ETCD_LISTEN_CLIENT_URLS</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://0.0.0.0:2379&quot;</span></span>
<span class="line"><span style="color:#F97583;">ETCD_ADVERTISE_CLIENT_URLS</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://192.168.20.25:2379&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/etcd/etcd.conf</span></span>
<span class="line"><span style="color:#D73A49;">ETCD_NAME</span><span style="color:#24292E;">=default</span></span>
<span class="line"><span style="color:#D73A49;">ETCD_DATA_DIR</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/var/lib/etcd/default.etcd&quot;</span></span>
<span class="line"><span style="color:#D73A49;">ETCD_LISTEN_CLIENT_URLS</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://0.0.0.0:2379&quot;</span></span>
<span class="line"><span style="color:#D73A49;">ETCD_ADVERTISE_CLIENT_URLS</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://192.168.20.25:2379&quot;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 启动</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">etcd</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">etcd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 启动</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">etcd</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">etcd</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">etcdctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/coreos.com/network/config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{ &quot;Network&quot;: &quot;10.1.0.0/16&quot; }&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">etcdctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/coreos.com/network/config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{ &quot;Network&quot;: &quot;10.1.0.0/16&quot; }&#39;</span></span></code></pre></div><h4 id="master" tabindex="-1">master <a class="header-anchor" href="#master" aria-label="Permalink to &quot;master&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kubernetes-master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kubernetes-master</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/apiserver</span></span>
<span class="line"><span style="color:#F97583;">KUBE_API_ADDRESS</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--address=0.0.0.0&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_ETCD_SERVERS</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--etcd_servers=http://192.168.20.25:2379&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_SERVICE_ADDRESSES</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--service-cluster-ip-range=10.254.0.0/16&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_ADMISSION_CONTROL</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--admission_control=NamespaceLifecycle,NamespaceExists,LimitRanger,SecurityContextDeny,ResourceQuota&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_API_ARGS</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/apiserver</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_API_ADDRESS</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--address=0.0.0.0&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_ETCD_SERVERS</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--etcd_servers=http://192.168.20.25:2379&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_SERVICE_ADDRESSES</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--service-cluster-ip-range=10.254.0.0/16&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_ADMISSION_CONTROL</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--admission_control=NamespaceLifecycle,NamespaceExists,LimitRanger,SecurityContextDeny,ResourceQuota&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_API_ARGS</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/controller-manager</span></span>
<span class="line"><span style="color:#F97583;">KUBE_CONTROLLER_MANAGER_ARGS</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--node-monitor-grace-period=10s --pod-eviction-timeout=10s&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/controller-manager</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_CONTROLLER_MANAGER_ARGS</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--node-monitor-grace-period=10s --pod-eviction-timeout=10s&quot;</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/config</span></span>
<span class="line"><span style="color:#F97583;">KUBE_LOGTOSTDERR</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--logtostderr=true&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_LOG_LEVEL</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--v=0&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_ALLOW_PRIV</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--allow_privileged=false&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_MASTER</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--master=http://192.168.20.25:8080&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/config</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_LOGTOSTDERR</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--logtostderr=true&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_LOG_LEVEL</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--v=0&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_ALLOW_PRIV</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--allow_privileged=false&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_MASTER</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--master=http://192.168.20.25:8080&quot;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kube-apiserver</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kube-scheduler</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kube-controller-manager</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kube-apiserver</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kube-scheduler</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kube-controller-manager</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kube-apiserver</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kube-scheduler</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kube-controller-manager</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kube-apiserver</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kube-scheduler</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kube-controller-manager</span></span></code></pre></div><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;node&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kubernetes-node</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flannel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kubernetes-node</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flannel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/config</span></span>
<span class="line"><span style="color:#F97583;">KUBE_LOGTOSTDERR</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--logtostderr=true&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_LOG_LEVEL</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--v=0&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_ALLOW_PRIV</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--allow_privileged=false&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBE_MASTER</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--master=http://192.168.20.25:8080&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/config</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_LOGTOSTDERR</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--logtostderr=true&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_LOG_LEVEL</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--v=0&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_ALLOW_PRIV</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--allow_privileged=false&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBE_MASTER</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--master=http://192.168.20.25:8080&quot;</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/kubelet</span></span>
<span class="line"><span style="color:#F97583;">KUBELET_ADDRESS</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--address=127.0.0.1&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBELET_HOSTNAME</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--hostname_override=192.168.20.22&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBELET_API_SERVER</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--api_servers=http://192.168.20.25:8080&quot;</span></span>
<span class="line"><span style="color:#F97583;">KUBELET_ARGS</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;--pod-infra-container-image=kubernetes/pause&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/kubernetes/kubelet</span></span>
<span class="line"><span style="color:#D73A49;">KUBELET_ADDRESS</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--address=127.0.0.1&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBELET_HOSTNAME</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--hostname_override=192.168.20.22&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBELET_API_SERVER</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--api_servers=http://192.168.20.25:8080&quot;</span></span>
<span class="line"><span style="color:#D73A49;">KUBELET_ARGS</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;--pod-infra-container-image=kubernetes/pause&quot;</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/sysconfig/flanneld</span></span>
<span class="line"><span style="color:#F97583;">FLANNEL_ETCD</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://192.168.20.25:2379&quot;</span></span>
<span class="line"><span style="color:#F97583;">FLANNEL_ETCD_KEY</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/coreos.com/network&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 配置 /etc/sysconfig/flanneld</span></span>
<span class="line"><span style="color:#D73A49;">FLANNEL_ETCD</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://192.168.20.25:2379&quot;</span></span>
<span class="line"><span style="color:#D73A49;">FLANNEL_ETCD_KEY</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/coreos.com/network&quot;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kubelet</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kube-proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flanenld</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kubelet</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kube-proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flanneld</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kubelet</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kube-proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flanenld</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kubelet</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kube-proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flanneld</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span></code></pre></div>`,48),y=[E];function d(u,h,F,b,k,g){return a(),n("div",null,y)}const C=s(i,[["render",d]]);export{q as __pageData,C as default};
