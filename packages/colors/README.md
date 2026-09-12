# New UI Colors

## Install

Install New UI Colors from your terminal with npm:

```
npm i -D @new-ui/colors
```

You can also load the minified build from a CDN in your HTML `<head>`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@new-ui/colors@latest/dist/index.min.css"
/>
```

## Usage

Import the compiled CSS in a React app or bundler:

```js
import '@new-ui/colors/css';
```

For SCSS projects, load the package with `@use`:

```scss
@use '@new-ui/colors/scss';
```

Add the `data-new-ui-theme` attribute to your `html` wrapper element:

```html
<html data-new-ui-theme="light"></html>
```

### Available themes

- light
- light--warm
- light--cold
- dark
- dark--warm
- dark--cold

## Guides

- [Read our colors guide](https://new-ui.com/docs/foundations/colors)
