/*
*
* THIS
*
* */
const duck = {
  name: 'Duck',
  fly() {
    alert( `${this.name} flies!` );
  },
  speak() {
    alert( `Quack-Quack!!!` );
  },
};

const duckChild = Object.create(duck);

duckChild.name = 987;
