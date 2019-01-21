module.exports = {
  dev: {
    root_path: '../dist',
    static_path: 'assets',
    publicPath: '/',

    proxyTable: {
      'api': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
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