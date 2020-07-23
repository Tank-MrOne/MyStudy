/**
 * 创建一个 HTTP 服务
 */
//1. 引入 http 模块儿
const http = require('http');

//2. 创建服务 
//request 是对请求报文的封装
//response 是响应的封装
const server = http.createServer(function(request, response){
    //设置响应
    response.end("hello node server");//设置响应体
});

//3. 监听端口 启动服务
//端口号相当于是服务的门牌号
// 65536 端口号  开发阶段会使用 > 1024 端口  8000 8080 8888 3000 80
server.listen(80, function(){
    console.log('服务已经启动, 80 端口监听中.....');
});