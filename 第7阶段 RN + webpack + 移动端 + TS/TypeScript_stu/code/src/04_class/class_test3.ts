(()=>{

	//定义一个动物类(父类又称：基类)
	class Animal {
		//声明属性
		name:string

		//构造函数
		constructor(name) {
			this.name = name
		}

		//一般方法
		run(distance:number){
			console.log(`动物前进了${distance}米`);
		}
	}

	//定义一个蛇类(子类又称：派生类)
	class Snake extends Animal {
		//构造函数
		constructor(name) {
			super(name)
		}
		//重写从父类继承过来的run方法
		run(distance:number){
			console.log(`蛇滑行了${distance}米`);
		}
	}

	//定义一个马类(子类又称：派生类)
	class Horse extends Animal {
		//构造函数
		constructor(name) {
			super(name)
		}
		//重写从父类继承过来的run方法
		run(distance:number){
			console.log(`马奔跑了${distance}米`);
		}
		//自己的cry() 一般方法
		cry(){
			console.log('hou~hou~');
		}
	}

	let tom:Animal

	tom = new Snake('汤姆')
	tom.run(200)
	// tom.cry()

})()