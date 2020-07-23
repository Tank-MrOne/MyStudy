//1. 引入 fs 模块 require 是一个函数
const fs = require('fs');

//2. 调用 fs 的方法来完成文件写入
// fs.writeFile('./index.html', "fs写入的内容测试", function(err){
//     //判断
//     if(err){
//         console.log('写入失败啦!!');
//         console.log(err);
//         return;
//     }
//     console.log('写入成功!!');
// });

// fs.writeFile('./index.html', "fs再次写入内容",{flag: 'a'}, function(err){
//     //判断
//     if(err){
//         console.log('写入失败啦!!');
//         console.log(err);
//         return;
//     }
//     console.log('写入成功!!');
//     console.log(111);
// });


//同步写入文件内容
// fs.writeFileSync('./app.css', '*{margin:0px;padding:0px;}');
// fs.writeFileSync('./app.css', Date.now());
// console.log(Date.now());

//异步写入
fs.writeFile('./app.js', `document.body.style.background='#90a';`, function(err){
    if(err){
        console.log('写入失败');
        return;
    }
    console.log('写入成功!!');
});
