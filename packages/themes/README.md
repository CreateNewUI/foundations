# New UI Themes

Ready-made themes mapped onto the New UI semantic color contract. Every theme
sets the same 32 semantic custom properties (backgrounds, borders, buttons,
links, support, and content), so switching skins never breaks your components.

## Install

Install New UI Themes from your terminal via npm.

```
npm i @new-ui/themes
```

To get started quickly, you can use the CDN files.

```html
<!-- All themes -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@new-ui/themes@latest/dist/index.min.css"
/>
```

```html
<!-- A single theme -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@new-ui/themes@latest/dist/themes/dracula.css"
/>
```

## Usage

```js
// React / bundlers — every theme
import '@new-ui/themes/css';

// Or just one theme
import '@new-ui/themes/dracula';
```

```scss
// SCSS projects — every theme
@use '@new-ui/themes/scss';

// Or just one theme
@use '@new-ui/themes/scss/dracula';
```

Activate a theme by setting the `data-new-ui-theme` attribute on a root element:

```html
<html data-new-ui-theme="dracula">
  ...
</html>
```

## Themes

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

Each theme also declares `color-scheme`, so native form controls, scrollbars,
and `light-dark()` values render correctly.

## Authoring a theme

A theme defines its own private palette (verbatim from the source), then maps
those values onto the shared contract:

```scss
[data-new-ui-theme='my-theme'] {
  color-scheme: dark;

  // Private palette
  --mt-bg: #101010;
  --mt-accent: #7aa2f7;
  // ...

  // Map onto the 32-token contract (see src/_contract.scss)
  --background: var(--mt-bg);
  --button: var(--mt-accent);
  // ...
}
```

The build runs a completeness check (`scripts/check-contract.mjs`) that fails
if any compiled theme is missing a contract token, so incomplete skins can
never be released.

## Credits

Only the raw palette values are reused from the projects below. The semantic
mapping onto the New UI contract is original work. Every upstream project is
MIT licensed.

- **Dracula** — © Dracula Theme. [dracula/dracula-theme](https://github.com/dracula/dracula-theme) · [draculatheme.com](https://draculatheme.com)
- **Catppuccin** (Latte, Frappé, Macchiato, Mocha) — © Catppuccin. [catppuccin/palette](https://github.com/catppuccin/palette) · [catppuccin.com](https://catppuccin.com)
- **Tokyo Night** — © enkia. [enkia/tokyo-night-vscode-theme](https://github.com/enkia/tokyo-night-vscode-theme)
- **Night Owl** — © Sarah Drasner. [sdras/night-owl-vscode-theme](https://github.com/sdras/night-owl-vscode-theme)
- **Ayu** — © Ike Ku (dempfi). [ayu-theme/vscode-ayu](https://github.com/ayu-theme/vscode-ayu)
- **Flexoki** — © Steph Ango. [kepano/flexoki](https://github.com/kepano/flexoki) · [stephango.com/flexoki](https://stephango.com/flexoki)

## Guides

- [Read our themes guide](https://new-ui.com/docs/foundations/themes)
