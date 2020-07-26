//文件夹 创建、读取、删除
const fs = require('fs');
//创建文件夹
// fs.mkdir('page', err =>{
//     if(err) throw err;
//     console.log('创建成功！！');
// });

//读取文件夹
// fs.readdir('C:/', (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// });

//删除文件夹
fs.rmdir('page',{recursive : true}, err =>{
    if(err) throw err;
    console.log('删除成功！！');
});