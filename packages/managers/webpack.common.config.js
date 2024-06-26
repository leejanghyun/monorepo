const isProduction = process.env.NEXT_PUBLIC_TARGET === 'prd'

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
}

const productionConfig = {
  devtool: 'hidden-source-map',
}

/**
 * next.config.js/storybook의 wepack 공통 설정 파일
 */
module.exports = isProduction ? Object.assign(commonConfig, productionConfig) : commonConfig
