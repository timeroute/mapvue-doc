# VGeoSource

`GeoSource` component.

```
<v-geo-source
  id="geo-source-id"
  :data="animate"
  :coordinates="coordinates"
/>
```

## Example

### Render Point

Render `v-geo-source` component.

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvgeosource%2Fpoint&module=%2Fsrc%2Fviews%2Fvsource%2Fvgeosource%2FPoint.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Render Line

Render `v-geo-source` component.

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvgeosource%2Fline&module=%2Fsrc%2Fviews%2Fvsource%2Fvgeosource%2FLine.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Render Polygon

Render `v-geo-source` component.

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvgeosource%2Fpolygon&module=%2Fsrc%2Fviews%2Fvsource%2Fvgeosource%2FPolygon.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Property

| Property          | Required | Type                   | Description                                                                                                                        |
| ----------------- | -------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| id                | true     | string                 | source id                                                                                                                          |
| attribution       | false    | string                 | custom attribution                                                                                                                 |
| buffer            | false    | number                 | Size of the tile buffer on each side. Optional number between `0` and `512` inclusive. Defaults to `128`.                          |
| cluster           | false    | boolean                | If the data is a collection of point features, setting this to true clusters the points by radius into groups. Defaults to `false` |
| clusterMaxZoom    | false    | number                 | Max zoom on which to cluster points if clustering is enabled.                                                                      |
| clusterMinPoints  | false    | number                 | Minimum number of points necessary to form a cluster if clustering is enabled. Defaults to `2`.                                    |
| clusterProperties | false    | object                 | An object defining custom properties on the generated clusters if clustering is enabled, aggregating values from clustered points. |
| clusterRadius     | false    | number                 | Radius of each cluster if clustering is enabled. Defaults to `50`                                                                  |
| filter            | false    | expression             | An expression for filtering features prior to processing them for rendering.                                                       |
| generatedId       | false    | boolean                | Whether to generate ids for the geojson features. Defaults to `false`                                                              |
| lineMetrics       | false    | boolean                | Whether to calculate line distance metrics. Defaults to `false`                                                                    |
| maxzoom           | false    | number                 | Maximum zoom level at which to create vector tiles (higher means greater detail at high zoom levels). Defaults to `18`             |
| protomteId        | false    | PromoteIdSpecification | A property to use as a feature id (for feature state).                                                                             |
| tolerance         | false    | number                 | Douglas-Peucker simplification tolerance (higher means simpler geometries and faster performance). Defaults to `0.375`             |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson)
