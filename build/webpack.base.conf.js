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
    app: PATHS.src,
    sellItem: `${PATHS.src}/js/sell-item-transition.js`
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
    new HtmlWebpackPlugin({
      filename: 'cart.html',
      template: `${PATHS.src}/templates/pages/cart.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart--has-contacts.html',
      template: `${PATHS.src}/templates/pages/cart--has-contacts.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart--has-address--multiple.html',
      template: `${PATHS.src}/templates/pages/cart--has-address--multiple.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart--has-address--single.html',
      template: `${PATHS.src}/templates/pages/cart--has-address--single.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart--mobile.html',
      template: `${PATHS.src}/templates/pages/cart--mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart--mobile--has-contacts.html',
      template: `${PATHS.src}/templates/pages/cart--mobile--has-contacts.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart--mobile--has-address--single.html',
      template: `${PATHS.src}/templates/pages/cart--mobile--has-address--single.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart--mobile--has-address--multiple.html',
      template: `${PATHS.src}/templates/pages/cart--mobile--has-address--multiple.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart-payment.html',
      template: `${PATHS.src}/templates/pages/cart-payment.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart-payment--single-card.html',
      template: `${PATHS.src}/templates/pages/cart-payment--single-card.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart-payment--multiple-card.html',
      template: `${PATHS.src}/templates/pages/cart-payment--multiple-card.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart-payment--mobile.html',
      template: `${PATHS.src}/templates/pages/cart-payment--mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart-payment--mobile--single-card.html',
      template: `${PATHS.src}/templates/pages/cart-payment--mobile--single-card.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart-payment--mobile--multiple-card.html',
      template: `${PATHS.src}/templates/pages/cart-payment--mobile--multiple-card.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart--mobile--success.html',
      template: `${PATHS.src}/templates/pages/cart--mobile--success.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cart-items--demo-desktop.html',
      template: `${PATHS.src}/templates/pages/cart-items--demo-desktop.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'account-private-photo--mobile.html',
      template: `${PATHS.src}/templates/pages/account-private-photo--mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'account-private-color--mobile.html',
      template: `${PATHS.src}/templates/pages/account-private-color--mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'account-private-avatar--mobile.html',
      template: `${PATHS.src}/templates/pages/account-private-avatar--mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'account-private-edit--mobile.html',
      template: `${PATHS.src}/templates/pages/account-private-edit--mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-auction.html',
      template: `${PATHS.src}/templates/pages/item-auction.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-auction--has-bet.html',
      template: `${PATHS.src}/templates/pages/item-auction--has-bet.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-auction--solded.html',
      template: `${PATHS.src}/templates/pages/item-auction--solded.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-fixed.html',
      template: `${PATHS.src}/templates/pages/item-fixed.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-fixed--bookmarked.html',
      template: `${PATHS.src}/templates/pages/item-fixed--bookmarked.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-fixed--canceled.html',
      template: `${PATHS.src}/templates/pages/item-fixed--canceled.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-fixed--delivered.html',
      template: `${PATHS.src}/templates/pages/item-fixed--delivered.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-auction--mobile.html',
      template: `${PATHS.src}/templates/pages/item-auction--mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-auction--mobile--has-bet.html',
      template: `${PATHS.src}/templates/pages/item-auction--mobile--has-bet.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-auction--mobile--solded.html',
      template: `${PATHS.src}/templates/pages/item-auction--mobile--solded.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-fixed--mobile.html',
      template: `${PATHS.src}/templates/pages/item-fixed--mobile.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-fixed--mobile--bookmarked.html',
      template: `${PATHS.src}/templates/pages/item-fixed--mobile--bookmarked.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-fixed--mobile--canceled.html',
      template: `${PATHS.src}/templates/pages/item-fixed--mobile--canceled.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'item-fixed--mobile--delivered.html',
      template: `${PATHS.src}/templates/pages/item-fixed--mobile--delivered.twig`,
    }),
    new HtmlWebpackPlugin({
      filename: 'order-details.html',
      template: `${PATHS.src}/templates/pages/order-details.twig`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/video`, to: `${PATHS.assets}video` },
    ])
  ],
}
