const SCALE_CHANGE_STEP = 25;
const SCALE_VALUE_MIN = 25;
const SCALE_VALUE_MAX = 100;

const buttonScaleSmallerElement = document.querySelector('.scale__control--smaller');
const buttonScaleBiggerElement = document.querySelector('.scale__control--bigger');
const scalePhotoValueElement = document.querySelector('.scale__control--value');
const photoPreviewElement = document.querySelector('.img-upload__preview img');

const DEFAULT_SCALE = 100;
const DEFAULT_RADIX = 10;

const scaleImage = (value) => {
  photoPreviewElement.style.transform = `scale(${value / DEFAULT_SCALE})`;
  scalePhotoValueElement.value = `${value}%`;
};

const onButtonScaleSmaller = () => {
  const currentValue = parseInt(scalePhotoValueElement.value, DEFAULT_RADIX);
  let newValue = currentValue - SCALE_CHANGE_STEP;
  if (newValue < SCALE_VALUE_MIN) {
    newValue = SCALE_VALUE_MIN;
  }
  scaleImage(newValue);
};


const onButtonScaleBigger = () => {
  const currentValue = parseInt(scalePhotoValueElement.value, DEFAULT_RADIX);
  let newValue = currentValue + SCALE_CHANGE_STEP;
  if (newValue > SCALE_VALUE_MAX) {
    newValue = SCALE_VALUE_MAX;
  }
  scaleImage(newValue);
};

buttonScaleSmallerElement.addEventListener('click', onButtonScaleSmaller);
buttonScaleBiggerElement.addEventListener('click', onButtonScaleBigger);
