const path = require('path')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
      config.output.globalObject = 'this'
    } else {
      // mutate for development...
    }
  },
  //不使用eslint
  lintOnSave: false,
  //
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/styles/_var.scss";`,
      },
    },
  },
}


