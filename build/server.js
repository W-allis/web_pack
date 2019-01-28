const webpack = require('webpack')
const express = require('express')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const proxyMiddleware = require('http-proxy-middleware')
const config = require('../config')
const webpack_config = require('./webpack_config.dev')

const app = express()

const compiler = webpack(webpack_config)

const root_module = express.static(path.resolve(__dirname, config.dev.root_path))
const file_module = webpackDevMiddleware(compiler, webpack_config.devServer)
const hot_module = webpackHotMiddleware(compiler)

// 必须先生成文件然后开启服务
app.use(file_module)

app.use(hot_module)

// 必须在文件生成之后访问
app.use(root_module)

// node 反向代理
Object.keys(config.dev.proxyTable).forEach(item => {
  app.use(item, proxyMiddleware(config.dev.proxyTable[item]))
})

app.listen(9538, _=> {
  console.log('server is running')
})