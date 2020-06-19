/**
 *
 * @param {function} f
 * @param rest
 * @returns {*}
 */
function log(f, ...rest) {
  const result = f( ...rest );
  console.log( result );
  return result;
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

log( sum, 4, 6 );
log( division, 4, 6 );
log( multiplication, 4, 6 );
log( subtraction, 4, 6 );
