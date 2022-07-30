# VVectorSource

`VectorSource` 数据源组件。

```
<v-vector-source
  id="vector-source-id"
  :data="animate"
  :coordinates="coordinates"
/>
```

## 例子

### 渲染地图

渲染 `v-vector-source` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvvectorsource%2Fbasic&module=%2Fsrc%2Fviews%2Fvsource%2Fvvectorsource%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性        | 必选 | 类型                   | 说明                                                                 |
| ----------- | ---- | ---------------------- | -------------------------------------------------------------------- |
| id          | 是   | string                 | 数据源 ID                                                            |
| url         | 否   | string                 | TileJSON 资源地址，支持 `http:`, `https:` 和 `mapbox://<Tileset ID>` |
| tiles       | 否   | string[]               | 瓦片源地址列表                                                       |
| scheme      | 否   | string                 | 瓦片类型，`xyz` 或 `tms`，默认 `xyz`                                 |
| attribution | 否   | string                 | 归属信息                                                             |
| bounds      | 否   | number[]               | 范围，默认 `[-180,-85.051129,180,85.051129]`                         |
| protomteId  | 否   | PromoteIdSpecification | 用作 feature id 的属性                                               |
| minzoom     | 否   | number                 | 最小缩放，默认 `0`                                                   |
| maxzoom     | 否   | number                 | 最大缩放，默认 `22`                                                  |
| volatile    | 否   | boolean                | 切片是否在本地缓存，默认 `false`                                     |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector)
