
const mongoose = require('mongoose');
// 1.创建schema对象
const studentsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// 2. 创建model对象
const studentsModel = mongoose.model('students', studentsSchema);

module.exports = studentsModel;
