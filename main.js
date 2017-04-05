/* My main JS file */


function myMessage() {
  var msg = 'testing my JS file';
  console.log(msg);
}

myMessage();

/* sum of two numbers */
function addition(a,b){
  return a+b;
}

/*Multiplication of two numbers*/
function multiply(a,b){
  return a*b;
}



var addOutput = document.getElementById('addition-output');
addOutput.innerHTML = addition(3,4);

var multiplyOutput = document.getElementById('multiply-output');
multiplyOutput.innerHTML = multiply(5,5);
