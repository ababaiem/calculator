/* beginnen met linken*/


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
/* de ""="" knop heeft als doel om niet enkel een resultaat weer te geven maar ook om te de voorafstaande 
ingevoerde getallen te berekenen */

clear.onclick = clearState;

/* functions */
function numberState(event) {
  let buttonText = event.target.textContent;
  let displayText = display.value;
  let newText = displayText + buttonText;
  display.value = newText;
}
/* (1) liefst geen var meer gebruiken*/

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
/* plus functie --> resultaat is de som van eerst ingedrukte getal en tweede ingedrukte getal */ 

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
    /*resultaat weergeven*/
}

function clearState(event) {
  display.value = "";
} /* als je op AC(all clear) drukt ; bedoeling is dat er niks verschijnt */