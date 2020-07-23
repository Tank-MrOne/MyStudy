//分别暴露
let a = 100;
let b = 200;
let c = function(){

};
let junqing = 'junqing';

//对外暴露数据
// module.exports.c = c;
// module.exports.a = a;
// module.exports.b = b;

//相当于下面的写法
module.exports = {
    a: a,
    b: b,
    c: c
};