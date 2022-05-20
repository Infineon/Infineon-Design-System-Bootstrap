# Infineon Design System Bootstrap Components

## Requirements

- [Node](https://nodejs.org/en/) >= v14 – if you have [nvm](https://github.com/creationix/nvm#node-version-manager---) installed, you can just run `nvm use` to select the right node version.
- [Yarn](https://classic.yarnpkg.com/en/) >= `1.22.10` or [npm](https://www.npmjs.com/) >= `6.14.13`

## Usage

Add this repository to your dependencies in `package.json`:
```bash
npm install --save @infineon/design-system-bootstrap
```

```bash
yarn add @infineon/design-system-bootstrap
```

Now you can import the assets you need to consume. This currently includes:
```bash
.
├── 1080x1080_ratio-1-1.png
├── 1440x1080_ratio-4-3.png
├── 1920x1080_ratio-16-9.png
├── fonts
│   └── source-sans-pro-v18-latin
│       ├── source-sans-pro-v18-latin-600.woff
│       ├── source-sans-pro-v18-latin-600.woff2
│       ├── source-sans-pro-v18-latin-700.woff
│       ├── source-sans-pro-v18-latin-700.woff2
│       ├── source-sans-pro-v18-latin-regular.woff
│       └── source-sans-pro-v18-latin-regular.woff2
├── index.css
├── index.js
└── logo-desktop-en-2x.png

2 directories, 12 files
```

Include / import `index.css` to get the correct style for markup copied from Storybook. You'll additionally have to copy the fonts assets (`fonts/`) themselves to your publicly available root folder (often times it's called `static/` or `public/`).

An import could, depending on your local setup, for example look like this:

*CSS:*
```css
@import "@infineon/design-system-tokens/dist/index.css";
```

To get the correct behaviour for the components, you'll additionally need to include the provided JavaScript, too:

*JavaScript:*
```js
import "@infineon/design-system-tokens/dist/index.js";
```

## Development

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

*CSS:*
```css
@import "@infineon/design-system-tokens/dist-sources/src/bootstrap-theme.scss"
```

*JavaScript:*
```js
import "@infineon/design-system-tokens/dist-sources/src/index.js"
```

**Specific Component (`Button`)**:

*CSS:*
```css
@import "@infineon/design-system-tokens/dist-sources/src/button/button"
```