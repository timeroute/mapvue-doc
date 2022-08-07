# VFillLayer

`FillLayer` 图层组件。需要配合 `VGeoSource` 使用。

```
<v-fill-layer
  id="fill-layer-id"
  source="source-id"
  sourceLayer="source-layer-id"
  :paint="paint-object"
  :layout="layout-object"
  :minzoom="minzoom-value"
  :maxzoom="maxzoom-value"
  :filter="filter-object"
/>
```

## 例子

### 加载图层

加载一个 geojson 数据来渲染 `v-fill-layer` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvlayer%2Fvfilllayer%2Fbasic&module=%2Fsrc%2Fviews%2Fvlayer%2Fvfilllayer%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性        | 描述                                                        |
| ----------- | ----------------------------------------------------------- |
| id          | 图层 ID                                                     |
| source      | 数据源 ID                                                   |
| sourceLayer | [源层](https://docs.mapbox.com/help/glossary/source-layer/) |
| paint       | 绘制参数                                                    |
| layout      | 布局参数                                                    |
| minzoom     | 最小缩放                                                    |
| maxzoom     | 最大缩放                                                    |
| filter      | 过滤规则                                                    |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill)

## 事件

| 事件       | 描述               |
| ---------- | ------------------ |
| click      | 点击图层事件       |
| mouseenter | 鼠标进入图层事件   |
| mousemove  | 鼠标在图层移动事件 |
| mouseleave | 鼠标离开图层事件   |
