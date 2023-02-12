# Get Map Instance

`mapvue` has provided as many components as possible, but sometimes you still feel not enough. So there are two ways to getting the origin map instance of `mapboxgl.Map` for extending you custom component or doing other actions.

## in `<v-map>` component

`<v-map>` component use `defineExpose` to expose the `map` propertie, the value is the map instance. you can get it by ref.

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

## in children components wrappered by `<v-map>` component

`<v-map>` component use `provide/inject` to pass the map instance, the symbol key is `mapvueSymbol`.

parent component

```
<script setup>
</script>

<template>
  <v-map ref='mapRef'>
    <child />
  </v-map>
</template>
```

child component

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