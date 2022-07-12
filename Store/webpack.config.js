/* eslint-disable prettier/prettier */
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
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
                    // Выполнить действия postcss
                    loader: 'postcss-loader',
                    options: {
                        // `postcssOptions` требуется для postcss 8.x;
                        // если Вы используете postcss 7.x пропустите ключ
                        postcssOptions: {
                            // плагины postcss, можно экспортировать в postcss.config.js
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                }, {
                    // компилирует Sass в CSS
                    loader: 'sass-loader'
                }]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
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
