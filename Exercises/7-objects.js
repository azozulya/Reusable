'use strict';

const fn = () => {
  const obj1 = { name: 'Lex' };
  let obj2 = { name: 'Dan' };
  obj1.name = 'Anna';
  obj2.name = 'Kate';
  // obj1 = { phone: 345 }; obj1 is const, so can't do this
  obj2 = { phone: 678 };
  console.log(obj1, obj2);
};

module.exports = { fn };
