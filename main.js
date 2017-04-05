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

/*Sustraction of two numbers*/
function substract(a,b){
  return a-b;
}

/*Division of two numbers*/
function division(a,b){
  return a/b;
}


var addOutput = document.getElementById('addition-output');
addOutput.innerHTML = addition(3,4);

var multiplyOutput = document.getElementById('multiply-output');
multiplyOutput.innerHTML = multiply(5,5);

var substractOutput = document.getElementById('substract-output');
substractOutput.innerHTML = substract(10,5);

var divisionOutput = document.getElementById('division-output');
divisionOutput.innerHTML = division(10,5);
