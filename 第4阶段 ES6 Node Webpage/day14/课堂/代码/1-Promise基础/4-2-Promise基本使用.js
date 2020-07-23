//读取一个文件内容  ./resource/1.html

const fs = require('fs');

// fs 回调函数的形态
// fs.readFile(__dirname + '/resource/10.html', (err, data) =>{
//     if(err) throw err;
//     console.log(data.toString());
// });

// //promise 的形态
let p = new Promise(function(resolve, reject){
    fs.readFile(__dirname + '/resource/10.html', (err, data) => {
        // err 失败的结果
        if(err) reject(err);
        resolve(data);
    });
});

p.then(
    value => {
        console.log(value.toString());
    },
    reason => {
        console.log(reason.message);
        console.log('abc');
    }
)
