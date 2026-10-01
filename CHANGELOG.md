# Changelog

All notable changes to HeroUI Vue are documented here.

## Unreleased

## 0.1.0

### Changed

- This is the first release under the new `@misaki-mei/*` scope and the new GitHub identity `Misaki-Mei-Q/hero-ui-vue`.
- The fork continues from upstream `rysinal/hero-ui-vue` at `33406ed` (the published `0.0.5` tag). All prior `0.0.x` releases were published by the original author under `@rysinal/*`.
- Demo files that were truncated upstream (UTF-8 half-codepoints in `<Kbd>` key bindings, the `card-with-form.vue` password placeholder, the `textfield-basic.vue` error attribute, and the `toggle-button-basic.vue` star glyph) are repaired so the docs build succeeds.
- The shared ESLint configuration now declares browser and Node globals so component, test, and tooling source files lint cleanly.
- The publish-npm workflow tarball prefix now matches the new scope.

### Packages

- `@misaki-mei/heroui-vue@0.1.0`
- `@misaki-mei/heroui-vue-styles@0.1.0`

## 0.0.5

### Added

- Added DisclosureGroup component parity coverage.
- Added Modal and Drawer component parity coverage.
- Added Quick Start entry points to the docs top navigation and Components sidebar.

### Fixed

- Fixed Modal preview parity gaps.
- Exported the DrawerBackdrop props type used by generated Vue declarations.
- Polished the Drawer navigation demo behavior.

### Packages

- `@misaki-mei/heroui-vue@0.0.5`
- `@misaki-mei/heroui-vue-styles@0.0.5`

## 0.0.4

### Fixed

- Restored runtime Tailwind theme variables for the published styles entrypoint.
- Aligned runtime theme aliases with upstream HeroUI selectors for `.light`, `.default`, `.dark`, and `[data-theme]`.
- Fixed docs preview shells and the delivery/payment radio demo so dark mode uses HeroUI background and foreground tokens instead of hard-coded light backgrounds.

### Changed

- Aligned README installation docs with the upstream HeroUI Quick Start structure.
- Moved package Tailwind source scanning into the styles entrypoint so consumers do not need to configure `@source` manually.

### Packages

- `@misaki-mei/heroui-vue@0.0.4`
- `@misaki-mei/heroui-vue-styles@0.0.4`

## 0.0.3

### Added

- Added npm package README files for `@misaki-mei/heroui-vue` and `@misaki-mei/heroui-vue-styles`.
- Added changelog-based GitHub Release publishing to the npm publish workflow.
- Added package tarball checks to ensure npm README files are included before publishing.

### Changed

- Updated installation docs to install both the Vue package and companion styles package.

### Packages

- `@misaki-mei/heroui-vue@0.0.3`
- `@misaki-mei/heroui-vue-styles@0.0.3`

## 0.0.2

### Added

- Published `@misaki-mei/heroui-vue` and `@misaki-mei/heroui-vue-styles` through GitHub Actions Trusted Publishing.
- Verified the tag-triggered npm publish workflow with GitHub OIDC.

### Packages

- `@misaki-mei/heroui-vue@0.0.2`
- `@misaki-mei/heroui-vue-styles@0.0.2`

## 0.0.1

### Added

- Published the initial npm versions of the Vue component package and styles package.
- Added package metadata, npm export maps, and npm Trusted Publishing setup.

### Packages

- `@misaki-mei/heroui-vue@0.0.1`
- `@misaki-mei/heroui-vue-styles@0.0.1`
