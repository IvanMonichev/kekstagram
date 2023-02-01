const bodyElement = document.querySelector('body')

const closeModal = (modalElement) => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
}

const openModal = (modalElement, closeButtonElement) => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  closeButtonElement.addEventListener('click', () => closeModal(modalElement));
  document.addEventListener('keydown', (evt) => handleEscClose(evt, modalElement));
}

const handleEscClose = (evt, modalElement) => {
  if (evt.key === 'Escape') {
    closeModal(modalElement);
  }
}

export {
  openModal,
  closeModal,
  handleEscClose
}
