//Строка короче 6
const checkWord = (word, number) => word.length <= number;
checkWord();

//Является ли строка палиндромом? (пробелы не умеет!!!)
const isPalindrom = (str) => {
  const downStr = str.toLowerCase();
  if (downStr === downStr.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
};
isPalindrom();

//Функция, которая принимает строку,
//извлекает содержащиеся в ней цифры от 0 до 9
//и возвращает их в виде целого положительного числа (числа не умеет!!!)
const extractNum = function (str) {
  let extResult = '';
  for (let i = 0; i <= str.length - 1; i++) {
    const symb = str.charAt(i);
    if (!isNaN(symb)) {
      extResult = Number(extResult += symb);
    }
  }
  if (Number.isInteger(extResult)) {
    return extResult;
  } else {
    return NaN;
  }
};
extractNum();


//Функция, которая принимает три параметра:
//исходную строку, минимальную длину и строку с добавочными символами
// - и возвращает исходную строку, дополненную указанными символами до заданной длины.
//Символы добавляются в начало строки.
//Если исходная строка превышает заданную длину, она не должна обрезаться.
//Если «добивка» слишком длинная, она обрезается с конца. (без padStart не смог!!!)
const sumString = function (str, length, strPlus) {
  let resultStr = '';
  if (str.length >= length) {
    return str;
  } else {
    resultStr = str.padStart(length,strPlus);
    return resultStr;
  }
};
sumString();
