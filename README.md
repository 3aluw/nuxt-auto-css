<!--

Get your module up and running quickly.

  

Find and replace all on all files (CMD+SHIFT+F):

- Name: My Module

- Package name: my-module

- Description: My new Nuxt module

-->

  

# nuxt-css-manager
  

[![npm version][npm-version-src]][npm-version-href]

[![npm downloads][npm-downloads-src]][npm-downloads-href]

[![License][license-src]][license-href]

[![Nuxt][nuxt-src]][nuxt-href]

  

A module that will help you managing your pages'styling in nuxt.

  

<!--- [✨ &nbsp;Release Notes](/CHANGELOG.md)-->

<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->

<!-- - [📖 &nbsp;Documentation](https://example.com) -->

  

## Features

  

<!-- Highlight some of the features your module provide here -->

- ⛰ &nbsp; minimal and lightweight

- 🚠 &nbsp; no dependencies (other than [defu](https://github.com/unjs/defu))

- 🌲 &nbsp; depends on Explicit module options so it prevents unwanted css applying

  

## Quick Setup

  

1. Add `nuxt-css-nmanager` dependency to your project

  

```bash

# Using pnpm

pnpm  add  -D  nuxt-css-nmanager

  

# Using yarn

yarn  add  --dev  nuxt-css-nmanager

  

# Using npm

npm  install  --save-dev  nuxt-css-nmanager

```

  

2. create a folder called  `style` in the `public` directory. name your css files as the page's folder you want to style. ie: 

    >     `public/style
    >      --| user.css // this will style all the pages in the user pages folder
    >      --| product.css // this will style all the pages in the product  pages folder`




3. Add `nuxt-css-nmanager` to the `modules` section of `nuxt.config.ts`,
 and add  the folders that you want to apply the styling inside the module options :

```js

export  default  defineNuxtConfig({

modules: [

'nuxt-css-nmanager'
], 

autoCss: {
//the module will apply styling (from user.css) on all the pages inside the user folder 
folders: ["user"]
},

})

```



That's it! You can now use `css-nmanager`module in your Nuxt app ✨

  

## Development

  

```bash

# Install dependencies

npm  install

  

# Generate type stubs

npm  run  dev:prepare

  

# Develop with the playground

npm  run  dev

  

# Build the playground

npm  run  dev:build

  

# Run ESLint

npm  run  lint

  

# Run Vitest

npm  run  test

npm  run  test:watch

  

# Release new version

npm  run  release

```

  

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D

[npm-version-href]: https://npmjs.com/package/my-module

  

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D

[npm-downloads-href]: https://npmjs.com/package/my-module

  

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D

[license-href]: https://npmjs.com/package/my-module

  

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js

[nuxt-href]: https://nuxt.com