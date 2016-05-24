var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './',
    publicPath: '/',
    filename: 'app.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      }
    })
  ]
};