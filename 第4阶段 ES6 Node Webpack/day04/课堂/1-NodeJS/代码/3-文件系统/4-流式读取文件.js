//流式读取
//
const fs = require('fs');

//创建一个读取流
// const rs = fs.createReadStream('./file/home.html');// create 创建  read 读取  stream 流
const rs = fs.createReadStream('./file/刻意练习.mp3');// create 创建  read 读取  stream 流

//借助事件读取文件内容 data 事件 (chunk  块儿)
rs.on('data', (chunk) => {
    console.log(chunk.length);
});