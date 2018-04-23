var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
function BubleGum(arr){
    var n = arr.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (arr[j+1] < arr[j])
           { var t = arr[j+1]; 
            arr[j+1] = arr[j]; 
            arr[j] = t; }
        }
     }                     
    return arr;    
}
console.log(BubleGum(arr));