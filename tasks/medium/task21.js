function reverseStr(str) {
	var arr = str.split(''); // створюємо масив і розділяємо його елементи
	for (var i = 0; i < arr.length; i++) {
	}
	arr.reverse()// записуємо масив в зворотньому порядку
	var str = arr.join(""); ;  
	console.log(str);
}
reverseStr("hello world");