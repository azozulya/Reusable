'use strict';

const phonebook = {
  Anna: { phone: '+79923523555' },
  Michail: { phone: '+79086788333' },
  Margo: { phone: '+79267885444' },
  Alex: { phone: '+79052352222' },
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
