const webpack = require('webpack')
const express = require('express')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../config')
const webpack_config = require('./webpack_config.dev')

const app = express()

const compiler = webpack(webpack_config)

const root_module = express.static(path.resolve(__dirname, config.dev.root_path))
const file_module = webpackDevMiddleware(compiler, webpack_config.devServer)
const hot_module = webpackHotMiddleware(compiler)

app.use(file_module)

app.use(hot_module)

app.use(root_module)

app.listen(9538, _=> {
  console.log('server is running')
})