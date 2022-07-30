# VVideoSource

`VideoSource` 数据源组件。

```
<v-video-source
  id="video-source-id"
  :urls="[video_url, audio_url]"
  :coordinates="coordinates"
/>
```

## 例子

### 渲染地图

渲染 `v-video-source` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvvideosource%2Fbasic&module=%2Fsrc%2Fviews%2Fvsource%2Fvvideosource%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性        | 必选 | 类型     | 说明             |
| ----------- | ---- | -------- | ---------------- |
| id          | 是   | string   | 数据源 ID        |
| urls        | 是   | string[] | 音频视频地址列表 |
| coordinates | 是   | lngLat[] | 坐标             |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#video)
