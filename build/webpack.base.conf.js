const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(png|jpg|gif|svg|mov|mp4)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          mimetype: 'application/font-woff',
          publicPath: '../'
        }
      }]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
        }
      ]
    }, {
      test: /\.twig$/,
      use: [
        'twig-loader'
      ]
    },{
      test: /bootstrap\.native/,
      use: {
        loader: 'bootstrap.native-loader',
        options: {
          only: ['collapse']
        }
      }
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${PATHS.src}/index.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'index--authorised.html',
      template: `${PATHS.src}/templates/pages/index.html--authorised.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'landing-celebrities.html',
      template: `${PATHS.src}/templates/pages/landing-celebrities.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'login-mobile.html',
      template: `${PATHS.src}/templates/pages/login-mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'registration-mobile.html',
      template: `${PATHS.src}/templates/pages/registration-mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'registration-mobile-success.html',
      template: `${PATHS.src}/templates/pages/registration-mobile-success.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'account-public.html',
      template: `${PATHS.src}/templates/pages/account-public.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'account-private.html',
      template: `${PATHS.src}/templates/pages/account-private.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'account-private-color.html',
      template: `${PATHS.src}/templates/pages/account-private-color.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'account-private-photo.html',
      template: `${PATHS.src}/templates/pages/account-private-photo.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'sell-item-mobile.html',
      template: `${PATHS.src}/templates/pages/sell-item-mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'sell-item-success.html',
      template: `${PATHS.src}/templates/pages/sell-item-success.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'sell-item-success-mobile.html',
      template: `${PATHS.src}/templates/pages/sell-item-success-mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'catalogue.html',
      template: `${PATHS.src}/templates/pages/catalogue.twig`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/video`, to: `${PATHS.assets}video` },
    ])
  ],
}
