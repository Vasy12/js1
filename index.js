const familyPopulation = Number( prompt() );

const userFamily = {};

for (let i = 0; i < familyPopulation; i++) {

  userFamily[prompt( 'Name' )] = {
    age: prompt( 'Age' ),
    status: prompt( 'Status' ),
  };

}

console.log( userFamily );