// Fahrenheit to Celsius
// Event lister
document.getElementById("btn").addEventListener("click", convertf);
document.getElementById("btn").addEventListener("click", convertc);

// var inputs
var input1El = document.getElementById("input1");
var input2El = document.getElementById("input2");
var picContainer = document.getElementById("pic-container");
function convertf() {
  //   input area
  var f = +input1El.value;
  // process
  var c = ((f - 32) * 5) / 9;
  var a = c.toFixed();
  //   output
  document.getElementById("output-area1").innerHTML = a;
  //   Picture
  picContainer.innerHTML =
    "<img src='img/temp.jpg' width='40px' height='90px' />";
  // clear inputs
  input1El.value = "";
}

function convertc() {
  //   input area
  var c = +input2El.value;
  // process
  var c = c * (9 / 5) + 32;
  var a = c.toFixed();
  //   output
  document.getElementById("output-area2").innerHTML = a;
  // clear inputs
  input2El.value = "";
}
