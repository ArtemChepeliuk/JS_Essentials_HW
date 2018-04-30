function pairNumb(arr){
  
  var arrEvenNumbers = arr.filter(function (number) {
    return number % 2 == 0;
  
  });
  console.log(arrEvenNumbers);
  }
  var arr;
  pairNumb([1, 5, 23, 4, 2, 5, 6]);