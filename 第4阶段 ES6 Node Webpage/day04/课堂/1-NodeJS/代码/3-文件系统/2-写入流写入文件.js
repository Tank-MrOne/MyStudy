//引入 fs 模块
const fs = require('fs');

//创建一个写入流
const ws = fs.createWriteStream('./file/home.html', {flags: 'a'});// Stream 流

//
ws.write('春夜喜雨\r\n');

ws.write('好雨知时节\r\n');
ws.write('当春乃发生\r\n');
ws.write('随风潜入夜\r\n');
ws.write('润物细无声\r\n');

setTimeout(function(){
    ws.write('杜甫\r\n\r\n');
    //关闭写入流
    ws.close();
}, 1000);

//事件
ws.on('open', function(){
    console.log('写入流创建啦!!!');
});

ws.on('close', function(){
    console.log('写入流关闭啦!!');
});

