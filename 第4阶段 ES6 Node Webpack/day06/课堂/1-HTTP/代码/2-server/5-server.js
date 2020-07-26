/**
 * 提取请求报文的中相关参数  数据
 */
const http = require('http');
const fs  = require('fs');

const server = http.createServer(function (request, response) {
    //响应体的具体情况
    //响应 JS 内容
    // response.setHeader('content-type','application/javascript');
    // response.write('console.log("this is a test")');

    //响应 CSS 内容 Content-Type: text/css
    // response.setHeader('content-type','text/css');
    // response.write("*{margin:0px;padding:0px;}");

    //图片
    // Content-Type: image/png
    response.setHeader('content-type','image/png');
    let png = fs.readFileSync(__dirname + '/logo.png');
    response.write(png);

    response.end();
});

//启动服务 监听端口
server.listen(8000, function () {
    console.log('服务已经启动, 8000 端口监听中...\r\n 组合键 ctrl + c 停止服务')
});