# VMap

这是最顶层组件，所有的组件必须包含在 `v-map` 里。

```
<v-map>
  其他 mapvue 组件
</v-map>
```

## 初始化地图

<iframe src="https://codesandbox.io/embed/mapvue-vmap-5d689r?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="mapvue/vmap"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性        | 说明                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| accessToken | mapboxgl 的授权码，必填                                                                                   |
| options     | 可选其他属性，参考 mapboxgl.Map 里的 [参数](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters) |
