module.exports = {
    plugins: [
      require('postcss-import'),
      require('autoprefixer'),
      require('postcss-preset-env')({
        stage: 1
      }),
      require('cssnano')({
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
        }],
      }),
    ],
  };