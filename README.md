# 方跃明的博客

基于 [VitePress] 构建，一键生成博客数据保存在 `docs.json` 供开发使用。

预览地址：<https://axolo.github.io>

## docs.json

- 一个 **必须** 存在的 `JSON` 文件，其初始值为 `[]`
- 存放博客 `Frontmatter` 和相关数据（标题、创作时间、标签、分类等）
- 若更新了博文，则在编译发布前，请 **务必** 通过 `npm run save` 更新 `docs.json`

## Frontmatter

博文 Frontmatter 格式如下：

|    名称     |  类型  |            说明            |
| ----------- | ------ | -------------------------- |
| title       | 字符串 | 标题，如：`博文标题`       |
| description | 字符串 | 摘要，如：`博文摘要`       |
| time        | 时间   | 发布时间，如：`2023-02-08` |
| category    | 字符串 | 分类，如：`博客`           |
| tags        | 数组   | 标签：如：`[博客, 时评]`   |

## 命令

```shell
npm i           # 安装
npm run dev     # 开发
npm run save    # 保存（docs.json）
npm run build   # 编译
npm run serve   # 运行（发布后的内容）
```

## 目录

**系统生成**的文件，在运行保存命令时会**覆盖**同名文件内容，且无法恢复。

```text
|-- README.md                     # 说明
|-- src                           # 博文
|   |-- files                     #   博文附件
|   |-- index.md                  #   首页
|   |-- archive.md                #   归档（系统生成）
|   |-- category.md               #   分类（系统生成）
|   `-- tag.md                    #   标签（系统生成）
|
`-- .vitepress                    # vitepress
    |-- config.js                 #   配置
    |-- data                      #   数据
    |   |-- docs.json             #     博文（系统生成）
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
