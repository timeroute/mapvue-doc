# VFillLayer

`FillLayer` 图层组件。需要配合 `VGeoSource` 使用。

```
<v-fill-layer
  id="fill-layer-id"
  source="source-id"
  :paint="paint-object"
  :layout="layout-object"
  :minzoom="minzoom-value"
  :maxzoom="maxzoom-value"
  :filter="filter-object"
/>
```

## Examples

### Render VFillLayer

load a geojson data to render a `v-fill-layer` component

<iframe src="https://codesandbox.io/embed/vfilllayer-wiv9l7?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vfilllayer"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Props

| prop    | note              |
| ------- | ----------------- |
| id      | layer ID          |
| source  | source ID         |
| paint   | paint parameters  |
| layout  | layout parameters |
| minzoom | limited minzoom   |
| maxzoom | limited maxzoom   |
| filter  | filter fules      |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill)
