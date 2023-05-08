import {getRandomArrayElement, getRandomInteger} from './functions.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Володя',
  'Виктор',
  'Юлия',
  'Ибрагим',
  'Степашка',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Удачная попытка фотографии!!!',
  'На отдыхе в солнечный день.',
  'Залив в приморском крае.',
  'Красивый купальник.',
  'Ванночки для риса.',
  'Мечта, любого автолюбителя.',
  'Эстетичный завтрак.',
  'Компот с чаем.',
  'Так доставляют новых людей.',
  'Туфли на полках.',
  'Приятный салон, хороший движок, что еще может быть нужно.',
  'Обед.',
  'Вот и сказочке конец.',
  'Обувь будущего.',
  'Я вышел из самолета.',
  'На концерте Карла Дженкинса, очень понравилось!!!',
  'Машина моего отца.',
  'Не знаю где выключается.',
  'В Зоопарке.',
  'Ну, наконец-то мой ужин(мало).',
  'Я пришел на море посмотреть.',
  'Это мой новый друг.',
  'Не знаю, как оттуда выбраться.',
  'Замена прошла успехно.'
];

function createComments() {
  const comments = [];
  const commentsCount = getRandomInteger(1, 2);

  for (let i = 0; i < commentsCount; i++) {
    const comment = {
      id: getRandomInteger(1, 1000),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES),
    };
    comments.push(comment);
  }
  return comments;
}

function createObjects() {
  const objects = [];

  for (let i = 0; i < 25; i++) {
    const object = {
      id: i + 1,
      url: `photos/${getRandomInteger(1, 25)}.jpg`,
      description:  getRandomArrayElement(DESCRIPTION),
      likes: getRandomInteger(15, 200),
      comments: createComments(),
    };
    objects.push(object);
  }
  return objects;
}

createComments();
createObjects();
