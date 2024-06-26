const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const { merge } = require('webpack-merge')
const webpackConfig = require('../webpack.config.js')

module.exports = {
  stories: [
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  staticDir: [
    {
      directory: '../src/assets/fonts',
      prefix: 'assets/fonts',
      staticOptions: {},
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  features: {
    babelModeV7: true,
  },
  babel: {
    plugins: ['@emotion/babel-plugin'],
  },
  webpackFinal: async (config) => {
    const { rules } = config.module
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'))

    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        plugins: ['@emotion/babel-plugin'],
      },
    })

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ]

    return merge(config, webpackConfig) // 공통 webpack 설정 Merge
  },
}
