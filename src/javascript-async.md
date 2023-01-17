---
title: JavaScript async
description: 代码演示 JavaScript 同步异步操作。
time: 2020-02-18
category: 前端
tags: [JavaScript]
---

# JavaScript async

代码演示 JavaScript 同步异步操作。

## 场景

  方法   |          使用          |          效果
-------- | ---------------------- | ----------------------
callback | Promise.then(callback) | 别等我，你们先吃
await    | await Proimse()        | 等我到了再吃
all      | Promise.all([])        | 先到先吃，吃完一起走
reace    | Promise.race([])       | 先到先吃，吃饱胜出
yield    | *generator() { yield } | 排队领餐

## 接力赛

一个接一个，下一棒等上一棒。

```js
const step1 = await doStep1(); // Promise，上一步必须完成
const setp2 = await doStep2(); // Promise，下一步才能继续
```

## 排名赛

齐头并进，等待最后一名到达。

```js
const [ member1, member2 ] = await Promise.all([
  memeber1ComingSoon(), // Promise，成员1正在赶来
  memeber2ComingSoon(), // Promise，成员2正在赶来
]);
console.log('全队到齐了，出发！');
```

## 淘汰赛

齐头并进，只取第一名。

```js
const member = await Promise.race([
  memeber1ComingSoon(), // Promise，成员1正在赶来
  memeber2ComingSoon(), // Promise，成员2正在赶来
]);
console.log('公平竞争，先到者得！');
```

## 生成器

“下一个”，“到！”

```js
// 以下代码是一个生成器函数的声明。
function* countSales () {
  var saleList = [3, 7, 5];
  for (var i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}

// 一旦生成器函数已定义，可以通过构造一个迭代器来使用它。
var Store = countSales(); // Generator { }
console.log(Store.next()); // { value: 3, done: false }
console.log(Store.next()); // { value: 7, done: false }
console.log(Store.next()); // { value: 5, done: false }
console.log(Store.next()); // { value: undefined, done: true }
```

> 方跃明
> 2020-02-18
