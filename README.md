# Infineon Design System Bootstrap Components
<!-- ABOUT THE PROJECT -->
## About The Project

As part of the Infineon brand guidelines, the Infineon Digital Design System supports designers, developers and project managers to build user interfaces faster and better – with the ultimate goal to create a coherent and optimal user journey across all internal and external Infineon digital touchpoints.

This repository contains an Bootstrap implementation of Infineons Digital Design System and it's Storybook sourcecode.

Use it to build & run storybook and distribute the Bootstrap SCSS.

## Requirements

- [Node](https://nodejs.org/en/) >= v14 – if you have [nvm](https://github.com/creationix/nvm#node-version-manager---) installed, you can just run `nvm use` to select the right node version.
- [Yarn](https://classic.yarnpkg.com/en/) >= `1.22.10` or [npm](https://www.npmjs.com/) >= `6.14.13` 

## Usage

### Quick Start Vue.JS
1. Install using NPM
```bash
npm install --save @infineon/design-system-bootstrap
```

2. Add the import to your main.js:
*JavaScript:*
```js
import "@infineon/design-system-bootstrap";
```

3. Use Storybook to explore our components (available only in intranet)

https://storybook-bootstrap.icp.infineon.com

4. Install FontAwesome Pro Icons (optional)

Mail to dds@infineon.com to get an fontawesome pro token if you are an Infineon employee. Then execute these two commands:
```bash
npm config set "@fortawesome:registry" https://npm.fontawesome.com/
npm config set "//npm.fontawesome.com/:_authToken" FONT-AWESOME-PACKAGE-TOKEN
```

After that follow the installation instructions for vue at https://fontawesome.com/v6/docs/web/use-with/vue/#contentHeader

## Local Development

### Installation

This project itself is developed with `yarn`.  
Install all needed dependencies with:

```bash
yarn install
```

### Start Storybook

Start Storybook in local dev mode, including file watchers to hot-reload on code change:

```bash
yarn start 
```

### Build Storybook

Build the static Storybook, ready to be hosted / deployed.  
Result gets added in `storybook-static/`:

```bash
yarn build-storybook
```

### Bundle

Generate a bundle that can be published on `npm`, adds result in `dist/` folder: 

```bash
yarn bundle
```

The resulting bundle is meant to be used like described in the beginning of this readme, as a drop-in to immediately enable usage of Infineon developed Bootstrap components.

### Bundle Sources

Generate a bundle that can be published on `npm`, adds result in `dist-sources/` folder: 

```bash
yarn package
```

The resulting bundle is meant to be used in projects that need to consume sources directly. Import the needed component in your code like this (e.g.):

**General Theme**:

*SCSS:*
```scss
@import "@infineon/design-system-bootstrap/dist-sources/src/bootstrap-theme.scss"
```

*JavaScript:*
```js
import "@infineon/design-system-bootstrap/dist-sources/src/index.js"
```

**Specific Component (`Button`)**:

*SCSS:*
```scss
@import "@infineon/design-system-bootstrap/dist-sources/src/button/button"
```
