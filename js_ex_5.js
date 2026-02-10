let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecond = false; 
const screen = document.getElementById('screen');

const teclado = document.querySelector('.calculadora');

teclado.addEventListener('click', (e) => {
    const tecla = e.target;
    if (!tecla.classList.contains('tecladoActive')) return;

    handleInput(tecla.textContent);
});

document.addEventListener('keydown', (e) => {
  handleInput(e.key);
});

function handleInput(rawValue) {
    const value = normalizeInput(rawValue);

      // 1. CLEAR total
  if (value === 'clr') {
    displayValue = '0';
    firstValue = null;
    operator = null;
    waitingForSecond = false;
    renderScreen();
    return;
  }
  // 2. BORRAR último
  if (value === 'del') {
    displayValue = displayValue.slice(0, -1);// Elimina el ultimo char que llego al array
    if (displayValue === '') displayValue = '0';
    renderScreen();
    return;
  }

  // 3. ENTER (calcular)
  if (value === 'Enter') {
    calculate();
    firstValue = null;
    operator = null;
    waitingForSecond = false;
    return;
  }

  // 4. OPERADORES
  if (['+', '-', '*', '/'].includes(value)) {
    operator = value;
    firstValue = Number(displayValue);
    displayValue = '0';
    waitingForSecond = true;
    return;
  }

  // 5. NÚMEROS
  if (!isNaN(value)) {
    displayValue = (displayValue === '0') ? value : displayValue + value;
    renderScreen();
     return;
  }
}



function normalizeInput(value) {
  // Unificar ENTER del botón con Enter del teclado
  if (value === 'ENTER') return 'Enter';

  // Borrar último
  if (value === 'Backspace') return 'del';

  // Clear total (teclado)
  if (value === 'Delete') return 'clr';
  if (value === 'Escape') return 'clr'; // opcional pero útil

  // Deja pasar números y operadores tal cual
  return value;
}
function renderScreen() {
  screen.value = displayValue;
}

function calculate() {
  if (firstValue === null || operator === null) return;

  const secondValue = Number(displayValue);

  let result;

  if (operator === '+') result = firstValue + secondValue;
  if (operator === '-') result = firstValue - secondValue;
  if (operator === '*') result = firstValue * secondValue;
  if (operator === '/') {
    if (secondValue === 0) {
      displayValue = 'Error';
      renderScreen();
      return;
    }
    result = firstValue / secondValue;
  }

  displayValue = String(result);
  renderScreen();
}


renderScreen();