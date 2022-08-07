# VCanvasSource

`CanvasSource` 数据源组件。

```
<v-canvas-source
  ref="canvasRef"
  id="canvas-source-id"
  :animate="animate"
  :coordinates="coordinates"
/>
```

## 例子

### 渲染地图

渲染 `v-canvas-source` 组件

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvsource%2Fvcanvassource%2Fbasic&module=%2Fsrc%2Fviews%2Fvsource%2Fvcanvassource%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性        | 必选 | 类型        | 描述                                      |
| ----------- | ---- | ----------- | ----------------------------------------- |
| id          | 是   | string      | 数据源 ID                                 |
| ref         | 否   | HTMLElement | 组件暴露一个 canvas 变量，用来操作 canvas |
| animate     | 是   | boolean     | 是否动画                                  |
| coordinates | 是   | lngLat[]    | 坐标                                      |
