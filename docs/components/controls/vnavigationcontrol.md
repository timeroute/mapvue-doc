# VNavigationControl

`NavigationControl` Control.

```
<v-navigation-control
  id="navigation-control-id"
  :showCompass="showCompass"
  :showZoom="showZoom"
  :visualizePitch="visualizePitch"
  :position="position"
/>
```

## Init Map

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvnavigationcontrol%2Fbasic&module=%2Fsrc%2Fviews%2Fvnavigationcontrol%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Property

| Property       | Required | Type    | Description          |
| -------------- | -------- | ------- | -------------------- |
| showCompass    | false    | boolean | is showing compass   |
| showZoom       | false    | boolean | is showing zoom      |
| visualizePitch | false    | boolean | is visualizing pitch |
| position       | false    | string  | control position     |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/api/markers/#navigationcontrol)
