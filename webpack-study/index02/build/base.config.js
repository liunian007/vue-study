 const path = require('path');
 const VueLoaderPlugin = require('vue-loader/lib/plugin')
 const HtmlWebpackPlugin = require("html-webpack-plugin");
 // npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
 //  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 // npm install webpack-dev-server@2.9.3 --save-dev
 // ./node_modules/.bin/webpack-dev-server || npm run dev

 module.exports = {
     entry: "./src/main.js",
     output: {
         path: path.resolve(__dirname, "../dist"),
         filename: "bundle.js",
         publicPath: "dist/",
     },
     resolve: {
         alias: {
             "vue": "vue/dist/vue.esm.js"
         },
         extensions: ['.vue', '.js', '.css'],
     },
     module: {
         rules: [{
                 test: /\.css$/i,
                 use: ['style-loader', "css-loader"],
             },

             {
                 test: /\.less$/i,
                 use: [{
                         loader: "style-loader", // 从 JS 中创建样式节点
                     },
                     {
                         loader: "css-loader", // 转化 CSS 为 CommonJS
                     },
                     {
                         loader: "less-loader", // 编译 Less 为 CSS
                     },
                 ],
             },

             {
                 test: /\.(png|jpg|jpeg)$/i,
                 use: [{
                     loader: 'url-loader',
                     options: {
                         // 当图片大于limit时，会把图片编译为base64格式
                         // 当图片小于limit时，会寻找file-loader来进行加载 （npm install --save-dev file-loader@3.0.1 这里用的是webpack3.6.0）
                         limit: 2000,
                         //图片打包名称
                         name: "img/[name].[hash:8].[ext]",
                     },
                 }, ],
             },

             // npm install--save - dev babel - loader @7 .1 .5 babel - core @6 .26 .3 babel - preset - es2015 @6 .24 .1
             {
                 test: /\.js$/,
                 exclude: /(node_modules|bower_components)/,
                 use: {
                     loader: 'babel-loader',
                     options: {
                         presets: ['es2015']
                     }
                 }
             },

             {
                 test: /\.vue$/,
                 use: ['vue-loader'],
             }
         ],
     },

     plugins: [
         // 请确保引入这个插件！
         new VueLoaderPlugin(),
         new HtmlWebpackPlugin({
             template: "index.html",
         }),
     ],
 };