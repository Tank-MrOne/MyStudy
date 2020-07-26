//获取命令行的参数
const argv = require('yargs').argv;
 
module.exports = {
    //网站根目录  root 根  如果没有传递根目录, 则使用命令行的所在目录作为根目录
    root: argv.root || process.cwd(),
    //修改端口 
    port: argv.port || 8888,
    //强制缓存
    forceCache: true,
    //强制缓存的时间
    cacheTime: 300,
    //协商缓存
    xieCache: false,
    //自动打开浏览器
    autoOpen: false
}