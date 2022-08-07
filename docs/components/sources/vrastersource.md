# VRasterSource

`RasterSource` component.

```
<v-raster-source
  id="raster-source-id"
  :data="animate"
  :coordinates="coordinates"
/>
```

## Example

### Init Map

Render `v-raster-source` component.

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvrastersource%2Fbasic&module=%2Fsrc%2Fviews%2Fvsource%2Fvrastersource%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Property

| Property    | Required | Type     | Description                                                                                                                                                                                                                  |
| ----------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | true       | string   | source id                                                                                                                                                                                                                    |
| url         | false    | string   | A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<Tileset ID>. `                                                                                                                       |
| tiles       | false    | string[] | An array of one or more tile source URLs, as in the TileJSON spec.                                                                                                                                                           |
| tileSize    | false    | number   | The minimum visual size to display tiles for this layer. Only configurable for raster layers. Defaults to `512`                                                                                                              |
| scheme      | false    | string   | Influences the y direction of the tile coordinates. The global-mercator (aka Spherical Mercator) profile is assumed. Defaults to `xyz`                                                                                       |
| attribution | false    | string   | Custom attribution.                                                                                                                                                                                                          |
| bounds      | false    | number[] | An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: `[sw.lng, sw.lat, ne.lng, ne.lat]`. Defaults to `[-180,-85.051129,180,85.051129]` |
| minzoom     | false    | number   | Minimum zoom level for which tiles are available, as in the TileJSON spec. Defaults to `0`                                                                                                                                   |
| maxzoom     | false    | number   | Maximum zoom level for which tiles are available, as in the TileJSON spec. Data from tiles at the maxzoom are used when displaying the map at higher zoom levels. Defaults to `22`                                           |
| volatile    | false    | boolean  | A setting to determine whether a source's tiles are cached locally. Defaults to `false`                                                                                                                                      |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster)
