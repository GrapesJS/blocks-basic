var webpack = require('webpack');
var pkg = require('./package.json');
var env = process.env.WEBPACK_ENV;
var name = 'grapesjs-blocks-basic';
var plugins = [];

if(env !== 'dev') {
  plugins = [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {warnings: false},
    }),
    new webpack.BannerPlugin(pkg.name + ' - ' + pkg.version),
  ]
}

plugins.push(new webpack.ProvidePlugin({_: 'underscore'}));

module.exports = {
  entry: './src',
  output: {
      filename: './dist/' + name + '.min.js',
      library: name,
      libraryTarget: 'umd',
  },
  externals: {jquery: 'jQuery'},
  plugins: plugins,
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        include: /src/,
        exclude: /node_modules/,
        query: {presets: ['es2015']}
    }],
  }
}
