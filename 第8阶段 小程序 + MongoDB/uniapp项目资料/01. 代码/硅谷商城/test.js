let arr = [{name: 'kobe', age: 12}, {name: 'wade'}];
let obj = arr.find(item => item.name=== 'kobe');
obj.name= 'yyy';
console.log(obj, arr)
console.log(arr.find(item => item.name=== 'kobe'))
console.log(arr.find(item => item.name=== 'xx'), '----')