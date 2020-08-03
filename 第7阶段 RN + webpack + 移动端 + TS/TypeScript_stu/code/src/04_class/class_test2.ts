(()=>{
	
	//定义一个动物类
	class Animal {
		//奔跑的方法
		run (distance:number) {
			console.log(`动物奔跑了${distance}米`)
		}
	}

	//定义一个狗类继承与动物
	class Dog extends Animal {
		//吼叫的方法
		cry () {
			console.log('汪汪汪！')
		}
	}

	const d1 = new Dog()
	d1.cry()
	d1.run(100)

	
})()