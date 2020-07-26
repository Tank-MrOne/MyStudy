//引入 server.js
const Server = require('./server.js');

//实例化对象 允许带有参数实例化
const s = new Server({root:'E:/',port:3000});

//执行 main 方法
s.main();

