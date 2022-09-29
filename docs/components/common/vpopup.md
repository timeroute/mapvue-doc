# VPopup

`Popup` Class.

```
<v-popup
  :center="center"
  :options="options"
>
  popup content
</v-popup>
```

## Examples

With Popup In Map

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvpopup%2Fbasic&module=%2Fsrc%2Fviews%2Fvpopup%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

With Chart in Popup

A popup window is implemented in `mapbox-gl` by instantiating `new Popup` and executing the `setHtml` method, inserting `html` text. For `Canvas` charts, it must be operated with `javascript`, so a chart library that supports the `SVG` rendering mode is required, such as `EChart`.

For example, when using `EChart`, you need to pass in the `renderer: 'svg'` parameter in the `init` method.

```javascript
const chart = echarts.init(dom, null, {
  width: 400,
  height: 400,
  renderer: "svg",
});
```

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvpopup%2Fwithchart&module=%2Fsrc%2Fviews%2Fvpopup%2FWithChart.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## property

| property | required | type     | description     |
| -------- | -------- | -------- | --------------- |
| visible  | true     | boolean  | visibility, using `v-model:visible` for auto updating visible.      |
| center   | false    | number[] | Popup's lngLat  |
| options  | false    | object   | Popup's options |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup-parameters)

## event

| event      | description              |
| ---------- | --------------------- |
| update:visible | emit `update:visible` event in using `v-model:visible` prop. |

## Slot

| name    | description |
| ------- | ----------- |
| default | default     |
