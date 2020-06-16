---
prev: ./installation
next: ./rules
---

# Validation

String validation is done usng the `validate` function — it's our bread and butter:

```js
import { validate } from 'strngle';
```

## Using `validate`

The `validate` function takes two parameters.

The first is the `input` string — the string you want to test against a set of rules.

The second is the `rules` array — the rules you want to test the `input` against.

Here's a simple example, testing a string exists.

```js
import { validate, required } from 'strngle';

const myString = 'Hello!';

validate(myString, [required()]);
```

Pretty cool — but how do we know if the `input` passed the tests in the `rules`?

## Validation results

`validate` returns a `result` object with a `valid` property and a `message` property:

```js
const result = validate('Hello!', [required()]);

console.log(result.valid) // true
console.log(result.message) // undefined if valid is true
```

You can destructure the `results` object to access just the properties you want:

```js
const { valid } = validate('Hello!', [required()]);
```

> `valid` will only be `true` if _all_ the validation rules pass.

If `valid` is false, you can get more information about what rule was broken using the `message` property:

```js
import { validate, max } from 'strngle';

function validateUserInput(userInput) {
  const { valid, message } = validate(userInput, [max(10)]);

  if (!valid) {
    showErrorMessage(message) // "Must have length less than or equal to [10]"
  } else {
    // we're all good!
    saveUserInput(userInput)
  }
}
```
