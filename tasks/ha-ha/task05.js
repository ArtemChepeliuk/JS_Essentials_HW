var course = 25.885

function getValueHrivna() {
	var hrivna = document.getElementById("hrivna").value;
	if (isNaN(hrivna)) {
		alert('Wrong value!');
	} else {
		document.getElementById("resultHrivna").value = hrivna / course;
	}
}

function getValueDollar() {
	var dollar = document.getElementById("dollar").value;
	if (isNaN(dollar)) {
		alert('Wrong value!');
	} else {
		document.getElementById("resultDollar").value = dollar * course;
	}
}