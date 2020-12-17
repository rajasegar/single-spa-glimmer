# single-spa-glimmer
single-spa plugin for Glimmer.js

## Installation
```
yarn add single-spa-glimmer
```

## Usage
```js
import { renderComponent } from '@glimmer/core';
import App from './App.js';
import singleSpaGlimmer from './single-spa-glimmer.js';

const rootElement = document.getElementById('app');
const glimmerLifecycles = singleSpaGlimmer({
  App,
  renderComponent,
  rootElement,
});

export const bootstrap = glimmerLifecycles.bootstrap;
export const mount = glimmerLifecycles.mount;
export const unmount = glimmerLifecycles.unmount;
```
