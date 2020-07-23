(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _m = require("./m1");

//引入 m1.js 
// import * as m1 from "./m1";
console.log(_m.name);
console.log(_m.change); //使用前必须要定义

var test = "test";
console.log(test); //全等于符号的强制使用
// console.log(2===2);
//使用全局变量
// $("body").css("background","#a25");

console.log("今天晚上好好练习哦!!");
},{"./m1":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.change = change;
exports.name = void 0;
var name = "尚硅谷";
exports.name = name;

function change() {
  console.log("改变自己!!");
}
},{}]},{},[1])