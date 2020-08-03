
class Person {
	//在TS中构造函数中使用到的属性，要提前声明
	name:string
	age:number

	//构造方法
	constructor(name,age){
		this.name = name
		this.age = age
	}

	//一般方法
	speak(){
		console.log(`我是${this.name}我的年龄是${this.age}`);
	}
}

const p1 = new Person('tom',19)
console.log(p1);
p1.speak()