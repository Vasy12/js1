console.group( ' - ' );
console.log( '7 - true = ', '7' - true );
console.log( '7 - false = ', '7' - false );
console.log( '7 - undefined = ', '7' - undefined );
console.log( '7 - null = ', '7' - null );
console.log( '7 - 987 = ', '7' - 987 );
console.log( '7 - {} = ', '7' - {} );
console.groupEnd();

console.group( ' / ' );

console.log( '7 / true = ', '7' / true );
console.log( '7 / false = ', '7' / false );
console.log( '7 / undefined = ', '7' / undefined );
console.log( '7 / null = ', '7' / null );
console.log( '7 / 987 = ', '7' / 987 );
console.log( '7 / {} = ', '7' / {} );
console.log( '7 / Symbol() = ', '7' / Symbol() );
console.groupEnd();