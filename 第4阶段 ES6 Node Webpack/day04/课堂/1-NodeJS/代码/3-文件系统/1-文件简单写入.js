//1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法写入内容  当前文件夹下创建并写入
// fs.writeFile('./index.html', '中午吃的好饱！！',{flag: 'a'}, function(err){
//     //如果 err 为不为空（null）
//     // if(err){
//     //     console.log(err);
//     //     return;
//     // }
//     // console.log('写入成功');
//     //简便写法
//     if(err) throw err;//
//     console.log('写入成功');
// });

//在子文件夹中创建并写入
// fs.writeFile('./file/home.css', '*{margin:0px;padding:0px;}', function(err){
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('写入',Date.now());
// });

// writeFileSync  同步写入
// fs.writeFileSync('./file/app.js','console.log("这是一个测试")'+Date.now());

// console.log('结束',Date.now());