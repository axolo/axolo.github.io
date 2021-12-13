---
time: 2016-03-09
tags:
  - JavaScript
  - Node.js
  - NPM
  - MongoDB
  - Express
categories:
  - JavaScript
  - Vue.js
  - NPM
  - MongoDB
  - Express
---

# Javascript全栈开发笔记

## Server端常用组件

- express
  - Express框架
- ejs
  - EJS模板
- mongoose
  - MongoDB操作
- moment
  - 日期时间本地化格式化工具
- path
  - 路径处理
- body-parser
  - 表单处理
- connect-multiparty
  - 文件上传处理（特别针对Express）
- cookie-parser
  - COOKIE处理
- morgan
  - 日志处理
- crypto
  - 加密
- validator
  - 数据验证
- [node-gyp](https://github.com/nodejs/node-gyp)
  - 编译工具
- mocha
  - TDD、BDD
- karma
  - 自动化测试工具

## Client端常用组件

- AngularJS
  - AngularJS
- Ember.js
  - Ember.js框架
- jQuery
  - jQuery库
- BootStrap
  - BootStrap框架
- Moment.js
  - 日期时间格式化
- FormValidation
  - 表单验证
- bootstrap-datetimepicker
  - 日期时间汲取器
- jquery.qrcode
  - 二维码生成
- jquery.cityselect
  - 城市选择器（收集，暂无CDN收录）
- jQuery.QueryString
  - URL参数处理（收集，暂无CDN收录）
- fingerprint
  - 系统指纹，客户端唯一识别率高达94%（收集，暂无CDN收录）
- Font-Awesome
  - Font Awesome 图标库
- bs_pagination
  - BootStrap Pagination 分页

## MongoDB

```sh
vi /etc/yum.repos.d/MongoDB-Org-Stable.repo
```

```ini
[mongodb-org]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/stable/$basearch/
gpgcheck=0
enabled=1
```

```sh
vi ~/develop/data/mongodb/config.ini
```

```ini
## MongoDB config
port=27017
fork=true
directoryperdb=true
dbpath=~/develop/data/mongodb/data
logpath=~/develop/data/mongodb/log/mongodb.log
logappend=true
```

```sh
yum -y install mongodb-org
mongod -f ~/develop/data/mongodb/config.ini
```
> 防火墙开启27017端口
> 编写自启动脚本：~/.bashrc

### upsert和multi

```js
db.XXX.update(query, obj, upsert, multi);
```
> 对于upsert(默认为false)：如果upsert=true，如果query找到了符合条件的行，则修改这些行，如果没有找到，则追加一行符合query和obj的行。如果upsert为false，找不到时，不追加。
> 对于multi(默认为false): 如果multi=true，则修改所有符合条件的行，否则只修改第一条符合条件的行。

### ObjectID的使用（外键）
表a(_id,name)、b(_id,a_id,name)

其中b表中的a_id是a表中的_id 这个时候可以将获取到a表的_id转换成字符串(例如：'5759219342752333831')保存到b表中的a_id

用b表的a_id查询a表数据的时候：

```js
db.link.findOne({_id:db.ObjectID.createFromHexString(a_id)}, function (err, result) {
    callback(err, result);
  });
```

## NGiNX
> NGiNX安装配置同MongoDB，CentOS repo如下

```ini
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```
```sh
yum -y install nginx
systemctl start nginx.service
```

## Node.js

- 安装配置CentOS7（知识点：Linux网络配置、firewalld防火墙配置）
```sh
vi /etc/sysconfig/network-scripts/ifcfg-ens160
systemctl disable firewalld.service
```

- 从git安装nvm管理Node.js（知识点：git操作，yum操作）
```sh
yum -y install git
git clone https://github.com/cnpm/nvm.git
# 配置nvm自启动（知识点：Linux自启动读取文件顺序及login、non-login）
vi /etc/rc.d/rc.local
source /home/user/git/nvm/nvm.sh
# 安装node（知识点：nvm命令）
nvm ls-remote
nvm install 0.12
```

- 安装npm并管理Node.js（知识点：npm操作。万能的npm ^-^）
```sh
yum install npm
npm -g install npm
npm -g install n
n stable
```

- 创建Node.JS应用
```sh
mkdir node-app
```

- npm速度太慢（知识点：npm命令）
- 且看：http://npm.taobao.org/
- 指定版本和镜像安装模块：
```sh
npm install -g express@3.2.2 --registry=https://registry.npm.taobao.org
```

- 编写app.js（知识点：IDE选择、WinSCP、FTP等的应用）
- 详见：https://github.com/alsotang/node-lessons/tree/master/lesson1

- 运行Node.JS应用（知识点：nvm命令、node命令、Linux环境变量$PATH）
```sh
# nvm run 0.12.0 app.js
node app.js
```

## exports与module.exports


## mongoose
```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
//1.定义schema，也就是传统意义的表结构
var BlogSchema = new mongoose.Schema({
  user_id: { type: Number, index: true },
  username: { type: String }
});
//2.定义model
mongoose.model("Blog", BlogSchema);
// model名，绑定的schema，db collection名
//mongoose.model("Blog", BlogSchema,"BLOG");
//3.日常操作
var Blog = mongoose.model("Blog"); //获得model实例
var blog1 = new Blog({ id: 4, title: 'ully' });
//创建
blog1.save(function(err, doc){
  console.log(JSON.stringify(err ? err : doc));
});
//查询
Blog.find({ id: 4 }, function(err,doc){
  console.log(JSON.stringify(err ? err : doc));
});
//更新
Blog.update({id: 4}, { title: "ulii" }, function(err,doc){
  console.log(JSON.stringify(err ? err : doc));
});
//删除
Blog.remove({ id: 4 }, function(err,doc){
  console.log(JSON.stringify(err ? err : doc));
});
```

## Express

#### 创建、安装、运行express项目及安装mongoose
> 鉴于国情，强烈建议使用cnpm

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install express-generator -g
express app -e
cd app & cnpm install
cnpm install mongoose --save
node ./bin/www
```

#### 执行流程（分号结尾的为代码）
```js
  ./bin/www
        |
        app.js
        |
        app.use(url, require(router_file));
                |            |
                url+         router.http_method(url, function(req, res, next){ res.render(views_file, { key: value }); });
                                                |                                         |
                                                +url                                      views(html)
```

### 文件上传
> body-parser在Express中使用的这个模块只支持JSON和urlencoded。当我们submit文件的时候，它处理不了。所以办法很简单，在需要接受文件的地方把body-parser替换掉，推荐使用connect-multiparty。multiparty不会清理临时文件，需手动清理，类似中间件可以考虑使用connect-busboy。用法其实也很简单，稍微修改一下post方法就可以了：

```js
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
app.post('/upload', multipartMiddleware, function(req, resp) {
    console.log(req.body, req.files);
    // don't forget to delete all req.files when done
});
```

### 不同分区间移动文件（常见于Windows）
```js
  var fs = require('fs');
  var is = fs.createReadStream('source-file');
  var os = fs.createWriteStream('target-file');
  is.pipe(os);
  is.on('end', function(){ fs.unlinkSync('source-file'); });
```

### 计算文件MD5、HASH
```js
var crypto = require('crypto');
var fs = require('fs');
var rs = fs.createReadStream('./file.tgz');
var hash = crypto.createHash('md5');
rs.on('data', hash.update.bind(hash));
rs.on('end', function () {
  console.log(hash.digest('hex'));
});
```

## 单元测试
> 使用karma、mocha结合grunt进行测试
```sh
npm install -g karma
npm install -g karma-mocha
npm install -g karma-chrome-launcher
cd path/to/project
karma init
karma start karma.conf.js
```

## Ember.js学习笔记

### Yeoman
```sh
npm install -g yo bower grunt grunt-cli
yo --version && bower --version && grunt --version
```
> 输出对应版本信息

### Yeoman generator
```sh
mkdir emberjs-app && cd emberj-app
yo
```

## Sublime Text

- 快捷键
  - 上一行任意位置另起一新行
    - Ctrl + Enter
  - 复制行
    - Ctrl + Shift + D
  - 删除行
    - Ctrl + Shift + K
  - 从光标删除到行尾
    - Ctrl + K + K
  - 运行命令
    - Ctrl + Shift + P
  - 同步编辑
    - Alt + F3
  - 整行移动
    - Ctrl + Shift + 上下箭头
- 插件
  - Package Contrl
    - 插件管理工具
  - Emmet
    - HTM快速编写插件
    - Ctrl + E
  - DocBlockr
    - 注释自动生成工具
    - Ctrl + /
    - /** + Enter
    - /* + Enter
  - HTML-CSS-JS Prettify
    - HTML、CSS、JS代码格式化工具
    - Ctrl + Shift + H
  - Bracket Highlighter
    - 括号成对提示
  - Trailing Spaces
    - 清理代码行尾空白
  - IMESupport
    - 输入法跟随（适用于Windows 8 +）
  - SideBar Enhandcements
    - 侧边栏增强工具
  - SublimeGit
    - Git支持
  - Markdown
    - Markdown语法支持
  - TypeScript
    - TypeScript语法支持
  - Nodejs
    - Node.js语法支持
  - jQuery
    - jQuery语法支持
  - EJS
    - EJS模版语法支持


> 方跃明
> 2016-03-09
