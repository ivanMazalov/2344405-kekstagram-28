import { openPhotoModal } from './picture-modal.js';

const photosContainerElement = document.querySelector('.pictures');
const photoTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const photosListFilterElement = document.querySelector('.img-filters');

const renderPhotos = (photos) => {
  const photosListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoElement = photoTemplateElement.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__comments').textContent = `${photo.comments.length}`;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.addEventListener('click', () => {
      openPhotoModal(photo);
    });

    photosListFragment.append(photoElement);
  });

  photosContainerElement.querySelectorAll('.picture').forEach((item) => item.remove());

  photosContainerElement.append(photosListFragment);

  photosListFilterElement.classList.remove('img-filters--inactive');
};

export {renderPhotos};
