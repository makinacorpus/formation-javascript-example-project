const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
