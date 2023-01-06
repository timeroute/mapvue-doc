# Getting Started

## Prerequistites

- [Node.js v14+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) (Optional)

::: tip

- With [pnpm](https://pnpm.io/), we recommended to use `pnpm`.
  :::

## Installation

### version < 0.3.0

below version `0.3.0` has `mapbox-gl` integrated.

```shell
# use npm
npm install mapvue

# use yarn
yarn add mapvue

# use pnpm
pnpm add mapvue
```

### version >= 0.3.0

since version `0.3.0`, it deperate `mapbox-gl`, you can install any version of `mapbox-gl` above `1.2`.

```shell
# use npm
npm install mapbox-gl mapvue

# use yarn
yarn add mapbox-gl mapvue

# use pnpm
pnpm add mapbox-gl mapvue
```

## Import

### version < 0.3.0

due to integrated with `mapbox-gl`, just import the css file in `mapvue`.

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

### version >= 0.3.0

due to deperated with `mapbox-gl`, just import the css file in `mapbox-gl`.

```ts
import { createApp } from "vue";
import MapVue from "mapvue";
import "mapbox-gl/dist/mapbox-gl.css";
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
