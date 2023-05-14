//Длина строки
function checkStrLength(str, maxLength) {
  return str.length <= maxLength;
}

//Является ли палиндромом
function checkPalindrome(str) {
  const strPalind = str.toLowerCase().replace(/[^a-z0-9]+/g,'');
  return strPalind.split('').reverse().join('') === str.toLowerCase();
}

// Извлекает цифры
function extractNumbers(str) {
  const value = str.toString();
  const numbers = value.match((/\d+/g));
  if (Array.isArray(numbers)) {
    return parseInt(numbers.join(''), 10);
  } else {
    return NaN;
  }
}

// Дополняет строку
function addNewStr(str, minLength, newStr) {
  if (str.length >= minLength) {
    return str;
  } else {
    let newIndex = 0;
    let result = '';
    for (let i = 0; i < minLength - str.length; i++) {
      if (newIndex === newStr.length){
        newIndex = 0;
      }
      result += newStr.charAt(newIndex);
      newIndex++;
    }
    return result + str;
  }
}

// функия случайного числа из диапозона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функиця по поиску случайного элемента в переданном массиве.
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

checkStrLength();
checkPalindrome();
extractNumbers();
addNewStr();

export {getRandomInteger, getRandomArrayElement};
