# Contributing to HeroUI Vue

Thank you for your interest in contributing to HeroUI Vue! This document provides guidelines and instructions for contributing.

## Development Setup

### Prerequisites

- Node.js >= 22.0.0
- pnpm >= 10.0.0

### Getting Started

1. Fork and clone the repository:
```bash
git clone https://github.com/your-username/heroui-vue.git
cd heroui-vue
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development:
```bash
pnpm dev
```

## Project Structure

```
hero-ui-vue/
├── packages/
�?  ├── vue/          # Main component library
�?  ├── styles/       # Tailwind CSS styles and variants
�?  └── standard/     # Shared configurations (ESLint, TypeScript)
├── apps/
�?  ├── docs/         # Documentation site (VitePress)
�?  └── storybook/    # Component development (Storybook)
└── react-source/     # Original HeroUI React source (reference)
```

## Development Workflow

### Creating a New Component

1. Create component files in `packages/vue/src/components/[component-name]/`:
```
component-name/
├── index.ts              # Exports
├── [component-name].vue  # Main component
└── [component-name].spec.ts # Tests
```

2. Create styles in `packages/styles/src/components/[component-name]/`:
```
component-name/
├── index.ts              # Variant exports
└── [component-name].css  # CSS styles (BEM naming)
```

3. Add Storybook story in `apps/storybook/stories/`:
```typescript
// [component-name].stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import { ComponentName } from '@misaki-mei/heroui-vue';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
};

export default meta;
```

### Component Guidelines

1. **Use Composition API**: All components must use Vue 3 Composition API
2. **TypeScript**: Full TypeScript support with proper types
3. **Accessibility**: Follow WCAG 2.1 AA guidelines
4. **Radix Vue**: Use Radix Vue primitives for accessibility
5. **BEM Naming**: Use Block__Element--Modifier for CSS classes
6. **Tests**: Write tests for all components (80%+ coverage)
7. **Documentation**: Add JSDoc comments and usage examples

### Code Style

- Follow the ESLint configuration
- Use Prettier for formatting
- Run `pnpm lint` before committing
- Run `pnpm format` to format code

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

### Commit Convention

We use conventional commits:

```
<type>(<scope>): <message>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting)
- refactor: Code refactoring
- test: Test changes
- chore: Build/tooling changes
```

Examples:
```bash
git commit -m "feat(button): add loading state"
git commit -m "fix(checkbox): resolve focus ring issue"
git commit -m "docs: update installation guide"
```

## Pull Request Process

1. Create a feature branch:
```bash
git checkout -b feat/component-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat(component): add new component"
```

3. Push to your fork:
```bash
git push origin feat/component-name
```

4. Create a Pull Request with:
   - Clear description of changes
   - Screenshots/videos for UI changes
   - Test results
   - Documentation updates

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Tests pass (`pnpm test`)
- [ ] Linting passes (`pnpm lint`)
- [ ] TypeScript compiles (`pnpm typecheck`)
- [ ] Component has Storybook story
- [ ] Component has tests (80%+ coverage)
- [ ] Documentation updated
- [ ] Accessibility tested

## Component Porting Guidelines

When porting components from HeroUI React:

1. **Study the React version**: Understand the component's API and behavior
2. **Check Radix Vue**: Find the equivalent Radix Vue primitive
3. **Maintain API compatibility**: Keep props similar to React version
4. **Use Vue idioms**: Use `v-model`, slots, and composables appropriately
5. **Port styles**: Copy CSS from `@misaki-mei/heroui-vue-styles` and adapt if needed
6. **Write tests**: Ensure behavior matches React version
7. **Document differences**: Note any Vue-specific changes

### React to Vue Patterns

| React | Vue |
|-------|-----|
| `useState` | `ref`, `reactive` |
| `useEffect` | `watchEffect`, `watch` |
| `useContext` | `inject` |
| `useMemo` | `computed` |
| `forwardRef` | `defineExpose` |
| `children` | `slots.default` |
| `className` | `class` |
| `onChange` | `@change` or `v-model` |

## Questions?

- Open an issue for bugs or feature requests
- Join our Discord for discussions
- Check existing issues before creating new ones

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
