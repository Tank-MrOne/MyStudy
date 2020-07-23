//引入 giao-server 包
const Server = require('giao-server');

//实例化对象
const s = new Server({port: 7654, root: 'D:/'});

//启动服务
s.run();