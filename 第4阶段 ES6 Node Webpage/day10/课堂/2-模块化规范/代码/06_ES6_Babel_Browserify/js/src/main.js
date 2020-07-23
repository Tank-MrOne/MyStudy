//通用方式引入包 * 是所有的意思 as 别名的意思
// import * as m1 from './module1';
//通过类似解构的方式
// import {foo, bar, DATA_ARR} from './module1';
// console.log(foo);
// console.log(bar);
// console.log(DATA_ARR);

//通用方式
// import * as m2 from './module2';
// import {fun1, fun2, foo as mfoo} from './module2';
// console.log(fun1);
// console.log(fun2);

//通用方式
// import * as m3 from './module3';
//解构方法
// import {default as m3} from './module3';
//简便
// import m3 from './module3';
// console.log(m3);

//关于重名的问题
// console.log(m1);
// console.log(m2);

//引入 jquery 
import $ from 'jquery';//  const $ = require('jquery');
$('body').css('background','pink');