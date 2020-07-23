//引入模块情况 

//内置模块和 npm 安装的模块
let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring');
let $ = require('jquery');

//自定义模块 不需要写成绝对路径
const data = require('./m1.js');
// JSON 文件
const json = require('./2-data.json');
// 其他后缀
const other = require('./3-other.txt');

//不带后缀
const one = require('./m1');
const two = require('./2-data');
// const three = require('./3-other');
const four = require('./4-directory');

//导入rongyao
const ronghao = require('./5-ronghao.js');

console.log(ronghao);
