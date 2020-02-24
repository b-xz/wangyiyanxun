const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
    remUnit: 75 // 设计稿10等分之后的值
})

module.exports = {
    runtimeCompiler: true,
    lintOnSave: false,
     css: { // 添加postcss配置
         loaderOptions: {
             postcss: {
                 plugins: [
                     postcss
                 ]
             }
         }
     },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://m.you.163.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}