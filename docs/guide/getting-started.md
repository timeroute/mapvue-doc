# Getting Started

## Prerequistites

- [Node.js v14+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) (Optional)

::: tip

- With [pnpm](https://pnpm.io/), we recommended to use `pnpm`.
  :::

## Installation

```shell
# use npm
npm install mapvue

# use yarn
yarn add mapvue

# use pnpm
pnpm add mapvue
```

## Import

### with vue-cli

```ts
import { createApp } from "vue";
import MapVue from "mapvue";
import "mapvue/dist/style.css";
import App from "./App.vue";

createApp(App).use(MapVue).mount("#app");
```

### with vite

```ts
import { createApp } from "vue";
import MapVue from "mapvue";
import "mapvue/dist/mapvue.css";
import App from "./App.vue";

createApp(App).use(MapVue).mount("#app");
```

## Use Component

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
