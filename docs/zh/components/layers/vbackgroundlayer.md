# VBackgroundLayer

`BackgroundLayer` 图层组件，无需配合任何 `Source` 使用。

```
<v-background-layer
  id="background-layer-id"
  source="source-url"
  :paint="paint-object"
  :layout="layout-object"
/>
```

## 加载 Background 图层

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvlayer%2Fvbackgroundlayer%2Fbasic&module=%2Fsrc%2Fviews%2Fvlayer%2Fvbackgroundlayer%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性   | 描述      |
| ------ | --------- |
| id     | 图层 ID   |
| source | 数据源 ID |
| paint  | 绘制参数  |
| layout | 布局参数  |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#background)
