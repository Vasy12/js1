'use strict';

/**
 *
 * @param {function} executor
 * @param {string} greeting
 */
function sayHello(executor, greeting) {

  if (typeof executor === 'function') {
    executor( greeting );
  }

}

sayHello( console.log, 'Hello my friends!' );

sayHello( alert, 'Hello my friends!' );

function withLog(func) {
  return function (...arg) {
    const result = func( ...arg );

    console.log( result );

    return result;
  };

}

function sum(a, b) {
  return a + b;
}

const sumWithLog = withLog( sum );

const result = sum( 2, 4 );

const result2 = sumWithLog( 2, 4 );
