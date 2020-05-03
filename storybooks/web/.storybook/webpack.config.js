const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js"],
    alias: {
      "react-qr-code": path.join(__dirname, "..", "..", "..", "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
