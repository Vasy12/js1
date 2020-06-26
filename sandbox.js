class ClassCar {

  constructor(brand) {
    this.brand = brand;
  }

  go() {
    alert( `${this.brand} car is go` );
  }

}

const car3 = new ClassCar( 'BMW' );
const car4 = new ClassCar( 'Mercedes-Benz' );