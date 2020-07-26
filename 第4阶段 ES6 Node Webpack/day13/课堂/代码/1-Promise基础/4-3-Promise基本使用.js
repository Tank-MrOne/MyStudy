//读取 1.html 和 2.html 3.html 并输出到控制台
const fs = require('fs');

//读取第一个文件
// fs.readFile('./resource/1.html', (err, data)=>{
//     fs.readFile('./resource/2.html', (err, data2)=>{
//         console.log(data + data2);
//     });
// });

//使用 promise
let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/1.html', (err, data) => {
        //如果失败的话
        if (err) reject(err);
        //如果成功的话
        resolve(data);
    });
})
    .then(
        value => {
            // value 
            // console.log(value.toString());
            return new Promise((resolve, reject)=>{
                fs.readFile('./resource/2.html', (err, data) => {
                    //如果第二个文件读取失败
                    if(err) reject(err);
                    //成功处理
                    resolve(value + data);
                });
            });
        },
        reason => {
            console.error(reason);
        }
    )
    .then(
        value=>{
            // console.log(value);
            return new Promise((resolve, reject)=>{
                //读取 3.html 的内容
                fs.readFile('./resource/3.html', (err, data) => {
                    if(err) reject(err);
                    //3.html 读取成功
                    resolve(value + data);
                });
            })
        },
        reason => {}
    )
    .then(
        value => {
            console.log(value);
        }
    )




// let p2 = p.then(
//     value => {
//         // value 
//         // console.log(value.toString());
//         return new Promise((resolve, reject)=>{
//             fs.readFile('./resource/2.html', (err, data) => {
//                 //如果第二个文件读取失败
//                 if(err) reject(err);
//                 //成功处理
//                 resolve(value + data);
//             });
//         });
//     },
//     reason => {
//         console.error(reason);
//     }
// );

// //p2 调用 then 方法
// let p3 = p2.then(
//     value=>{
//         // console.log(value);
//         return new Promise((resolve, reject)=>{
//             //读取 3.html 的内容
//             fs.readFile('./resource/3.html', (err, data) => {
//                 if(err) reject(err);
//                 //3.html 读取成功
//                 resolve(value + data);
//             });
//         })
//     },
//     reason => {}
// )

// p3.then(
//     value => {
//         console.log(value);
//     }
// )