import standardConfig from '@misaki-mei-q/heroui-vue-standard/eslint';

export default [
  ...standardConfig,
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.turbo/**',
      '**/react-source/**',
    ],
  },
];
