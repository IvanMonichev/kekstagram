const bodyElement = document.querySelector('body')

const openMoadl = (modalElement) => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open')
}

const closeModal = (modalElement) => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
}

export {
  openMoadl,
  closeModal
}
