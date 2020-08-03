(()=>{

	//抽象类
	abstract class Animal {
		abstract run():void //抽象方法
		abstract cry():void //抽象方法
		eat(){ //真实方法
			console.log('我吃饭了');
		}
	}
	//抽象类不是让你new的，是让其他类继承的，抽象类里可以指定一些具体的方法

	class Dog extends Animal{
		run(){
			console.log('奔跑了');
		}
		cry(){
			console.log('我吼叫');
		}
	}

	const d = new Dog()
	d.run()
	d.cry()
	d.eat()


})()