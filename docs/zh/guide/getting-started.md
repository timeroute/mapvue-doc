# 快速上手

## 依赖环境

- [Node.js v14+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) (Optional)

::: tip

- 我们推荐使用 `pnpm` 来安装依赖。
  :::

## 安装

```shell
pnpm add mapbox-vue
```

## 导入组件库

```ts
import { createApp } from "vue";
import MapVue from "mapbox-vue";
import "mapbox-vue/dist/mapbox-vue.css";
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
