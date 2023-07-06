import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  stories: [
    '../src/app/components/**/*.mdx',
    '../src/app/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-controls',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  core: {},
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    });

    return config;
  },
};
export default config;
