module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader'], exclude: /(node_modules|bower_components)/}
    ]
  }
}