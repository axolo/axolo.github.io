---
title: 钉钉云推送自建RDS最佳实践
description: 被钉钉云RDS坑过的，请自觉来此报到。
time: 2019-04-08
tags: [MySQL, 钉钉, 钉钉云, 阿里云]
categories: MySQL
---

# 钉钉云推送自建RDS最佳实践

钉钉云推送常规建设方法请参见[钉钉云推送自建RDS官方文档][dingtalk-rds]。

缺陷如下：

1. `MySQL`版本必须为5.6或5.7，若应用使用同一数据库引擎，则无法使用`MySQL 8.x`的`CTE`等新特性；
2. 跨服务器触发应用数据库操作很困难，需要应用使用轮询来处理推送数据，浪费资源，时效性差。

最佳实践：

1. 钉钉云推送数据表使用`FEDERATED`引擎连接应用数据库对应表；
2. 应用数据库的云推送数据表上建立触发器，同步钉钉云推送数据变更操作。

流程如下：

```text
+------------+    +-----------------+    +---------------------+    +-------------+
|  DingTalk  |    | Dingtalk RDS    |    | App Database        |    | Data Sync   |
|  Cloud     | => | [FEDERATED]     | => | [TABLE]             | => | [TRIGGER]   |
|  Push      |    | ding_cloud_push |    | dingtalk_cloud_push |    | other table |
+------------+    +-----------------+    +---------------------+    +-------------+
```

## 应用数据库

### 创建钉钉云推送数据表

根据钉钉自建RDS文档格式创建钉钉云推送数据表，请留意表可以不同名，不兼容部分有细微改动。

```sql
CREATE TABLE `dingtalk_cloud_push` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  `subscribe_id` varchar(64) NOT NULL COMMENT '订阅方ID',
  `corp_id` varchar(64) NOT NULL COMMENT '企业ID',
  `biz_id` varchar(128) NOT NULL COMMENT '业务ID',
  `biz_type` int(11) NOT NULL COMMENT '业务类型',
  `biz_data` text NOT NULL COMMENT '业务数据',
  `open_cursor` bigint(20) NOT NULL COMMENT '对账游标',
  `status` int(11) NOT NULL COMMENT '处理状态0为未处理。其他状态开发者自行定义',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_subscribe_corp_biz` (`subscribe_id`,`corp_id`,`biz_id`,`biz_type`)
) AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='钉钉云推送高优先级数据';
```

### 创建触发器

触发器根据具体需求改为应用需要的内容，此处仅为示例。

```sql
DELIMITER $$
CREATE TRIGGER dingtalk_cloud_push_update
BEFORE INSERT ON dingtalk_cloud_push FOR EACH ROW
BEGIN
  INSERT INTO test (method, data) values ('insert', new.biz_data);
END$$
```

## 钉钉云推送数据库

### 启用FEDERATED

修改`MySQL`配置文件`my.cnf`启用`FEDERATED`引擎后重启`MySQL`服务。

```ini
[mysqld]
federated
```

### 创建FEDERATED表

此表被钉钉云推送RDS直接访问，其数据库名称、表名称、字符集、表结构符合钉钉云推送相关格式。

```sql
CREATE DATABASE ding_cloud_push DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE TABLE `open_sync_biz_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '更新时间',
  `subscribe_id` varchar(64) NOT NULL COMMENT '订阅方ID',
  `corp_id` varchar(64) NOT NULL COMMENT '企业ID',
  `biz_id` varchar(128) NOT NULL COMMENT '业务ID',
  `biz_type` int(11) NOT NULL COMMENT '业务类型',
  `biz_data` text NOT NULL COMMENT '业务数据',
  `open_cursor` bigint(20) NOT NULL COMMENT '对账游标',
  `status` int(11) NOT NULL COMMENT '处理状态0为未处理。其他状态开发者自行定义',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_subscribe_corp_biz` (`subscribe_id`,`corp_id`,`biz_id`,`biz_type`)
) ENGINE=FEDERATED AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COMMENT='高优先级数据'
CONNECTION='mysql://user:password@localhost:3306/appdb/dingtalk_cloud_push';
```

[dingtalk-rds]: https://open-doc.dingtalk.com/microapp/ln6dmh/ib4xrf
