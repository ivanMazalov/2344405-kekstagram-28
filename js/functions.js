// функия случайного числа из диапозона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функиця по поиску случайного элемента в переданном массиве.
function getRandomArrayElement (array) {
  return array[getRandomInteger(0, array.length - 1)];
}

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRandomArrayElement, isEscapeKey};
