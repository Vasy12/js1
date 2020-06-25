const user = {
  firstName: 'Vova',
  lastName: 'Vovavich',
  balance: 10000000,
  passwordHash: '0as548dgf5hgj87h5bd2f4fg8df7gh',
};

console.log( user );

delete user.passwordHash;

console.log( user );
