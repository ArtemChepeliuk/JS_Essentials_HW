function getValueHrivna() {
	var hrivna = document.getElementById("hrivna").value;
	document.getElementById("resultHrivna").value = hrivna / 25.885;
}

function getValueDollar() {
	var dollar = document.getElementById("dollar").value;
	document.getElementById("resultDollar").value = dollar * 25.885;
}