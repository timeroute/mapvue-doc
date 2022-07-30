# VImageSource

`ImageSource` 数据源组件。

```
<v-image-source
  id="image-source-id"
  :url="url"
  :coordinates="coordinates"
/>
```

## 例子

### 渲染地图

渲染 `v-image-source` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvimagesource%2Fbasic&module=%2Fsrc%2Fviews%2Fvsource%2Fvimagesource%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性        | 必选 | 类型              | 说明                 |
| ----------- | ---- | ----------------- | -------------------- |
| id          | 是   | string            | 数据源 ID            |
| url         | 是   | string, ImageData | 图片地址或者图片数据 |
| coordinates | 是   | lngLat[]          | 坐标                 |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#image)
