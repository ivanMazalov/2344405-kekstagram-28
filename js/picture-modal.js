// import { renderComments } from './render-pictures.js';
// import {TEST} from './data.js'

const handleModalCancelClick = () => {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const renderPictureModal = (picture) => {
  // renderComments(TEST);
  const modal = document.querySelector('.big-picture');
  modal.classList.remove('hidden');
  modal.querySelector('.big-picture__cancel').addEventListener('click', handleModalCancelClick);
  //modal.querySelector('.big-picture__img').src = url;
  document.querySelector('body').classList.add('modal-open');
  modal.querySelector('.big-picture__img img').src = picture.url;
  modal.querySelector('.likes-count').textContent = picture.likes;
  modal.querySelector('.social__comments').textContent = picture.comments;
};

export {renderPictureModal};

