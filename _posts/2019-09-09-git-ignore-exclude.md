---
title: Git排除忽略子目录
time: 2019-09-09
layout: post
categories: Git
tags: [Git]
---

想忽略某个目录，但又不想忽略这个目录下的某个子目录？

排除此目录，改为忽略*，然后忽略子目录。

```text
# exclude ignore cn
!app/

app/*
!app/locale/

app/locale/*
!app/locale/cn/
```


## 示例

uni-app项目忽略unpackage下但排除h5和res

```text
unpackage
|-- cache
|-- dist
|   |-- build
|   |   |-- .automator
|   |   |-- app-plus
|   |   `-- h5              # 排除
|   |       `-- static
|   |           |-- js
|   |           |-- pages
|   |           `-- styles
|   `-- dev
|-- release
|   `-- apk
`-- res                     # 排除
    `-- icons
```


```text
# uni-app dist
!unpackage/
unpackage/*
!unpackage/res

!unpackage/dist
unpackage/dist/*

!unpackage/dist/build
unpackage/dist/build/*

!unpackage/dist/build/h5
!unpackage/dist/build/README.md
!unpackage/dist/build/.gitignore
```

> 方跃明
> 2019-09-09
