'use strict';

const phonebook = {
  Anna: '+79923523555',
  Michail: '+79086788333',
  Margo: '+79267885444',
  Alex: '+79052352222',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
