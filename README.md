# Strngle

Composable string validation!

A pretty neat way to validate the content of strings. Use the validators Strngle comes with, or add your own. Strngle is written in Typescript and comes with full type definitions.

Docs will be added eventually.

## Installation

npm:

```bash
npm i strngle
```

yarn:

```bash
yarn add strngle
```

## Basic usage

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

## Adding your own validators

```js
import { validate } from 'strngl';

const startsWith = (character) => {
  return {
    validator(value) {
      if (value.charAt(0) !== character) {
        return {
          valid: false,
          message: `Must begin with ${character}`,
        };
      }
      return {
        valid: true,
      };
    },
  };
};

const { valid } = validate(someString, [startsWith('A')]);
```
