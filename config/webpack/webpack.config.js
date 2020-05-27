const path = require ('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TercerWebpackPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development'

const name = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const optimization= () => {
    const result= {splitChunks: {
        chunks: 'all'}
    }

    if (!isDev) {
        result.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TercerWebpackPlugin()
        ]
    }
    return result
} 

const cssLoader = ext => {
    const loader = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadALL: true
        },
      }, 'css-loader']

    if (ext) loader.push(ext)

    return loader 
}

module.exports = {
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.jsx'] }, 
    output: {
        filename: `js/${name('js')}`,
        path: path.resolve(__dirname, '../../build/'),
        publicPath: '/'
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, '../../index.html'),
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              { from: path.resolve(__dirname, '../../src/favicon.ico'), 
                to: path.resolve(__dirname, '../../build')}
            ],
          }),
        new MiniCssExtractPlugin({
            filename: `css/${name('css')}`
        }),
        new webpack.HotModuleReplacementPlugin(),    
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoader()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoader('sass-loader')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: {
                    loader: 'babel-loader'   
                } 
            }
        ]
    }
}