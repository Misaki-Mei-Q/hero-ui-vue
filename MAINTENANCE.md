# Maintenance Guide

This document describes how to maintain this fork of `rysinal/hero-ui-vue`. Read it before opening a PR or publishing a release.

## Repository Identity

- **GitHub**: <https://github.com/Misaki-Mei-Q/hero-ui-vue>
- **npm scope**: `@misaki-mei/*`
- **upstream** (read-only): `https://github.com/rysinal/hero-ui-vue.git`

The `upstream` git remote must never receive a push. It is configured as read-only and exists only so we can fetch and cherry-pick maintenance fixes from the original author. Use `origin` for all normal GitHub operations.

## Tracking Upstream

We follow the public HeroUI React component API (`@heroui/react` on npm; upstream React docs at <https://heroui.com/docs>). The repo's README "Component Coverage" section is the authoritative parity list.

Workflow:

1. Periodically check `upstream` for new fixes:
   ```bash
   git fetch upstream
   git log upstream/main --oneline -20
   ```
2. Cherry-pick individual commits that fix real bugs or add useful changes:
   ```bash
   git cherry-pick <sha>
   ```
3. If `upstream/main` adds a new component, port it independently following `apps/docs/components/<name>.md` style. Update the "Component Coverage" list in `README.md` in the same commit.
4. Watch for upstream `package.json` / `pnpm-lock.yaml` changes that may need to be applied to localise scope renames.

## Localised Renames Already Applied

When this fork was created, every occurrence of the upstream npm scope was rewritten:

| Before                        | After                              |
| ----------------------------- | ---------------------------------- |
| `@rysinal/heroui-vue`         | `@misaki-mei/heroui-vue`         |
| `@rysinal/heroui-vue-styles`  | `@misaki-mei/heroui-vue-styles`  |
| `@rysinal/heroui-vue-docs`    | `@misaki-mei/heroui-vue-docs`    |
| `@rysinal/heroui-vue-standard`| `@misaki-mei/heroui-vue-standard`|
| `rysinal/hero-ui-vue` (URL)   | `Misaki-Mei-Q/hero-ui-vue` (URL)   |
| `hero-ui-vue.pages.dev`       | `misaki-mei-q.github.io/hero-ui-vue` |

`docs/` site publishing now uses GitHub Pages (see `apps/docs/.vitepress/config.ts`). The previous Cloudflare Pages deployment is gone.

If you ever need to re-run this rename, use `sed -i '' -e 's/@rysinal/@misaki-mei/g'` plus the URL table above.

## Branches and Releases

- `master` is the long-lived integration branch.
- Releases are cut by pushing a `v<semver>` tag. The `.github/workflows/publish-npm.yml` workflow then:
  1. Verifies the tag version matches `packages/{vue,styles}/package.json`.
  2. Runs `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm exec vitest run`, and `pnpm build`.
  3. Packs both packages and pushes them under the `latest` npm dist-tag (or whatever is passed via `workflow_dispatch`).
  4. Creates a GitHub release whose notes are read from the matching `## <version>` heading in `CHANGELOG.md`.

Release checklist (manual, before pushing the tag):

- [ ] Update `packages/vue/package.json` and `packages/styles/package.json` versions.
- [ ] Add a `## <version>` section at the top of `CHANGELOG.md` describing the release.
- [ ] Update the "Component Coverage" list in `README.md` if any component status changed.
- [ ] Run `pnpm lint && pnpm build && pnpm test --run` locally and confirm 0 errors.

## Commit Conventions

We follow Conventional Commits in commit messages so the release workflow stays tidy:

- `feat: ...` new component or feature
- `fix: ...` bug fix
- `docs: ...` documentation only
- `style: ...` formatting changes
- `refactor: ...` internal cleanup without behaviour change
- `test: ...` test-only changes
- `chore: ...` tooling, dependency, or release plumbing

When cherry-picking from upstream, keep the original commit message and add a `Co-authored-by:` trailer crediting the original author.

## Code Style and Component Parity

The `AGENTS.md` file in the repository root summarises the constraints our agent tooling enforces. Highlights:

- For every component, compare against the React docs preview directory before considering it done. Mirror advanced demos (multi-select, sections, surface/card compositions, validation, disabled states, icons, custom indicators, custom styles) unless explicitly impossible in Vue. When a feature is skipped, document the reason in the final response or commit message.
- Interactive label/title areas inside selectable controls must share the same pointer/hover behaviour as the control itself.
- Prefer fixing component CSS/API behaviour in `packages/vue` and `packages/styles`. Docs-only styles are for multi-component demo layouts and must be visible in the demo source.
- When component coverage changes, update `README.md` in the same commit.

## Scripts

- `scripts/maintenance/fix-truncated-utf8.py` â€?replaces incomplete UTF-8 byte sequences in `apps/docs/demos` introduced by an upstream commit. Idempotent.
- `scripts/maintenance/fix-truncated-key-binding-kbd.py` â€?repairs the same upstream bug specifically in `:keys=` bindings on `<Kbd>` components.

These scripts were needed once to unblock the docs build after forking; they are kept here for reference and in case the bug ever reappears in an upstream cherry-pick.

## Environment

- Node `>=22.0.0`
- pnpm `>=10.0.0` (this repo pins `pnpm@10.9.0`)
- pnpm with `pnpm approve-builds` already granted for `esbuild`, `vue-demi`

## What to Do First After Forking Fresh

1. `pnpm install`
2. `pnpm lint && pnpm test --run && pnpm build`
3. Open `apps/docs/.vitepress/config.ts` and confirm the GitHub Pages URL is what you want for your fork.
4. Push a tag to trigger the npm publish workflow.