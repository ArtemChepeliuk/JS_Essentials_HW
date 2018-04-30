function reverseNumb(number) {
	var str = number.toString(); // робимо чило строкою
	var arr = str.split(''); // створюємо масив і розділяємо його елементи
	for (var i = 0; i < arr.length; i++) {}
	arr.reverse(); // записуємо масив в зворотньому порядку
	var number = parseInt(arr.join("")); // приводимо елементи масиву в число
	console.log(number);
}
reverseNumb(12345);