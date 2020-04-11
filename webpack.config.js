const path = require('path');

module.exports = {
  mode: 'development',

  entry: ['@babel/polyfill', './src/script.js'],
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },

  devtool: 'cheap-inline-module-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
    ],
  },
};
