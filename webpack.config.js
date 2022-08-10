/* eslint-disable prettier/prettier */
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/i,
                exclude: /test.ts/i,
                use: 'ts-loader',
            },
            {
                test: /\.(scss)$/,
                use: [{
                    // вставить CSS на страницу
                    loader: 'style-loader'
                }, {
                    // переводит CSS в модули CommonJS
                    loader: 'css-loader'
                }, {
                    // компилирует Sass в CSS
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(svg|jpg|jpeg|gif|png)$/i,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    output: {
        // filename: 'index.js',
        // path: path.resolve(__dirname, '../dist'),

        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // assetModuleFilename: 'src/assets/[name].[ext]'
        // assetModuleFilename: './assets/[name][ext]'

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                },
            ],
        }),
        new EslingPlugin({ extensions: 'ts' }),
    ],
    devServer: {
        inline: true,
        port: 8009,
    },
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
