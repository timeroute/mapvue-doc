# VMarker

`Marker` Class.

```
<v-marker
  :center="center"
  :options="options"
/>
```

## 初始化地图

<iframe src="https://codesandbox.io/embed/mapvue-vmap-5d689r?fontsize=14&hidescale=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="mapvue/vmap"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## property

| property | required | type     | description        |
| -------- | -------- | -------- | ------------------ |
| center   | 是       | number[] | Marker 坐标        |
| options  | false    | object   | Marker 的 property |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker-parameters)

## 事件

| 事件       | description           |
| ---------- | --------------------- |
| click      | 点击 Popup 事件       |
| mouseenter | 鼠标进入 Popup 事件   |
| mousemove  | 鼠标在 Popup 移动事件 |
| mouseleave | 鼠标离开 Popup 事件   |
