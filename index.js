/*let i = 0;

 while (i <= 10) {

 console.log( i++ );
 }*/

/**
 *
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */
function pow(base, exponent) {

  if (exponent < 0) {
    return 1 / pow( base, Math.abs( exponent ) );
  }

  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;

}

console.log( `pow( 2, -3 ) = ${pow( 2, -3 )}` );

/**
 *
 * @param {number} n
 * @return {number}
 */
function getNthFibNumber(n) {

  if (n === 1) {
    return 0;
  }

  let prev1 = 0;
  let prev2 = 1;
  let next = prev1 + prev2;

  for (let i = 3; i < n; i++) {
    prev1 = prev2;
    prev2 = next;
    next = prev1 + prev2;
  }

  return next;
}

console.log( `getNthFibNumber( 7 ) = ${getNthFibNumber( 7 )}` ); // 8
console.log( `getNthFibNumber( 9 ) = ${getNthFibNumber( 9 )}` ); // 21

console.log( 2 ** 3 );