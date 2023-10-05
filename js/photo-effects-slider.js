const DEFAULT_EFFECT_ELEMENT = document.querySelector('#effect-none');

const EFFECTS = {
  'NONE': {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    effect: '',
    effectUnit: '',
  },
  'CHROME': {
    min: 0,
    max: 1,
    start: 0,
    step: 0.1,
    effect: 'grayscale',
    effectUnit: '',
  },
  'SEPIA': {
    min: 0,
    max: 1,
    start: 0,
    step: 0.1,
    effect: 'sepia',
    effectUnit: '',
  },
  'MARVIN': {
    min: 0,
    max: 100,
    start: 0,
    step: 1,
    effect: 'invert',
    effectUnit: '%',
  },
  'PHOBOS': {
    min: 0,
    max: 3,
    start: 0,
    step: 0.1,
    effect: 'blur',
    effectUnit: 'px',
  },
  'HEAT': {
    min: 1,
    max: 3,
    start: 0,
    step: 0.1,
    effect: 'brightness',
    effectUnit: '',
  },
};

const DEFAULT_EFFECT = EFFECTS.NONE;

const effectLevelElement = document.querySelector('.img-upload__effect-level');
const sliderElement = effectLevelElement.querySelector('.effect-level__slider');
const effectsLevelValueElement = effectLevelElement.querySelector('.effect-level__value');
const effectInputsElements = document.querySelectorAll('.effects__radio');
const photoUploadPreviewElement = document.querySelector('.img-upload__preview img');

let currentEffect = DEFAULT_EFFECT;
let currentEffectName;

const updateSlider = () => {
  effectLevelElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });

  if (currentEffect === DEFAULT_EFFECT) {
    effectLevelElement.classList.add('hidden');
  }
};

const onSliderUpdate = () => {
  photoUploadPreviewElement.style.filter = 'none';
  photoUploadPreviewElement.classList = '';
  effectsLevelValueElement.value = '';

  const sliderValue = sliderElement.noUiSlider.get();
  photoUploadPreviewElement.style.filter = `${currentEffect.effect}(${sliderValue}${currentEffect.effectUnit})`;
  photoUploadPreviewElement.classList.add(`effects__preview--${currentEffectName}`);
  effectsLevelValueElement.value = sliderValue;
};

const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  DEFAULT_EFFECT_ELEMENT.checked = true;
  updateSlider();
};

const onEffectChange = (evt) => {
  currentEffectName = evt.target.value;
  currentEffect = currentEffectName.toUpperCase();
  currentEffect = EFFECTS[currentEffect];
  updateSlider();
};

const initPhotoEffectsSlider = () => {
  effectLevelElement.classList.add('hidden');

  noUiSlider.create(sliderElement, {
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max,
    },
    start: DEFAULT_EFFECT.max,
    step: DEFAULT_EFFECT.step,
  });

  sliderElement.noUiSlider.on('update', onSliderUpdate);

  effectInputsElements.forEach((item) => {
    item.addEventListener('change', onEffectChange);
  });
};

export { initPhotoEffectsSlider, resetEffects };
