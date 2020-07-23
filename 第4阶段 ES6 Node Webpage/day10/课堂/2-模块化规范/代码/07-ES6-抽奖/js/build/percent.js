'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.percent = percent;

var _rand = require('./rand');

function percent(num) {
    //获取一个 从 1-100 的随机数
    var n = (0, _rand.rand)(1, 100);
    //判断
    if (n <= num) {
        return true;
    } else {
        return false;
    }
} //使用解构的形式引入模块