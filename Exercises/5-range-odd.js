'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  let i = start % 2 ? start : start + 1;
  while (i <= end) {
    arr.push(i);
    i += 2;
  }
  return arr;
};

module.exports = { rangeOdd };
