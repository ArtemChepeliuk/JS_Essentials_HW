function maxMinNumbers(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
var arr = [1, 92, -5, 25];

function returnObject(arr) {
  arr.sort(maxMinNumbers);
  var minNumber = arr[0];
  var maxNumber = arr[arr.length - 1];
  return {
    'min': minNumber,
    'max': maxNumber
  }
}
console.log(returnObject(arr));