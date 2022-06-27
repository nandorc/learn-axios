const path = require('path');

module.exports = {
  'mode': 'none',
  'entry': './src/index.js',
  'output': {
    'path': __dirname + '/pub',
    'filename': 'bundle.js'
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'pub')
  },
  'module': {
    'rules': [
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': {
          'loader': 'babel-loader',
          'options': {
            'presets': ['@babel/preset-env']
          }
        }
      }
    ]
  }
}