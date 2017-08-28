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
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),

        // HMR不能使用chunkhash,注意使用 webpack.HashedModuleIdsPlugin
        filename: '[name].[chunkhash].js',
        // 动态导入模块名字（懒加载），import()返回一个promise对象
        // import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {})
        // const _ = await import(/* webpackChunkName: "lodash" */ 'lodash')
        // chunkFilename: '[name].bundle.js',
        hashDigestLength: 6
    },
    // watch: true,

    // loader的路径是相对于context设置的
    module: {
        rules: [
            // css处理，使用css modules, minimize, postcss
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
                                minimize: true
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
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
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
        // SourceMapDevToolPlugin
        new webpack.SourceMapDevToolPlugin({           // 和 devtool: 'source-map' 类似，可制定输出文件
            filename: '../source-map/[name].js.map',
            exclude: [
                'vendor.js'         // 排除一些公共库，不生成source-map
            ]
        }),
        // CleanWebpackPlugin
        new CleanWebpackPlugin([
            './dist'
        ]),
        // HtmlWebpackPlugin
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: './index.html',
            title: 'Mamba Spirit'
        }),
        // ExtractTextPlugin, 注意要结合loader使用
        new ExtractTextPlugin('style.css'),
        // HashedModuleIdsPlugin
        new webpack.HashedModuleIdsPlugin(),      // 确保其他文件修改后每次每次公共类库的id不影响chunkhash
        // CommonsChunkPlugin
        new webpack.optimize.CommonsChunkPlugin({     // 将entry中的vendor中的公共类库打包到一个文件中，有利于缓存
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({   // 将运行时的多次重用的模块打包到一个文件中，包括runtime和manifest
            name: 'runtime'
        }),
        // UglifyJsPlugin
        new webpack.optimize.UglifyJsPlugin()   // 对JS文件进行压缩
    ]
}