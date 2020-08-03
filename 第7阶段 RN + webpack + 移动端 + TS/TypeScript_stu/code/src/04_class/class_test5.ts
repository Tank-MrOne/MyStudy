(()=>{

	class Person{
		firstName:string
		lastName:string
		static phone:string
	
		 constructor(firstName='A',lastName='B'){
			 this.firstName = firstName
			 this.lastName = lastName
		 }

		 set fullName(value){
				const names = value.split('-')
				this.firstName = names[0]
				this.lastName = names[1]
		 }

		 get fullName(){
			 return this.firstName + '-' + this.lastName
		 }

	 }

	 const p1 = new Person('zhang2','san2')
	 console.log(p1.firstName);
	 console.log(p1.lastName);
	 console.log(p1.fullName);
	 p1.fullName = 'li-si'
	 console.log(p1.firstName);
	 console.log(p1.lastName);
	 Person.phone

})()