const mongoose = require('mongoose');

// 1. 链接数据库
mongoose.connect('mongodb://localhost:27017/class1121_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
} )


// 2. 创建schema对象，对集合进行约束
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  sex: {
    type: String,
    default: 1
  },
  // hobby: [String]
  hobby: Array,
  info: mongoose.SchemaTypes.Mixed // 任意类型
})

// 3. 创建model对象
const StudentModel = mongoose.model('students', studentSchema);


// 4. 创建文档对象
const studentA = new StudentModel({
  name: '赵本山',
  age: 58,
  hobby: ['小品'],
  info: '小品之王'
})


studentA.save()
  .then(() => {
    console.log('保存成功');
  })
  .catch(err => {
    console.log('保存失败, ', err);
  })
