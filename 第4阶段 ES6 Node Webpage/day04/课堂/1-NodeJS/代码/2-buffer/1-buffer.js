//创建一个 buffer
let buf_1 = Buffer.alloc(10);
let buf_2 = Buffer.allocUnsafe(10);//safe 安全  unsafe不安全的意思
let buf_3 = Buffer.from('iloveyou5211314');

// console.log(buf_1);
// console.log(buf_2);
// console.log(buf_3);

//读取
// console.log(buf_3[0]);// 输出的结果是 10 进制的
// console.log(buf_3.toString());

//设置
// buf_3[0] = 65;//A
// buf_3[0] = 97;//a
// buf_3[0] = 48;//0
// console.log(buf_3.toString());

//溢出  高位截断
// buf_3[0] = 365;//  ‭0001 0110 1101‬   =>  0110 1101 =>  109
// console.log(buf_3.toString());

//中文字符   12个字节
let buf_4 = Buffer.from('春夜喜雨');
console.log(buf_4);

//
let str=  '\u5403';

console.log(str);

