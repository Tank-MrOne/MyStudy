const express = require('express');
const path = require('path');
const app = express();

// express.static() 向外暴露静态资源
// express.json()  处理application/json 的请求参数 post请求
// express.urlencoded() 处理application/x-www-form-urlencoded 的请求参数 post请求

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('服务器返回数据');
})


app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动错误');
    console.log(err);
  }else{
    console.log('服务器启动成功');
    console.log('服务器地址: http://localhost:3001');
  }
})
