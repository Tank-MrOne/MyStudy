//声明一个函数 返回一个随机数
function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
}

//暴露
module.exports = rand;