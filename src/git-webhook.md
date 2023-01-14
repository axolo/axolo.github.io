---
title: Git WebHooks
description: 当代码仓库发生某些事件（提交、合并、讨论）时，触发已经定义好的WebHooks，将数据提交到WebHooks服务所在的服务器，服务端对数据解析，执行对应的脚本，实现自动部署等一系列操作。
time: 2019-09-23
categories: [git]
tags: [Git, Node.js]
---

# Git WebHooks

当代码仓库发生某些事件（提交、合并、讨论）时，触发已经定义好的WebHooks，将数据提交到WebHooks服务所在的服务器，服务端对数据解析，执行对应的脚本，实现自动部署等一系列操作。

## 代码实现

此处以码云签名密钥方式为例，实现代码使用`Egg.js`框架。

### 配置

```js
// config/config.default.js
'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1597542673364_3462';

  // CSRF
  // https://eggjs.org/zh-cn/core/security.html
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ], // FIXME: only for development
  };

  // WebHooks
  // https://gitee.com/help/categories/40
  config.hooks = [{
    userAgent: 'git-oschina-hook', // 服务商识别串
    repository: { // 仓库
      url: 'https://gitee.com/oschina/git-osc',
    },
    ref: 'refs/heads/test_version', // 触发的分支
    hook_name: 'push_hooks', // 触发的事件
    secret: 'this is secret', // 签名密钥
    exec: 'bash ~/bash/webhook/git-osc-push.sh', // 执行的脚本
  }];

  return config;
};
```

### 控制器

```js
// app/controller/index.js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async create() {
    const { ctx, app, service } = this;
    const { header, body, query } = ctx.request;
    const { repository: { url }, hook_name, timestamp, sign, refs } = body;
    console.log({ header, body, query });
    const hook = app.config.hooks.find(h => h.repository.url === url && h.hook_name === hook_name);
    if (!hook) {
      ctx.body = {
        errcode: 404,
        errmsg: 'hooks not found',
        errinfo: { url, hook_name },
      };
      return;
    }
    const { secret, exec } = hook;
    if (hook.refs && hook.refs !== refs) {
      ctx.body = {
        errcode: 403,
        errmsg: 'branch not match',
        errinfo: refs,
      };
      return;
    }
    const text = timestamp + '\n' + secret;
    const hmac = service.webhook.sign(secret, text);
    if (hmac !== sign) {
      ctx.body = {
        errcode: 401,
        errmsg: 'sign not match',
        errinfo: { sign },
      };
      return;
    }
    const { stdout, stderr } = await service.webhook.exec(exec);
    if (stderr) {
      ctx.body = {
        errcode: 502,
        errmsg: 'exec failed',
        errinfo: stderr,
      };
      return;
    }
    ctx.logger.info(stdout);
    const res = {
      errcode: 0,
      errmsg: 'ok',
    };
    ctx.body = res;
  }
}

module.exports = HomeController;
```

### 相关服务

```js
// app/service/webhook.js
'use strict';

const crypto = require('crypto');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const Service = require('egg').Service;

class WebhookService extends Service {
  sign(secret, text) {
    const hmac = crypto.createHmac('sha256', secret).update(text).digest('base64');
    return hmac;
  }

  exec(...args) {
    return exec(...args);
  }
}

module.exports = WebhookService;
```

## 服务器

### 部署WebHooks

将以上代码部署到服务器上，并启动服务，假设运行于：https://webhook.your.server。

### 创建公钥

```shell
cd
ssh-keygen -t rsa -C "xxxxx@xxxxx.com"
# 一路回车
# 公钥文件：~/.ssh/id_rsa.pub
```

### 执行脚本

以`Egg.js`项目为例

```shell
# ~/bash/webhook/git-osc-push.sh
set -xe
cd ~/projects/git-osc-push
yarn stop
git pull
yarn
yarn start
exit
```

### 下拉代码仓库

以SSH格式clone或下拉仓库，若跳出公钥确认信息，回复`yes`

```shell
git clone git@gitee.com:name/repo.git
```

## 代码仓库

### 添加部署公钥

将上面生成的公钥，添加到对应仓库的部署公钥管理里，并启用

### 设置WebHooks

进入对应仓库（`name/repo`），WebHooks设置，添加一个WebHooks

- URL： https://webhook.your.server
- 签名密钥：`this is secret`
- 选择事件：如PUSH

至此完成部署和配置，当对应仓库有PUSH事件时，将触发WebHooks实现自动部署。

> 方跃明
> 2020-09-23
