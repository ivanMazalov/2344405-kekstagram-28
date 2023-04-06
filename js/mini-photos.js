const renderPhotos = function(photos) {
  const fragment = new DocumentFragment();

  photos.forEach((photo) => {
    const template = document.querySelector('#picture').content.cloneNode(true);
    const imageElement = template.querySelector('.picture__img');
    const likesElement = template.querySelector('.picture__likes');
    const commentsElement = template.querySelector('.picture__comments');

    imageElement.src = photo.url;
    likesElement.textContent = photo.likes;
    commentsElement.textContent = photo.comments;

    fragment.appendChild(template);
  });
  const picturesElement = document.querySelector('.pictures');
  picturesElement.appendChild(fragment);
};

export {renderPhotos};
