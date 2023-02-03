import { openModal } from '../helpers/toggle-popup.js';
import { MAX_IMAGE_SIZE_VALUE, MIN_IMAGE_SIZE_VALUE, STANDARD_IMAGE_SIZE_VALUE } from '../constants/constans.js';

const fileInputElement = document.querySelector('#upload-file');
const editFormElement = document.querySelector('.img-upload__overlay');
const imageUploadPreview = editFormElement.querySelector('.img-upload__preview');
const resetButtonElement = editFormElement.querySelector('.img-upload__cancel');
const imageUploadScaleFieldset = editFormElement.querySelector('.img-upload__scale');
const scaleControlValueElement = editFormElement.querySelector('.scale__control--value');
const imagePreviewElement = imageUploadPreview.querySelector('img');
const effectsItemElements = document.querySelectorAll('.effects__item');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLavelWrapper = document.querySelector('.img-upload__effect-level');


const changeSize = (evt) => {
  const step = 25;
  let valueElement = Number(scaleControlValueElement.value.slice(0, -1));

  if (evt.target.matches('.scale__control--smaller')) {
    valueElement > MIN_IMAGE_SIZE_VALUE ? valueElement -= step : valueElement = MIN_IMAGE_SIZE_VALUE;
  }
  if (evt.target.matches('.scale__control--bigger')) {
    valueElement < MAX_IMAGE_SIZE_VALUE ? valueElement += step : valueElement = MAX_IMAGE_SIZE_VALUE;
  }

  imageUploadPreview.style.transform = `scale(${valueElement * 0.01}`;

  scaleControlValueElement.value = valueElement + '%';
}

const handleScaleControlImage = () => {
  scaleControlValueElement.value = STANDARD_IMAGE_SIZE_VALUE + '%';
  imageUploadScaleFieldset.addEventListener('click', changeSize);
}

/* Инициализация слайдера */
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
});

const removeSlider = () => {
  effectLavelWrapper.classList.add('hidden');
  imagePreviewElement.removeAttribute('class');
  imagePreviewElement.removeAttribute('style');
}

const handleChangeSlider = (filterValue, suffix = 0) => {
  effectLevelValue.value = filterValue;

  sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
    effectLevelValue.value = unencoded[handle];
    imagePreviewElement.style.filter = `${filterValue}(${unencoded[handle] + suffix})`;
  });
}

const setEffect = (evt) => {
  if (effectLavelWrapper.classList.contains('hidden')) {
    effectLavelWrapper.classList.remove('hidden');
  }

  switch (evt.target.value) {
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      })
      handleChangeSlider('grayscale');
      break;
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      })
      handleChangeSlider('sepia');
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      })
      handleChangeSlider('invert', '%');
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
      })
      handleChangeSlider('blur', 'px');
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
      })
      handleChangeSlider('brightness');
      break;
    case 'none':
      removeSlider();
      break;
  }
}

const changeEffect = (evt) => {
  if (evt.target.matches('.effects__radio')) {
    imagePreviewElement.className = '';
    imagePreviewElement.classList.add(`effects__preview--${evt.target.value}`);
    setEffect(evt);
  }
}

const handleEffectImage = () => {
  effectsItemElements.forEach(item =>
    item.addEventListener('click', changeEffect));
}


const openEditForm = () => {
  removeSlider();
  openModal(editFormElement, resetButtonElement, fileInputElement);
  handleScaleControlImage();
  handleEffectImage();
}

fileInputElement.addEventListener('input', openEditForm);
