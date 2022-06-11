const { resolve } = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps.include ?? []),
          '@storybook/react > acorn-jsx',
        ],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': resolve('', 'src'),
        },
      },
    };
  },
};
