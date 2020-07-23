/*
    封装一个函数 mineReadFile， 读取文件并返回一个 promise 对象
 */
const fs = require('fs');

function mineReadFile(filePath){
    return new Promise((resolve, reject)=>{
        fs.readFile(filePath, (err, data)=>{
            //失败的情况
            if(err) reject(err);
            //成功的情况
            resolve(data);
        });
    });
}

//实验
mineReadFile('./resource/1.html')
    .then(value=>{
        console.log(value.toString());
    }, reason => {
        console.error(reason.message);
    })