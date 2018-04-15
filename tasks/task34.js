var input = [1, 2, 3, 3, 5, 6, 5];
var dublicates =input.reduce(function(acc, el, i, arr){
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
    return acc;
}, []);
console.log(dublicates);