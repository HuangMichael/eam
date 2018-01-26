// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
    moduleName: 'components',
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/components/view/index.html'),
        // phone: path.resolve(__dirname, '../dist/components/phone/phone.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8088,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api/*': {
                target: 'http://127.0.0.1:8080/Urban/rest',
                // target: 'http://'+rootIP,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            }
        },
        cssSourceMap: false
    }
}
