# VGeoSource

`GeoSource` 数据源组件。

```
<v-geo-source
  id="geo-source-id"
  :data="animate"
  :coordinates="coordinates"
/>
```

## 例子

### 渲染点

渲染 `v-geo-source` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvgeosource%2Fpoint&module=%2Fsrc%2Fviews%2Fvsource%2Fvgeosource%2FPoint.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 渲染线

渲染 `v-geo-source` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvgeosource%2Fline&module=%2Fsrc%2Fviews%2Fvsource%2Fvgeosource%2FLine.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 渲染面

渲染 `v-geo-source` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvgeosource%2Fpolygon&module=%2Fsrc%2Fviews%2Fvsource%2Fvgeosource%2FPolygon.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 渲染聚合

渲染 `v-geo-source` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvgeosource%2Fcluster&module=%2Fsrc%2Fviews%2Fvsource%2Fvgeosource%2FCluster.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性              | 必选 | 类型                   | 描述                                    |
| ----------------- | ---- | ---------------------- | --------------------------------------- |
| id                | 是   | string                 | 数据源 ID                               |
| attribution       | 否   | string                 | 归属信息                                |
| buffer            | 否   | number                 | 缓冲区大小，`0~512` 之间，默认 `128`    |
| cluster           | 否   | boolean                | 是否聚合，默认 `false`                  |
| clusterMaxZoom    | 否   | number                 | 聚合最大缩放                            |
| clusterMinPoints  | 否   | number                 | 聚合需要最少点数量，默认 `2`            |
| clusterProperties | 否   | object                 | 聚合属性                                |
| clusterRadius     | 否   | number                 | 聚合半径，默认 `50`                     |
| filter            | 否   | expression             | 过滤规则                                |
| generatedId       | 否   | boolean                | 是否自动生成 `feature.id`，默认 `false` |
| lineMetrics       | 否   | boolean                | 是否计算线距离度量，默认 `false`        |
| maxzoom           | 否   | number                 | 最大缩放，默认 `18`                     |
| protomteId        | 否   | PromoteIdSpecification | 用作 feature id 的属性                  |
| tolerance         | 否   | number                 | Douglas-Peucker 简化容差，默认 `0.375`  |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson)
