const { defineConfig } = require("@vue/cli-service");
// vue.config.js
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = defineConfig({
  publicPath: "./",
  // 这边可以指定打包后存放的目录
  outputDir: path.resolve(__dirname, "../security/src/main/resources/static"),
  transpileDependencies: true,
  configureWebpack: (config) => {
    // 为生产环境修改配置...
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
});
