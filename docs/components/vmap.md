# VMap

This is the top component, all components without `vmap` would be wrapperred in it.

Of course, the `v-map` component exposes a `map` variable, which is an instantiated `mapboxgl.Map` class. You can still use this variable outside the `v-map` component to manipulate the map.

Or you can customize a component inside `v-map` and use `teleport` to point to the container which is outside the `v-map` component.

```
<v-map>
  other mapvue components
</v-map>
```

## Examples

### Init map

simple init map and watch `loaded` event

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvmap%2Fbasic&module=%2Fsrc%2Fviews%2Fvmap%2FBasicMap.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Update Props

change the `zoom` or `center` prop of `v-map` component, make the map zooming or flying

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvmap%2Fflyzoom&module=%2Fsrc%2Fviews%2Fvmap%2FFlyZoom.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
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
