module.exports = {
  configureWebpack: {
  },
  devServer: {
    host: 'localhost',
    hot: true,
    port: 8080,
    open: 'Chrome',
    proxy: {
      '/users': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      //https://cli.vuejs.com/guide/html-and-static-assets.html#disable-index-generation
      '/*': { // everything from root
        target: 'http://localhost:5000',
        secure: false,
        ws: false
      },
      '/ws/': { // web socket
        target: 'http://localhost:5000',
        secure: false,
        ws: false
      },
      '!/': { //except root, which is served by webpack's dev server, to facilitate instant update
        target: 'http://localhost:3000/',
        secure: false,
        ws: false
      }
    }
  }
}