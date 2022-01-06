const webpack = require("webpack");
const fs = require("fs");
const path = require("path");

module.exports = {
  target: "node",
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: `${__dirname}/main.ts`,
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    libraryTarget: "commonjs",
    filename: "[name].js",
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
  },

  module: {
    noParse: /import-esm.js$/,
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
