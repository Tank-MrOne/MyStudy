//引用模块
let m1 = require('./m1')
let m2 = require('./m2')
let m3 = require('./m3')
let uniq = require('uniq');
let $ = require('jquery');

//使用模块
m1.foo()
m2()
m3.foo()
m3.bar()
console.log(uniq([1, 3, 1, 4, 3]));

//修改body的背景颜色
$('body').css('background','#000');