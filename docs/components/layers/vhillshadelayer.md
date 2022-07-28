# VHillshadeLayer

`HillshadeLayer` component. Need use with `VRasterSource`.

```
<v-hillshade-layer
  id="hillshade-layer-id"
  source="source-url"
  :paint="paint-object"
  :layout="layout-object"
  :minzoom="minzoom-value"
  :maxzoom="maxzoom-value"
  :filter="filter-object"
/>
```

## Init Map

<iframe src="https://codesandbox.io/embed/mapvue-vmap-5d689r?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="mapvue/vmap"
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

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#hillshade)

## Event

| Event      | Description              |
| ---------- | ------------------------ |
| click      | layer `click` event      |
| mouseenter | layer `mouseenter` event |
| mousemove  | layer `mousemove` event  |
| mouseleave | layer `mouseleave` event |
