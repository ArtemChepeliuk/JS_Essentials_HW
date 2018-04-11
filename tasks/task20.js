function reverseNumb(number) {
	var str = number.toString();
	var arr = str.split('');
	for (var i = 0; i < arr.length; i++) {
	}
	arr.reverse();
	var number=parseInt(arr.join(""));
	console.log(number);
}
reverseNumb(12345);