const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || "development"; 

module.exports = {
    mode: 'development',

    entry: {
        'polyfills': './dev/js/polyfills.ts',
        'app': './dev/js/index.ts'
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/[name].js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    // devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,

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
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: './tsconfig.json'
                    }
                }, 'angular2-template-loader' ]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                     
                    MiniCssExtractPlugin.loader,
                    
                    {
                        loader: 'css-loader',
                        options: {
                            publicPath: './build/css',
                            url: false,
                            minimize: true
                        }
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers:['ie >= 11', 'last 4 version']
                                })
                            ],
                
                            sourceMap: true
                        }
                    },

                    'sass-loader'
                ]
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
        new Webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.join(__dirname, 'dev'),
            {} // route map
        )
    ],

    optimization: {
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
    },

    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        host: 'localhost',
        port: 9000,
        compress: true,
        open: true,
        hot: true
    }
};