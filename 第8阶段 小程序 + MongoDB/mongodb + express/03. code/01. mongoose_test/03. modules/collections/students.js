
const mongoose = require('mongoose');
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

module.exports = studentsModel;
