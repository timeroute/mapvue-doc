# VImageSource

`ImageSource` component.

```
<v-image-source
  id="image-source-id"
  :url="url"
  :coordinates="coordinates"
/>
```

## Example

### Init Map

Render `v-image-source` component.

<iframe src="https://codesandbox.io/embed/vfilllayer-wiv9l7?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vfilllayer"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; imagelocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Property

| Property    | Required | Type              | Description              |
| ----------- | -------- | ----------------- | ------------------------ |
| id          | true     | string            | source id                |
| url         | true     | string, ImageData | image url or image data  |
| coordinates | true     | lngLat[]          | image source coordinates |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#image)
