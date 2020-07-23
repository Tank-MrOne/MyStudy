define(function (require, exports, module) {
    //引入 rand 模块
    const rand = require('./rand');

    function percent(num) {
        //获取一个 从 1-100 的随机数
        let n = rand(1, 100);
        //判断
        if (n <= num) {
            return true;
        } else {
            return false;
        }
    }

    //对外暴露
    module.exports = percent;
});

