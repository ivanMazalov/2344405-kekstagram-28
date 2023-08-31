import { renderPictureModal } from './picture-modal.js';

//Контейнер для изображений от других пользователей
const pictureTemplate = document.querySelector('#picture').content;
//Поиск шаблона по id, получение его содержимого из элемента с классом .picture
const picturesContainer = document.querySelector('.pictures');

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureElement.querySelector('.picture__img').addEventListener('click',() => renderPictureModal(picture));
    fragment.append(pictureElement);
  });
  picturesContainer.append(fragment);
};
export {renderPictures};
