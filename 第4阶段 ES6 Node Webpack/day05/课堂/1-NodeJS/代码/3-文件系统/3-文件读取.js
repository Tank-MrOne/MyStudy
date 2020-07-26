//1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法读取内容]
fs.readFile('./home.html', function(err, data){
    //判断
    if(err) {
        console.log('读取失败');
        console.log(err);
        
        return;
    }

    console.log('读取成功');
    console.log(data.toString());
});