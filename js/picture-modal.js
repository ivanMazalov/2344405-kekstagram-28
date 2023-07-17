import { isEscapeKey } from './functions.js';

const modal = document.querySelector('.big-picture');

const commentTempale = modal.querySelector('.social__comment');
const commentsContainer = modal.querySelector('.social__comments');
const commentsCountModal = document.querySelector('.social__comment-count');
const commentsLoaderButton = document.querySelector('.comments-loader');

// const AMOUNT__COMMENTS = 5;
//
// let commentsLoaded = SHOW__COMMENTS;
// let currentComments = [];


const modalEscKeyHandler = (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
};

const openModal = () => {
  modal.classList.remove('hidden');
  commentsCountModal.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', modalEscKeyHandler);
};

const closeModal = () => {
  modal.classList.add('hidden');
  commentsCountModal.classList.remove('hidden');
  commentsLoaderButton.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.removeEventListener('keydown', modalEscKeyHandler);
};


const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const element = commentTempale.cloneNode(true);
    element.querySelector('.social__picture').src = comment.avatar;
    element.querySelector('.social__picture').alt = comment.name;
    element.querySelector('.social__text').textContent = comment.message;
    fragment.append(element);
  });

  commentsContainer.innerHTML = '';
  commentsContainer.append(fragment);
};


const renderPictureModal = (picture) => {
  openModal();
  modal.querySelector('.big-picture__img img').src = picture.url;
  modal.querySelector('.likes-count').textContent = picture.likes;
  modal.querySelector('.comments-count').textContent = picture.comments.length;
  modal.querySelector('.social__caption').textContent = picture.description;
  modal.querySelector('.big-picture__cancel').addEventListener('click', closeModal);
  renderComments(picture.comments);
};

export {renderPictureModal};
