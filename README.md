# New UI Foundations

## What is New UI?

New UI is a modern, semantic UI framework for building beautiful, accessible websites and applications. It provides the core design foundations you need, including colors, typography, spacing and sizing, reset, and layering and elevations. New UI grows with you, from your first launch to millions of users. It suits makers and teams who value scalability and function.

## Install

To set up the project, open your terminal and run the following command:

```
npm i -D @new-ui/foundations
```

**Note:** This command installs all New UI foundation packages, which include reset, colors, effects, spacings, and typography. To install only specific packages, refer to the New UI documentation for instructions.

## Import

Import the compiled CSS in a React app or bundler such as Vite, Next.js, or Create React App. No Sass toolchain is required:

```js
// For example, in main.tsx, App.tsx, or Next.js app/layout.tsx
import '@new-ui/foundations/css'; // Explicit and type-safe. Recommended.
// import '@new-ui/foundations'; // Bare specifier also works.
```

For SCSS projects, load the bundle with `@use`:

```scss
@use '@new-ui/foundations/scss';
```

To load the bundle from a CDN, use the minified build in your HTML `<head>`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@new-ui/foundations@latest/dist/index.min.css"
/>
```

**Note:** The core bundle includes reset, colors, effects, spacings, and typography.

## Set the theme

Set the theme by adding the `data-new-ui-theme` attribute to your HTML wrapper element, for example:

```html
<html data-new-ui-theme="light"></html>
```

To keep native controls such as form fields, scrollbars, and system UI consistent with dark themes, also set the `color-scheme` meta tag:

```html
<meta name="color-scheme" content="light dark" />
```

| Available themes | Value         |
| :--------------- | :------------ |
| Light (Default)  | `light`       |
| Light warm       | `light--warm` |
| Light cold       | `light--cold` |
| Dark (Default)   | `dark`        |
| Dark warm        | `dark--warm`  |
| Dark cold        | `dark--cold`  |

For more skins, install the `@new-ui/themes` package. It maps ready-made themes onto the same semantic color contract. The package provides the following custom themes:

| Custom theme         | Value                  | Scheme |
| :------------------- | :--------------------- | :----- |
| Dracula              | `dracula`              | dark   |
| Catppuccin Latte     | `catppuccin-latte`     | light  |
| Catppuccin Frappé    | `catppuccin-frappe`    | dark   |
| Catppuccin Macchiato | `catppuccin-macchiato` | dark   |
| Catppuccin Mocha     | `catppuccin-mocha`     | dark   |
| Tokyo Night          | `tokyo-night`          | dark   |
| Night Owl            | `night-owl`            | dark   |
| Ayu Dark             | `ayu-dark`             | dark   |
| Flexoki Light        | `flexoki-light`        | light  |
| Flexoki Dark         | `flexoki-dark`         | dark   |
| Aura                 | `aura`                 | dark   |
| Synthwave '84        | `synthwave-84`         | dark   |
| Monokai              | `monokai`              | dark   |
| Sargam Light         | `sargam-light`         | light  |
| Sargam Dark          | `sargam-dark`          | dark   |

To learn how to install and activate these themes, refer to the New UI Themes documentation.

## Utility classes and naming convention

- All classes associated with the New UI are prefixed with a global namespace followed by a hyphen: `nu-`
- In addition to a global namespace, we added prefixes to each class to make it more apparent what job that class is doing using BEM syntax.
  - `c-` for UI components.
  - `l-` for layout-related styles.
  - `u-` for utilities.
  - `is-` and `has-` for state-based classes.
  - `js-` for targeting JavaScript-specific functionality.

---

## Design tokens

### Colors

| Background                        | Role                          |
| :-------------------------------- | :---------------------------- |
| **`--background`**                | Default app background        |
| **`--background-secondary`**      | Secondary app background      |
| **`--background-hover`**          | Background hover              |
| **`--background-selected`**       | UI element background         |
| **`--background-selected-hover`** | UI element background hovered |
| **`--background-high-contrast`**  | High contrast background      |

| Border                 | Role                           |
| :--------------------- | :----------------------------- |
| **`--border-muted`**   | Muted strokes and separators   |
| **`--border`**         | Default strokes and separators |
| **`--border-strong`**  | Strong strokes and separators  |
| **`--border-inked`**   | Inked strokes and separators   |
| **`--border-inverse`** | Inverse strokes and separators |
| **`--border-focus`**   | Focus outline                  |

| Button                  | Role                       |
| :---------------------- | :------------------------- |
| **`--button`**          | Primary button background  |
| **`--button-hover`**    | Primary button hover       |
| **`--button-active`**   | Primary button active      |
| **`--button-disabled`** | Disabled button background |

| Link                 | Role                         |
| :------------------- | :--------------------------- |
| **`--link`**         | Primary link                 |
| **`--link-hover`**   | Hover state for primary link |
| **`--link-subtle`**  | Secondary link               |
| **`--link-visited`** | Link visited                 |

| Support                 | Role        |
| :---------------------- | :---------- |
| **`--support-error`**   | Error       |
| **`--support-warning`** | Warning     |
| **`--support-success`** | Success     |
| **`--support-info`**    | Information |

| Content                       | Role                      |
| :---------------------------- | :------------------------ |
| **`--content-primary`**       | Primary body copy         |
| **`--content-secondary`**     | Secondary text color      |
| **`--content-secondary-alt`** | Secondary text color alt  |
| **`--content-placeholder`**   | Placeholder text color    |
| **`--content-on-color`**      | Text on interactive color |
| **`--content-error`**         | Error message             |
| **`--content-success`**       | Success message           |
| **`--content-inked`**         | Inked text                |

### Effects

| Shadows               | Role                                          |
| :-------------------- | :-------------------------------------------- |
| **`--dialog-strong`** | Modals, sidebar overlays, toasts              |
| **`--dialog`**        | Dropdown, tooltip, popover                    |
| **`--content`**       | Content area, buttons, controls, cards, pills |
| **`--canvas`**        | Background                                    |
| **`--keyboard-key`**  | Keyboard key component                        |

| Focus                 | Role          |
| :-------------------- | :------------ |
| **`--focus-default`** | Default focus |
| **`--focus-accent`**  | Accent focus  |
| **`--focus-inverse`** | Focus inverse |

### Spacings

| Token                | Source         | Size (px/rem) |
| :------------------- | :------------- | :------------ |
| **`--spacing-zero`** | `--spacing-00` | 0 / 0         |
| **`--spacing-xs`**   | `--spacing-02` | 4 / 0.25      |
| **`--spacing-s`**    | `--spacing-04` | 8 / 0.5       |
| **`--spacing-m`**    | `--spacing-05` | 12 / 0.75     |
| **`--spacing-l`**    | `--spacing-06` | 16 / 1        |
| **`--spacing-xl`**   | `--spacing-08` | 24 / 1.5      |
| **`--spacing-xxl`**  | `--spacing-09` | 32 / 2        |
| **`--spacing-xxxl`** | `--spacing-11` | 48 / 3        |

### Sizing

| Token                         | Source         | Size (px/rem) |
| :---------------------------- | :------------- | :------------ |
| **`--size-xs`**               | `--spacing-06` | 16 / 1        |
| **`--size-s`**                | `--spacing-08` | 24 / 1.5      |
| **`--size-m`**                | `--spacing-09` | 32 / 2        |
| **`--controls-size-default`** | `--spacing-09` | 32 / 2        |
| **`--controls-size-small`**   | `--spacing-08` | 24 / 1.5      |

### Typography

| Heading (Desktop)          | Heading (Mobile)          | Role       |
| :------------------------- | :------------------------ | :--------- |
| **`--desktop-heading-01`** | **`--mobile-heading-01`** | Heading 01 |
| **`--desktop-heading-02`** | **`--mobile-heading-02`** | Heading 02 |
| **`--desktop-heading-03`** | **`--mobile-heading-03`** | Heading 03 |
| **`--desktop-heading-04`** | **`--mobile-heading-04`** | Heading 04 |
| **`--desktop-heading-05`** | **`--mobile-heading-05`** | Heading 05 |
| **`--desktop-heading-06`** | **`--mobile-heading-06`** | Heading 06 |

| Body (Desktop)          | Body (Mobile)          | Role       |
| :---------------------- | :--------------------- | :--------- |
| **`--desktop-body-xl`** | **`--mobile-body-xl`** | Body large |
| **`--desktop-body`**    | **`--mobile-body`**    | Body copy  |
| **`--desktop-body-sm`** | **`--mobile-body-sm`** | Body small |

| Utility (Desktop)           | Utility (Mobile)           | Role        |
| :-------------------------- | :------------------------- | :---------- |
| **`--desktop-caption`**     | **`--mobile-caption`**     | Caption     |
| **`--desktop-helper-text`** | **`--mobile-helper-text`** | Helper text |
| **`--desktop-code`**        | **`--mobile-code`**        | Code        |

> **Note:** To set the line height, add the `--lh` prefix to the font size variables. For example, `--desktop-body-xl` becomes `--lh-desktop-body-xl`.
