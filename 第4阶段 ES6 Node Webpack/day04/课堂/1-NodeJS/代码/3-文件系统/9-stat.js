//引入 fs 模块
const fs = require('fs');

//
// fs.stat('./file/app.js', (err, stats) => {
//     if(err) throw err;
//     //调用方法检测是否为文件
//     console.log(stats.isFile());
//     //检测是否为文件夹
//     console.log(stats.isDirectory());
// });

fs.stat('./file', (err, stats) => {
    if(err) throw err;
    //调用方法检测是否为文件
    console.log(stats.isFile());
    //检测是否为文件夹
    console.log(stats.isDirectory());
});