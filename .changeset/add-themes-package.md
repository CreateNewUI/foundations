---
"@new-ui/themes": minor
---

Add `@new-ui/themes`: fifteen ready-made themes (Dracula, Catppuccin Latte/Frappé/Macchiato/Mocha, Tokyo Night, Night Owl, Ayu Dark, Flexoki Light/Dark, Aura, Synthwave '84, Monokai, Sargam Light/Dark) mapped onto the 32-token semantic color contract.

Each theme sets `color-scheme` and its own private palette (copied verbatim from the upstream MIT-licensed source) before mapping onto the shared contract, so skins are swappable without touching component styles. Activate with `data-new-ui-theme="<name>"`. Ships an all-themes bundle plus per-theme entry points (`@new-ui/themes/dracula`, `.../css`, `.../scss/<name>`), and a build-time completeness check that fails if any theme omits a contract token.
