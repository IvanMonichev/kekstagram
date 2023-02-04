import { isKeyEscape } from './util.js';

const bodyElement = document.querySelector('body')

const closeModal = (modalElement, closeButtonElement, inputElement) => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  // Если был передан input, то сбрасываем значения.
  if (inputElement) {
    inputElement.value = '';
    console.log('Поле успешно очистилось.')
  }
}

const openModal = (modalElement, closeButtonElement, inputElement = undefined) => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  closeButtonElement.addEventListener('click', () =>
    closeModal(modalElement, closeButtonElement, inputElement), { once: true });
  document.addEventListener('keydown', (evt) =>
    handleEscClose(evt, modalElement, closeButtonElement, inputElement), { once: true });
}

const handleEscClose = (evt, modalElement, closeButtonElement, inputElement) => {
  if (isKeyEscape(evt.key)) {
    closeModal(modalElement, closeButtonElement, inputElement);
  }
}

export {
  openModal,
  closeModal,
  handleEscClose
}
