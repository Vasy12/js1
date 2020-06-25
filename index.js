const herbivore = {
  eat() {
    alert( `${this.name} eats grass` );
  }
};

const carnivorous = {
  eat() {
    alert( `${this.name} eats meat` );
  }
};

const omnivorous = {
  eat() {
    alert( `${this.name} eats everything` );
  }
};

const cow = Object.create( herbivore, {
  name: {
    value: 'cow'
  }
} );

const tiger = Object.create( carnivorous, {
  name: {
    value: 'tiger'
  }
} );

const bear = Object.create( omnivorous, {
  name: {
    value: 'bear'
  }
} );

const human = Object.create( omnivorous, {
  name: {
    value: 'human',
  }
} );
