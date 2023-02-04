const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
}

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

const checkLength = (string, maxLength) => string.length <= maxLength;

const isKeyEscape = (key) => key === Keys.ESCAPE || key === Keys.ESC;

export { getRandomInteger, isKeyEscape }

