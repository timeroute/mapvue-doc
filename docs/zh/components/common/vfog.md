# VFog

`Fog` 控件。

```
<v-fog
  :color="color"
  :horizon-blend="horizon-blend"
  :range="range"
/>
```

## 加载雾

<iframe src="https://codesandbox.io/embed/vmap-examples-mnqjgn?fontsize=14&hidenavigation=1&initialpath=%2Fvfog%2Fbasic&module=%2Fsrc%2Fviews%2Fvfog%2FBasic.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vmap examples"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## property

| property       | required | type     | description                                                                              |
| -------------- | -------- | -------- | ---------------------------------------------------------------------------------------- |
| color          | 否       | string   | 地平线以下大气区域的颜色，默认 `#ffffff`                                                 |
| high-color     | 否       | string   | 地平线以上大气区域的颜色，默认 `#245cdf`                                                 |
| space-color    | 否       | string   | 地平线以上区域的颜色，默认 `["interpolate",["linear"],["zoom"],4,"#010b19",7,"#367ab9"]` |
| horizon-blend  | 否       | number   | 地平线融合，`0~1`之间，默认 `["interpolate",["linear"],["zoom"],4,0.2,7,0.1]`            |
| range          | 否       | number[] | 开始和结束距离范围，`-20~20`之间，默认 `[0.5,10]`                                        |
| star-intensity | 否       | number   | 控制星光强度的值，`0~1`之间，默认 `["interpolate",["linear"],["zoom"],5,0.35,6,0]`       |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/fog/)

## 插槽

| 名称    | description |
| ------- | ----------- |
| default | 默认        |
