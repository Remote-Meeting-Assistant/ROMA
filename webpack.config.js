const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, "client", "index.tsx"),
  output: {
    path: path.resolve(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ttf$/i,
        // use: ['file-loader'],
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx)$/, 
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/public/index.html'),
    }),
    new Dotenv()
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx" ],
  },
  devServer: {
    // static: {
    //   directory: path.resolve(__dirname, 'dist'),
    //   publicPath: '/build'
    // },
    compress: true,
    port: 8080,
    // proxy: {
    //   '/': 'http://localhost:3000',
    // },
  },
};
