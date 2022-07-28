# VFillLayer

`FillLayer` component. Need use with `VGeoSource`.

```
<v-fill-layer
  id="fill-layer-id"
  source="source-id"
  sourceLayer="source-layer-id"
  :paint="paint-object"
  :layout="layout-object"
  :minzoom="minzoom-value"
  :maxzoom="maxzoom-value"
  :filter="filter-object"
/>
```

## Example

### Init Map

Load a `geojson` data with `v-fill-layer`.

<iframe src="https://codesandbox.io/embed/vfilllayer-wiv9l7?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vfilllayer"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Property

| Property    | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| id          | layer id                                                               |
| source      | source id                                                              |
| sourceLayer | [source layer id](https://docs.mapbox.com/help/glossary/source-layer/) |
| paint       | paint properties                                                       |
| layout      | layout properties                                                      |
| minzoom     | min zoom                                                               |
| maxzoom     | max zoom                                                               |
| filter      | filter rule                                                            |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill)

## Event

| Event      | Description              |
| ---------- | ------------------------ |
| click      | layer `click` event      |
| mouseenter | layer `mouseenter` event |
| mousemove  | layer `mousemove` event  |
| mouseleave | layer `mouseleave` event |
