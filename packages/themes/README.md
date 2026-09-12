# New UI Themes

New UI Themes provides ready-made themes mapped onto the New UI semantic color contract. Every theme sets the same 32 semantic custom properties for backgrounds, borders, buttons, links, support, and content, so your components stay consistent when you switch themes.

## Install

Install New UI Themes from your terminal with npm:

```
npm i @new-ui/themes
```

To load every theme from a CDN, use the minified build:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@new-ui/themes@latest/dist/index.min.css"
/>
```

To load a single theme, target its file:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@new-ui/themes@latest/dist/themes/dracula.css"
/>
```

## Usage

Import every theme in a React app or bundler:

```js
import '@new-ui/themes/css';
```

Import a single theme by its subpath:

```js
import '@new-ui/themes/dracula';
```

For SCSS projects, load every theme with `@use`:

```scss
@use '@new-ui/themes/scss';
```

Load a single theme with its subpath:

```scss
@use '@new-ui/themes/scss/dracula';
```

Activate a theme by setting the `data-new-ui-theme` attribute on a root element:

```html
<html data-new-ui-theme="dracula">
  ...
</html>
```

## Themes

The following table lists each theme, its `color-scheme`, and its import subpath:

| `data-new-ui-theme` value | Scheme | Import subpath           |
| ------------------------- | ------ | ------------------------ |
| `dracula`                 | dark   | `./dracula`              |
| `catppuccin-latte`        | light  | `./catppuccin-latte`     |
| `catppuccin-frappe`       | dark   | `./catppuccin-frappe`    |
| `catppuccin-macchiato`    | dark   | `./catppuccin-macchiato` |
| `catppuccin-mocha`        | dark   | `./catppuccin-mocha`     |
| `tokyo-night`             | dark   | `./tokyo-night`          |
| `night-owl`               | dark   | `./night-owl`            |
| `ayu-dark`                | dark   | `./ayu-dark`             |
| `flexoki-light`           | light  | `./flexoki-light`        |
| `flexoki-dark`            | dark   | `./flexoki-dark`         |
| `aura`                    | dark   | `./aura`                 |
| `synthwave-84`            | dark   | `./synthwave-84`         |
| `monokai`                 | dark   | `./monokai`              |
| `sargam-light`            | light  | `./sargam-light`         |
| `sargam-dark`             | dark   | `./sargam-dark`          |

Each theme also declares `color-scheme`, so native form controls, scrollbars,
and `light-dark()` values render correctly.

## Author a theme

A theme defines its own private palette copied from the source, then maps
those values onto the shared contract:

```scss
[data-new-ui-theme='my-theme'] {
  color-scheme: dark;

  // Private palette
  --mt-bg: oklch(16.84% 0 0deg);
  --mt-accent: oklch(71.9% 0.1287 264.05deg);
  // ...

  // Map onto the 32-token contract. Refer to src/_contract.scss.
  --background: var(--mt-bg);
  --button: var(--mt-accent);
  // ...
}
```

The build runs a completeness check with `scripts/check-contract.mjs`. The
check fails if any compiled theme is missing a contract token, so an
incomplete theme cannot ship.
