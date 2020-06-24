/*
 * Вывести все числа от 1 до 100, которые кратные указанному
 пользователем числу.

 *
 * */

const userNumber = Number( prompt() );

if (!isNaN( userNumber )) {
  console.group( 'Not optimal solution' );

  for (let i = 0; i < 100; i++) {
    if (i % userNumber === 0) {
      console.log( i );
    }
  }
  console.groupEnd();

  console.group( 'Optimal solution' );

  for (let i = 0; i < 100; i += userNumber) {
    console.log( i );
  }
  console.groupEnd();

}

