//引入 lodash 包
let _ = require('lodash');

var res = _.chunk(['a', 'b', 'c', 'd'], 3);

//计算差集
var res = _.difference([3, 2, 1], [4, 2]);


console.log(res);