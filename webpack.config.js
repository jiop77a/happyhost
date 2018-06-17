var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './frontend/index.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        },
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin(['CLOUDINARY_PRESET'])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
