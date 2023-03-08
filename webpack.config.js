const path = require("path")
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    library: 'Oracle',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new NodePolyfillPlugin()
  ],
}
