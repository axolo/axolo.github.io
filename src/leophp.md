---
title: LeoPHP Framework
description: 由于工作需要重拾PHP，折腾好几个框架，臃肿厚重，可谓专治各种不服，终于被感动到哭了。
time: 2016-12-01
category: 后端
tags: [PHP]
---

# LeoPHP Framework

> 方跃明 2016-12-01

## 更新

细微改动不再同步更新到coding.net，请移步：

- <https://github.com/axolo/leophp>
- <https://packagist.org/packages/axolo/leophp>

## 说明

- ver
  - Version: 0.1.4
  - Required: PHP>=5.3 && PDO
  - 初步完成MVC
- app
  - 完成controller、action、view映射
  - 当前env存取（未完成）
- controller
  - 基本上完全没写
- model
  - 基本上完全没写
  - ***防止SQL攻击***（请手动使用Utils::sql()）
- view
  - 注入视图变量名：`$res`（属于裸奔状态）
  - 完成View::jsonp($res)
  - ***防止XSS攻击***（请手动使用Utils::xss()）
  - 可指定视图渲染（未完成）
- config
  - 用户配置合并默认配置
- plugin
  - 完成用户插件按配置加载及自动忽略不存在配置
- stroage
  - 目前可用扩展自PDO（偷懒）
  - 或者可以medoo？
- utils
  - Utils::xss($htm)
    - 防止XSS跨站攻击，echo和print时请考虑使用
  - Utils::sql($sql)
    - 防止SQL注入攻击，客户端输入SQL时务必使用

## 安装

### Composer

- [Composer中文文档](http://docs.phpcomposer.com)
- composer.json: `"require": { "php": ">=5.3", "axolo/leophp": "@dev" }`
- `composer update`

### 目录

```
app
 ├─ vendor            //Composer
 │    └─ axolo
 │         └─ leophp  //LeoPHP framework
 ├─ config
 │    └─ config.php   //App config
 ├─ controllers
 │    └─ Index.php
 ├─ models
 │    └─ Blog.php
 ├─ plugins
 │    └─ cros.php
 ├─ html             //(optional) only a example
 │    └─ jsonp.html  //json or jsonp response example
 └─ views
      └─ index
           └─ index.php
```

### 配置

```php
<?php
/**
 * LeoPHP Framework config file
 * @todo  array_merge(default_config, user_config)
 */
return array(
  'core' => array(
    //pathinfo:     /index.php/controller/action
    //querystring:  /index.php?controller=string&action=string (@todo)
    //urlrewrite:   /controller/action (@todo may be just a .htaccess)
    'request' => 'pathinfo',
    //json:   JSON      Conflux Response, e.g. RESTful
    //jsonp:  JSONP     (@todo)
    //xml:    XML       (@todo)
    //html:   HTML      default output, view render
    'response' => 'json',
    //controller: ucfirst(controller)
    'controller' => 'index',
    //action: default index
    'action' => 'index',
    //charset: default utf8
    'charset' => 'utf8'
  ),
  // ./plugins/plugins[key].php || framework/plugins[key].php
  //Array[plugin => params]
  'plugins' => array(
    'cors' => true,               //CORS
    'rbac' => true,               //RBAC
    'restful' => false,           //RESTful
    'oauth' => array(),           //OAuth
    'sso' => false,               //Single Sign-On
    'debug' => true,              //Debug
    'halt' => 'out of service',   //Service halt
    'hash' => 'String of secret'  //COOKIE, password, token ...
  ),
  //Database Conection
  'storage' => array(
    'engine' => 'pdo',
    'dsn' => 'mysql:host=localhost;dbname=information_schema',
    'user' => 'root',
    'password' => 'google',     //Eh~~~
    'options' => array()
  ),
  //Farmework Infomation (Just for funny!)
  'framework' => array(
    'name' => 'LeoPHP',
    'version' => '0.1.4',
    'author' => 'Yueming Fang',
    'git' => 'https://github.com/axolo/leophp'
  )
);
```

### 应用入口：index.php

```php
<?php
require '../vendor/autoload.php';

use leophp\App        as App;
use leophp\Controller as Controller;
use leophp\Model      as Model;
use leophp\Storage    as Storage;

$config = __DIR__ . DIRECTORY_SEPARATOR .'config' . DIRECTORY_SEPARATOR . 'config.php';

App::run($config);
```

- 控制器：controllers/Index.php

```php
<?php
namespace leophp;

class Index extends Controller {

  public function index() {
    return array('controller' => 'index', 'action' => 'index');
  }

}
```

### 视图：views/index/index.php

```php
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>index/index</title>
</head>
<body>
  <?php var_dump($res); ?>
</body>
</html>
```

## 答疑

- 配置文件为什么不用json或者ini格式？好吧，可以写注释，可以写逻辑，而且避免不小心被访问，省心。君不见`webpack.config.js`也这么干？
- 为什么很多都基本上没写？这个……好吧，的确是因为懒。懒是一种态度。我们的口号是：懒，要向Symfony、Laravel看齐！我要轮子！——这借口，没谁了吧。

## 由来

由于工作需要，重新开始用PHP，折腾好几个框架（~~班主任：这里就不点名了~~），臃肿厚重，可谓专治各种不服，终于被感动到哭了。

一个曾经辉煌在前端的服务端脚本语言，本来草根得很，一定各种作，非高大上到无人敢碰才好。

换做华妃娘娘来，必定又是那句经典名言：“贱人就是矫情”。有必要搞得如此混乱不堪么？清爽干净不好么？

非常怀念我亲爱的Node.js、Vue、Express，甚至对冷落许久的jQuery也莫名觉得亲切，相貌可人了。

——网上说饥渴已久的人，看到一头老母猪，都觉得眉清目秀，也许这就是这种感觉罢。

哭了归哭了，还是得用PHP来写，环境是用来迁就的，除非自己牛到不行，可惜我属马，那就自己写一个拉倒吧。

想起几年前混论坛那段时间对PHP的感悟，这么多年来PHP的发展也许更加印证了我的看法。

想想其实并非PHP本身的罪过，人家Facebook不是用得好好的？也许是使唤PHP的某些人暂时迷茫了方向，大炮轰蚂蚁，何其壮观！

- [有感于“论PHP的倒掉”](http://www.iteye.com/topic/523378)
- [PHP框架的繁荣是正确的发展方向吗？](http://www.iteye.com/topic/319039)