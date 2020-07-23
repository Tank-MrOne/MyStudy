const http = require('http');

const server = http.createServer((request, response) => {
    //判断请求方法和路径
    if(request.method.toUpperCase() === 'GET' && request.url === '/users'){
        //学员信息
        const arr = [
            {name: 'knight', age: 18},
            {name: 'xiaoming', age: 20},
            {name: 'xiaoning', age: 28},
            {name: 'xiaotian', age: 18},
        ];
        //设置响应头
        response.setHeader('content-type','text/html;charset=utf-8');

        let table = `
        <style>
            table,td{
                border-collapse:collapse;
            }

            td{
                padding:10px;
            }
        </style>
        <table border="1">
        <tr><td>姓名</td><td>年龄</td></tr>`;

        //遍历数组拼接 table 的 tr 标签内容
        let trs = "";
        for(let i=0;i<arr.length;i++){
            trs += `<tr><td>${arr[i].name}</td><td>${arr[i].age}</td></tr>`;
        }

        //拼接最终的 table 字符串
        table = table + trs + `</table>`;

        response.end(table);

    }else{
        response.end("test");
    }

    
});

server.listen(8000);