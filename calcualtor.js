function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
let num1;
let num2;
let operator;
function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}
const digit = document.querySelector(".numbers");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const display = document.querySelector(".display");

one.addEventListener("click", () => {
  num1 = 1;
  display.textContent = "1";
});
two.addEventListener("click", () => {
  num1 = 2;
  display.textContent = "2";
});
three.addEventListener("click", () => {
  num1 = 3;
  display.textContent = "3";
});
four.addEventListener("click", () => {
  num1 = 4;
  display.textContent = "4";
});
five.addEventListener("click", () => {
  num1 = 5;
  display.textContent = "5";
});
six.addEventListener("click", () => {
  num1 = 6;
  display.textContent = "6";
});
seven.addEventListener("click", () => {
  num1 = 7;
  display.textContent = "7";
});
eight.addEventListener("click", () => {
  num1 = 8;
  display.textContent = "8";
});
nine.addEventListener("click", () => {
  num1 = 9;
  display.textContent = "9";
});
