---
title: 专有钉调试
description: 没有开发工具的加持，专有钉容器内调试，犹如黑灯瞎火走夜路，苦不堪言。
time: 2023-09-06
category: 前端
tags: [钉钉, 专有钉, 浙政钉]
---

# 专有钉调试

没有开发工具的加持，专有钉容器内调试，犹如黑灯瞎火走夜路，苦不堪言。

|   场景   | 应用类型 |                   说明                   |
| -------- | :------: | ---------------------------------------- |
| 官方工具 |  小程序  | 目前仍不支持H5项目调试（貌似不打算支持） |
| vConsole |    H5    | 容器内开发者调试面板                     |
| 跳转协议 |    H5    | 容器内打开，获得容器能力，如：鉴权、定位 |
| H5调试   |    H5    | 应用容器内运行，开发者调试面板容器外展示 |
| 纯HTML   |    H5    | 少量需要获得容器能力                     |

::: tip 浙政钉
浙政钉是专有钉的一个实现，这里提供的方法同样适用于浙政钉。
:::

## 官方工具

如果专有钉应用类型为[专有钉小程序]，请下载并使用官方提供的[小程序开发工具]。

## vConsole

[vConsole] 是[微信小程序官方调试工具]，一个轻量、可拓展、针对手机网页的前端开发者调试面板。
配合 [vite-plugin-conditional-compiler] 条件编译使用，效果更佳。

## 跳转协议

::: danger 专有钉浏览器支持滞后
专有钉容器对浏览器技术的现代特性支持严重滞后，请谨慎使用。
比如不支持`module`模块化，不支持`flex`布局的`gap`等。
:::

|    浏览器    |                       优点                       |       缺点       |
| ------------ | ------------------------------------------------ | ---------------- |
| 系统浏览器   | 开发人员工具调试面板、现代化特性支持             | 无法获得容器能力 |
| 专有钉浏览器 | 可获得容器能力，如：获取鉴权码`dd.getAuthCode()` | 调试困难 :(      |

专有钉PC端提供了系统浏览器（容器外）和专有钉浏览器（容器内）两种方式打开页面。
默认的，PC端链接打开方式为系统浏览器，而非像App那样使用专有钉浏览器打开。

涉及容器能力的页面，建议使用[统一跳转协议说明]和[服务端API之工作通知]所示的跳转协议，在容器内打开，进行调试。
比如：专有钉内发消息给自己，内容为以下链接，点击即可在专有钉侧边栏打开，获得容器能力。

```
taurus://taurusclient/page/link?pc_slide=true&url=http%3A%2F%2Flocalhost%3A5173%2F
```


## H5调试

::: danger 重要提醒
发布到生产环境时，请务必关闭vConsole等调试工具，并删除相关调试代码。
:::

在容器内打开的页面，若未启用 [vConsole]，可按[H5应用调试工具]所示，利用`uuid`进行调试，在系统浏览器打开调试面板。

1. 修改入口文件`index.html`，添加调试代码到`<head>`：

```html
<head>
  <script src="https://g.alicdn.com/code/npm/@ali/dingtalk-h5-remote-debug-sdk/0.1.3/app.bundle.js"></script>
  <script>
    h5RemoteDebugSdk.init({
      uuid: "7b032350-10cb-436e-a6d8-482f9650253e", // 按应用不同，请自行生成
      observerElement: document.documentElement
    })
  </script>
</head>
```

2. 重启应用后，在系统浏览器打开对应链接：

```
https://render.alipay-eco.com/p/s/devtools-web/index.html?ch2=7b032350-10cb-436e-a6d8-482f9650253e&chInfo=dingtalk-h5
```

## 纯HTML

由于专有钉内置浏览器对`module`支持滞后，导致`Vite`默认配置编译的页面打开异常（白屏）。
因此，少量涉及容器能力的页面建议使用纯HTML编码。如：

> 获取鉴权码并拼接，以系统浏览器打开指定`url`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>鉴权</title>
  <script src="https://g.alicdn.com/gdt/jsapi/1.9.43/index.js"></script>
  <script>
    dd.ready(() => {
      dd.getAuthCode().then(res => {
        const code = res.code || res.auth_code
        const { origin, pathname, href } = location
        const base = origin + pathname + '?url='
        const link = href.slice(base.length)
        const url = link + (link.indexOf('?') > -1 ? '&' : '?') + 'code=' + code
        document.getElementById('message').innerHTML = url
        dd.openLink({ url }).then(() => dd.closePage())
      }).catch(error => {
        const { message = '请咨询管理员' } = error
        dd.confirm({ title: '出错了', message })
      })
    })
  </script>
</head>
<body>
  <div id="message">加载中，请稍候……</div>
</body>
</html>
```

::: tip legacy模式
大量页面涉及容器能力，则需要配置 [@vitejs/plugin-legacy] 以兼容容器。
Vite plugins 配置：`legacy({ targets: ['Chrome 64', 'iOS 10'] })`。
:::

[vConsole]: https://github.com/Tencent/vConsole/blob/HEAD/README_CN.md
[vite-plugin-conditional-compiler]: https://github.com/KeJunMao/vite-plugin-conditional-compile
[@vitejs/plugin-legacy]: https://cn.vitejs.dev/plugins/#vitejsplugin-legacy
[专有钉小程序]: https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=DEV_GUIDE&docKey=3355059
[小程序开发工具]: https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=DEV_GUIDE&docKey=3355060
[统一跳转协议说明]: https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=DEV_GUIDE&docKey=3355278
[服务端API之工作通知]: https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=serverapi&docKey=2674860
[H5应用调试工具]: https://openplatform-portal.dg-work.cn/portal/#/helpdoc?apiType=TOOL_SOURCES&docKey=3863416
[微信小程序官方调试工具]: https://developers.weixin.qq.com/miniprogram/dev/framework/usability/vConsole.html