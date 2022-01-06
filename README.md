# 如何在commonjs模块中使用ESM模块

本代码演示了如何在commonjs模块中使用esm模块。

以`got`为例，从v12开始`got`只能以esm模块加载使用。

## 运行

```sh
# 安装
yarn install

# 编译
yarn run build 

# 运行
yarn run main 
```

## 关键代码

1. 定义`importESM`函数用于加载`ESM`模块

这个函数定义在`import-esm.js`文件中，不使用ts是为了避免`typescript`把`import`翻译成`require`方式。

```javascript
// import-esm.js
global.importESM = async function (name) {
  const m = await import(name);
  return m.default;
};
```

另外，需要告诉`webpack`不要对这个js文件处理。

```javascript
module.exports = {
  //...
  module: {
    noParse: /import-esm.js$/,
    //...
  }
}
```

2. 加载ESM模块

`ESM`模块只能以异步方式加载。

```typescript
import "./import-esm";

import { Got } from "got";
const got = await importESM<Got>("got");
const { data } = await got
  .post("https://httpbin.org/anything", {
    json: {
      hello: "world",
    },
  })
  .json();
```
