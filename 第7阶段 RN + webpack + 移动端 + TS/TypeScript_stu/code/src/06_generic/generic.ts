(()=>{

		//根据指定的数量 count 和数据 value , 创建一个包含 count 个 value 的数组 
		function createArr<P>(count:number,value:P):P[]{
			const emptyArr:P[] = []
			for (let i = 0; i < count; i++) {
				emptyArr.push(value)
			}
			return emptyArr
		}

		const a1 = createArr<number>(3,8)
		const a2 = createArr<string>(5,'a')
		const a3 = createArr<boolean>(7,false)

		console.log(a1[0].toFixed());
		console.log(a2[0].substring(1));
		console.log(a3[0]);

})()