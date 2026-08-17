const display = document.querySelector("#input-space");
const buttons = document.querySelectorAll(".bottom-button button");

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

let firstNumber = "";
let operator = "";
let secondNumber = "";
let isCalculated = false;

const operate = function (operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "÷") {
    return divide(a, b);
  }
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const digit = button.textContent;
    if (digit === "=") {
      // add calculate function
      const num1 = Number(firstNumber);
      const num2 = Number(secondNumber);
      const result = operate(operator, num1, num2);

      display.textContent = result;
      firstNumber = result.toString();
      operator = "";
      secondNumber = "";
      isCalculated = true;
      // calculator terms and conditions
    } else if (
      digit === "+" ||
      digit === "-" ||
      digit === "÷" ||
      digit === "x"
    ) {
      if (operator && firstNumber && secondNumber) {
        const result = operate(
          operator,
          Number(firstNumber),
          Number(secondNumber),
        );
        firstNumber = result.toString();
        secondNumber = "";
        display.textContent = firstNumber;
      }
      operator = digit;
      isCalculated = false;
      display.textContent = operator;
    } else if (digit === "Clear") {
      secondNumber = "";
      firstNumber = "";
      operator = "";
      display.textContent = "";
    } else if (digit === "Delete") {
      if (secondNumber) {
        const Delete = secondNumber;
        secondNumber = Delete.slice(0, -1);
        display.textContent = secondNumber;
      } else if (firstNumber) {
        const Delete = firstNumber;
        firstNumber = Delete.slice(0, -1);
        display.textContent = firstNumber;
      }
    } else {
      if (isCalculated) {
        firstNumber = digit;
        display.textContent = firstNumber;
        isCalculated = false;
      } else {
        if (operator === "") {
          firstNumber += digit;
          display.textContent = firstNumber;
        } else {
          secondNumber += digit;
          display.textContent = secondNumber;
        }
      }
    }
  });
});
