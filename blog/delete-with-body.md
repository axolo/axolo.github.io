---
time: 2019-10-01
tags:
  - HTTP
categories:
  - HTTP
---

# DELETE方法传递参数

:::warning
[RFC2616]不建议DELETE方法甚至是GET方法body携带参数。
:::

 
## 约束

尽管如此，实际业务中还是有可能不可回避的遇到，具体实现有以下约束：

- 参数必须被`data`包裹才能正确传递，请务必遵循。
- 请求头的`Content-Type`必须是`application/json`

## 请求

```bash
curl -X DELETE '/car/:id'
-H 'Content-Type: application/json' \
-d '{ "data": { "deletedBy": "测试删除车辆17" } }'
```

|   参数    | 必须  |   说明                         |
| --------- | :---: | ------------------------------ |
| headers   |  是   | Content-Type: application/json |
| :id       |  是   | 车辆id                         |
| deletedBy |       | 停用原因                       |

[RFC2616]: https://tools.ietf.org/html/rfc2616