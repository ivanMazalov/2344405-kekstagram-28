const SCALE_CHANGE_STEP = 25;
const SCALE_VALUE_MIN = 25;
const SCALE_VALUE_MAX = 100;
const DEFAULT_SCALE = 100;

const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const scalePhotoValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview img');


const scaleImage = (value) => {
  photoPreview.style.transform = `scale(${value / 100})`;
  scalePhotoValue.value = `${value}%`;
};

const onButtonScaleSmaller = () => {
  const currentValue = parseInt(scalePhotoValue.value, 10);
  let newValue = currentValue - SCALE_CHANGE_STEP;
  if (newValue < SCALE_VALUE_MIN) {
    newValue = SCALE_VALUE_MIN;
  }
  scaleImage(newValue);
};


const onButtonScaleBigger = () => {
  const currentValue = parseInt(scalePhotoValue.value, 10);
  let newValue = currentValue + SCALE_CHANGE_STEP;
  if (newValue > SCALE_VALUE_MAX) {
    newValue = SCALE_VALUE_MAX;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

buttonScaleSmaller.addEventListener('click', onButtonScaleSmaller);
buttonScaleBigger.addEventListener('click', onButtonScaleBigger);

export {resetScale};
