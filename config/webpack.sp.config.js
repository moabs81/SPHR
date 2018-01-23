var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
const myConfig = require('./moreConfig');

module.exports = {
    devtool: 'source-map',
    entry: myConfig.buildPath('src/spEntry/spApp.js'),
    output: {
        path: myConfig.buildPath('spApp/'),
        publicPath: 'https://tsps.ncsecu.local/demo/S22307N/SiteAssets/spApp/',
        filename: 'appBundle.js'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: require.resolve('eslint-loader'),
            options: {
                eslintPath: require.resolve('eslint'),
                configFile: myConfig.buildPath('config/.eslintrc')
            }
        },
        {
            oneOf: [{
                test: /\.(jpg|jpeg|png|svg)$/,
                exclude: /node_modules/,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 8000,
                    name: '[name]-[hash:6].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
                /*options: {
                    presets: ['env']
                }*/
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [{
                    loader: require.resolve('style-loader')
                }, {
                    loader: require.resolve('css-loader')
                }, {
                    loader: require.resolve('less-loader'),
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            },
            {
                exclude: [/\.js$/, /\.html$/, /\.json$/],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'media/[name]-[hash:6].[ext]'
                }
            }
            ]
        }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
                //drop_console: true - disabled for hack and slash dev'ing
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new htmlWebpackPlugin({
            template: myConfig.buildPath('src/spEntry/spApp.html')
        })
    ]
}
