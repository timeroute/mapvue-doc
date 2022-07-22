# Introduction

MapboxVue is a comprehensive MapboxGL component library. You can easily and happily apply MapboxVue to your Vue projects. Import various data sources and layers in the form of components, and modify the state of the layer by modifying the parameters of props.

The purpose of MapboxVue is to allow users to develop GIS in Vue more concisely and efficiently.

## How it works?

MapboxVue essentially wraps some classes in MapboxGL and implements componentization through some variable properties of the `watch` class.

For example, the `v-fill-layer` component actually wraps the `FillLayer` class.
