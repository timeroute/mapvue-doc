# VFeatureState

`FeatureState` 控件。

```
<v-feature-state
  :feature="{
    id: string,
    source: string,
  }"
  :state="{ hover: true }"
/>
```

## 加载 FeatureState

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvfeaturestate%2Fbasic&module=%2Fsrc%2Fviews%2Fvfeaturestate%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性       | 必选 | 类型     | 描述                                                                              |
| -------------- | -------- | -------- | ---------------------------------------------------------------------------------------- |
| feature          | 是       | object   | 对应的图层特征                        |
| feature.id     | 是       | string   | 特征 ID         |
| feature.source    | 是       | string   | 图层源 |
| feature.sourceLayer  | 否       | string   | 图层的 sourceLayer          |
| state          | 是       | object | 状态   |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setfeaturestate)
