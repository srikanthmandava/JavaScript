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



var addOutput = document.getElementById('addition-output');
addOutput.innerHTML = addition(3,4);
