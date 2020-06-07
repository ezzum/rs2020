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
        entry: ['./src/app.js', './src/styles/style.scss'],
        output: {
            path: path.join(__dirname,'./dist'),
            filename: 'script.js',
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        }
                    ]
                },
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
              template: 'index.html',
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
        ]
    }

    return config;
}