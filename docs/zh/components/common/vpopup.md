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

## 加载弹窗

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvpopup%2Fbasic&module=%2Fsrc%2Fviews%2Fvpopup%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## property

| property | required | type     | description       |
| -------- | -------- | -------- | ----------------- |
| visible  | 否       | boolean  | 是否显示          |
| center   | 是       | number[] | Popup 坐标        |
| options  | 否       | object   | Popup 的 property |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup-parameters)

## 插槽

| 名称    | description |
| ------- | ----------- |
| default | 默认        |
