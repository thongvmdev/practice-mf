const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:3002/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new ModuleFederationPlugin({
      name: 'ProductRoutes',
      filename: 'remoteEntry.js',
      remotes: {
        ui_components: 'ui_components@http://localhost:3001/remoteEntry.js',
        shell: 'shell@http://localhost:3000/remoteEntry.js',
      },
      exposes: {
        './ProductRoutes': './src/ProductRoutes',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.0.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.0.0',
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: '6.28.1',
        },
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'publish'),
    port: 3002,
    historyApiFallback: true,
    hot: true,
  },
  mode: 'development',
}
