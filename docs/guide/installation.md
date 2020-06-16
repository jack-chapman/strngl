---
prev: false
next: ./validate
---

# Installing Strngle

Currently, the only way to install Strngle is via [npm](https://www.npmjs.com/).

In order to install from npm, you'll need to have [Node.js](https://nodejs.org/) installed, which comes with npm.

Please follow the instructions on the Node website on how to install it correctly on your machine.

Check it's installed by running the following command in your console:

```
node -v
```

You should see the version number of your Node installation appear in the console.

You can do the same for npm:

```
npm -v
```
You should see the version number appear like before.

::: warning NOTE
If you don't get a version number for one or both, you'll need to solve that issue before continuing!
:::

## Install via NPM

If you don't already have a project, initialise one with npm and answer the quesions:

```
npm init
```

Once that's done, use the following command to install Strngle as a dependency.

```
npm install strngle
```

You can also use [Yarn](https://yarnpkg.com/):

```
yarn add strngle
```