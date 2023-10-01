import { isEscapeKey } from './util.js';


const SHOWN_COMMENTS_COUNT = 5;

const fullPhotoModalElement = document.querySelector('.big-picture');
const modalCloseButtonElement = fullPhotoModalElement.querySelector('#picture-cancel');

const renderedCommentsCountElement = fullPhotoModalElement.querySelector('.rendered_comments-count');
const commentsLoaderButtonElement = fullPhotoModalElement.querySelector('.comments-loader');
const socialCommentsElement = fullPhotoModalElement.querySelector('.social__comments');
const likesCountElement = fullPhotoModalElement.querySelector('.likes-count');
const commentsCountElement = fullPhotoModalElement.querySelector('.comments-count');
const socialCaptionElement = fullPhotoModalElement.querySelector('.social__caption');
const modalImageElement = fullPhotoModalElement.querySelector('.big-picture__img');

const onModalEscKey = (evt) => {
  if (isEscapeKey(evt)) {
    closePhotoModal();
  }
};


let commentsLoaded = SHOWN_COMMENTS_COUNT;
let currentComments = [];

const commentsListFragment = document.createDocumentFragment();

const renderComments = () => {
  const loadedComments = currentComments.slice(0, commentsLoaded);
  loadedComments.forEach(({ avatar, name, message }) => {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');
    const commentAvatar = document.createElement('img');
    commentAvatar.classList.add('social__picture');
    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = message;
    comment.append(commentAvatar);
    comment.append(commentText);
    commentsListFragment.append(comment);
  });
};

const loadComments = () => {
  commentsLoaded += SHOWN_COMMENTS_COUNT;
  renderComments();
  socialCommentsElement.replaceChildren(commentsListFragment);
  renderedCommentsCountElement.textContent = socialCommentsElement.children.length;

  if (socialCommentsElement.children.length === currentComments.length) {
    commentsLoaderButtonElement.classList.add('hidden');
  }
};

const onCommentsLoaderButtonClick = () => {
  loadComments();
};

commentsLoaderButtonElement.addEventListener('click', onCommentsLoaderButtonClick);

const openPhotoModal = (photo) => {
  fullPhotoModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  modalImageElement.querySelector('img').src = photo.url;
  likesCountElement.textContent = photo.likes;
  commentsCountElement.textContent = `${photo.comments.length}`;
  socialCaptionElement.textContent = photo.description;
  currentComments = photo.comments;

  renderComments();

  socialCommentsElement.replaceChildren(commentsListFragment);

  document.addEventListener('keydown', onModalEscKey);
};

// function - потому что она вызывается в обработчиках выше чем она объявлена
function closePhotoModal() {
  fullPhotoModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKey);
  commentsLoaded = SHOWN_COMMENTS_COUNT;
  commentsLoaderButtonElement.classList.remove('hidden');
}

const onModalCloseButtonClick = () => {
  closePhotoModal();
};

modalCloseButtonElement.addEventListener('click', onModalCloseButtonClick);


export { openPhotoModal };
