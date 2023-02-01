import { openModal } from '../helpers/toggle-popup.js';

const fileInputElement = document.querySelector('#upload-file');
const editFormElement = document.querySelector('.img-upload__overlay');
const resetButtonElement = document.querySelector('.img-upload__cancel');


const openEditForm = () => {
  openModal(editFormElement, resetButtonElement);
}

fileInputElement.addEventListener('input', openEditForm);
