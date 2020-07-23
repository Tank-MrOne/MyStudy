//1. 引入包
const moment = require('moment');

//格式化时间  ymd yamidie  日志记录 
var res = moment().format('YYYY-MM-DD HH:mm:ss');

//时间差
var res = moment("20111031", "YYYYMMDD").fromNow();

console.log(res);

