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

## With Popup In Map

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvpopup%2Fbasic&module=%2Fsrc%2Fviews%2Fvpopup%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## property

| property | required | type     | description     |
| -------- | -------- | -------- | --------------- |
| visible  | true     | boolean  | visibility      |
| center   | false    | number[] | Popup's lngLat  |
| options  | false    | object   | Popup's options |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup-parameters)

## Slot

| 名称    | description |
| ------- | ----------- |
| default | default     |
