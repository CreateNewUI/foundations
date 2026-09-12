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

## Credits

New UI reuses only the raw palette values from the following projects. The
semantic mapping onto the New UI contract is original work. Every upstream
project is MIT licensed.

- **Dracula**. © Dracula Theme. [dracula/dracula-theme](https://github.com/dracula/dracula-theme), [draculatheme.com](https://draculatheme.com)
- **Catppuccin** for Latte, Frappé, Macchiato, and Mocha. © Catppuccin. [catppuccin/palette](https://github.com/catppuccin/palette), [catppuccin.com](https://catppuccin.com)
- **Tokyo Night**. © enkia. [enkia/tokyo-night-vscode-theme](https://github.com/enkia/tokyo-night-vscode-theme)
- **Night Owl**. © Sarah Drasner. [sdras/night-owl-vscode-theme](https://github.com/sdras/night-owl-vscode-theme)
- **Ayu**. © Ike Ku, known as dempfi. [ayu-theme/vscode-ayu](https://github.com/ayu-theme/vscode-ayu)
- **Flexoki**. © Steph Ango. [kepano/flexoki](https://github.com/kepano/flexoki), [stephango.com/flexoki](https://stephango.com/flexoki)
- **Aura**. © Dalton Menezes. [daltonmenezes/aura-theme](https://github.com/daltonmenezes/aura-theme), [aura-theme.com](https://aura-theme.com)
- **Synthwave '84**. © Robb Owen. [robb0wen/synthwave-vscode](https://github.com/robb0wen/synthwave-vscode)
- **Monokai**. © Microsoft, from the VS Code built-in theme, based on the original Monokai by Wimer Hazenberg. [microsoft/vscode](https://github.com/microsoft/vscode/tree/main/extensions/theme-monokai)
- **Sargam**. © Sargam Design. [SargamDesign/sargam-colors](https://github.com/SargamDesign/sargam-colors)

## Guides

- [Read our themes guide](https://new-ui.com/docs/foundations/themes)
