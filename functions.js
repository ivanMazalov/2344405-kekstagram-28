//Длина строки
function checkStrLength(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

//Является ли палиндромом
function checkPalindrome(str) {
  const strPalind = str.toLowerCase().replace(/[^a-z0-9]+/g,'');
  if (strPalind.split('').reverse().join('') == str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

// Извлекает цифры
function checkNumbers(str) {
  const value = str.toString();
  const numb = value.match((/\d+/g));
  if (Array.isArray(numb)) {
    return parseInt(numb.join(''), 10);
  } else {
    return NaN;
  }
}

// Дополняет строку
function strPlus(str, minLength, newStr) {
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
