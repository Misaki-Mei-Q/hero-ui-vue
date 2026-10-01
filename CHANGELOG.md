# Changelog

All notable changes to HeroUI Vue are documented here.

## Unreleased

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
