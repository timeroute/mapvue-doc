# VRasterLayer

`RasterLayer` 图层组件，需配合 `VVectorSource` 使用。

```
<v-raster-layer
  id="raster-layer-id"
  source="source-url"
  :paint="paint-object"
  :layout="layout-object"
  :minzoom="minzoom-value"
  :maxzoom="maxzoom-value"
  :filter="filter-object"
/>
```

## 初始化地图

<iframe src="https://codesandbox.io/embed/mapvue-vmap-5d689r?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="mapvue/vmap"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性    | 说明      |
| ------- | --------- |
| id      | 图层 ID   |
| source  | 数据源 ID |
| paint   | 绘制参数  |
| layout  | 布局参数  |
| minzoom | 最小缩放  |
| maxzoom | 最大缩放  |
| filter  | 过滤规则  |
