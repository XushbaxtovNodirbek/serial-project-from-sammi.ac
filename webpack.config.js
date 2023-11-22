const { debug } = require('console');
const path = require('path');

module.exports = {
  entry: './src/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  watch:true,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [['@babel/preset-env',{
                    debug: true,
                    corejs: 3,
                    useBuiltIns: "usage"
                }]]
            }
        },
      }
    ],
  },
};