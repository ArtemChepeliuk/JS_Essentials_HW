
function getValueHrivna(){
  var hrivna = document.getElementById("hrivna").value; 
  	hrivna = hrivna * 25.885;
  document.getElementById("resultHrivna").innerHTML = hrivna;
  console.log(hrivna);
  }
// getValueHrivna();