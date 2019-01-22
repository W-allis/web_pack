const webpack_merge = require('webpack-merge')
const base = require('./webpack_config.base')
const config = require('../config')
const plugins = require('./plugin.dev')

module.exports = webpack_merge(base, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    port: 9526,
    hot: true,
    proxy: config.dev.proxyTable
  },
  watch: true,
  plugins: plugins
})