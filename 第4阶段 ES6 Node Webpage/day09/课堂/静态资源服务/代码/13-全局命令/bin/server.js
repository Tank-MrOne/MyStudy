#!/usr/bin/env node
//引入 server.js
const Server = require('../server.js');

//实例化对象 允许带有参数实例化
const s = new Server;

//执行 main 方法
s.main();

