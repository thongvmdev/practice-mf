const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:3000/',
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
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        ui_components: 'ui_components@http://localhost:3001/remoteEntry.js',
        ProductListApp: 'ProductRoutes@http://localhost:3002/remoteEntry.js',
      },
      exposes: {
        './useStore': './src/stores/useStore.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.0.0',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.0.0',
          eager: true,
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: '6.28.1',
          eager: true,
        },
        './src/stores/useStore': { singleton: true, eager: true },
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'publish'),
    // compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  mode: 'development',
}
