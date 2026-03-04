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
let num1 = [];
let num2 = [];
let operator;
function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      answer = add(num1, num2);
      break;
    case "-":
      answer = subtract(num1, num2);
      break;
    case "*":
      answer = multiply(num1, num2);
      break;
    case "/":
      answer = divide(num1, num2);
      break;
  }
  return answer;
}
const digit = document.querySelector(".numbers");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const display = document.querySelector(".display");
const decimal = document.querySelector("#decimal");
function f1(a) {
  num1.push(a);
  num1join = num1.join("");
  number1 = Number(num1join);
  display.textContent = num1join;
  return number1;
}
function f2(a) {
  num2.push(a);
  num2join = num2.join("");
  number2 = Number(num2join);
  display.textContent = num2join;
  f4();
  return number2;
}
function f3(a) {
  answer = 0;
  if (count == 0) {
    f1(a);
  }
  if (count == 1) {
    f2(a);
    f4();
  }
}
let count = 0;
let count1 = 0;
function f4() {
  count1 = 1;
  return count1;
}
one.addEventListener("click", () => {
  f3(1);
});
let countForPoint = 0;
decimal.addEventListener("click", () => {
  if (countForPoint == 0) {
    f3(".");
    countForPoint = 1;
  }
});
zero.addEventListener("click", () => {
  f3(0);
});
two.addEventListener("click", () => {
  f3(2);
});
three.addEventListener("click", () => {
  f3(3);
});
four.addEventListener("click", () => {
  f3(4);
});
five.addEventListener("click", () => {
  f3(5);
});
six.addEventListener("click", () => {
  f3(6);
});
seven.addEventListener("click", () => {
  f3(7);
});
eight.addEventListener("click", () => {
  f3(8);
});
nine.addEventListener("click", () => {
  f3(9);
});

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const mult = document.querySelector(".multiply");
const div = document.querySelector(".dividebtn");

function countPlus() {
  count = 1;
  return count;
}
function applyOperate(a) {
  if (count1 == 0) {
    operator = a;
    display.textContent = a;
    countPlus();
    countForPoint = 0;
  }
  if (count1 == 1) {
    number1 = operate(number1, operator, number2);
    if (number1.toString() === "Infinity") {
      display.textContent = "Math ERRoR";
      num1 = [];
      number1 = answer;
      num2 = [];
      number2 = 0;
      count = 0;
      count1 = 0;
      countForPoint = 0;
      return;
    }
    if (number1.toString().length > 10) {
      number1 = number1.toFixed(10);
    }
    operator = a;
    countForPoint = 0;
    display.textContent = number1 + " " + a;
    num2 = [];
    number2 = 0;
    return answer;
  }
}
plus.addEventListener("click", () => {
  applyOperate("+");
});
minus.addEventListener("click", () => {
  // operator = "-";
  // display.textContent = "-";
  // countPlus();
  applyOperate("-");
});
mult.addEventListener("click", () => {
  applyOperate("*");
});
div.addEventListener("click", () => {
  applyOperate("/");
});
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  num1 = [];
  number1 = 0;
  num1 = [];
  number2 = 0;
  answer = 0;
  operator = "";
  count = 0;
  count1 = 0;
  countForPoint = 0;
  display.textContent = "0";
});

let answer;
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (count == 0 || count1 == 0) {
    display.textContent = "FAAAAAaaak!";
    num1 = [];
    number1 = 0;
    count = 0;
    count1 = 0;
    countForPoint = 0;
    return;
  }
  if (operator == "/" && number2 == 0) {
    display.textContent = "Divided by 0 dear";
    num1 = [];
    number1 = answer;
    num2 = [];
    number2 = 0;
    count = 0;
    count1 = 0;
    countForPoint = 0;
  } else {
    answer = operate(number1, operator, number2);
    if (answer.toString().length > 10) {
      answer = answer.toFixed(10);
    }
    display.textContent = answer;
    num1 = [];
    number1 = answer;
    num2 = [];
    number2 = 0;
    count = 0;
    count1 = 0;
    countForPoint = 0;
    return answer;
  }
});

const del = document.querySelector(".delete");
del.addEventListener("click", () => {});
