var obj = {
	name: 'Artem',
	surname: 'Chepeliuk'
  };
  var arrKey = Object.keys(obj);
  var arr = ['name', 'surname'];

  var objError = {
	name: 'Artem',
	surname: 'Chepeliuk'
  };
  var arrKeyError = Object.keys(obj);
  var arrError = ['name', 'surname'];
  
  function validator228(x, y){
	for (i=0; i<x.length; i++) {
  if (x[i] !== y[i]) {
	return	console.log('EROR! ' + x[i] + " wasn't passed on object..");
	 }
	}
  return true;
}

console.log(validator228(obj, arr));
console.log(validator228(arrError, objError));