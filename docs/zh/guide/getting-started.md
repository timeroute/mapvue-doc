# 快速上手

## 依赖环境

- [Node.js v14+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) 或者 [pnpm](https://pnpm.io/) (可选)

::: tip

- 我们推荐使用 `pnpm` 来安装依赖。
  :::

## 安装

```shell
# use npm
npm install mapvue

# use yarn
yarn add mapvue

# use pnpm
pnpm add mapvue
```

## 导入组件库

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
