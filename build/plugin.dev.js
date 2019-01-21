const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const dev = require('../config/dev.env')
const utils = require('./utils')
const entry = require('./entry')

const base_plugin = [
  new webpack.DefinePlugin({
    'env': dev
  }),
  new webpack.HotModuleReplacementPlugin(),
  new extractTextPlugin(utils.resolve(`css/[name].css`)),
  new htmlPlugin({
    filename: 'index.html',
    template: './index.html',
    title: 'webpack_plugin',
    favicon: './assets/img/foo.jpg',
    inject: true,
    chunks: ['app'],
    head: {
      css: [`app`]
    }
  })
]

Object.keys(entry).forEach(file => {
  console.log(file)
  base_plugin.push(new htmlPlugin({
    filename: `views/${file}.html`,
    template: `./src/views/${file}/index.html`,
    inject: true,
    chunks: [`${file}`],
    head: {
      css: [`${file}`]
    }
  }))
})

module.exports = base_plugin

