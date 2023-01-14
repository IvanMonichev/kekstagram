'use strict';

/* Constants */

const NAMES = [
  'Арина',
  'Георгий',
  'Лидия',
  'Антон',
  'Ксения',
  'Александра',
  'Иван', 'Алиса',
  'Евгений', 'Вероника',
  'Макар',
  'Владислав',
  'Маргарита',
  'Денис',
  'Матвей',
  'Николь',
  'Милана',
  'Елена',
  'Дарья',
  'Давид',
  'Пелагея',
  'Марьяна',
  'Тимур',
  'Екатерина',
  'Кирилл',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const COUNT_COMMENT = 4;

/* Utility */

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

const checkLength = (string, maxLength) => string.length <= maxLength;

const getRandomListId = (min, max, count) => {
  const listId = [];

  while (listId.length < count) {
    const randomValue = getRandomInteger(min, max);

    if (listId.indexOf(randomValue) === -1) {
      listId.push(randomValue);
    }
  }

  return listId;
}

const getRandomMessage = (countMessages) => {
  const listMessage = [];

  while (listMessage.length < countMessages) {
    const randomValue = getRandomInteger(0, MESSAGES.length - 1);
    if (listMessage.indexOf(MESSAGES[randomValue]) === -1) {
      listMessage.push(MESSAGES[randomValue]);
    }

  }

  return listMessage.join(' ');
}

const createComment = (index, userId) => {

  const randomAvatarNumber = getRandomInteger(1, 6);
  const randomNameNumber = getRandomInteger(0, NAMES.length - 1);
  const randomCountMessages = getRandomInteger(1, 2);
  const message = getRandomMessage(randomCountMessages);

  return {
    id: userId,
    avatar: `img/avatar-${randomAvatarNumber}`,
    message,
    name: NAMES[randomNameNumber],
  }
}

const createImage = (index, comments) => {

  const randomLikesNumber = getRandomInteger(15, 200);


  return {
    id: index,
    url: `photos/${index}`,
    description: 'Описание изображения',
    likes: randomLikesNumber,
    comments,
  }
}

const generateImagesList = (countImages) => {
  const listImages = [];
  const randomUsersIdList = getRandomListId(1, 250, COUNT_COMMENT);

  for (let i = 0; i < countImages; i++) {
    const comments = randomUsersIdList.map((index) => createComment(index, randomUsersIdList[index]));
    listImages[i] = createImage(i, comments);
  }

  return listImages;
}

const imagesList = generateImagesList(25);

console.log(imagesList);
