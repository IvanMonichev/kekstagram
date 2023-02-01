import { BIG_PICTURE_CONFIG } from '../constants/constans.js';
const bigPictureElement = document.querySelector(BIG_PICTURE_CONFIG.bigPictureSelector);
const closeButtonElement = document.querySelector(BIG_PICTURE_CONFIG.closeButtonSelector);
import { openMoadl, closeModal } from './openPopup.js';


const closePicture = () => {
  closeButtonElement.removeEventListener('click', closePicture);
  closeButtonElement.removeEventListener('keydown', closePicture)
  closeModal(bigPictureElement);
}

const handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    closePicture();
  }
}

const generateComment = (commentItem) => {
  const socialComment = document.createElement('li');
  socialComment.classList.add('social__comment');

  const socialPicture = document.createElement('img');
  socialPicture.classList.add('social__picture');
  socialPicture.src = commentItem.avatar;
  socialPicture.alt = `Аватар пользователя ${commentItem.name}`
  socialPicture.setAttribute('width', 35);
  socialPicture.setAttribute('height', 35);
  socialComment.appendChild(socialPicture);

  const socialText = document.createElement('p');
  socialText.classList.add('social__text');
  socialText.textContent = commentItem.message;
  socialComment.appendChild(socialText);

  return socialComment;
};

const renderComments = (parentElement, commentItems) => {
  commentItems.forEach((item) => {
    parentElement.appendChild(generateComment(item));
  });
};

const generatePicture = (item) => {
  const bigPictureImageElement = bigPictureElement.querySelector(BIG_PICTURE_CONFIG.bigPictureImageSelector);
  const likesCountElement = bigPictureElement.querySelector(BIG_PICTURE_CONFIG.likesCountSelector);
  const commentsCountElement = bigPictureElement.querySelector(BIG_PICTURE_CONFIG.commentsCountSelector);
  const socialListCommentsElement = bigPictureElement.querySelector(BIG_PICTURE_CONFIG.socialListCommentSelector);
  const socialCaptionElement = bigPictureElement.querySelector(BIG_PICTURE_CONFIG.socialCaptionSelector);
  const socialCommentCountElement = bigPictureElement.querySelector(BIG_PICTURE_CONFIG.socialCommentCountSelector);
  const commentsLoaderElement = bigPictureElement.querySelector(BIG_PICTURE_CONFIG.commentsLoaderSelector);

  bigPictureImageElement.src = item.url;
  likesCountElement.textContent = item.likes
  commentsCountElement.textContent = item.comments.length;
  socialListCommentsElement.innerHTML = '';
  renderComments(socialListCommentsElement, item.comments);
  socialCaptionElement.textContent = item.description;
  socialCommentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');

  closeButtonElement.addEventListener('click', closePicture);
  document.addEventListener('keydown', handleEscClose)
};

const openPicture = (item) => {
  return () => {
    generatePicture(item);
    openMoadl(bigPictureElement);
  }
}

const setEventListener = (element, item) => {
  element.addEventListener('click', openPicture(item));
}

export { setEventListener }
