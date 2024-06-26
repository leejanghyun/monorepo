const commonConfig = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(woff|ttf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
              publicPath: 'assets/fonts',
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
}

/**
 * next.config.js/storybook의 wepack 공통 설정 파일
 */
module.exports = commonConfig
