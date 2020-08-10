const express = require('express');

const app = express();
/*

 路由：
  1. 路由： key-value键值对，代表索取和给与的过程
  2. 分类：
    1. 前端路由：value路由组件
    2. 后端路由： value服务器返回的数据
  3. 路由参数
    1. get请求
      1) query: request.query
      2) params: request.params
    2. post请求
      1) query: request.query
      2) params: request.params
      3) 请求体： request.body
  4. 返回方式：res(response)
    res.end()  返回相应： 直接返回
    res.send() 根据数据类型不同，自动做出处理，再返回，如中文数据会设置content-type
    res.json() 返回的是json数据，直接返回
    res.redirect() 返回新的地址，状态码通常为302，浏览器会跳转至新的地址
    res.download() 返回文件，浏览器会自动下载文件
    res.sendFile() 返回文件，浏览器会自动打开文档建
    res.status()   设置状态码
    res.set()  设置响应头
    res.cookie() 设置cookie

*/

app.get('/login/:id', (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.set({
    'content-type': 'text/html;charset=utf-8'
  });
  res.end('登录成功数据');
});


app.post('/register/:id', (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log('body:', request.body);
  response.end('register data');
});


app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动错误');
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址： http://localhost:3001');
  }
})
