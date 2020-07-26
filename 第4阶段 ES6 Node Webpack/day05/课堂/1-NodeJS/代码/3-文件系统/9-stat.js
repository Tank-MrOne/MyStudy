// 检测一个文件的类型
const fs = require('fs');

// status 状态
fs.stat(__dirname + '/file', (err, stats) => {
    //判断
    if(err) throw err;
    //查看状态
    if(stats.isDirectory()){
        console.log('目标资源为 文件夹');
    }else{
        console.log('目标资源为  文件');
    }
});