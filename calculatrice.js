/* begin */

const html = document.querySelector("html");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const calculator = document.createElement("div");

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalTo = document.querySelector(".equal-to");
const clear = document.querySelector(".clear");

/* linken van html met js */


/* clicks */
for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = numberState;   
} 

for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = operatorState;
}
equalTo.onclick = calculateState;
clear.onclick = clearState;

/* les fonctions */
function numberState(event) {
  let buttonText = event.target.textContent;
  let displayText = display.value;
  let newText = displayText + buttonText;
  display.value = newText;
}

let firstNumText;
let operator;
function operatorState(event) {
  firstNumText = display.value;
  operator = event.target.textContent;
  display.value = "";
}

function calculateState(event) {
    let firstNumInt = parseInt(firstNumText);
    let secondNumInt = parseInt(display.value);
    let result;

    if (operator == "+") {
      result = firstNumInt + secondNumInt;
    }
    if (operator == "-") {
      result = firstNumInt - secondNumInt;
    }
    if (operator == ":") {
      result = firstNumInt / secondNumInt;
    }
    if (operator == "x") {
      result = firstNumInt * secondNumInt;
    }

    display.value = result;
}

function clearState(event) {
  display.value = "";
}