/*
* @todo 中间键使用
*   1. 本质：
*     1) 本质是一个函数
*   2. 作用:
*     1) 处理请求, 返回相应
*     2) 修改req, res对象
*     3) 执行下一个中间键
*   3. 体现形式：
*     1) (req, res, next) => {}
*     2) req: 请求对象
*     3) res: 响应对象
*     4) next: 调用下一个中间键
* */

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('111');
  next();
})


app.use((req, res, next) => {
  console.log('222');
  res.send('服务器返回内容');
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
