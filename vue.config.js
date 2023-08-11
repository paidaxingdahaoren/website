const { defineConfig } = require("@vue/cli-service");
// const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const options  = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"), //antd包位置
  stylesDir: path.join(__dirname, "./src/styles"), //主题文件所在文件夹
  varFile: path.join(__dirname, "./src/styles/variables.less"), // 自定义默认的主题色
  mainLessFile: path.join(__dirname, "./src/styles/index.less"), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
  themeVariables: [
    "@primary-color",
    "@success-color"
  ], //要改变的主题变量
  indexFileName: "./public/index.html", // index.html所在位置
  outputFilePath: path.join(__dirname, "./public/color.less"), //提取的less文件输出到什么地方
  generateOnce: false // 是否只生成一次（if you don't want to generate color.less on each chnage in code to make build process fast in development mode, assign it true value. But if you have new changes in your styles, you need to re-run your build process npm start.）
}
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
      // new AntDesignThemePlugin(options)
    ],
  },
  
  // css: {
  //   loaderOptions: {
  //     less: {
  //       lessOptions: {
  //         modifyVars: {
  //           "primary-color": "#007db8",
  //           // 'link-color': '#05AE44',
  //           // 'border-radius-base': '2px',
  //         },
  //         javascriptEnabled: true,
  //       },
  //     },
  //   },
  //   extract: true, // 解决开发模式，打包时未提取CSS的问题
  // },
});
