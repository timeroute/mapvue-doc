# VAttributionControl

`AttributionControl` 控件。

```
<v-attribution-control
  id="attribution-control-id"
  compact="compact"
  customAttribution="customAttribution"
  :position="position"
/>
```

## 初始化地图

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvattributioncontrol%2Fbasic&module=%2Fsrc%2Fviews%2Fvattributioncontrol%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性              | 必选 | 类型    | 说明     |
| ----------------- | ---- | ------- | -------- |
| compact           | 否   | boolean | 是否紧凑 |
| customAttribution | 否   | string  | 归属信息 |
| position          | 否   | string  | 控件位置 |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/api/markers/#attributioncontrol)
