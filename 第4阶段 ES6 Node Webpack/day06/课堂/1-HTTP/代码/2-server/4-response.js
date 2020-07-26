/**
 * 提取请求报文的中相关参数  数据
 */
const http = require('http');

/**
 * 
 *  HTTP/1.1 200 OK
    Date: Tue, 05 May 2020 08:32:08 GMT
    Connection: keep-alive
    Content-Length: 8

    response
 */
const server = http.createServer(function (request, response) {
    //1. 响应行
    //1-1 设置响应状态码
    // response.statusCode = 404;
    // response.statusCode = 500;

    //1-2 设置响应状态字符串
    // response.statusMessage = "oh my god";

    //2. 设置响应头 cookie  expires   text/plain 不做任何语法解析
    // response.setHeader('a','b');
    response.setHeader('content-type','text/html;charset=utf-8');

    //3. 响应体
    response.write('设置响应体');

    //设置一个响应
    response.end('<div style="color:red">我爱你中国</div>');
});

//启动服务 监听端口
server.listen(8000, function () {
    console.log('服务已经启动, 8000 端口监听中...\r\n 组合键 ctrl + c 停止服务')
});