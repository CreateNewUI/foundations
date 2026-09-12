# New UI Colors

## Install

Install New UI Colors from your terminal via npm.

```
npm i -D @new-ui/colors
```

To get started quickly, you can use the CDN files.

```html
<!-- Place this at the html head -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@new-ui/colors@latest/dist/index.min.css"
/>
```

## Usage

```js
// React / bundlers — no Sass toolchain required
import '@new-ui/colors/css';
```

```scss
// SCSS projects
@use '@new-ui/colors/scss';
```

```html
<!-- Add this attribute to html wrapper -->
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
