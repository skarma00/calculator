const display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  display.textContent = currentInput;
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput.slice(-1);
  if ('+-*/%'.includes(lastChar)) return;
  currentInput += operator;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || '0';
}

function calculate() {
  try {
    const result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
}
