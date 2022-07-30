# VBackgroundLayer

`BackgroundLayer` component, no need to use with any `Source`.

```
<v-background-layer
  id="background-layer-id"
  source="source-url"
  :paint="paint-object"
  :layout="layout-object"
/>
```

## Load background layer

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvlayer%2Fvbackgroundlayer%2Fbasic&module=%2Fsrc%2Fviews%2Fvlayer%2Fvbackgroundlayer%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Property

| Property | Description       |
| -------- | ----------------- |
| id       | layer id          |
| source   | source id         |
| paint    | paint properties  |
| layout   | layout properties |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#background)
