var display = document.querySelector(".display");
var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
var equalTo = document.querySelector(".equal-to");
var clear = document.querySelector(".clear");

// klik acties
for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = numberState;
}
for (var i = 0; i < operators.length; i++) {
  operators[i].onclick = operatorState;
}
equalTo.onclick = calculateState;
clear.onclick = clearState;

// functions
function numberState(event) {
  var buttonText = event.target.textContent;
  var displayText = display.value;
  var newText = displayText + buttonText;
  display.value = newText;
}

var firstNumText;
var operator;
function operatorState(event) {
  firstNumText = display.value;
  operator = event.target.textContent;
  display.value = "";
}

function calculateState(event) {
    var firstNumInt = parseInt(firstNumText);
    var secondNumInt = parseInt(display.value);
    var result;

    if (operator == "+") {
      result = firstNumInt + secondNumInt;
    }
    if (operator == "-") {
      result = firstNumInt - secondNumInt;
    }
    if (operator == ":") {
      result = firstNumInt / secondNumInt;
    }
    if (operator == "*") {
      result = firstNumInt * secondNumInt;
    }

    display.value = result;
}

function clearState(event) {
  display.value = "";
}
