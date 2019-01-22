const webpack = require('webpack')
const webpack_merge = require('webpack-merge')
const base = require('./webpack_config.base')
const config = require('../config')
const plugins = require('./plugin.build')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

if (process.env.analyzer) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpack_merge(base, {
  devtool: process.env.BASE_ENV === 'prod' ? false : 'source-map',
  // production 可以压缩代码 4.0 之前用uglifyjs-webpack-plugin
  mode: process.env.BASE_ENV === 'prod' ? 'production' : 'development',
  plugins: plugins
})