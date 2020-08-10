// 链接数据库
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/class1121_model', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

// 1.创建schema对象
const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: Number,
  sex: 0, // 男/女  0/1
  hobby: [String],
  info: mongoose.SchemaTypes.Mixed // 混合类型
})

// 2. 创建model对象
const studentsModel = mongoose.model('students', studentsSchema);

// 3. 通过model进行CRUD操作
(async function () {
  try{
    // 3.1 增 create
    // const result = await studentsModel.create({
    //   name: '岳云鹏',
    //   age: 30,
    //   hobby: ['卖萌', '五环之歌'],
    //   info: '励志青年 '
    // })
  
  
    // 3.2 查 find(返回值是数组)   findOne(返回值是对象或者 null)
    // const result = await studentsModel.find({age: {$gt: 30}})
    // const result = await studentsModel.findOne({name: '孙杨'})
  
    // 3.3 改 update
    const result = await studentsModel.update({name: '岳云鹏'}, {$set: {age: 33}})
    console.log(result);
  
    // 3.4 删 delete
    // 通常使用 '软删除'
  }catch (e) {
    console.log(e);
  }
})()
