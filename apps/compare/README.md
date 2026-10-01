# Visual Parity Sandbox

This sandbox renders the upstream `@heroui/react@3.2.x` component on the left
and the local `@misaki-mei/heroui-vue` component on the right, side by side,
using the same Tailwind v4 stylesheet. The intent is to catch visual drift
between the Vue port and the React source so the port can converge on the
upstream styling.

## Run

```bash
pnpm install
pnpm -F @misaki-mei/heroui-vue-compare dev
```

Open the printed URL (default http://localhost:5173). Pick a component from
the sticky nav to swap the matrix. The two panes must render the same DOM
classes (e.g. `.button--primary`, `.badge--accent`) for parity to hold.

## How a navigation page is structured

Each entry in `src/components/` is a pair:

- `*.react.tsx` — the React matrix, importing from `@heroui/react`.
- `*.vue` — the Vue matrix, importing from `@misaki-mei/heroui-vue`.

Both files render the same prop matrix (variants × sizes × states) so a
visual scan reveals any styling drift. The host (`src/App.tsx`) mounts the
React matrix directly and the Vue matrix inside a `VuePane` that wraps
`createApp(...).mount(...)`.

## Adding a new component

1. Add `XxxCompare.react.tsx` and `XxxCompare.vue` in `src/components/`.
2. Register both in `src/App.tsx` `ENTRIES`.
3. Keep the matrices identical so the diff is purely a result of CSS drift.