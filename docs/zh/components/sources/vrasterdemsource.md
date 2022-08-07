# VRasterDemSource

`RasterDemSource` 数据源组件。

```
<v-rasterdem-source
  id="rasterdem-source-id"
  :data="animate"
  :coordinates="coordinates"
/>
```

## 例子

### 渲染地图

渲染 `v-rasterdem-source` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvrasterdemsource%2Fbasic&module=%2Fsrc%2Fviews%2Fvsource%2Fvrasterdemsource%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性         | 必选 | 类型     | 描述                                                                 |
| ------------ | ---- | -------- | -------------------------------------------------------------------- |
| id           | 是   | string   | 数据源 ID                                                            |
| url          | 否   | string   | TileJSON 资源地址，支持 `http:`, `https:` 和 `mapbox://<Tileset ID>` |
| tiles        | 否   | string[] | 瓦片源地址列表                                                       |
| tileSize     | 否   | number   | 瓦片大小，默认 `512`                                                 |
| attribution  | 否   | string   | 归属信息                                                             |
| bounds       | 否   | number[] | 范围，默认 `[-180,-85.051129,180,85.051129]`                         |
| minzoom      | 否   | number   | 最小缩放，默认 `0`                                                   |
| maxzoom      | 否   | number   | 最大缩放，默认 `22`                                                  |
| exaggeration | 否   | number   | 拉伸，`0~1000`之间，默认 `1`                                         |
| encoding     | 否   | string   | 编码，"terrarium", "mapbox" 两者之一，默认为 "mapbox"                |
| volatile     | 否   | boolean  | 切片是否在本地缓存，默认 `false`                                     |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster-dem)
