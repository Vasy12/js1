/*const firstValue = prompt( 'Please input your first number' );

 const firstNumber = Number( firstValue );*/

const firstNumber = Number( prompt( 'Please input your first number' ) );

if (!isNaN( firstNumber )) {

  const secondNumber = Number( prompt( 'Please input your second number' ) );

  if (!isNaN( secondNumber )) {

    const operationMark = prompt( 'Please choose operation: +, -, *, /' );
    let operationFunc;
    switch (operationMark) {

      case '+': {
        operationFunc = sum;
      }
        break;
      case '-': {
        operationFunc = subtraction;

      }
        break;
      case '*': {
        operationFunc = multiplication;

      }
        break;
      case '/': {
        operationFunc = division;

      }
        break;
      default: {
        operationFunc = 7;
        alert( 'Unknown operation' );
      }
    }

    if (typeof operationFunc === 'function') {
      const result = operationFunc( firstNumber, secondNumber );
      alert( result );
    }

  }

}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {

  return a + b;

}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {

  return a - b;

}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {

  return a * b;

}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {

  return a / b;

}
