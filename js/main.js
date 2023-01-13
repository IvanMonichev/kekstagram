'use strict';

const randomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return 'Диапазон должен быть положительным'
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

const checkLength = (string, maxLength) => string.length <= maxLength;

