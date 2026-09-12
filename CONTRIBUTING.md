# Contributing

Thanks for helping improve New UI Foundations.

## Development

This is a [bun](https://bun.com) workspaces monorepo. Install dependencies and build everything from the root:

```bash
bun install
bun run build
```

`bun run build` builds every package in `packages/*` (each emits an unminified `dist/index.css` and a minified `dist/index.min.css`) and then the meta bundle.

## Recording changes with Changesets

We use [Changesets](https://github.com/changesets/changesets) to version and publish. The six child packages under `packages/*` share a single version (`fixed` group), so any release bumps all of them to the same number.

> The root `@new-ui/foundations` meta-package is the workspace root, so Changesets does not manage or publish it. Keep its `version` aligned with the child packages by hand and publish it manually (`npm publish` from the repo root) as part of a release.

When you make a change that should ship, record a changeset and commit it with your PR:

```bash
bunx changeset
```

Select the affected packages, choose the bump type (patch / minor / major), and write a short summary. Commit the generated `.changeset/*.md` file alongside your changes.

## Releasing (maintainers)

Publishing is done manually from a maintainer's machine:

```bash
bun run version-packages   # applies bumps + regenerates CHANGELOGs, syncs lockfile
git commit -am "Version packages"
bun run lint               # sanity check
npm login                  # 2FA-enabled account required
bun run release            # builds, then `changeset publish` to npm
npm publish                # publish the root @new-ui/foundations meta-package
git push --follow-tags
```
