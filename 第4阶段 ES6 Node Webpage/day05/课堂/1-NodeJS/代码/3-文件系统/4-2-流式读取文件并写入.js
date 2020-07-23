//复制文件
const fs = require('fs');

//创建读取流
const rs = fs.createReadStream('./file/刻意练习.mp3');
//创建写入流
const ws = fs.createWriteStream('./file/法宝.mp3');

//绑定事件
// rs.on('data', function(chunk){
//     //写入数据
//     ws.write(chunk);
// });

//一个方法实现
rs.pipe(ws);
