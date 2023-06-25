import {getRandomArrayElement, getRandomInteger} from './functions.js';
import {names, comments, descriptions} from './data.js';
function createComments() {
  const newComments = [];
  const commentsCount = getRandomInteger(1, 2);

  for (let i = 0; i < commentsCount; i++) {
    const comment = {
      id: getRandomInteger(1, 1000),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(comments),
      name: getRandomArrayElement(names),
    };
    newComments.push(comment);
  }
  return comments;
}

function createPictures() {
  const pictures = [];

  for (let i = 0; i < 25; i++) {
    const object = {
      id: i + 1,
      url: `photos/${getRandomInteger(1, 25)}.jpg`,
      description:  getRandomArrayElement(descriptions),
      likes: getRandomInteger(15, 200),
      comments: createComments(),
    };
    pictures.push(object);
  }
  return pictures;
}

createPictures();
