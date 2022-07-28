# VVideoSource

`VideoSource` component.

```
<v-video-source
  id="video-source-id"
  :urls="[video_url, audio_url]"
  :coordinates="coordinates"
/>
```

## Example

### Init Map

Render `v-video-source` component.

<iframe src="https://codesandbox.io/embed/vfilllayer-wiv9l7?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vfilllayer"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; videolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Property

| Property    | Required | Type     | Description              |
| ----------- | -------- | -------- | ------------------------ |
| id          | true     | string   | source id                |
| urls        | true     | string[] | audio/video urls.        |
| coordinates | true     | lngLat[] | video source coordinates |

for more details you can access to mapbox website, [go to](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#video)
