import { isEscapeKey } from './util.js';
import { uploadModalOpen } from './photo-upload.js';

const DEFAULT_Z_INDEX = '99';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const onErrorButtonClick = () => {
  closeErrorMessageModal();
};

const onErrorDocumentClick = (evt) => {
  if (evt.target.matches('.error')) {
    closeErrorMessageModal();
  }
};

const onErrorKeyDownClick = (evt) => {
  if (isEscapeKey(evt)) {
    closeErrorMessageModal();
  }
};

const openErrorMessageModal = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  errorMessageElement.style.zIndex = DEFAULT_Z_INDEX;
  document.body.append(errorMessageElement);
  errorMessageElement.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.addEventListener('click', onErrorDocumentClick);
  document.addEventListener('keydown', onErrorKeyDownClick);
};

// function - потому что она вызывается в обработчиках выше чем она объявлена
function closeErrorMessageModal () {
  document.querySelector('.error').querySelector('.error__button').removeEventListener('click', onErrorButtonClick);
  document.removeEventListener('click', onErrorDocumentClick);
  document.removeEventListener('keydown', onErrorKeyDownClick);
  document.querySelector('.error').remove();
  uploadModalOpen();
}

const onSuccessButtonClick = () => {
  closeSuccessMessageModal();
};

const onSuccessDocumentClick = (evt) => {
  if (evt.target.matches('.success')) {
    closeSuccessMessageModal();
  }
};

const onSuccessKeyDownClick = (evt) => {
  if (isEscapeKey(evt)) {
    closeSuccessMessageModal();
  }
};


const openSuccessMessageModal = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  document.body.append(successMessageElement);
  document.body.classList.add('modal-open');
  successMessageElement.querySelector('.success__button').addEventListener('click', onSuccessButtonClick);
  document.addEventListener('click', onSuccessDocumentClick);
  document.addEventListener('keydown', onSuccessKeyDownClick);
};

// function - потому что она вызывается в обработчиках выше чем она объявлена
function closeSuccessMessageModal () {
  document.body.classList.remove('modal-open');
  document.querySelector('.success__button').removeEventListener('click', onSuccessButtonClick);
  document.removeEventListener('click', onSuccessDocumentClick);
  document.removeEventListener('keydown', onSuccessKeyDownClick);
  document.querySelector('.success').remove();
}

export {openErrorMessageModal, openSuccessMessageModal};
