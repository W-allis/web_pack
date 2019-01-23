const webpack = require('webpack')
const path = require('path')
const cleanPlugin = require('clean-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const utils = require('./utils')
const dev = require(`../config/${process.env.BASE_ENV}.env`)
const entry = require('./entry')

const base_plugin = [
  new webpack.DefinePlugin({
    'process.env': dev
  }),
  new cleanPlugin(['dist/*'], {
    root: path.resolve(__dirname, '../')
  }),
  new extractTextPlugin(utils.resolve(`css/[name].css`)),
  new htmlPlugin({
    filename: 'index.html',
    template: './index.html',
    title: 'webpack_plugin',
    favicon: './assets/img/foo.jpg',
    inject: true,
    chunks: ['app', 'runtime', 'vendor'],
    head: {
      css: ['app']
    }
  })
]

Object.keys(entry).forEach(file => {
  base_plugin.push(new htmlPlugin({
    filename: `views/${file}.html`,
    template: `./src/views/${file}/index.html`,
    inject: true,
    chunks: [`${file}`, 'runtime', 'vendor'],
    head: {
      css: [`${file}`]
    },
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }))
})

module.exports = base_plugin