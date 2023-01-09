# 方跃明的博客

基于 [VitePress] 构建。

一键生成博客数据保存在 `pages.json` 供开发使用。

## pages.json

- 一个 **必须** 存在的 `JSON` 文件，其初始值为 `[]`
- 存放博客 `Frontmatter` 和相关数据（标题、创作时间、标签、分类等）
- 编译发布前，请务必通过 `npm run save` 更新

## 命令

```shell
npm i           # 安装
npm run dev     # 开发
npm run save    # 保存（pages.json）
npm run build   # 编译
npm run serve   # 运行（发布后的内容）
```

## 目录

```
|-- .vitepress            # vitepress
|   |-- config.js           # 配置
|   `-- data                # 数据
|       `-- pages.josn        # 页面数据
|-- src                   # 源文件（博客）
|   `-- files               # 文件（图片、附件等）
`-- README.md             # 说明
```

> 方跃明
> 2023-01-09

[VitePress]: https://vitepress.vuejs.org/