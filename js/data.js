'use strict';

import { NAMES, MESSAGES, COMMENT_COUNT, PHOTOS_COUNT, COUNT_COMMENTS } from './constans.js';
import { getRandomInteger } from './utils.js';


const getRandomListId = (min, max, count) => {
  const listId = [];

  while (listId.length < count) {
    const randomValue = getRandomInteger(min, max);

    if (listId.indexOf(randomValue) === -1) {
      listId.push(randomValue);
    }
  }

  return listId;
};

const getRandomMessage = (countMessages) => {
  const listMessage = [];

  while (listMessage.length < countMessages) {
    const randomValue = getRandomInteger(0, MESSAGES.length - 1);
    if (listMessage.indexOf(MESSAGES[randomValue]) === -1) {
      listMessage.push(MESSAGES[randomValue]);
    }

  }

  return listMessage.join(' ');
};

const createComment = (index, userId) => {

  const randomAvatarNumber = getRandomInteger(1, 6);
  const randomNameNumber = getRandomInteger(0, NAMES.length - 1);
  const randomCountMessages = getRandomInteger(COUNT_COMMENTS.MIN, COUNT_COMMENTS.MAX);
  const message = getRandomMessage(randomCountMessages);

  return {
    id: userId,
    avatar: `img/avatar-${randomAvatarNumber}.jpg`,
    message,
    name: NAMES[randomNameNumber],
  }
};

const createImage = (index, comments) => {

  const randomLikesNumber = getRandomInteger(15, 200);

  return {
    id: index,
    url: `photos/${index + 1}.jpg`,
    description: 'Описание изображения',
    likes: randomLikesNumber,
    comments,
  }
}

const generateImagesList = (countImages) => {
  const listImages = [];
  const randomUsersIdList = getRandomListId(1, 250, COMMENT_COUNT);

  for (let i = 0; i < countImages; i++) {
    const comments = randomUsersIdList.map((index) => createComment(index, randomUsersIdList[index]));
    listImages[i] = createImage(i, comments);
  }

  return listImages;
}

const imagesList = generateImagesList(PHOTOS_COUNT);

export {
  imagesList
}
