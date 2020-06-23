/*let i = 0;

 while (i <= 10) {

 console.log( i++ );
 }*/

/**
 *
 * @param {number} base
 * @param {number} power - positive value
 * @return {number}
 */
function pow(base, power) {

  if (power < 0) {
    return 1 / pow( base, Math.abs( power ) );
  }

  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= base;
  }

  return result;

}

console.log( `pow( 2, -3 ) = ${pow( 2, -3 )}` );

