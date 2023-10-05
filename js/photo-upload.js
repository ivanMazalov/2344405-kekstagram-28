import { sendData } from './api.js';
import { resetEffects } from './photo-effects-slider.js';
import { openSuccessMessageModal, openErrorMessageModal } from './upload-result-modal.js';
import { isEscapeKey } from './util.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const SCALE_CHANGE_STEP = 25;
const SCALE_VALUE_MIN = 25;
const SCALE_VALUE_MAX = 100;

const DESCRIPTION_LENGTH_MAX = 140;
const HASHTAG_LENGTH_MAX = 20;
const HASHTAGS_COUNT_MAX = 5;

const ErrorMessage = {
  BAD_HASHTAG_LENGTH: 'Максимальная длина одного хэш-тега 20 символов, включая решётку',
  BAD_HASHTAGS_QUANTITY: 'Нельзя указать больше пяти хэш-тегов',
  BAD_HASHTAG_LETTER: 'Хэш-тег может состоять только из букв и чисел и начинаться с #',
  HASHTAG_DUPLICATE: 'Хэш-теги не должны повторяться',
  BAD_DESCRIPTION_LENGTH: 'Максимальная длина 140 символов',
};

const imageUploadElement = document.querySelector('.img-upload');
const buttonSmallerElement = imageUploadElement.querySelector('.scale__control--smaller');
const buttonBiggerElement = imageUploadElement.querySelector('.scale__control--bigger');
const scalePhotoElement = imageUploadElement.querySelector('.scale__control--value');
const modalCloseButtonElement = imageUploadElement.querySelector('#upload-cancel');
const uploadFormOverlayElement = imageUploadElement.querySelector('.img-upload__overlay');
const photoUploadElement = imageUploadElement.querySelector('#upload-file');
const addHashtagElement = imageUploadElement.querySelector('.text__hashtags');
const addDescriptionElement = imageUploadElement.querySelector('.text__description');
const photoUploadPreviewElement = imageUploadElement.querySelector('.img-upload__preview img');
const photoUploadButtonElement = imageUploadElement.querySelector('#upload-submit');
const fileChooserElement = imageUploadElement.querySelector('#upload-file');
const uploadFormElement = imageUploadElement.querySelector('.img-upload__form');


let scaleValue = SCALE_VALUE_MAX;
const hashtagValidationRegex = new RegExp('^#[A-Za-zА-Яа-яЁё0-9]{1,19}$', '');

const onModalEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    if (document.activeElement !== addHashtagElement && document.activeElement !== addDescriptionElement) {
      closeModal();
    }
  }
};

const uploadModalOpen = () => {
  uploadFormOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeyDown);
};

// function - потому что она вызывается в обработчиках выше чем она объявлена
function closeModal() {
  uploadFormOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeyDown);
  photoUploadElement.value = '';
  addHashtagElement.value = '';
  addDescriptionElement.value = '';
  resetEffects();
  scaleValue = SCALE_VALUE_MAX;
  scalePhotoElement.value = `${scaleValue}%`;
  photoUploadPreviewElement.style.transform = `scale(${scaleValue / 100})`;
}

const onScaleDecreaseClick = () => {
  if (scaleValue > SCALE_VALUE_MIN) {
    scaleValue -= SCALE_CHANGE_STEP;
    scalePhotoElement.value = `${scaleValue}%`;
    photoUploadPreviewElement.style.transform = `scale(${scaleValue / 100})`;
  }
};

const onScaleIncreaseClick = () => {
  if (scaleValue < SCALE_VALUE_MAX) {
    scaleValue += SCALE_CHANGE_STEP;
    scalePhotoElement.value = `${scaleValue}%`;
    photoUploadPreviewElement.style.transform = `scale(${scaleValue / 100})`;
  }
};

const validateHashtagsLength = (value) => {
  const hashtagsArr = value.trim().split(' ');
  for (let i = 0; i < hashtagsArr.length; i++) {
    if (hashtagsArr[i].length > HASHTAG_LENGTH_MAX) {
      return false;
    }
  }
  return true;
};

const validateHashtagsQt = (value) => {
  const hashtagsArr = value.trim().split(' ');
  return hashtagsArr.length <= HASHTAGS_COUNT_MAX;
};

const validateHashtagsLetter = (value) => {
  const hashtags = value.trim().split(' ');
  const validationResults = [];

  if (value === '') {
    return true;
  }

  for (let i = 0; i < hashtags.length; i++) {
    validationResults[i] = hashtagValidationRegex.test(hashtags[i]);
  }

  return !validationResults.includes(false);
};

const validateHashtagsDuplication = (value) => {
  const hashtagsArr = value.trim().toLowerCase().split(' ').sort();

  if (value === '' || hashtagsArr.length === 1) {
    return true;
  }

  for (let i = 0; i < hashtagsArr.length; i++) {
    if (hashtagsArr[i + 1] === hashtagsArr[i]) {
      return false;
    }
  }

  return true;
};

const validateDescription = (value) => value.length <= DESCRIPTION_LENGTH_MAX;

const onPhotoUploadElementChange = () => {
  uploadModalOpen();
};

const onModalCloseButtonClick = () => {
  closeModal();
};

const initPhotoUpload = () => {
  const pristine = new Pristine(uploadFormElement, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field--error'
  });

  pristine.addValidator(addHashtagElement, validateHashtagsLength, ErrorMessage.BAD_HASHTAG_LENGTH);
  pristine.addValidator(addHashtagElement, validateHashtagsQt, ErrorMessage.BAD_HASHTAGS_QUANTITY);
  pristine.addValidator(addHashtagElement, validateHashtagsLetter, ErrorMessage.BAD_HASHTAG_LETTER);
  pristine.addValidator(addHashtagElement, validateHashtagsDuplication, ErrorMessage.HASHTAG_DUPLICATE);
  pristine.addValidator(addDescriptionElement, validateDescription, ErrorMessage.BAD_DESCRIPTION_LENGTH);

  photoUploadElement.addEventListener('change', onPhotoUploadElementChange);
  modalCloseButtonElement.addEventListener('click', onModalCloseButtonClick);

  scalePhotoElement.value = `${scaleValue}%`;

  fileChooserElement.addEventListener('change', () => {
    const file = fileChooserElement.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      photoUploadPreviewElement.src = URL.createObjectURL(file);
    }
  });

  buttonSmallerElement.addEventListener('click', onScaleDecreaseClick);
  buttonBiggerElement.addEventListener('click', onScaleIncreaseClick);

  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      photoUploadButtonElement.disabled = true;
      sendData(
        () => {
          closeModal();
          photoUploadButtonElement.disabled = false;
          openSuccessMessageModal();
        },
        () => {
          photoUploadButtonElement.disabled = false;
          openErrorMessageModal();
          uploadFormOverlayElement.classList.add('hidden');
          document.body.classList.remove('modal-open');
          document.removeEventListener('keydown', onModalEscKeyDown);
        },
        new FormData(evt.target),
      );
    }
  });
};

export { initPhotoUpload, onModalEscKeyDown, uploadModalOpen };
