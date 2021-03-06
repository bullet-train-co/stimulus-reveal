const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'stimulus-reveal.js',
    library: 'stimulusReveal',
    libraryTarget: 'umd'
  },
  externals: {
    stimulus: {
      commonjs: 'stimulus',
      commonjs2: 'stimulus',
      amd: 'stimulus',
      root: 'stimulus'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  }
}
