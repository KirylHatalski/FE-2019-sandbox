const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    "mode": "development",
    "entry": ["./src/js/index.js", "./src/styles/main.scss"],
    "output": {
        "path": __dirname + '/dist',
        "filename": "[name].js"
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env"
                        ]
                    }
                }
            },
            {
                "test": /\.scss$/,
                "use": [
                  MiniCssExtractPlugin.loader,
                      { loader: 'css-loader', options: { url: false, sourceMap: true } },
                      { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
            }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          filename: "[name].css",
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true
    }
}

module.exports = config;
