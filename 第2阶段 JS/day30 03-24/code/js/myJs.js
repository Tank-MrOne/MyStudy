function getRandomCode(n){
	//这个函数是用来获取验证码的
	var str = '1234567890';
	var code = '';
	for(var i = 0; i < n; i++){
		code += str[Math.floor(Math.random()*str.length)];
	}
	return code
}

function getRandomInt(a,b){
	//这个函数是用来获取两个数之间的随机整数的
	return Math.floor(Math.random()*(b - a + 1) + a);
}