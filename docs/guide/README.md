---
sidebarDepth: 2
---

# Guide

Hello, here you should find everything you need to get to know Strngle.

::: warning NOTE
This guide is a work in progress, and may contain incomplete descriptions and examples.
:::

## Quick start

### Install

npm:

```bash
npm i strngle
```

yarn:

```bash
yarn add strngle
```

### Basic usage

```js
import { validate, required, hasMinMax } from 'strngle';

const { valid, message } = validate(someUnknownValue, [
  required(),
  hasMinMax({ min: 5, max: 10 }),
]);

if (!valid) {
  console.error(`The input is invalid: ${message}!`);
}
```

## Validators

Here's a list of all the validator functions, click the links to see how to use them.
