# VPopup

`Popup` 控件。

```
<v-popup
  :center="center"
  :options="options"
>
  popup 内容
</v-popup>
```

## 例子 

加载弹窗

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvpopup%2Fbasic&module=%2Fsrc%2Fviews%2Fvpopup%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

弹窗里加载图表

在 `mapbox-gl` 中实现弹窗是通过 `new Popup` 实例化后执行 `setHtml` 的方法，插入 `html` 文本。对于 `Canvas` 图表来说，必须配合 `javascript` 来进行操作，因此需要支持 `SVG` 渲染模式的图表库，例如 `EChart`。

比如使用 `EChart` 时，需要在 `init` 方法中传入 `renderer: 'svg'` 参数。

```javascript
const chart = echarts.init(dom, null, {
  width: 400,
  height: 400,
  renderer: "svg",
});
```

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvpopup%2Fwithchart&module=%2Fsrc%2Fviews%2Fvpopup%2FWithChart.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性       | 必选 | 类型     | 描述                       |
| -------- | -------- | -------- | ----------------- |
| visible  | 是       | boolean  | 是否显示          |
| center   | 否       | number[] | Popup 坐标        |
| options  | 否       | object   | Popup 的 属性 |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup-parameters)

## 插槽

| 名称    | 描述 |
| ------- | ----------- |
| default | 默认        |
