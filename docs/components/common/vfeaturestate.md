# VFeatureState

`FeatureState` Component.

```
<v-feature-state
  :feature="{
    id: string,
    source: string,
  }"
  :state="{ hover: true }"
/>
```

## Load FeatureState

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvfeaturestate%2Fbasic&module=%2Fsrc%2Fviews%2Fvfeaturestate%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## property

| property       | required | type     | description                                                                              |
| -------------- | -------- | -------- | ---------------------------------------------------------------------------------------- |
| feature          | true       | object   | Layer Feature                        |
| feature.id     | true       | string   | Layer source geojson feature id         |
| feature.source    | true       | string   | layer source id |
| feature.sourceLayer  | false       | string   | layer sourceLayer id         |
| state          | true       | object | feature state   |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setfeaturestate)
