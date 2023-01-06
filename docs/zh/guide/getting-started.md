# 快速上手

## 依赖环境

- [Node.js v14+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) 或者 [pnpm](https://pnpm.io/) (可选)

::: tip

- 我们推荐使用 `pnpm` 来安装依赖。
  :::

## 安装

### 版本 < 0.3.0

`0.3.0` 以下版本集成了 `mapbox-gl` 库

```shell
# use npm
npm install mapvue

# use yarn
yarn add mapvue

# use pnpm
pnpm add mapvue
```

### 版本 >= 0.3.0

`0.3.0` 版本开始去掉 `mapbox-gl` 库，可自由安装 `1.2` 版本以上的 `mapbox-gl` 库

```shell
# use npm
npm install mapbox-gl mapvue

# use yarn
yarn add mapbox-gl mapvue

# use pnpm
pnpm add mapbox-gl mapvue
```

## 导入组件库

### 版本 < 0.3.0

由于 `0.3.0` 以下版本集成了 `mapbox-gl` 库，因此引入 `mapvue` 的 `css` 文件即可。

### vue-cli 项目

```ts
import { createApp } from "vue";
import MapVue from "mapvue";
import "mapvue/dist/style.css";
import App from "./App.vue";

createApp(App).use(MapVue).mount("#app");
```

### vite 项目

```ts
import { createApp } from "vue";
import MapVue from "mapvue";
import "mapvue/dist/mapvue.css";
import App from "./App.vue";

createApp(App).use(MapVue).mount("#app");
```

### 版本 >= 0.3.0

由于 `0.3.0` 版本开始去掉了 `mapbox-gl` 库，因此直接引入 `mapbox-gl` 的 `css` 文件即可。

```ts
import { createApp } from "vue";
import MapVue from "mapvue";
import "mapbox-gl/dist/mapbox-gl.css";
import App from "./App.vue";

createApp(App).use(MapVue).mount("#app");
```

## 使用组件

```vue
<script setup>
import { reactive } from "vue";
import token from "some-where";
</script>

<template>
  <v-map :accessToken="token" :options="state.mapOptions">
    <v-geo-source
      id="ports"
      data="https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson"
      :cluster="true"
    />
    <v-circle-layer id="ports" source="ports" />
  </v-map>
</template>
```
