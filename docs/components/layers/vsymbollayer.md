# VSymbolLayer

`SymbolLayer` component. Need use with `VGeoSource`.

```
<v-symbol-layer
  id="symbol-layer-id"
  source="source-url"
  sourceLayer="source-layer-id"
  :paint="paint-object"
  :layout="layout-object"
  :minzoom="minzoom-value"
  :maxzoom="maxzoom-value"
  :filter="filter-object"
/>
```

## Load layer

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvlayer%2Fvsymbollayer%2Fbasic&module=%2Fsrc%2Fviews%2Fvlayer%2Fvsymbollayer%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
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

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#symbol)

## Event

| Event      | Description              |
| ---------- | ------------------------ |
| click      | layer `click` event      |
| mouseenter | layer `mouseenter` event |
| mousemove  | layer `mousemove` event  |
| mouseleave | layer `mouseleave` event |
