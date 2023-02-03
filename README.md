# 方跃明的博客

基于 [VitePress] 构建，一键生成博客数据保存在 `docs.json` 供开发使用。

预览地址：<https://fangyueming.cn>

## docs.json

- 一个 **必须** 存在的 `JSON` 文件，其初始值为 `[]`
- 存放博客 `Frontmatter` 和相关数据（标题、创作时间、标签、分类等）
- 若更新了博文，则在编译发布前，请 **务必** 通过 `npm run save` 更新 `docs.json`

## 命令

```shell
npm i           # 安装
npm run dev     # 开发
npm run save    # 保存（docs.json）
npm run build   # 编译
npm run serve   # 运行（发布后的内容）
```

## 目录

```
|-- README.md                     # 说明
|-- src                           # 博文
|   |-- files                     #   博文附件
|   |-- index.md                  #   首页
|   |-- archive.md                #   归档
|   |-- category.md               #   分类
|   `-- tag.md                    #   标签
|
`-- .vitepress                    # vitepress
    |-- config.js                 #   配置
    |-- data                      #   数据
    |   |-- docs.json             #     博文（文档）
    |   `-- icons.json            #     图标（svg）
    |
    `-- theme                     #   主题
        |-- style                 #     样式
        `-- components            #     组件
            `-- my                #       博客组件
                |-- home.vue      #         首页
                |-- hero.vue      #         横幅
                |-- author.vue    #         博主
                |-- docs.vue      #         博文
                |-- archive.vue   #         归档
                |-- category.vue  #         分类
                `-- tag.vue       #         标签
```

> 方跃明
> 2023-01-09

[VitePress]: https://vitepress.vuejs.org/