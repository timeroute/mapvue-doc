# VMarker

`Marker` Control.

```
<v-marker
  :center="center"
  :options="options"
/>
```

## Examples

With Marker In Map

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvmarker%2Fbasic&module=%2Fsrc%2Fviews%2Fvmarker%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

With Chart In Marker

Insert a Pie Chart instead by default icon.

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvmarker%2Fwithchart&module=%2Fsrc%2Fviews%2Fvmarker%2FWithChart.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## property

| property | required | type     | description      |
| -------- | -------- | -------- | ---------------- |
| center   | true     | number[] | Marker's lngLat, using `v-model:center` for auto updating center.  |
| options  | false    | object   | Marker's options |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker-parameters)

## event

| event      | description              |
| ---------- | ------------------------ |
| click      | Marker `click` event      |
| mouseenter | Marker `mouseenter` event |
| mousemove  | Marker `mousemove` event  |
| mouseleave | Marker `mouseleave` event |
| update:center | emit `update:center` event in using `v-model:center` prop. |
