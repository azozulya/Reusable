'use strict';

const phonebook = [
  {
    name: 'Anna',
    phone: '+79923523545'
  },
  {
    name: 'Michail',
    phone: '+79086788543'
  },
  {
    name: 'Margo',
    phone: '+79267885435'
  },
  {
    name: 'Alex',
    phone: '+79052352354'
  },
];

const findPhoneByName = name => {
  for (const el of phonebook) {
    if (el.name === name)
      return el.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
