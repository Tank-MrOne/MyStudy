//文件移动
const fs = require('fs');

//移动文件
// fs.rename('./home.html', './file/home.html', (err)=>{
//     if(err) {
//         console.log('移动失败啦!!');
//         console.log(err);
//         return;
//     }
//     console.log('移动成功');
// });

//重命名
// fs.rename('./app.js', './file/application.js', (err)=>{
//     if(err) {
//         console.log('移动失败啦!!');
//         console.log(err);
//         return;
//     }
//     console.log('移动成功');
// });

//同步操作
// fs.renameSync('./app.css', './file/application.css');