const http = require('http');
//内置模块 url
const urlTool = require('url');

const server = http.createServer((request, response)=>{
    // GET http://127.0.0.1:8000?a=100&b=200 HTTP/1.1
    //获取所有的 url 参数
    let url = request.url;
    let res = urlTool.parse(url, true).query;

    let total = 0;
    for(let i in res){
        total += parseInt(res[i]);
    }

    response.end(total.toString());
});

server.listen(8000);