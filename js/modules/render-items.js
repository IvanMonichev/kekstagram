import { setEventListener } from './open-picture.js';
import { getData } from '../helpers/api.js';
import { showError } from '../helpers/util.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureSelector = '.picture';
const picturesElement = document.querySelector('.pictures');

const getTemplate = (templateElement, itemSelector) => {
  return templateElement.querySelector(itemSelector).cloneNode(true);
}

const generateElement = (item) => {
  const element = getTemplate(pictureTemplate, pictureSelector);

  const imageElement = element.querySelector('.picture__img');
  const likesElement = element.querySelector('.picture__likes');
  const commentsElement = element.querySelector('.picture__comments');

  imageElement.src = item.url;
  likesElement.textContent = item.likes;
  commentsElement.textContent = item.comments.length;

  setEventListener(element, item);
  return element;
}

const renderElements = (list) => {
  return (section) => {
    list.forEach((item) => {
      section.appendChild(generateElement(item));
    })
  }
}

// const successElements = renderElements(imagesList)
// successElements(picturesElement);

getData((result) => {
  const successElements = renderElements(result);
  successElements(picturesElement);
}, showError);
