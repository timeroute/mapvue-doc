# VMap

This is the top component, all components without `vmap` would be wrapperred in it.

```
<v-map>
  other mapvue components
</v-map>
```

## Examples

### Init map

simple init map and watch `loaded` event

<iframe src="https://codesandbox.io/embed/long-wood-mnqjgn?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Update Props

change the `zoom` or `center` prop of `v-map` component, make the map zooming or flying

<iframe src="https://codesandbox.io/embed/vmap-with-interction-2bqlvs?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap with interction"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Props

| prop        | note                                                                                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| accessToken | mapboxgl accessToken, required                                                                                             |
| options     | new Map options，reference from [parameters](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters) in mapboxgl.Map |

## Events

| event  | note                    |
| ------ | ----------------------- |
| loaded | mapbox map `load` event |
