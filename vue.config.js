const path = require('path')

module.exports = {
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


