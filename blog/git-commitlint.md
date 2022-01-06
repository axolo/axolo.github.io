---
time: 2020-01-02
categories:
  - git
tags:
  - git
---

# Git提交规范

`Husky`接管Git钩子在commit-msg时利用`commitlint`检查提交规范。

## 参考

- [规范构建](https://juejin.im/post/5d1f1e595188254b732b60a3)
- [编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [Husky](https://github.com/typicode/husky)

## 实现

### 安装开发依赖

```bash
yarn install -D husky
yarn install -D @commitlint/cli
yarn install -D @commitlint/config-conventional
```

### 配置`package.json`

```json
{
  "husky": {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    }
  }
}
```

## commit规范

```bash
type(scope?): subject  #scope is optional
```

## 生成CHANGELOG

### 安装依赖

```bash
yarn install -D conventional-changelog
yarn install -D conventional-changelog-cli
```

### package.json

```json
"scripts": {
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
}
```

### 生成

```bash
yarn changelog  # 在项目根目录生成CHANGELOG.md
```

### Git钩子执行ESLint

详见[规范构建教程](https://juejin.im/post/5d1f1e595188254b732b60a3)

> 方跃明
> 2020-01-02
