require('./db');
const studentsModel = require('./collections/students');
const teachersModel = require('./collections/teachers');

(async function () {
  try {
    const result = await studentsModel.updateOne({name: '岳云鹏'}, {$set: {age: 34}});
    console.log(result);
  }catch (error) {
    console.log(error);
  }
})()
