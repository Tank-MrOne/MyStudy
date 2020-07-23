//使用 define 定义模块
define(function (require, exports, module) {
    function rand(m, n) {
        return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
    }
    //使用 module.exports 来暴露数据
    module.exports = rand;
});