//使用 exports 暴露数据
let one = 100;
let two = [1,2,3];

exports.one = one;
exports.two = two;

// exports = module.exports
//下面的方式不能暴露数据
// exports = {
//     one:one,
//     two:two
// };