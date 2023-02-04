const hashtagsInput = document.querySelector('.text__hashtags');
const descriptionArea = document.querySelector('.text__description');

const handleErrorMessage = (isValid, validationError) => {

  if (!isValid) {
    hashtagsInput.setCustomValidity(validationError);
  } else {
    hashtagsInput.setCustomValidity('');
  }

  hashtagsInput.reportValidity();
}

const handleCustomValidity = (evt) => {

  if (!evt.target.value) {
    return;
  }

  const textList = evt.target.value.toLowerCase().trim().split(' ');

  const isHashtag = textList.every((item) => item[0] === '#');

  handleErrorMessage(isHashtag, 'Хэш-тег должен начинаться с символа \'#\'')

  hashtagsInput.reportValidity();
}

hashtagsInput.addEventListener('input', handleCustomValidity)
