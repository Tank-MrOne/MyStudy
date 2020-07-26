//引入fs
const fs = require('fs');

//调用方法 读取文件内容
// fs.readFile('./file/home.html', (err, data) => {
//     //判断是否产生了错误
//     if(err) throw err;
//     //输出获取的文件内容
//     console.log(data.toString());
// });

//同步 API
const data = fs.readFileSync('./file/home.html');
console.log(data.toString());