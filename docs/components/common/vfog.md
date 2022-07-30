# VFog

`Fog` Class.

```
<v-fog
  :color="color"
  :horizon-blend="horizon-blend"
  :range="range"
/>
```

## With Fog

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvfog%2Fbasic&module=%2Fsrc%2Fviews%2Fvfog%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Property

| property       | required | type     | description                                                                                                                                                                     |
| -------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color          | false    | string   | The color of the atmosphere region immediately below the horizon, default to `#ffffff`                                                                                          |
| high-color     | false    | string   | The color of the atmosphere region above the horizon, default to `#245cdf`                                                                                                      |
| space-color    | false    | string   | The color of the region above the horizon and after the end of the horizon-blend contribution, default to `["interpolate",["linear"],["zoom"],4,"#010b19",7,"#367ab9"]`         |
| horizon-blend  | false    | number   | Horizon blend applies a smooth fade from the color of the atmosphere to the color of space, default to `["interpolate",["linear"],["zoom"],4,0.2,7,0.1]`                        |
| range          | false    | number[] | The start and end distance range in which fog fades from fully transparent to fully opaque. default to `[0.5,10]`                                                               |
| star-intensity | false    | number   | A value controlling the star intensity where 0 will show no stars and 1 will show stars at their maximum intensity. default to `["interpolate",["linear"],["zoom"],5,0.35,6,0]` |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/fog/)
