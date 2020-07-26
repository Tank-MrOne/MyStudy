//引入 fs
const fs = require('fs');

//创建读取流和写入流
const rs = fs.createReadStream('./file/刻意练习.mp3');
const ws = fs.createWriteStream('./file/法宝.mp3');

//绑定读取流读取事件
// rs.on('data', (chunk)=>{
//     //写入到写入流中
//     ws.write(chunk);
// });
//
// rs.on('open', ()=>{
//     console.log('读取流打开啦!!');
// });

//
// rs.on('close', ()=>{
//     console.log('读取流关闭啦!!');
// });

//使用管道的方式进行复制
rs.pipe(ws);