const CORRECT_PASSWORD = 'qwerty';
const TRY_LIMIT = 5;

let tryCount = 0;
let isPasswordCorrect = false;

do {

  isPasswordCorrect = prompt( 'Please input your password' ) === CORRECT_PASSWORD;

  if (isPasswordCorrect) {
    break;
  }

} while (++tryCount < TRY_LIMIT);

alert( `Password ${isPasswordCorrect
                   ? 'incorrect'
                   : 'correct'}` );


