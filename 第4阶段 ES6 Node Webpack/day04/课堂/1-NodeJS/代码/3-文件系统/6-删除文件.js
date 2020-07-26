// unlink  link链接
const fs = require('fs');

//删除文件
// fs.unlink('./file/logo.png', err => {
//     if(err) throw err;
//     console.log('文件删除成功!!');
// });

fs.unlinkSync('./file/法宝.mp3');
