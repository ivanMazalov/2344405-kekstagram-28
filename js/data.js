import {getRandomArrayElement, getRandomInteger} from './util.js';

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const QUANTITY_OF_POSTS = 25;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 999;

const USERS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Володя',
  'Виктор',
  'Юлия',
  'Ибрагим',
  'Степашка',
];

const USERS_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Прекрасный момент, запечатленный на фото!',
  'Вау, какая яркая и эмоциональная фотография!',
  'Просто волшебно! Это фото заставляет мое сердце трепетать.',
  'Идеальный кадр! Хороший выбор ракурса и освещения.',
  'Улыбки, которые несут солнечный свет. Прекрасное фото!',
  'Мгновение вечности, запечатленное объективом камеры.',
  'Эта фотография переносит меня в другой мир. Восхитительно!',
  'Красота, которая неописуема словами. Просто великолепно!',
  'Маленький кусочек счастья, который навсегда сохранен на фото.',
  'Снимок, который заставляет мое сердце замирать. Восхитительно!'
];

const PICTURE_DESCRIPTIONS = [
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
  const result = [];
  const commentsCount = getRandomInteger(1, USERS_COMMENTS.length);

  for (let i = 0; i < commentsCount; i++) {
    result.push({
      id: getRandomInteger(MIN_COMMENT_ID, MAX_COMMENT_ID),
      avatar: `img/avatar-${getRandomInteger(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR)}.svg`,
      message: getRandomArrayElement(USERS_COMMENTS),
      name: getRandomArrayElement(USERS_NAMES),
    });
  }
  return result;
}

function createPictures() {
  const pictures = [];

  for (let i = 1; i < QUANTITY_OF_POSTS; i++) {
    const object = {
      id: i,
      url: `photos/${i}.jpg`,
      description:  getRandomArrayElement(PICTURE_DESCRIPTIONS),
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: createComments(),
    };
    pictures.push(object);
  }
  return pictures;
}


export { createPictures };
