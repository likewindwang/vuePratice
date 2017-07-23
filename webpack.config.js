/**
 * Created by wangyanqing on 2017/7/22.
 */
//引入生成html的插件
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry: __dirname + '/src/main.js',
    //出口
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    //模块
    module:{
        rules:[
            {//匹配以vue结尾的文件
                test:/\.vue$/,
                //引用**.vue需要的依赖
                use:'vue-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|jpeg|png|ttf|svg|gif)$/,
                use:'url-loader'
            },
            {
                test:/\.js/,
                use:'babel-loader',
                //排除，不靠路，不从此文件找
                exclude:/node_modules/
            }
        ]
    },
    //插件
    plugins:[
        new htmlwebpackplugin({
            template:'./src/index.html',
            filename: 'index.html'
        })
    ]
};
