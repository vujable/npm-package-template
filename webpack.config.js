const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    publicPath: "/",
    filename: "app.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  plugins: [new CleanWebpackPlugin()],
  // module: {
  //   rules: [],
  // },
  node: {
    fs: "empty",
  },
};
