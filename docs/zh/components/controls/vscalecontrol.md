# VScaleControl

`ScaleControl` 控件。

```
<v-scale-control
  id="scale-control-id"
  :maxWidth="maxWidth"
  unit="unit"
  :position="position"
/>
```

## 初始化地图

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvscalecontrol%2Fbasic&module=%2Fsrc%2Fviews%2Fvscalecontrol%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 属性

| 属性     | 必选 | 类型   | 描述                                                         |
| -------- | ---- | ------ | ------------------------------------------------------------ |
| maxWidth | 否   | string | 最大宽度，默认 `100`                                         |
| unit     | 否   | string | 距离单位，'imperial' , 'metric' 或 'nautical'，默认 `metric` |
| position | 否   | string | 控件位置                                                     |

想要更多信息请访问 mapbox 官网, [查看](https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol)
