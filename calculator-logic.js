let expression = "";

function append(value) {
  expression += value;
  document.getElementById("display").textContent = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").textContent = "0";
}

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById("display").textContent = expression || "0";
}

function calculate() {
  try {
    const result = eval(expression.replace(/sin|cos|tan/g, fn => `Math.${fn}`));
    document.getElementById("display").textContent = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("display").textContent = "Error";
    expression = "";
  }
}
