import { renderPictureModal } from './picture-modal.js';

//Контейнер для изображений от других пользователей
const pictureTemplate = document.querySelector('#picture').content;
//Поиск шаблона по id, получение его содержимого из элемента с классом .picture
const picturesContainer = document.querySelector('.pictures');

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__img').addEventListener('click',() => renderPictureModal(pictures));
    fragment.append(pictureElement);
  });
  picturesContainer.append(fragment);
};
export {renderPictures};

const socialCommentTemplate = document.querySelector('#social__comment');
const socialCommentsContainer = document.querySelector('.social__picture');

const renderComments = (comments) => {
  const commentFragment = socialCommentTemplate.createDocumentFragment();
  comments.forEach(({avatar}) => {
    const commentElement = socialCommentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar.url;
    commentFragment.append(commentElement);
  });
  socialCommentsContainer.append(commentFragment);
};

export {renderComments};
