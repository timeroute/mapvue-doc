# VMarker

`Marker` Class.

```
<v-marker
  :center="center"
  :options="options"
/>
```

## 例子

加载 Marker

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvmarker%2Fbasic&module=%2Fsrc%2Fviews%2Fvmarker%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

自定义 Marker 内容

在 Marker 中插入图表覆盖默认内容。

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvmarker%2Fwithchart&module=%2Fsrc%2Fviews%2Fvmarker%2FWithChart.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性       | 必选 | 类型     | 描述                       |
| -------- | -------- | -------- | ------------------ |
| center   | 是       | number[] | Marker 坐标        |
| options  | 否    | object   | Marker 的 属性 |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker-parameters)

## 事件

| 事件       | 描述           |
| ---------- | --------------------- |
| click      | 点击 Popup 事件       |
| mouseenter | 鼠标进入 Popup 事件   |
| mousemove  | 鼠标在 Popup 移动事件 |
| mouseleave | 鼠标离开 Popup 事件   |
