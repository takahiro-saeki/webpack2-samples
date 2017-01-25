const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  performance: {
    hints: false
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => {
                return [
                  require('precss'),
                  require('autoprefixer'),
                  require('postcss-size')
                ];
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack2 with React.js example',
      template: path.join(__dirname, './src/index.ejs')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
