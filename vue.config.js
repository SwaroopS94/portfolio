const path = require('path');

module.exports = {
    configureWebpack: {
      entry: './src/main.js',
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
        }
    }
};