const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const webpack = require('webpack');

// must be absolute
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};


const common = {
  // entry accept path or an object of entires
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // regex test for file extension
        test: /\.css$/,
        loaders: ['style', 'css'],
        // includes accepts either path or an array of paths (right to left evaluation)
        include: PATHS.app
      }
    ]
  },
  plugins: [
  // auto-generates index.html
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
}


// allow for multiple configurations depending on 'npm run ${TARGET}'
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      stats: 'errors-only',

      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
