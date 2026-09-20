# New UI Layout

## Install

Install New UI Layout from your terminal with npm:

```
npm i @new-ui/layout
```

You can also load the minified build from a CDN in your HTML `<head>`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@new-ui/layout@latest/dist/index.min.css"
/>
```

## Usage

Import the compiled CSS in a React app or bundler:

```js
import '@new-ui/layout/css';
```

For SCSS projects, load the package with `@use`:

```scss
@use '@new-ui/layout/scss';
```

Import the breakpoint map and mixins (no CSS output) to build responsive
styles that stay in sync with the shared scale:

```scss
@use '@new-ui/layout/breakpoints' as bp;

.card {
  @include bp.media-up('md') {
    display: grid;
  }
}
```

## Guides

- [Read our layout guide](https://new-ui.com/docs/foundations/layout)
