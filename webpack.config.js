const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,        
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']        
        }
      },  
      {
        test: /\.sass$|\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {  },
          },          
          { loader: 'sass-loader' },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({    
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ], 
  plugins: [htmlWebpackPlugin]
}