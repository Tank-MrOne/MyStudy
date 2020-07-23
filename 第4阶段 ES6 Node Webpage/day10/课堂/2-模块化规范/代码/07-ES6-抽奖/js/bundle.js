(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _percent = require('./percent');

window.onload = function () {
    //获取元素 
    var btn = document.querySelector('button');
    //绑定事件
    btn.onclick = function () {
        //获取概率的结果
        var result = (0, _percent.percent)(20);
        //判断结果  陈翔六点半
        if (result) {
            alert('恭喜您中奖啦!! 泰国五日游');
        } else {
            alert('sorry 参与奖!!');
        }
    };
}; //引入 percent 模块
},{"./percent":2}],2:[function(require,module,exports){
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
},{"./rand":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rand = rand;
function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
}
},{}]},{},[1]);
