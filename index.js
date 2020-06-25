'use strict';

function Car(brand) {
  if (!new.target) {
    return new Car( brand );
  }

  this.brand = brand;
}

const car1 = new Car( 'VW' );
const car2 = Car( 'Toyota' );
