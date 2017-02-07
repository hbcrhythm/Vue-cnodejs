module.exports = {
  NODE_ENV: '"production"',
  dev: {
  	proxyTable: {
      '/api': {
        target: 'http://localhost:8020/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
