# Introduction

MapVue is a comprehensive MapboxGL component library. You can easily and happily apply MapVue to your Vue projects. Import various data sources and layers in the form of components, and modify the state of the layer by modifying the parameters of props.

The purpose of MapVue is to allow users to develop GIS in Vue more concisely and efficiently.

## How it works?

MapVue essentially wraps some classes in MapboxGL and implements componentization through some variable properties of the `watch` class.

For example, the `v-fill-layer` component actually wraps the `FillLayer` class.
