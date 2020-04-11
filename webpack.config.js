const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? '' : 'source-map',
    watch: !isProduction,
    entry: ['./src/script.js', './style.css'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
    },

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
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        // {
        //   test: /\.html$/i,
        //   loader: 'html-loader',
        // },
        // {
        //   test: /\.(png|svg|jpe?g|gif)$/,
        //   use: [
        //     {
        //       loader: 'file=loader',
        //     },
        //   ],
        // },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      // new HtmlWebpackPlugin({
      //   template: 'index.html',
      // }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
  };

  return config;
};
