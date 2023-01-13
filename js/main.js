'use strict';

const randomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

randomInteger(0, 10);

const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('Same message', 20);

