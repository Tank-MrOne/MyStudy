require('./db')
const express =require('express');
const path = require('path');
const cors = require('cors');
const md5 = require('md5');
const app = express();
const studentModel = require('./collections/students');



app.use(express.static(path.resolve(__dirname,  'public')))
app.use(express.json())

// app.use(cors({
//   origin:['http://localhost:63342'],  //指定接收的地址
//   methods:['GET','POST'],  //指定接收的请求类型
//   alloweHeaders:['Content-Type','Authorization']  //指定header
// }))

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Credentials': true, //允许后端发送cookie
    'Access-Control-Allow-Origin':  '*', //任意域名都可以访问,或者基于我请求头里面的域
    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', //设置请求头格式和类型
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',//允许支持的请求方式
    'Content-Type': 'application/json; charset=utf-8'//默认与允许的文本格式json和编码格式
  })
  
  next();
})
app.post('/login', (req, res) => {
  // 获取请求参数
  let userInfo = req.body;
  // 处理请求数据
  if(userInfo.username !== 'curry'){
    // 返回响应数据
    res.send({
      code: 502,
      data: '用户名错误'
    })
  }else if(userInfo.password !== '123456'){
    // 返回响应数据
    res.send({
      code: 502,
      data: '密码错误'
    })
  }else{
    // 返回响应数据
    res.send({
      code: 200,
      data: '登录成功'
    })
  }
 
});

app.post('/register', async (req, res) => {
  // 获取请求参数
  let {username, password} = req.body;
  // 处理请求数据
  // 查询数据库是否有
  try{
    let result = await studentModel.findOne({username})
    if(result){
      res.send({
        code: 502,
        msg: '该用户已经被注册'
      })
    }else {
      console.log(username, password);
      await studentModel.create({
        username,
        password: md5(password)
      })
      res.send({
        code: 200,
        msg: '注册成功'
      })
    }
    // 如果没有存入数据库
  }catch (e) {
    console.log(e);
    res.send({
      code: 502,
      msg: '当前无法注册，请稍后再试'
    })
  }
  
});




app.listen('3002', (err) => {
  if(err){
    console.log('服务器启动错误');
    console.log(err);
  }else{
    console.log('服务器启动成功');
    console.log('服务器地址: http://localhost:3002');
  }
})
