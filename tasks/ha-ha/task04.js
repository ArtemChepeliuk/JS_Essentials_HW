var name = prompt("What is your name?");
var date = prompt("Date?:");
if (isNaN(date)) {
	alert('Wrong value!');
}
var city = prompt("City?:");
alert(name + " has a meeting " + date + " somewhere in " + city + ".");