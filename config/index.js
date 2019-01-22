module.exports = {
  dev: {
    root_path: '../dist',
    static_path: 'assets',
    publicPath: '/',

    proxyTable: {
      '/api-qa': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/api-qa': ''
        }
      }
    }
  },
  build: {
    root_path: '../dist',
    static_path: 'assets',
    publicPath: '/'
  }
}