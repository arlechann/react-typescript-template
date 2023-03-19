const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("node:path")

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  target: ["web", "es2015"],
  devServer: {
    static: {
      directory: path.join(__dirname, "src")
    },
    port: 3000,
    client: {
      reconnect: 3,
      overlay: true,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
}
