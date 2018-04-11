var arr = [1,4,2];
var result = arr.reduce(function(sum, current) {
  return sum + current / (arr.length);
}, 0);

console.log(result);