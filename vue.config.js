const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('styles', resolve('src/assets/styles'))
            .set('common', resolve('src/common'))
        // set第一个参数：设置的别名，第二个参数：设置的路径
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    }
}