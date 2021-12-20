---
time: 2020-2-07
categories:
  - 前端
tags:
  - 前端
---

# 前端概念图

## 图示

```mermaid
graph LR
B(URL)
S(API Sever)
C(Action)
D(Data)
V(View)
S -->|response| D
D -->|request| S
B -->|router| D
D -->|render| V
V -->|event| C
C -->|dispatch| D
```

## 概念

|    概念    |        说明        |
| ---------- | ------------------ |
| URL        | 访问什么页面       |
| Data       | 显示什么信息       |
| View       | 页面长成什么样     |
| Action     | 对页面做了什么操作 |
| API Server | Data数据的来源     |

## 参考

<https://github.com/sorrycc/blog/issues/1>

![前端概念图](https://camo.githubusercontent.com/27dc8a7706005007aa24e557dc06eed9d66cb926f5704fcec9dea222935a3d56/68747470733a2f2f6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f43684d775a42755a6c614c725377652e706e67)

> 方跃明
> 2020-02-07
