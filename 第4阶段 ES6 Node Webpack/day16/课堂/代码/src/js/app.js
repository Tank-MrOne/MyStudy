//引入 polyfill
import '@babel/polyfill';
//包的引入
//通用方式
import * as m1 from "./m1";
//解构形式
import {sheshou, fuzhu} from "./m2";
// import {default as m3} from "./m3";
// import * as m3 from "./m3";// m3.default
//简便方式
import m3 from "./m3";

//输出结果
console.log(m1);
console.log(sheshou, fuzhu);
console.log(m3);

//导入 JSON 文件
import data from "../json/data.json";
console.log(data);
//导入 less 文件
import "../css/app.less";
import "../css/home.less";

//ESlint 语法检查
//全局变量的使用 window
window.v = "window变量测试";
//全局变量 global
global.v = "global 变量测试";
//全局变量 $
$("body").css("background","#cab");
// $ = 200;
//测试 alert
// alert("123");

//Babel 测试
// let test = "test";
// console.log(test);

//兼容性的问题
let p = new Promise((resolve, reject)=>{
    resolve("成功");
    // reject("失败");
}); 

p.then(value => {
    console.log(value);
}, reason=>{
    console.log(reason);
});

let testVar = "Var";
console.log(testVar);



