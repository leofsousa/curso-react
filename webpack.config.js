const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.html$/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extension: [".js", ".jsx"],
  },
  plugin: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
