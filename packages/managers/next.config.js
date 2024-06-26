const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.config')

const withTM = require('next-transpile-modules')(
  ['@leejangheon/ui', '@leejangheon/utils'],
  {
    resolveSymlinks: true,
    debug: false,
  },
)

module.exports = withTM({
  images: {
  },
  webpack: (config) => {
    return merge(config, webpackCommonConfig) // webpack 공통 설정 Merge
  },
  compiler: {
    emotion: {
      autoLabel: 'never',
    },
  },
})
