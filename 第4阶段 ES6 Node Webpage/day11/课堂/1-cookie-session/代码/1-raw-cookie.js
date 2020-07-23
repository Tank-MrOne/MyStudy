//原生操作
const http = require('http');

//创建服务
/**
 * 1. 向客户端返回 cookie
 * 2. 接收客户端发送过来的 cookie 
 */
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8');
    // GET   /set-cookie  写入 cookie
    if (request.method.toUpperCase() === 'GET' && request.url === "/set-cookie") {
        //向客户端返回 cookie
        // response.setHeader('Set-Cookie', 'name=atguigu; path=/');
        //设置带有时效性的 cookie
        // response.setHeader('Set-Cookie', 'school=gulixueyuan; path=/; max-age=3600');
        //设置多个 cookie
        response.setHeader('Set-Cookie', [
            'a=b',
            'c=d',
            'e=f'
        ]);
        response.end('写入 cookie');
    } else if (request.method.toUpperCase() === 'GET' && request.url === "/get-cookie") {
        // GET   /get-cookie  读取 cookie
        //将请求报文中的 cookie 内容输出到控制台
        console.log(request.headers['cookie']);
        response.end('读取cookie的值');
    }else {
        response.end('<h1>404 Not Found</h1>');
    }
});

//
server.listen(8001, () => {
    console.log('服务已经启动.... 8001 监听中....');
});