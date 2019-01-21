const path = require('path')
const config = require('../config')
const utils = require('./utils')
const extractTextPlugin = require('extract-text-webpack-plugin')
const entry = require('./entry')

module.exports = {

  entry: Object.assign({ app: './src/main'}, entry),
  output: {
    filename: utils.resolve('js/[name]_[hash:8].js'),
    path: path.resolve(__dirname, config.dev.root_path),
    publicPath: process.env.BASE_ENV === 'prod' ? config.build.publicPath : config.dev.publicPath
  },
  resolve: {
    extensions: ['.js', '.css', '.html'],
    alias: {
      '@': path.join(__dirname, '../', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      // 基于 webpack4 必须要 npm i extract-text-webpack-plugin@next
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
          // css publicPath 路径
          publicPath: '../'
        })
      },
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: utils.resolve('img/[name].[ext]')
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    },
    // Keep the runtime chunk seperated to enable long term caching
    runtimeChunk: true
  }
}