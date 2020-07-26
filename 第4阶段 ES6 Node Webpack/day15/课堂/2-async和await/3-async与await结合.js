//读取 1.html 和 2.html 两个文件内容, 然后合并后输出到控制台
const fs = require("fs");
const util = require("util");
const mineReadFile = util.promisify(fs.readFile);

//1. callback 形式回调函数形式
// fs.readFile("./resource/1.html", (err, data)=>{
//     fs.readFile("./resource/2.html", (err, data2)=>{
//         console.log(data + data2);
//     });
// });

//2. promise 形式
// mineReadFile("./resource/1.html")
//     .then(value => {
//         // let arr = [value];
//         return new Promise((resolve, reject) => {
//             fs.readFile("./resource/2.html", (err, data)=>{
//                 // arr.push(data);
//                 resolve(value + data);
//             });
//         })
//     }).then(value=>{
//         // console.log(value.join(''));
//         console.log(value);
//     });

//3. async 与 await
async function main(){
    //读取第一个文件的内容
    let one = await mineReadFile("./resource/1.html");
    //读取第二个文件的内容
    let two = await mineReadFile("./resource/2.html");
    //读取第三个文件的内容
    let three = await mineReadFile("./resource/3.html");
    console.log(one + two + three);
}

main();