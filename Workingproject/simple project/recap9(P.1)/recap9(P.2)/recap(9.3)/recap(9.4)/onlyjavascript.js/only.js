// Simple JavaScript Calculator - No HTML/CSS

alert("Welcome to Console Calculator!");

const num1 = parseFloat(prompt("Enter first number:"));
const operator = prompt("Enter operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter second number:"));

let result;

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid input! Please enter numbers.");
} else {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operator!";
  }

  alert("Result: " + result);
}
