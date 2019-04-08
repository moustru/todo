const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');
const argv = require('yargs').argv;
const isDev = argv.mode === 'development';
const isProd = !isDev;

module.exports = {
    entry: './dev/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/app.js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },

            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            scss: 'vue-style-loader!sass-loader'
                        }
                    }
                }
            },

            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                isProd ? cssnano : () => {},
                                autoprefixer({
                                    browsers: ['ie >=11', 'last 4 versions']
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }        
                    },

                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            }
                        }
                    }
                ]
            },

            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                }
            }
        ]
    },

    plugins: [
        new Webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/app.css',
            chunkFilename: 'css/[id].css' 
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],

    optimization: isProd ? {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        inline: false,
                        warnings: false,
                        drop_console: true,
                        unsafe: true
                    },
                },
            }),
        ], 
    } : {},

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: 'localhost',
        port: 9000,
        compress: true,
        open: true,
        hot: true
    }
};