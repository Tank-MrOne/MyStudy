/**
 * 提取请求报文的中相关参数  数据
 */
const http = require('http');
//引入内置模块 url
const urlTool = require('url');
//引入内置模块 querystring
const qs = require('querystring');
/**
 *  GET http://h5200212.com:8000/ HTTP/1.1
    Host: h5200212.com:8000
    Connection: keep-alive
    Cache-Control: max-age=0
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng;q=0.8,application/signed-exchange;v=b3;q=0.9
    Accept-Encoding: gzip, deflate
    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7
 */
const server = http.createServer(function (request, response) {
    //1.获取客户端请求的方式
    // let method = request.method;
    // console.log(method);

    //2. 获取客户端请求的 URL
    // let url = urlTool.parse(request.url, true);// /admin/setting?wd=abc&vip=1  =>  {wd:'abc', vip:1}

    //2-1 pathname 路径
    // let pathname = url.pathname; // /admin/setting
    //2-2 query 查询字符串参数
    // let query = url.query; //       {wd:'abc', vip:1}

    //3. 获取协议版本号
    // let httpVersion = request.httpVersion;
    // console.log(httpVersion);

    //4. 获取请求头的信息
    // let headers = request.headers;
    //4-1 注意点 小写  多拼词  =>  通通使用 []
    // console.log(headers['host']);
    // console.log(headers['cache-control']);

    //5. 获取请求数据  username=123&password=456   =>  {username: 123, password:456}
    // let body = '';
    // request.on('data', (chunk) => {
    //     body += chunk;
    // });

    // request.on('end', function () {
    //     let data = qs.parse(body);
    //     console.log(data);
    //     //设置响应体
    //     response.end('over');
    // });


});

//启动服务 监听端口
server.listen(8000, function () {
    console.log('服务已经启动, 8000 端口监听中...\r\n 组合键 ctrl + c 停止服务')
});