//引入 fs 模块
const fs = require('fs');

//创建读取流
const rs = fs.createReadStream('./home.html');

//绑定事件 chunk 块儿
rs.on('data', function(chunk){
    console.log(chunk.toString());
});

console.log(222);