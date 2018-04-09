var arr = [1,5,23,4,2,5,6];

var arrEvenNumbers = arr.filter(function(number) {
  return number % 2==0;
});

console.log(arrEvenNumbers);