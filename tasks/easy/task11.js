function maxMinNumbers(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
var arr = [ 1,92,-5,25 ];
arr.sort(maxMinNumbers);
var minNumber = arr[0];
var maxNumber = arr[arr.length-1];
console.log('min:', minNumber);
console.log('max:', maxNumber);
