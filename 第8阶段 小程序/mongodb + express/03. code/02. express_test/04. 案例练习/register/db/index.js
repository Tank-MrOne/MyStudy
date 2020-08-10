const mongoose = require('mongoose');

// 1. 链接服务器
mongoose.connect('mongodb://localhost:27017/atguigu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})


// 方式一： 使用then和catch
// 方式二: 使用once绑定一次性事件
mongoose.connection.once('open', (err) => {
  if(err){
    console.log('链接数据库失败');
    return
  }
  console.log('链接成功');
})
