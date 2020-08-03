(()=>{
	 /* 
    访问修饰符: 用来描述类内部的属性/方法的可访问性
      public(公开): 默认值, 公开的外部也可以访问
      protected(受保护): 类内部、子类可以访问
      private(私有): 只有类内部可以访问
  */
	
	class Person{
	 //private name:string //name变成私有的了，只能在类内部访问
	 //public readonly age:number

		constructor(private name:string ,public readonly age:number){
			this.name = name
			this.age = age
		}

		protected speak(){
			console.log(`我是${this.name}我的年龄是${this.age}`);
		}
	}

	class Student extends Person {

		sex:string

		constructor(name,age,sex){
			super(name,age)
			this.sex = sex
		}
		study(){
			console.log('我在很努力的学习TS，虽然类型限制有点恶心');
			super.speak()//speak被protected修饰，可以次访问
		}
	}

	const p1 = new Person('jack',19)
	const s1 = new Student('tom',18,'女')
	s1.study()
	// console.log(p1.name);//属性“name”为私有属性，只能在类“Person”中访问
	console.log(p1.age);
	// p1.speak()//属性“speak”受保护，只能在类“Person”及其子类中访问。
	// p1.age = 100 //无法分配到 "age" ，因为它是只读属性。

})()