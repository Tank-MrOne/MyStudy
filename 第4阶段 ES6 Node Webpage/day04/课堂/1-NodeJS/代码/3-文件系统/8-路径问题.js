//
const fs = require('fs');
const path = require('path');

//读取文件内容  __dirname
// fs.readFile(__dirname + '/file/index.html', (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// });

//path.resolve 生成绝对路径
let res = path.resolve(__dirname, 'file/index.html');

console.log(res);
console.log(__dirname + '/file/index.html');
