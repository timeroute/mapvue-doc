# 获取原始 map 实例

`mapvue`已经提供了尽可能多的组件了，但有时候还是觉得不够。因此有两种获取 `mapboxgl.Map` 的 map 实例的方式来扩展您的自定义组件或执行其他操作。

## 在 `<v-map>` 组件中

`<v-map>` 组件使用 `defineExpose` 来暴露一个 `map` 变量该变量就是原始 map 实例。你可以通过 `ref` 来使用它。

```
<script setup>
import { ref } from 'vue'
const mapRef = ref()

const handleLoaded = () => {
  console.log(mapRef.value.map)
}
</script>

<template>
  <v-map ref='mapRef'>
  </v-map>
</template>
```

## 在 `<v-map>` 组件包裹的子组件中

`<v-map>` 组件使用依赖注入 `provide/inject` 来传递 map 实例，注入的值叫做 `mapvueSymbol`。

父组件

```
<script setup>
</script>

<template>
  <v-map ref='mapRef'>
    <child />
  </v-map>
</template>
```

子组件

```
<script setup>
import { ref, inject } from 'vue'
import { mapvueSymbol } from 'mapvue'

const map = inject(mapvueSymbol)
</script>

<template>
  content
</template>
```