/*
 * @Author: weishunjie 157680333@qq.com
 * @Date: 2023-01-09 10:51:52
 * @LastEditors: weishunjie 157680333@qq.com
 * @LastEditTime: 2023-01-09 10:58:16
 * @FilePath: \test_demo\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      ["@babel/preset-react",{ runtime: "automatic" }], // 自动导入react
      "@babel/preset-typescript",
    ],
  };