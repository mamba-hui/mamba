const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './js/main.js',
        vendor: [
            'jquery'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist-dev'),
        // HMR不能使用chunkhash
        // filename: '[name].[chunkhash].js',
        filename: '[name].js',
        // 动态导入模块名字（懒加载），import()返回一个promise对象
        // import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {})
        // const _ = await import(/* webpackChunkName: "lodash" */ 'lodash')
        // chunkFilename: '[name].bundle.js',
        hashDigestLength: 6
    },
    // watch: true,

    // 也可以使用了webpack.SourceMapDevToolPlugin插件
    devtool: 'source-map',

    // devServer: {
    //     // contentBase: './dist-dev',
    //     inline: true,     //可省略，为默认值，
    //     hot: true,    // HMR  使用chunkhash不能使用HMR
    //     publicPath: './dist-dev'
    // },
    // loader的路径是相对于context设置的
    module: {
        rules: [
            // css处理，使用css modules, postcss
            {
                test: /-module\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: {
                        loader: 'style-loader'
                    },
                    use: [    //注意use可以是字符串，数组，  数组中又可以是字符对，对象
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                exclude: /-module\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: {
                        loader: 'style-loader'
                    },
                    use: [    //注意use可以是字符串，数组，  数组中又可以是字符对，对象
                        'css-loader',
                        'postcss-loader'
                    ]
                })
            },
            // 处理js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            // 处理图片
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // HMR 需在devServer中设置hot: true
        // new webpack.HotModuleReplacementPlugin(),    
        // CleanWebpackPlugin
        new CleanWebpackPlugin([
            './dist-dev'
        ]),
        // HtmlWebpackPlugin
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: './index.html',
            title: 'Mamba Spirit'
        }),
        // ExtractTextPlugin, 注意要结合loader使用
        new ExtractTextPlugin('style.css'),
        // CommonsChunkPlugin
        new webpack.optimize.CommonsChunkPlugin({     // 将entry中的vendor中的公共类库打包到一个文件中，有利于缓存
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({   // 将运行时的多次重用的模块打包到一个文件中，包括runtime和manifest
            name: 'runtime'
        }),
    ]
}