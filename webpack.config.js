const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: path.join(__dirname, 'src/index.ts'),
  target: 'webworker',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'worker.js',
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
