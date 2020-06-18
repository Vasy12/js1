const user = {
  name: 'Test',
};
console.log( user );

user.isMale = true;
console.log( user );
user.age = 18;
console.log( user );
user.speak = function () {
  alert( 'I\'m speaking' );
};
console.log( user );
user.name = 'Ivan';
console.log( user );

/**
 *
 * @param {string} name
 * @param {boolean} isMale
 * @constructor
 * */
function Cat(name, isMale) {
  this.name = name;
  this.isMale = isMale;

}

const cat1 = new Cat( 'Murzik', true );
const cat2 = new Cat( 'Dog', true );
const cat3 = new Cat( 'Cake', false );

/**
 *
 * @param firstName
 * @param lastName
 * @param age
 * @constructor
 */
function User(firstName, lastName, age) {
  this.name = firstName;
  this.surname = lastName;
  this.age = age;
}

const user1 = new User( 'Ivan', 'Ivanov', 16 );
const user2 = new User( 'Test', 'Testovich', 95 );



