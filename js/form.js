import { isEscapeKey } from './functions.js';


const imgUploadInput = document.querySelector('#upload-file');
const imgOpenForm = document.querySelector('.img-upload__overlay');
const imgCloseForm = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const hashtagsText = document.querySelector('.text__hashtags');
const textDescript = document.querySelector('.text__description');
//const imgUploadSubmit = document.querySelector('.img-upload__submit');

const MAX_HASHTAGS = 5;
const MAX_HASHTAGS_LENGTH = 104;
const MAX_DESCRIPT_LENGTH = 140;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

const validateHashtagsNumber = (value) => {
  const arrHashtags = value.trim().split(' ');
  if(arrHashtags.length > MAX_HASHTAGS){
    return false;
  }
  return true;
};

pristine.addValidator(
  hashtagsText,
  validateHashtagsNumber,
  'Превышено количество хэштегов (максимум 5)'
);

const validateHashtagLength = () => {
  if (hashtagsText.value.trim().length <= MAX_HASHTAGS_LENGTH) {
    return true;
  }
};

pristine.addValidator(
  hashtagsText,
  validateHashtagLength,
  'Превышено кол-во символов (максимум 104)'
);

const validateHashtagExp = (value) => {
  const regexpForHashtag = (/^#[a-zа-яё0-9]{1,19}$/i);
  const arrHashtags = value.trim().split(' ');
  for(let i = 0; i < arrHashtags.length; i++){
    if(!regexpForHashtag.test(arrHashtags[i])){
      return false;
    }
  }
  return true;
};

pristine.addValidator(
  hashtagsText,
  validateHashtagExp,
  'Недопустимые символы'
);

const validateHashtagDublicate = (value) => {
  const arrHashtags = value.trim().split(' ');
  function hasDuplicates() {
    return new Set(arrHashtags).size !== arrHashtags.length;
  }

  if (hasDuplicates(arrHashtags)) {
    return false;
  }else {
    return true;
  }
};

pristine.addValidator(
  hashtagsText,
  validateHashtagDublicate,
  'Обнаружены повторяющиеся хэштеги!'
);


//Пытаюсь наладить деактивацию кнопки "отправить", но потерял логику, куда воткнуть. Если раскомментировать - коряво пристинит

// const allValidateHashtags = (value) => {
//   if(validateHashtagNumber(value) && validateHashtagExp(value) && validateHashtagDublicate(value)){
//     imgUploadSubmit.disabled = false;
//     return true;
//   }else if (value.length === 0){
//     imgUploadSubmit.disabled = false;
//     return true;
//   }else{
//     imgUploadSubmit.disabled = true;
//     return false;
//   }
// };

// pristine.addValidator(
//   hashtagsText,
//   allValidateHashtags,
//   'Ошибка в заполнении'
// );

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImgEditForm();
  }
};

function openImgForm () {
  imgOpenForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeImgEditForm () {
  imgOpenForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();
  pristine.reset();
  document.removeEventListener('keydown', onDocumentKeydown);
}

function addRemovingListener () {
  document.removeEventListener('keydown', onDocumentKeydown);
}


imgUploadInput.addEventListener('change',openImgForm);
hashtagsText.addEventListener('focus',addRemovingListener);
imgCloseForm.addEventListener('click',closeImgEditForm);
