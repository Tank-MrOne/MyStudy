//创建一个 buffer
//1. 会对空间进行初始化
let b1 = Buffer.alloc(20);// 创建一个大小为 20 个字节的 Buffer
//2. 不会对空间进行初始化  Unsafe 不安全的意思 速度较快
let b2 = Buffer.allocUnsafe(20);
//3. from 方法
let b3 = Buffer.from('iloveyou');
// console.log(b1);
// console.log(b2);
// console.log(b3);

//读取
//获取buffer中第一个元素的内容   i   01101001
// let first = b3[0];
// console.log(first);

//toString
// console.log(b3.toString());

//设置
// b3[0] = 97;
// console.log(b3.toString());

//溢出   高位截断  ‭0001 0110 1101‬
// b3[0] = 365;// 截断后 10 进制的数字为 109
// console.log(b3.toString());

//中文字符   
// let b4 = Buffer.from('今天真冷');
// console.log(b4);

//unicode 的演示 5F20   1A     8D 1D   AA
// let str = '\u5F3A';
// console.log(str);

//练习
let b6 = Buffer.alloc(10);
// b6[0] = 3000;// ‭1011 10111000‬  => 截断后的数字为 184
b6[0] = "a".charCodeAt();

console.log(b6);
//编程语言也提供了 字符与数字的转化
// let res = String.fromCharCode(184);// 通过数字来获得对应的字符
// let res = 'A'.charCodeAt();

// console.log(res);







