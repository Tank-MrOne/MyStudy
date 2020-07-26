//1. 引入 fs 模块
const fs = require('fs');

//2. 创建写入流
const ws = fs.createWriteStream('./home.html', {flags: 'a'});

//事件  on 方法
ws.on('open', function(){
    console.log('写入流打开了!!');
});

ws.on('close' , function(){
    console.log('写入流关闭!!');
});

//调用对象的方法完成写入
ws.write('111\r\n');
//调用多次
ws.write('222\r\n');
ws.write('333\r\n');
ws.write('444\r\n');

// setTimeout(function(){
//     ws.write('555\r\n');
// } , 1000);

ws.close();

