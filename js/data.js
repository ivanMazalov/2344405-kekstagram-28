import {getRandomInt} from './util';
import {getRandomElement} from './util';

const commentsArr = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const namesArr = ['Артём', 'Елена', 'Иван', 'Светлана', 'Олег', 'Мария'];

function generateComments() {
  const comments = [];
  const commentsCount = getRandomInt(1, 5);

  for (let i = 0; i < commentsCount; i++) {
    const comment = {
      id: i + 1,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomElement(commentsArr),
      name: getRandomElement(namesArr),
    };
    comments.push(comment);
  }

  return comments;
}

function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии ${i}`,
      likes: getRandomInt(15, 200),
      comments: generateComments(),
    };
    photos.push(photo);
  }

  return photos;
}

export {generateComments};
export {generatePhotos};
