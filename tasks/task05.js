
function getValueHrivna(){
  var hrivna = document.getElementById("hrivna").value; 
  	hrivna = hrivna * 25.885;
  // document.getElementById("resultHrivna").innerHTML = hrivna;
  console.log(hrivna);
  }
// getValueHrivna();
var resultHrivna = document.getElementById('resultHrivna')	
 resultHrivna.value = getValueHrivna(); 


// function getValueDollar(){
//   var dollar = document.getElementById("dollar").value; 
//   	dollar = dollar / 25.885;
//   // document.getElementById("resultHrivna").innerHTML = hrivna;
//   console.log(dollar);
//   }
// // getValueHrivna();

// document.getElementById("resultDollar").value = getValueDollar();



