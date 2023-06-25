// 7.15. Отрисуй меня полностью (часть 1)
import { createPictures,} from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');
const picturesItem = createPictures();
const picturesListFragment = document.createDocumentFragment();

picturesItem.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesListFragment.append(pictureElement);
});

picturesContainer.append(picturesListFragment);

export {picturesContainer};
