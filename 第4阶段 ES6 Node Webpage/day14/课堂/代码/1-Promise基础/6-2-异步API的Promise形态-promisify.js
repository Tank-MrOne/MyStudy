//使用 util 模块中的 promisify 将 API 方法返回一个新的函数
const util = require('util');
const fs = require('fs');

//创建一个函数
const mineReadFile = util.promisify(fs.readFile);

//读取 1.html
mineReadFile('./resource/1.html').then(value => {
    console.log(1111);
    console.log(value.toString());
},reason => {
    console.log('error');
})

