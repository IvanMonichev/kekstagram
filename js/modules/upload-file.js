import { openModal } from '../helpers/toggle-popup.js';
import { MAX_IMAGE_SIZE_VALUE, MIN_IMAGE_SIZE_VALUE, STANDARD_IMAGE_SIZE_VALUE } from '../constants/constans.js';

const fileInputElement = document.querySelector('#upload-file');
const editFormElement = document.querySelector('.img-upload__overlay');
const resetButtonElement = document.querySelector('.img-upload__cancel');
const imageUploadScaleFieldset = editFormElement.querySelector('.img-upload__scale');
const scaleControlValueElement = imageUploadScaleFieldset.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview');


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

const openEditForm = () => {
  openModal(editFormElement, resetButtonElement, fileInputElement);
  handleScaleControlImage();
}

fileInputElement.addEventListener('input', openEditForm);
