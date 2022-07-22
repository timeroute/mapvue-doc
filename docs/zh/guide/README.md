# 介绍

MapVue 是一个封装比较全面的 MapboxGL 组件库。你可以轻松愉快的将 MapVue 应用到你的 Vue 项目中。通过组件的形式导入各种数据源与图层，并通过修改 props 的参数来修改图层的状态。

MapVue 的目的是让用户更简洁高效的在 Vue 中进行 GIS 开发。

## 它是如何工作的？

MapVue 本质上是包裹了 MapboxGL 里某些类，通过 `watch` 类的一些可变属性实现了组件化。

比如 `v-fill-layer` 组件，实际上是包裹了 `FillLayer` 这个类。
