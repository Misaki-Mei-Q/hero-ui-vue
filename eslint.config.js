import standardConfig from '@misaki-mei/heroui-vue-standard/eslint';

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
